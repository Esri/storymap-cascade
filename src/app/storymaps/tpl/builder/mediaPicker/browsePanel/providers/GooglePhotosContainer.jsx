import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import constants from '../../constants';
import Common from './Common';

import SidePanelGooglePhotos from '../sidePanel/SidePanelGooglePhotos';
import { GooglePhotosConnector } from '../../connectors/GooglePhotos';

class GooglePhotosContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      userErrorType: '',
      focusInput: false,
      provider: constants.providers.GOOGLE_PHOTOS
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      focusInput: (nextProps.display && !this.props.display) || nextProps.openFocus
    });
  }

  onChange(event) {
    this.setState({
      searchValue: event.target.value,
      userErrorType: ''
    });
  }

  onClear(evt) {
    if (evt.charCode === 13) {
      this.setState({searchValue: true, focusInput: true});
      this.onChange({target: {value: ''}});
      // need setTimeout because textKeypress reads this.state,
      // which hasn't happened if you call this.textKeypress
      // sequentially.
      setTimeout(() => {
        // can't use same evt above because it's nulled by this point.
        this.refs.Common.onKeyPress({charCode: 13});
      }, 10);
    }
  }

  handleUserError(error) {
    this.setState({
      userErrorType: error ? error.reason : constants.userFetchError.ERROR
    });
  }

  render() {
    return (
      <Common
        ref="Common"
        sidePanel={SidePanelGooglePhotos}
        connector={GooglePhotosConnector}
        imageQueryParams={{maxPictures: 200}}
        onChange={this.onChange}
        onClear={this.onClear.bind(this)}
        containerState={this.state}
        handleUserError={this.handleUserError.bind(this)}
        {...this.props}
      />
    );
  }
}

var mapStateToProps = function(state) {
  return {
    provider: state.browsePanel.googlePhotos
  };
};

//
var mapDispatchToProps = function(dispatch) {
  var dispatchWithType = function(action, args) {
    var argumentsWithType = Object.assign({}, args, { providerType: constants.providers.GOOGLE_PHOTOS });

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GooglePhotosContainer);
