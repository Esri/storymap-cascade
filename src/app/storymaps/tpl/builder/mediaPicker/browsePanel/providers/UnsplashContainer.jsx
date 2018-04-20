import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import constants from '../../constants';
import Common from './Common';

import SidePanelUnsplash from '../sidePanel/SidePanelUnsplash';
import { UnsplashConnector } from '../../connectors/Unsplash';

class UnsplashContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      focusInput: false,
      provider: constants.providers.UNSPLASH
    };

    this.onKeyPress = this.onKeyPress.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      focusInput: (nextProps.display && !this.props.display) || nextProps.openFocus
    });
  }

  onChange(event) {
    this.setState({
      searchValue: event.target.value
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
        this.onKeyPress({charCode: 13});
      }, 10);
    }
  }

  onKeyPress(evt) {
    if (evt.charCode === 13) {
      this.submitPhotoSearch();
    }
  }

  submitPhotoSearch() {
    var term = this.state.searchValue.trim();
    this.props.updatePhotoSearchTerm({term: term});
    if (!term) {
      this.props.updateImages({images: []});
      this.props.updateImageFetchStatus({fetchStatus: constants.fetchStatus.NOT_FETCHED});
      return;
    }
    this.imageFetch(term);
  }

  imageFetch(searchTerm) {
    this.refs.Common.beforeImageFetch();
    UnsplashConnector.photoSearch({query: searchTerm})
      .then(results => this.refs.Common.handleImageReturn(results));
  }

  render() {
    return (
      <Common
        ref="Common"
        sidePanel={SidePanelUnsplash}
        connector={UnsplashConnector}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        onClear={this.onClear.bind(this)}
        containerState={this.state}
        {...this.props}
      />
    );
  }
}

var mapStateToProps = function(state) {
  return {
    provider: state.browsePanel.unsplash
  };
};

//
var mapDispatchToProps = function(dispatch) {
  var dispatchWithType = function(action, args) {
    var argumentsWithType = Object.assign({}, args, { providerType: constants.providers.UNSPLASH });

    dispatch(action(argumentsWithType));
  };

  return {
    updateDisplayedContent: function(content) {
      dispatchWithType(actions.updateDisplayedContent, content);
    },
    updatePhotoSearchTerm: function(term) {
      dispatchWithType(actions.updatePhotoSearchTerm, term);
    },
    updateImages: function(images) {
      dispatchWithType(actions.updateImages, images);
    },
    updateImageFetchStatus: function(status) {
      dispatchWithType(actions.updateImageFetchStatus, status);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnsplashContainer);
