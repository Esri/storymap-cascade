import { connect } from 'react-redux';
import BrowseToggles from './BrowseToggle';
import * as actions from './../actions';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

var text = i18n.builder.mediaPicker.browseToggle;

// not using brand translations.
var browseToggles = [{
  type: 'arcgis',
  title: 'ArcGIS',
  media: 'geo',
  fullLogo: true
}, {
  type: 'flickr',
  title: 'Flickr',
  media: 'images',
  inlineIcon: 'fa-flickr'
}, {
  type: 'googlePhotos',
  title: 'Google+',
  media: 'images',
  inlineIcon: 'fa-google'
}, {
  type: 'unsplash',
  title: 'Unsplash',
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
