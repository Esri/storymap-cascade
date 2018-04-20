import React from 'react';

import GooglePhotosContainer from './GooglePhotosContainer';
import FlickrContainer from './FlickrContainer';
import ArcGISContainer from './ArcGISContainer';
import UnsplashContainer from './UnsplashContainer';
import UrlContainer from './UrlContainer';

import constants from '../../constants';

import {} from 'lib-build/less!./Providers';

class Providers extends React.Component {
  constructor() {
    super();

    this.state = {
      justOpened: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      justOpened: nextProps.params.justOpened
    });
  }

  displayTab(provider) {
    return this.props.browseSelectedProvider === provider;
  }

  openFocus(provider) {
    return this.displayTab(provider) && this.state.justOpened;
  }

  render() {
    return (
      <div className="mp-browse-panel-containers">
        <GooglePhotosContainer
          display={this.displayTab(constants.providers.GOOGLE_PHOTOS)}
          openFocus={this.openFocus(constants.providers.GOOGLE_PHOTOS)}
          authorizedMedia={this.props.params ? this.props.params.authorizedMedia : []}
        />
        <FlickrContainer
          display={this.displayTab(constants.providers.FLICKR)}
          openFocus={this.openFocus(constants.providers.FLICKR)}
          authorizedMedia={this.props.params ? this.props.params.authorizedMedia : []}
        />
        <ArcGISContainer
          display={this.displayTab(constants.providers.ARCGIS)}
          openFocus={this.openFocus(constants.providers.ARCGIS)}
          appId={this.props.params ? this.props.params.appid : null}
          thisStory={this.props.params ? this.props.params.arcgisThisStory : null}
          authorizedMedia={this.props.params ? this.props.params.authorizedMedia : []}
        />
        <UnsplashContainer
          display={this.displayTab(constants.providers.UNSPLASH)}
          openFocus={this.openFocus(constants.providers.UNSPLASH)}
          authorizedMedia={this.props.params ? this.props.params.authorizedMedia : []}
        />
        <UrlContainer
          display={this.displayTab(constants.providers.URL)}
          openFocus={this.openFocus(constants.providers.URL)}
          authorizedMedia={this.props.params ? this.props.params.authorizedMedia : []}
          currentMedia={this.props.params ? this.props.params.media : null}
        />
      </div>
    );
  }
}

export default Providers;
