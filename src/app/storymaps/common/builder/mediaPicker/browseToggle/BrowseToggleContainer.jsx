import { connect } from 'react-redux';
import BrowseToggles from './BrowseToggle';
import * as actions from './../actions';
import i18n from 'lib-build/i18n!../../../_resources/nls/media';

var text = i18n.mediaPicker.browseToggle;

var browseToggles = [{
  type: 'arcgis',
  title: text.arcGIS,
  media: 'geo',
  fullLogo: true
}, {
  type: 'flickr',
  title: text.flickr,
  media: 'images',
  inlineIcon: 'fa-flickr'
}, {
  type: 'googlePhotos',
  title: text.googlePhotos,
  media: 'images',
  inlineIcon: 'fa-google'
}, {
  type: 'unsplash',
  title: text.unsplash,
  media: 'images',
  inlineIcon: 'fa-camera'
}, {
  type: 'urlContent',
  title: text.urls,
  shortTitle: text.urls_short,
  media: 'links',
  inlineIcon: 'fa-link'
}];

var mapStateToProps = function(state) {
  return {
    browseSelectedProvider: state.ui.browseSelectedProvider,
    browseToggles: browseToggles
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    selectProvider: function(provider) {
      dispatch(actions.selectProvider(provider));
    }
  };
};

var BrowseToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseToggles);

export default BrowseToggleContainer;
