import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import constants from '../../constants';
import Common from './Common';

import SidePanelArcGIS from '../sidePanel/SidePanelArcGIS';
import { ArcGISConnector } from '../../connectors/ArcGIS';

class ArcGISContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      textInputValue: '',
      dateSortOrder: constants.sortOrder.DESC, // most recent first
      titleSortOrder: constants.sortOrder.ASC, // A-Z
      appId: null,
      portalIsOrg: false,
      portalName: '',
      focusInput: false,
      storyResourceCount: 0,
      availableContentTypes: [],
      selectedContentTypes: [],
      disableGISContent: true
    };

    this.storyCache = {};

    // these actions change this container state
    this.onChange = {
      textInput: this.textInput.bind(this)
    };

    // these actions potentially change the redux state
    this.onKeyPress = {
      searchLocSubmit: this.searchLocSubmit.bind(this),
      textKeypress: this.textKeypress.bind(this),
      textClear: this.textClear.bind(this),
      selectedContentTypesChange: this.selectedContentTypesChange.bind(this),
      sortFieldChange: this.sortFieldChange.bind(this),
      sortOrderChange: this.sortOrderChange.bind(this),
      photoUploadComplete: this.photoUploadComplete.bind(this),
      onItemDelete: this.onItemDelete.bind(this)
    };
  }

  componentDidMount() {
    ArcGISConnector.checkSignin().then(() => {
      const portal = ArcGISConnector.getPortal();
      this.setState({
        portalIsOrg: portal.isOrganization,
        portalName: portal.name
      });
      this.itemFetch();
      // try loading /resources for thisStory at app load time
      ArcGISConnector.getAppIdPromise().then((appId) => {
        this.setState({appId});
        this.thisStoryFetch({searchLocation: constants.searchLocation.STORY});
      })
      .catch((error) => {
        console.warn(error);
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    let availMedia = this.constructAvailContentTypes(nextProps.authorizedMedia, nextProps.provider.searchLocation);
    const gisContentDisabled = (nextProps.authorizedMedia.indexOf(constants.contentType.WEBMAP) < 0 && nextProps.authorizedMedia.indexOf(constants.contentType.WEBSCENE) < 0);
    const authMediaChanged = !this.compareArrays(nextProps.authorizedMedia, this.props.authorizedMedia);

    let newState = {
      availableContentTypes: availMedia,
      disableGISContent: gisContentDisabled,
      focusInput: (nextProps.display && !this.props.display) || nextProps.openFocus
    };

    if (authMediaChanged) {
      let fetchOptions = {};
      if (gisContentDisabled) {
        availMedia = this.constructAvailContentTypes(nextProps.authorizedMedia, constants.searchLocation.STORY);
        this.props.updateSearchLocation({type: constants.searchLocation.STORY});
        Object.assign(fetchOptions, {searchLocation: constants.searchLocation.STORY});
      }
      Object.assign(fetchOptions, {contentTypes: availMedia});
      newState.selectedContentTypes = availMedia;

      this.itemFetch(fetchOptions);
    }
    else if (!this.compareArrays(availMedia, this.state.availableContentTypes)) {
      const unselectedTypes = availMedia.filter((media) => {
        return this.state.availableContentTypes.indexOf(media) < 0;
      });
      if (unselectedTypes.length) {
        newState.selectedContentTypes = this.state.selectedContentTypes.concat(unselectedTypes);
      }
    }

    this.setState(newState);

    if (nextProps.appId && !this.state.appId) {
      this.setState({appId: nextProps.appId});
    }
    else if (nextProps.thisStory === this.props.thisStory || !nextProps.thisStory) {
      return;
    }
    this.buildThisStoryCache(nextProps.thisStory, nextProps.appId);
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    arr1.sort();
    arr2.sort();
    return arr1.every((d, i) => {
      return arr2[i] === d;
    });
  }

  constructAvailContentTypes(authMedia, searchLoc) {
    let availMedia = [];
    if (authMedia.indexOf(constants.contentType.WEBMAP) >= 0) {
      availMedia.push(constants.contentType.WEBMAP);
    }
    if (authMedia.indexOf(constants.contentType.WEBSCENE) >= 0) {
      availMedia.push(constants.contentType.WEBSCENE);
    }
    if (authMedia.indexOf(constants.contentType.IMAGE) >= 0 && searchLoc === constants.searchLocation.STORY) {
      availMedia.unshift(constants.contentType.IMAGE);
    }
    return availMedia;
  }

  // ----- onChange functions ----- //

  textInput(evt) {
    this.setState({
      textInputValue: evt.target.value
    });
  }

  // ----- onKeyPress functions ----- //

  textKeypress(evt) {
    if (evt.charCode === 13) {
      this.textSubmit();
    }
  }

  textClear(evt) {
    if (evt.charCode === 13) {
      this.textInput({target: {value: ''}});
      this.setState({focusInput: true});
      // need setTimeout because textKeypress reads this.state,
      // which hasn't happened if you call this.textKeypress
      // sequentially.
      setTimeout(() => {
        // can't use same evt above because it's nulled by this point.
        this.textKeypress({charCode: 13});
      }, 10);
    }
  }

  // ----- actual submit functions ----- //

  textSubmit() {
    var term = this.state.textInputValue.trim();
    this.props.updateSearchTerm({term: term});
    this.itemFetch({searchStr: term});
  }

  buildSearchOptionsFromReduxState() {
    return {
      searchLocation: this.props.provider.searchLocation,
      contentTypes: this.state.selectedContentTypes,
      sortField: this.props.provider.sortField,
      sortOrder: this.props.provider.sortOrder,
      searchStr: this.props.provider.searchStr
    };
  }

  clearThisStoryUsed() {
    for (let key in this.storyCache) {
      this.storyCache[key].usedInStory = false;
    }
  }

  removeUnused() {
    for (let key in this.storyCache) {
      const target = this.storyCache[key];
      if (target.usedInStory === false && !target.fromResources) {
        delete this.storyCache[key];
      }
    }
  }

  buildThisStoryCache(thisStoryArr, appId) {
    this.clearThisStoryUsed();

    var idArr = [];
    thisStoryArr.forEach(resource => {
      // already cached
      let target = this.storyCache[resource.id] || this.storyCache[resource.file];
      if (target) {
        target.usedInStory = true;
        return;
      }

      if (resource.id && resource.id !== appId && resource.id !== 'APPID') {
        idArr.push(resource.id);
      }
      else {
        this.storeImageResourceInfo(resource);
      }
    });

    this.removeUnused();

    this.setState({storyResourceCount: Object.keys(this.storyCache).length});
    if (!idArr.length) {
      if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
        this.refs.Common.handleImageReturn(this.filterAndSortThisStory());
      }
      return;
    }
    ArcGISConnector.getItems({idArr}).then(results => {
      this.processThisStoryResults(results);
    });

  }

  processThisStoryResults(results) {
    if (!results) {
      return;
    }
    results.forEach(result => {
      this.storyCache[result.id] = Object.assign(result, {usedInStory: true});
    });
    this.setState({storyResourceCount: Object.keys(this.storyCache).length});
  }

  storeImageResourceInfo(resource) {
    console.warn('resource fell through', resource);
  }

  beforeItemFetch() {
    this.props.updateImageFetchStatus({
      fetchStatus: constants.fetchStatus.FETCHING
    });
    this.props.updateImages({
      images: []
    });
  }

  itemFetch(options) {
    const gisContentDisabled = (this.props.authorizedMedia.indexOf(constants.contentType.WEBMAP) < 0 && this.props.authorizedMedia.indexOf(constants.contentType.WEBSCENE) < 0);
    this.beforeItemFetch();
    var searchParams = Object.assign({}, this.buildSearchOptionsFromReduxState(), options);
    if (searchParams.searchStr && searchParams.searchStr.match(/^[A-Fa-f0-9]{32}$/) && !gisContentDisabled) {
      Object.assign(searchParams, {idArr: [searchParams.searchStr], searchLocation: constants.searchLocation.AGOL});
      this.props.updateSearchLocation({type: constants.searchLocation.AGOL});
    }

    if (searchParams.searchLocation === constants.searchLocation.STORY && !searchParams.idArr) {
      this.thisStoryFetch(searchParams);
    }
    else {
      ArcGISConnector.getItems(searchParams)
        .then(results => this.refs.Common.handleImageReturn(results))
        .catch((error) => {
          console.warn('itemFetch failed', error);
          this.refs.Common.handleImageReturn();
        });
    }
  }

  itemDelete(item) {
    ArcGISConnector.removeResources(item)
      .then((/*results*/) => {
        if (this.storyCache[item.fileName]) {
          delete this.storyCache[item.fileName];
          this.refs.Common.handleImageReturn(this.filterAndSortThisStory());
        }
        $(ReactDOM.findDOMNode(this)).find('.popover').popover('hide');
      })
      .catch(results => {
        console.warn('deletion failed from container', results);
      });
  }

  thisStoryFetch(options) {
    return new Promise((resolve, reject) => {
      ArcGISConnector.getItems(options)
        .then(results => {
          this.handleThisStoryResults(results);
          if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
            this.refs.Common.handleImageReturn(this.filterAndSortThisStory());
          }
          resolve();
        })
        .catch((error) => {
          reject(error);
          console.warn('itemFetch failed', error);
          if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
            this.refs.Common.handleImageReturn();
          }
        });
    });
  }

  handleThisStoryResults(results) {
    if (!results) {
      return;
    }
    results.forEach((resource) => {
      if (!this.storyCache[resource.fileName]) {
        this.storyCache[resource.fileName] = Object.assign(resource, {usedInStory: false});
      }
    });
  }

  filterAndSortThisStory() {
    let filtered = [];
    const providerRef = this.props.provider;
    for (let key in this.storyCache) {
      let resource = this.storyCache[key];
      if (this.state.selectedContentTypes.indexOf(resource.type) >= 0) {
        if (!providerRef.searchStr || this.clientSideSearch(resource, providerRef.searchStr)) {
          filtered.push(resource);
        }
      }
    }
    return this.sortThisStory(filtered);
  }

  clientSideSearch(resource, searchStr) {
    searchStr = searchStr.toLowerCase();
    return (
      (resource.name && resource.name.toLowerCase().indexOf(searchStr) >= 0) ||
      (resource.title && resource.title.toLowerCase().indexOf(searchStr) >= 0) ||
      (resource.snippet && resource.snippet.toLowerCase().indexOf(searchStr) >= 0)
    );

  }

  sortThisStory(filtered) {
    var sortField = this.props.provider.sortField;
    var sortOrder = (sortField === constants.sortField.DATE) ? this.state.dateSortOrder : this.state.titleSortOrder;
    return filtered.sort(function(a, b) {
      let compare1 = (sortOrder === constants.sortOrder.DESC) ? a[sortField] : b[sortField];
      if (compare1.toLowerCase) {
        compare1 = compare1.toLowerCase();
      }
      let compare2 = (sortOrder === constants.sortOrder.DESC) ? b[sortField] : a[sortField];
      if (compare2.toLowerCase) {
        compare2 = compare2.toLowerCase();
      }
      if (compare1 < compare2) {
        return 1;
      }
      if (compare2 < compare1) {
        return -1;
      }
      return 0;
    });

  }

  searchLocSubmit(typeObj) {
    this.props.updateSearchLocation(typeObj);
    this.itemFetch({searchLocation: typeObj.type});
  }

  selectedContentTypesChange(types) {
    this.setState({selectedContentTypes: types});
    if (!types.length) {
      this.refs.Common.handleImageReturn([]);
    }
    else {
      this.itemFetch({contentTypes: types});
    }
  }

  sortFieldChange(field, order) {
    this.props.updateSortField({field: field});
    this.props.updateSortOrder({order: order});
    this.itemFetch({
      sortField: field,
      sortOrder: order
    });
  }

  sortOrderChange(order, field) {
    this.props.updateSortOrder({order: order});
    var stateField = (field === constants.sortField.DATE) ? 'dateSortOrder' : 'titleSortOrder';
    this.setState({
      [stateField]: order
    });
    this.itemFetch({sortOrder: order});
  }

  // pull again from /resources and record updates.
  photoUploadComplete() {
    this.thisStoryFetch({searchLocation: constants.searchLocation.STORY});
  }

  onItemDelete(evt, item) {
    evt.stopPropagation();
    evt.preventDefault();
    this.itemDelete(item);
  }

  render() {
    return (
      <Common
        ref="Common"
        sidePanel={SidePanelArcGIS}
        connector={ArcGISConnector}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        containerState={this.state}
        {...this.props}
      />
    );
  }
}

var mapStateToProps = function(state) {
  return {
    provider: state.browsePanel.agol
  };
};

var mapDispatchToProps = function(dispatch) {
  var dispatchWithType = function(action, args) {
    var argumentsWithType = Object.assign({}, args, { providerType: constants.providers.ARCGIS });

    dispatch(action(argumentsWithType));
  };

  return {
    updateImages: function(images) {
      dispatchWithType(actions.updateImages, images);
    },
    updateImageFetchStatus: function(status) {
      dispatchWithType(actions.updateImageFetchStatus, status);
    },
    updateSearchLocation: function(type) {
      dispatchWithType(actions.updateSearchLocation, type);
    },
    updateSearchTerm: function(term) {
      dispatchWithType(actions.updateSearchTerm, term);
    },
    updateSortField: function(field) {
      dispatchWithType(actions.updateSortField, field);
    },
    updateSortOrder: function(order) {
      dispatchWithType(actions.updateSortOrder, order);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArcGISContainer);
