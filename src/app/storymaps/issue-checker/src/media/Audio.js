import IdentityManager from 'esri/IdentityManager';
import ArcGISUtils from 'esri/arcgis/utils';

import IssueTypes from './../IssueTypes';
import Media from './Media';

export default class Audio extends Media {
  static check(options) {
    return super.check(Object.assign({}, options, { mediaType: 'audio' }));
  }

  static _checkItem(options) {
    return super._checkItem(options)
    .then(audio => {
      return new Promise(resolve => {
        const MILLISECONDS_TO_WAIT = 10000;
        let trialAudio = new window.Audio();

        // check the audio file. If it's bad, add the error to it.
        // if checking takes too long, just resolve.
        // i don't know why, but sometimes working audio doesn't resolve.
        let timer = window.setTimeout(() => {
          Audio.resolveAndClear(audio, timer, resolve);
        }, MILLISECONDS_TO_WAIT);

        trialAudio.onloadedmetadata = function() {
          Audio.resolveAndClear(audio, timer, resolve);
        };

        trialAudio.onerror = function() {
          window.clearTimeout(timer);
          Audio._onAudioError(audio, resolve);
        };

        let baseURL = ArcGISUtils.arcgisUrl.split('/sharing/')[0];
        let credential = IdentityManager.findCredential(baseURL);
        let tokenSuffix = '';

        // check if it is hosted on AGOL...
        if (credential && this._isAGOLAudio(audio)) {
          // only add a token if there isn't already one on there.
          if (audio.id.indexOf('?token') === -1 && audio.id.indexOf('&token') === -1) {
            tokenSuffix = '?token=' + credential.token;
          }
        }

        if (audio.id) {
          trialAudio.src = audio.id + tokenSuffix;
        }
      });
    });
  }

  static resolveAndClear(audio, timer, resolve) {
    window.clearTimeout(timer);
    resolve(audio);
  }

  static _onAudioError(audio, resolve) {
    audio.errors.push(IssueTypes.audio.inaccessible);
    resolve(audio);
  }

  static _isAGOLAudio(audio) {
    if (audio.id && audio.id.match(new RegExp('\/sharing\/rest\/content\/items\/.*?\/resources\/'))) {
      return true;
    }
    else {
      return false;
    }
  }
}
