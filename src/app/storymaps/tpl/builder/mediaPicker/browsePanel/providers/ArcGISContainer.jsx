import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import constants from '../../constants';
import Common from './Common';

import SidePanelArcGIS from '../sidePanel/SidePanelArcGIS';
import { ArcGISConnector } from '../../connectors/ArcGIS';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
var text = i18n.builder.mediaPicker.browsePanel.providers.agol;

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
      availableContentTypes: [], // this is location-specific
      authorizedMedia: [], // this is just a duplicate of provider.authorizedMedia
      selectedContentTypes: []
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
      fileUploadFunctions: {
        multiStart: this.multiFileUploadStart.bind(this),
        singleProgress: this.singleFileUploadProgress.bind(this),
        singleComplete: this.singleFileUploadComplete.bind(this),
        singleFailure: this.singleFileUploadError.bind(this),
        allComplete: this.allFileUploadsComplete.bind(this)
      },
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
    }).catch((err) => {
      console.warn(err.message);
    });
  }

  componentWillReceiveProps(nextProps) {
    // availMedia depends on authorized media + search location.
    let availMedia = this.constructLocationSpecificContentTypes(nextProps.authorizedMedia, nextProps.provider.searchLocation);

    let newState = {
      availableContentTypes: availMedia,
      authorizedMedia: nextProps.authorizedMedia,
      focusInput: (nextProps.display && !this.props.display) || nextProps.openFocus
    };

    const authMediaChanged = !this.compareArrays(nextProps.authorizedMedia, this.props.authorizedMedia);
    if (authMediaChanged) {
      let fetchOptions = {};
      // since all AGOL locations except ThisStory only contain GIS content, if no GIS content is authorized,
      // we force the user directly to ThisStory.
      if (this.isGisContentDisabled(nextProps)) {
        availMedia = this.constructLocationSpecificContentTypes(nextProps.authorizedMedia, constants.searchLocation.STORY);
        this.props.updateSearchLocation({type: constants.searchLocation.STORY});
        Object.assign(fetchOptions, {searchLocation: constants.searchLocation.STORY});
      }
      Object.assign(fetchOptions, {contentTypes: availMedia});
      newState.selectedContentTypes = availMedia;

      this.fetchIfNotStory(fetchOptions);
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
    else if (!nextProps.thisStory) {
      return;
    }
    else if (nextProps.thisStory === this.props.thisStory) {
      if (nextProps.provider.searchLocation === constants.searchLocation.STORY) {
        const filteredAndSorted = this.filterAndSortThisStory({contentType: newState.selectedContentTypes || this.state.selectedContentTypes});
        if (!this.compareArrays(filteredAndSorted, nextProps.provider.images)) {
          this.handleImageReturn(filteredAndSorted);
        }
      }
      return;
    }
    this.buildThisStoryCache(nextProps.thisStory, nextProps.appId);
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let copy1 = arr1.slice(0).sort();
    let copy2 = arr2.slice(0).sort();
    return copy1.every((d, i) => {
      return copy2[i] === d;
    });
  }

  constructLocationSpecificContentTypes(authMedia, searchLoc) {
    let availMedia = [];
    const isStory = searchLoc === constants.searchLocation.STORY;
    if (authMedia.indexOf(constants.contentType.WEBMAP) >= 0) {
      availMedia.push(constants.contentType.WEBMAP);
    }
    if (authMedia.indexOf(constants.contentType.WEBSCENE) >= 0) {
      availMedia.push(constants.contentType.WEBSCENE);
    }
    if (authMedia.indexOf(constants.contentType.IMAGE) >= 0 && isStory && constants.uploadFileExtensions.IMAGE) {
      availMedia.unshift(constants.contentType.IMAGE);
    }
    if (authMedia.indexOf(constants.contentType.AUDIO) >= 0 && isStory && constants.uploadFileExtensions.AUDIO) {
      availMedia.unshift(constants.contentType.AUDIO);
    }
    if (authMedia.indexOf(constants.contentType.VIDEO) >= 0 && isStory && constants.uploadFileExtensions.VIDEO) {
      availMedia.unshift(constants.contentType.VIDEO);
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
    this.fetchIfNotStory({searchStr: term});
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
        this.handleImageReturn(this.filterAndSortThisStory());
      }
      return;
    }
    ArcGISConnector.getItems({idArr}).then(results => {
      this.processThisStoryResults(results);
    });
  }

  handleImageReturn(results) {
    if (results && results.length) {
      this.moreFormattingForItems(results);
    }
    this.props.updateImageFetchStatus({fetchStatus: constants.fetchStatus.SUCCESS});
    this.props.updateImages({images: results});
  }

  moreFormattingForItems(results) {
    // add some more formatting to results...
    results.forEach(result => {
      result.hoverText = this.getItemHoverText(result);
      if (result.hasOwnProperty('usedInStory')) {
        result.getItemDeleteText = this.getItemDeleteText;
      }
    });
  }

  getItemHoverText(item) {
    var mod = item.modified;
    var dateStr = (mod && mod.toLocaleDateString) ? mod.toLocaleDateString() : (mod ? mod : '');
    if (dateStr) {
      if (item.agolType) {
        dateStr = text.modified.replace('${date}', dateStr);
      }
      else {
        dateStr = text.uploaded.replace('${date}', dateStr);
      }
    }
    var titleStr = '<span class="item-popover-title">' + (item.name || item.title) + '</span><br>';
    var typeAndOwnerStr = item.owner ? text.contentByAuthor.replace('${contentType}', item.displayName).replace('${author}', item.owner) : item.displayName;
    var typeOnlyStr = item.displayName;
    var snippetStr = item.snippet ? '<br><br>' + item.snippet : '';

    return {
      typeAndOwner: titleStr + typeAndOwnerStr + '<br>' + dateStr + snippetStr,
      typeOnly: titleStr + typeOnlyStr + '<br>' + dateStr + snippetStr
    };
  }

  getItemDeleteText(item) {
    if (item.error) {
      return text.removeFailed;
    }
    return text.remove1 + ' ' + text.remove2;
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
    this.props.updateImageFetchStatus({fetchStatus: constants.fetchStatus.FETCHING});
    this.props.updateImages({images: []});
  }

  fetchIfNotStory(options) {
    var searchParams = Object.assign({}, this.buildSearchOptionsFromReduxState(), options);
    if (searchParams.searchLocation !== constants.searchLocation.STORY || this.isItemId(searchParams.searchStr)) {
      this.itemFetch(options);
    }
    else {
      this.beforeItemFetch();
      this.handleImageReturn(this.filterAndSortThisStory(options));
    }
  }

  isGisContentDisabled(target) {
    target = target || this.props;
    return (target.authorizedMedia.indexOf(constants.contentType.WEBMAP) < 0 && target.authorizedMedia.indexOf(constants.contentType.WEBSCENE) < 0);
  }

  itemFetch(options) {
    this.beforeItemFetch();
    var searchParams = Object.assign({}, this.buildSearchOptionsFromReduxState(), options);
    if (searchParams.searchStr && this.isItemId(searchParams.searchStr) && !this.isGisContentDisabled()) {
      Object.assign(searchParams, {idArr: [searchParams.searchStr], searchLocation: constants.searchLocation.AGOL});
      this.props.updateSearchLocation({type: constants.searchLocation.AGOL});
    }

    if (searchParams.searchLocation === constants.searchLocation.STORY && !searchParams.idArr) {
      this.thisStoryFetch(searchParams);
    }
    else {
      ArcGISConnector.getItems(searchParams)
        .then(results => this.handleImageReturn(results))
        .catch((error) => {
          console.warn('itemFetch failed', error);
          this.handleImageReturn();
        });
    }
  }

  itemDelete(item) {
    ArcGISConnector.removeResources(item)
      .then((/*results*/) => {
        if (this.storyCache[item.fileName]) {
          delete this.storyCache[item.fileName];
          this.handleImageReturn(this.filterAndSortThisStory());
        }
        $(ReactDOM.findDOMNode(this)).find('.popover').popover('hide');
      })
      .catch(results => {
        console.warn('deletion failed from container', results);
        if (this.storyCache[item.fileName]) {
          delete this.storyCache[item.fileName];
          this.handleImageReturn(this.filterAndSortThisStory());
        }
        $(ReactDOM.findDOMNode(this)).find('.popover').popover('hide');
      });
  }

  thisStoryFetch(options) {
    return new Promise((resolve, reject) => {
      ArcGISConnector.getItems(options)
        .then(results => {
          this.handleThisStoryResults(results);
          resolve();
        })
        .catch((error) => {
          reject(error);
          console.warn('itemFetch failed', error);
          if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
            this.handleImageReturn();
          }
        });
    });
  }

  handleThisStoryResults(results) {
    if (!results) {
      this.handleImageReturn(this.filterAndSortThisStory());
      return;
    }
    results.forEach((resource) => {
      const target = this.storyCache[resource.fileName];
      if (!target || (target.isTemp && resource.isTemp) || resource.error) {
        this.storyCache[resource.fileName] = Object.assign(resource, {usedInStory: false});
      }
      else if (target.isTemp) {
        this.storyCache[resource.fileName] = Object.assign(resource, {isTemp: false, usedInStory: false});
      }
      else if (target.thumbFile !== resource.thumbFile && resource.thumbUrl) {
        this.storyCache[resource.fileName].thumbFile = resource.thumbFile;
        this.storyCache[resource.fileName].thumbUrl = resource.thumbUrl;
        target.dataUrl = null;
      }
      else if (target.dataUrl && target.thumbFile === resource.thumbFile && target.thumbUrl) {
        target.dataUrl = null;
      }
    });
    if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
      this.handleImageReturn(this.filterAndSortThisStory());
    }
  }

  filterAndSortThisStory(options) {
    let filtered = [];
    const updatedProps = Object.assign({}, {
      sortField: this.props.provider.sortField,
      sortOrder: this.props.provider.sortOrder,
      searchStr: this.props.provider.searchStr,
      contentTypes: this.state.selectedContentTypes
    }, options);
    for (let key in this.storyCache) {
      let resource = this.storyCache[key];
      if (updatedProps.contentTypes.indexOf(resource.type) >= 0) {
        if (!updatedProps.searchStr || this.clientSideSearch(resource, updatedProps.searchStr)) {
          filtered.push(resource);
        }
      }
    }
    return this.sortThisStory(filtered, updatedProps);
  }

  clientSideSearch(resource, searchStr) {
    searchStr = searchStr.toLowerCase();
    return (
      (resource.name && resource.name.toLowerCase().indexOf(searchStr) >= 0) ||
      (resource.title && resource.title.toLowerCase().indexOf(searchStr) >= 0) ||
      (resource.snippet && resource.snippet.toLowerCase().indexOf(searchStr) >= 0)
    );

  }

  sortThisStory(filtered, updatedProps) {
    var sortField = updatedProps.sortField;
    var sortOrder = updatedProps.sortOrder;
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
    if (typeObj.type !== constants.searchLocation.AGOL && this.isItemId(this.props.provider.searchStr)) {
      this.textClear({charCode: 13});
      this.itemFetch({searchLocation: typeObj.type, searchStr: ''});
    }
    else {
      this.itemFetch({searchLocation: typeObj.type});
    }
  }

  selectedContentTypesChange(types) {
    this.setState({selectedContentTypes: types});
    if (!types.length) {
      this.handleImageReturn([]);
    }
    else {
      this.fetchIfNotStory({contentTypes: types});
    }
  }

  sortFieldChange(field, order) {
    this.props.updateSortField({field: field});
    this.props.updateSortOrder({order: order});
    this.fetchIfNotStory({
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
    this.fetchIfNotStory({sortOrder: order});
  }

  multiFileUploadStart() {
    this.beforeItemFetch();
    // got tired of typing constants.searchLocation. :|
    const STORY = constants.searchLocation.STORY;
    $('.popover').popover('hide');
    // clear search input
    this.textClear({charCode: 13});
    // clear item type filter (not enough to just add IMAGE type back,
    // since eventually we'll support audio and video upload)
    let availMedia = this.constructLocationSpecificContentTypes(this.props.authorizedMedia, STORY);
    this.setState({selectedContentTypes: availMedia});

    this.props.updateSortField({field: constants.sortField.DATE});
    this.props.updateSortOrder({order: constants.sortOrder.DESC});

    if (this.props.provider.searchLocation !== STORY) {
      this.props.updateSearchLocation({type: STORY});
      this.thisStoryFetch({
        searchLocation: STORY,
        sortField: constants.sortField.DATE,
        sortOrder: constants.sortOrder.DESC
      });
    }
    else {
      this.handleImageReturn(this.filterAndSortThisStory({
        sortField: constants.sortField.DATE,
        sortOrder: constants.sortOrder.DESC
      }));
    }
  }

  singleFileUploadProgress(fileDetails) {
    if (fileDetails) {
      this.updateResourcesClientSide(fileDetails, {isTemp: true});
    }
  }

  singleFileUploadError(fileDetails) {
    console.warn('singleFileUploadError', fileDetails);
    if (fileDetails) {
      if ($(ReactDOM.findDOMNode(this)).parents('.modal').hasClass('in')) {
        this.multiFileUploadStart();
      }
      this.updateResourcesClientSide(fileDetails, {error: true});
    }
  }

  updateResourcesClientSide(fileDetails, moreDetails) {
    let formatted = ArcGISConnector.formatResources([Object.assign(fileDetails, {resource: fileDetails.processedFileName})]);
    if (!formatted || !formatted.length) {
      console.warn('bad file format', fileDetails);
      return;
    }
    var combined = Object.assign(formatted[0], moreDetails, {dataUrl: fileDetails.dataUrl});
    this.updateSingleResourceClientSide(combined);
  }

  updateSingleResourceClientSide(fileDetails) {
    let fileName = fileDetails.fileName;
    let moreOptions = {usedInStory: false};

    if (!fileDetails.isTemp) {
      Object.assign(moreOptions, {isTemp: false});
    }

    this.storyCache[fileName] = Object.assign(fileDetails, moreOptions);

    if (this.props.provider.searchLocation === constants.searchLocation.STORY) {
      this.handleImageReturn(this.filterAndSortThisStory());
    }

  }

  singleFileUploadComplete(fileDetails) {
    if (fileDetails) {
      this.updateResourcesClientSide(fileDetails, {isTemp: false});
    }
  }

  // pull again from /resources and record updates.
  allFileUploadsComplete() {
    this.thisStoryFetch({searchLocation: constants.searchLocation.STORY});
  }

  onItemDelete(evt, item) {
    evt.stopPropagation();
    evt.preventDefault();
    this.itemDelete(item);
  }

  isItemId(str) {
    return str.match(/^[A-Fa-f0-9]{32}$/);
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
