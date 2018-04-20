import IdentityManager from 'esri/IdentityManager';
import ArcGISUtils from 'esri/arcgis/utils';

import IssueTypes from './../IssueTypes';
import Media from './Media';

export default class Images extends Media {
  static check(options) {
    return super.check(Object.assign({}, options, { mediaType: 'images' }));
  }

  static _checkItem(options) {
    return super._checkItem(options)
    .then(image => {
      return new Promise(resolve => {
        const MILLISECONDS_TO_WAIT = 15000;
        let trialImage = new Image();

        image.details.source = Images._getSource(image.id);
        // check the image. If it's bad, add the error to it.
        // if checking takes too long, error out the image as well.
        let timer = window.setTimeout(() => {
          Images._onImageError(image, resolve);
        }, MILLISECONDS_TO_WAIT);

        trialImage.onload = () => {
          window.clearTimeout(timer);
          resolve(image);
        };

        trialImage.onerror = () => {
          window.clearTimeout(timer);
          Images._onImageError(image, resolve);
        };

        let baseURL = ArcGISUtils.arcgisUrl.split('/sharing/')[0];
        let credential = IdentityManager.findCredential(baseURL);
        let isAGOLImage = this._isAGOLImage(image);
        let tokenSuffix = '';

        // check if it is hosted on AGOL...
        if (credential && isAGOLImage) {
          // only add a token if there isn't already one on there.
          if (image.id.indexOf('?token') === -1 && image.id.indexOf('&token') === -1) {
            tokenSuffix = '?token=' + credential.token;
          }
        }

        trialImage.src = image.id + tokenSuffix;
      });
    });
  }

  static _onImageError(image, resolve) {
    image.errors.push(IssueTypes.images.inaccessible);
    resolve(image);
  }

  static _getSource(url) {
    let regex = {};

    // check for facebook url
    regex = new RegExp('\\/\\/fbcdn|fbcdn\\.net');

    if (regex.test(url)) {
      return 'facebook';
    }

    // check for flickr
    regex = new RegExp('flickr\\.com');

    if (regex.test(url)) {
      return 'flickr';
    }

    // check for google+
    regex = new RegExp('\\.ggpht\\.com|lh[1-9]\\.googleusercontent\\.');

    if (regex.test(url)) {
      return 'googlePlus';
    }

    return 'url';
  }

  static _isAGOLImage(image) {
    if (image.id && image.id.match(new RegExp('\/sharing\/rest\/content\/items\/.*?\/resources\/'))) {
      return true;
    }
    else {
      return false;
    }
  }
}
