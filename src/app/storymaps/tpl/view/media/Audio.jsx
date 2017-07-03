import Media from './Media';

import {} from 'lib-build/less!./Audio';
import viewBlock from 'lib-build/hbars!./AudioBlock';
import viewBackground from 'lib-build/hbars!./AudioBackground';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import Deferred from 'dojo/Deferred';

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/video.png';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/video.png';

export default class Audio extends Media {
  constructor(audio) {
    super({
      type: 'audio',
      id: audio.url,
      previewThumb: PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._audio = audio;
    this._url = audio.url;

    this._nodeMedia = null;
    this._placement = null;

    this._audio.options = this._audio.options || {};

  }

  getNode() {
    return this._node;
  }

  render(context) {
    var output = '';

    if (! this._audio || ! context) {
      console.log('Could not render audio in section');
      return output;
    }

    this._placement = context.placement;

    if (this._placement == 'block') {
      output += viewBlock({
        id: this._domID,
        url: this._url,
        mimeType: 'audio/' + this.getMimeType(this._url),
        caption: this._audio.caption,
        placeholder: i18n.viewer.media.captionPlaceholder,
        captionEditable: app.isInBuilder
      });
    }
    else if (context.placement == 'background') {

      output += viewBackground({
        id: this._domID,
        url: this._url,
        classes: 'audio-container'
      });
    }

    return output;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    if (this._placement == 'block') {
      this._node = params.container.find('#' + this._domID);
    }
    else {
      this._node = params.container.find('#' + this._domID).parent();
    }

    this._applyConfig();
  }

  _applyConfig() {
    var options = this._audio.options;
    options.size = options.size || 'small';

    super._applyConfig(options);

  }

  preload() {
    var def = new Deferred();
    var aud = new window.Audio();

    aud.onloadedmetadata = function() {
      def.resolve();
      if (!app.builder) {
        this.removeError && this.removeError();
      }
    }.bind(this);

    aud.onerror = function() {
      this.onAudioError();
      def.resolve();
    }.bind(this);

    aud.ondurationchange = function() {
      if (aud.duration && !isFinite(aud.duration)) {
        this.onAudioError();
        def.resolve();
      }
    }.bind(this);

    // sometimes neither onloadedmetadata nor onerror fire.
    // idk why. but resolve after 5 seconds so the media will show up.
    window.setTimeout(() => {
      def.resolve();
    }, 5000);

    aud.src = [this._url];

    return def;

  }

  onAudioError() {
    if (app.builder) {
      this.setError({showLoadingError: true});
    }
    else {
      this.setError({minimizeInViewer: true});
    }
  }

  load() {
    var resultDeferred = new Deferred();

    if (this._isLoaded || !this._node) {
      //resultDeferred.reject();
      return resultDeferred;
    }

    this._isLoaded = true;

    this.preload().then(() => {
      this._fadeInMedia();
    });

    resultDeferred.resolve();

    return resultDeferred;
  }

  getMimeType(url) {
    var ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
    switch (ext) {
      case 'mp3':
        return 'mpeg';
      case 'm4a':
        return 'mp4';
      case 'wav':
      default:
        return ext;
    }
  }

  performAction() {
    if (! this._isLoaded) {
      this.load();
    }
  }

  resize() {
    //
  }
}
