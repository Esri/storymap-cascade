import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import constants from '../../constants';
import Common from './Common';

import SidePanelFlickr from '../sidePanel/SidePanelFlickr';
import { FlickrConnector } from '../../connectors/Flickr';

class FlickrContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      userNameInputValue: '',
      userTextInputValue: '',
      textInputValue: '',
      userErrorType: '',
      altUsername: '',
      altNSID: '',
      focusUserNameInput: false,
      focusUserTextInput: false,
      focusTextInput: false,
      provider: constants.providers.FLICKR
    };

    // these actions change this container state
    this.onChange = {
      userNameInput: this.userNameInput.bind(this),
      userTextInput: this.userTextInput.bind(this),
      textInput: this.textInput.bind(this)
    };

    // these actions potentially change the redux state
    this.onKeyPress = {
      searchType: this.searchTypeSubmit.bind(this),
      userNameKeypress: this.userNameKeypress.bind(this),
      userTextKeypress: this.userTextKeypress.bind(this),
      tryDifferentUser: this.tryDifferentUser.bind(this),
      userNameClear: this.userNameClear.bind(this),
      userTextClear: this.userTextClear.bind(this),
      textClear: this.textClear.bind(this),
      textKeypress: this.textKeypress.bind(this),
      userLicenseChange: this.userLicenseChange.bind(this),
      photoLicenseChange: this.photoLicenseChange.bind(this)
    };
  }

  componentWillReceiveProps(nextProps) {
    const isUser = nextProps.provider.selectedTab === constants.searchType.USER;
    const switchedToPane = nextProps.display && !this.props.display;
    const switchedToTab = this.props.provider.selectedTab !== nextProps.provider.selectedTab;
    this.setState({
      focusUserNameInput: isUser && ((switchedToPane || switchedToTab) || nextProps.openFocus),
      focusUserTextInput: isUser && ((switchedToPane || switchedToTab) || nextProps.openFocus),
      focusTextInput: !isUser && ((switchedToPane || switchedToTab) || nextProps.openFocus)
    });
  }

  // ----- onChange functions ----- //

  userNameInput(evt) {
    this.setState({
      userNameInputValue: evt.target.value,
      userErrorType: '',
      altUsername: '',
      altNSID: ''
    });
  }

  userTextInput(evt) {
    this.setState({
      userTextInputValue: evt.target.value
    });
  }

  textInput(evt) {
    this.setState({
      textInputValue: evt.target.value
    });
  }

  // ----- onKeyPress functions ----- //

  userNameKeypress(evt) {
    if (evt.charCode === 13) {
      // on userNAME submit, clear out userTEXT search term
      this.userTextInput({target: {value: ''}});
      if (!this.state.userNameInputValue) {
        this.refs.Common.beforeAlbumFetched();
        this.refs.Common.onAlbumSuccess('', []);
        return;
      }
      this.refs.Common.fetchAlbums(this.state.userNameInputValue);
    }
  }

  userTextKeypress(evt) {
    if (evt.charCode === 13) {
      this.userTextSubmit();
    }
  }

  textKeypress(evt) {
    if (evt.charCode === 13) {
      this.photoTextSubmit();
    }
  }

  userNameClear(evt) {
    if (evt.charCode === 13) {
      this.userNameInput({target: {value: ''}});
      this.setState({focusUserNameInput: true});
      // need setTimeout because userNameKeypress reads this.state,
      // which hasn't happened if you call this.userNameKeypress
      // sequentially.
      setTimeout(() => {
        // can't use same evt above because it's nulled by this point.
        this.userNameKeypress({charCode: 13});
      }, 10);
    }
  }

  userTextClear(evt) {
    if (evt.charCode === 13) {
      this.userTextInput({target: {value: ''}});
      this.setState({focusUserTextInput: true});
      // need setTimeout because userTextKeypress reads this.state,
      // which hasn't happened if you call this.userTextKeypress
      // sequentially.
      setTimeout(() => {
        // can't use same evt above because it's nulled by this point.
        this.userTextKeypress({charCode: 13});
      }, 10);
    }
  }

  textClear(evt) {
    if (evt.charCode === 13) {
      this.setState({focusTextInput: true});
      this.textInput({target: {value: ''}});
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

  userTextSubmit(options) {
    var term = this.state.userTextInputValue.trim();
    if (!term) {
      this.props.updateUserSearchTerm({term: ''});
      this.props.updateImages({images: []});
      this.props.updateDisplayedContent({displayedContent: constants.galleryContent.ALBUMS});
      return;
    }
    options = options || {};
    this.props.updateUserSearchTerm({term: term});
    Object.assign(options, {
      text: term
    });
    this.props.updateSelectedAlbum({selectedAlbum: {}});
    var licenseVal = constants.flickrLicenseVals[this.props.provider.userLicense].toString();
    this.imageFetch(Object.assign({
      user: true,
      license: licenseVal
    }, options));
  }

  photoTextSubmit(options) {
    var term = this.state.textInputValue.trim();
    this.props.updatePhotoSearchTerm({term: term});
    if (!term) {
      this.props.updateImages({images: null});
      this.props.updateImageFetchStatus({fetchStatus: constants.fetchStatus.NOT_FETCHED});
      return;
    }
    var licenseVal = constants.flickrLicenseVals[this.props.provider.photoLicense].toString();
    this.imageFetch(Object.assign({
      text: term,
      license: licenseVal
    }, options));
  }

  imageFetch(options) {
    this.refs.Common.beforeImageFetch();
    FlickrConnector.photoSearch(options)
      .then(results => this.refs.Common.handleImageReturn(results));
  }

  userLicenseChange(evt) {
    var licenseStr = evt.target.value;
    this.props.updateUserLicense({license: licenseStr});
    this.userTextSubmit({
      license: constants.flickrLicenseVals[licenseStr].toString()
    });
  }

  photoLicenseChange(evt) {
    var licenseStr = evt.target.value;
    this.props.updatePhotoLicense({license: licenseStr});
    this.photoTextSubmit({
      license: constants.flickrLicenseVals[licenseStr].toString()
    });
  }

  searchTypeSubmit(typeObj) {
    this.props.updateSearchType(typeObj);
    this.setState({
      userNameInputValue: this.props.provider.userName,
      userTextInputValue: this.props.provider.userSearchTerm,
      textInputValue: this.props.provider.photoSearchTerm,
      userErrorType: '',
      altUsername: '',
      altNSID: ''
    });
    this.props.updateImages({images: []});
    this.props.updateAlbumFetchStatus({fetchStatus: constants.fetchStatus.NOT_FETCHED});
    this.props.updateImageFetchStatus({fetchStatus: constants.fetchStatus.NOT_FETCHED});
    switch(typeObj.type) {
      case constants.searchType.USER:
        if (!this.props.provider.userName) {
          return;
        }
        if (this.props.provider.userSearchTerm) {
          this.userTextSubmit();
        }
        else {
          if (this.props.provider.userName && this.props.provider.albums.length) {
            this.props.updateDisplayedContent({displayedContent: constants.galleryContent.ALBUMS});
            if (this.props.provider.selectedAlbum.id) {
              setTimeout(() => {
                this.refs.Common.onAlbumClicked(this.props.provider.selectedAlbum);
              }, 1);
            }
          }
          else {
            this.refs.Common.fetchAlbums(this.state.userNameInputValue);
          }
        }
        break;
      case constants.searchType.TEXT:
        this.props.updateDisplayedContent({displayedContent: constants.galleryContent.IMAGES});
        this.photoTextSubmit();
        break;
      default:
        return;
    }
  }

  handleAlbumSuccess() {
    this.setState({
      focusUserTextInput: true
    });
  }

  handleUserError(error) {
    this.setState({
      userErrorType: error.reason,
      altUsername: error.alternate,
      altNSID: error.nsid
    });
  }

  tryDifferentUser(/*evt*/) {
    this.userNameInput({target: {value: this.state.altNSID || this.state.altUsername}});
    setTimeout(() => {
      this.userNameKeypress({charCode: 13});
    }, 10);
  }

  render() {
    return (
      <Common
        ref="Common"
        sidePanel={SidePanelFlickr}
        connector={FlickrConnector}
        imageQueryParams={{per_page: 500}}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        handleAlbumSuccess={this.handleAlbumSuccess.bind(this)}
        handleUserError={this.handleUserError.bind(this)}
        containerState={this.state}
        {...this.props}
      />
    );
  }
}

var mapStateToProps = function(state) {
  return {
    provider: state.browsePanel.flickr
  };
};

var mapDispatchToProps = function(dispatch) {
  var dispatchWithType = function(action, args) {
    var argumentsWithType = Object.assign({}, args, { providerType: constants.providers.FLICKR });

    dispatch(action(argumentsWithType));
  };

  return {
    updateAlbums: function(provider) {
      dispatchWithType(actions.updateAlbums, provider);
    },
    updateAlbumFetchStatus: function(status) {
      dispatchWithType(actions.updateAlbumFetchStatus, status);
    },
    updateUsername: function(userName) {
      dispatchWithType(actions.updateUsername, userName);
    },
    updateDisplayedContent: function(content) {
      dispatchWithType(actions.updateDisplayedContent, content);
    },
    updateImages: function(images) {
      dispatchWithType(actions.updateImages, images);
    },
    updateSelectedAlbum: function(selectedAlbum) {
      dispatchWithType(actions.updateSelectedAlbum, selectedAlbum);
    },
    updateImageFetchStatus: function(status) {
      dispatchWithType(actions.updateImageFetchStatus, status);
    },
    updateSearchType: function(type) {
      dispatchWithType(actions.updateSearchType, type);
    },
    updateUserSearchTerm: function(term) {
      dispatchWithType(actions.updateUserSearchTerm, term);
    },
    updatePhotoSearchTerm: function(term) {
      dispatchWithType(actions.updatePhotoSearchTerm, term);
    },
    updateUserLicense: function(license) {
      dispatchWithType(actions.updateUserLicense, license);
    },
    updatePhotoLicense: function(license) {
      dispatchWithType(actions.updatePhotoLicense, license);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlickrContainer);
