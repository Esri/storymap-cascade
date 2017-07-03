import Text from './Text';

import Image from './Image';
import ImageGallery from './ImageGallery';
import Video from './Video';
import WebMap from './WebMap';
import WebScene from './WebScene';
import WebPage from './WebPage';
import Audio from './Audio';

import Empty from './Empty';

import Color from './Color';
import Credits from './Credits';
import Discover from 'storymaps/tpl/view/media/Discover';
import UIUtils from 'storymaps/tpl/utils/UI';

export default class FactoryViewer {

  static getClasses() {
    return {
      Text: Text,

      Image: Image,
      ImageGallery: ImageGallery,
      Video: Video,
      WebMap: WebMap,
      WebScene: WebScene,
      WebPage: WebPage,
      Audio: Audio,

      Empty: Empty,

      Color: Color,
      Credits: Credits,
      Discover: Discover
    };
  }

  static _createMedia(params) {
    var media = this._parseMedia(params.mediaJSON, params.isNewMedia);

    if (media.setCache && params.mediaCache) {
      media.setCache(params.mediaCache);
    }

    return media;
  }

  static _createAlternateMedia(params) {
    // we're initializing the alternate media
    const alternativeParams = Object.assign({}, params, { mediaJSON: params.mediaJSON.alternate });
    const media = this._createMedia(alternativeParams);

    return media;
  }

  static createInstance(params) {
    const isMobile = app.isMobileView || UIUtils.isMobileBrowser();
    let media = null;
    if (isMobile && params.mediaJSON.alternate) {
      // if on mobile and there's alternate, ONLY show the alternate.
      media = this._createAlternateMedia(params);
    }
    else {
      // Otherwise show both... (though on viewer you otherwise don't need alt, would just slow you down)
      media = this._createMedia(params);

      // only init the alternate media if we're in builder, otherwise it'll be unneccessary overhead to create extra media
      if (params.mediaJSON.alternate && app.isInBuilder) {
        const alternateMedia = this._createAlternateMedia(params);

        media.setAlternate(alternateMedia);
      }
    }

    return media;
  }

  static _parseMedia(mediaJSON, isNewMedia) {
    var media = null;
    const type = mediaJSON.type;

    if (type && ! mediaJSON[type]) {
      console.error('Invalid json for: ', mediaJSON);
      return media;
    }

    var classes = this.getClasses();

    if (type == 'text') {
      media = new classes.Text(mediaJSON.text);
    }
    else if (type == 'image') {
      media = new classes.Image(mediaJSON.image, isNewMedia);
    }
    else if (type == 'image-gallery') {
      media = new classes.ImageGallery(mediaJSON['image-gallery']);
    }
    else if (type == 'video') {
      media = new classes.Video(mediaJSON.video);
    }
    else if (type == 'webmap') {
      media = new classes.WebMap(mediaJSON.webmap);
    }
    else if (type == 'webscene') {
      media = new classes.WebScene(mediaJSON.webscene);
    }
    else if (type == 'webpage') {
      media = new classes.WebPage(mediaJSON.webpage);
    }
    else if (type == 'audio') {
      media = new classes.Audio(mediaJSON.audio);
    }
    else if (type == 'color') {
      media = new classes.Color(mediaJSON.color);
    }
    else if (type == 'credits') {
      media = new classes.Credits(mediaJSON.credits);
    }
    else if (type == 'discover') {
      media = new classes.Discover(mediaJSON.discover);
    }
    else if (type == 'empty') {
      media = new classes.Empty(mediaJSON.empty);
    }
    else {
      console.error('Could not find corresponding media for: ', mediaJSON);
    }

    return media;
  }
}
