import Text from './Text';

import Image from './Image';
import ImageGallery from './ImageGallery';
import Video from './Video';
import WebMap from './WebMap';
import WebScene from './WebScene';
import WebPage from './WebPage';

import Empty from './Empty';

import Color from './Color';
import Credits from './Credits';
import Discover from 'storymaps/tpl/view/media/Discover';

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

      Empty: Empty,

      Color: Color,
      Credits: Credits,
      Discover: Discover
    };
  }

  static createInstance(mediaJSON, mediaCache) {
    var media = this._parseMedia(mediaJSON.type, mediaJSON, mediaCache);

    if (media.setCache && mediaCache) {
      media.setCache(mediaCache);
    }

    if (mediaJSON.alternate) {
      var alternateMedia = this._parseMedia(mediaJSON.alternate, mediaJSON, mediaCache);

      if (alternateMedia.setCache && mediaCache) {
        alternateMedia.setCache(mediaCache);
      }

      media.setAlternate(alternateMedia);
    }

    return media;
  }

  static _parseMedia(type, mediaJSON) {
    var media = null;

    if (type && ! mediaJSON[type]) {
      console.error('Invalid json for: ', mediaJSON);
      return media;
    }

    var classes = this.getClasses();

    if (type == 'text') {
      media = new classes.Text(mediaJSON.text);
    }
    else if (type == 'image') {
      media = new classes.Image(mediaJSON.image);
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
