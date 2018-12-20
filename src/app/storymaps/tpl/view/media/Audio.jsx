import Media from './Media';

import {} from 'lib-build/less!./Audio';
import viewBlock from 'lib-build/hbars!./AudioBlock';
import viewBackground from 'lib-build/hbars!./AudioBackground';

import UIUtils from 'storymaps/tpl/utils/UI';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import has from 'dojo/sniff';
import Deferred from 'dojo/Deferred';

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/video.png';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/video.png';

export default class Audio extends Media {
  constructor(audio) {
    let id = audio.url;
    let isPending = false;
    var def = audio.uploadDeferred;
    if (def && def.isResolved && !def.isResolved()) {
      isPending = true;
      id = UIUtils.getUID();
    }
    super({
      type: 'audio',
      id: id,
      previewThumb: PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._audio = audio;

    this._nodeMedia = null;
    this._placement = null;
    this._isUploadPending = isPending;
    if (isPending) {
      delete this._audio.dataUrl;
      audio.uploadDeferred.then(
        this._onUploadSuccess.bind(this),
        this._onUploadFail.bind(this)
      );
    }

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
        url: Media.addToken(this._audio.url),
        mimeType: 'audio/' + this.getMimeType(this._audio.url || this._audio.id),
        caption: this._audio.caption,
        altText: this._audio.altText,
        placeholder: i18n.viewer.media.captionPlaceholder,
        captionEditable: app.isInBuilder
      });
    }
    else if (context.placement == 'background') {

      output += viewBackground({
        id: this._domID,
        url: Media.addToken(this._audio.url),
        altText: this._audio.altText,
        classes: 'audio-container'
      });
    }
    return output;
  }

  rerender() {
    var audioUrl = Media.addToken(this._audio.url);
    this._node.find('audio').attr('src', audioUrl);
    this._node.find('a').attr('href', audioUrl).text(audioUrl);
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

    if (this._isUploadPending) {
      this._onUploadStart();
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

    // sometimes neither onloadedmetadata nor onerror fire.
    // idk why. but resolve after 5 seconds so the media will show up.
    window.setTimeout(() => {
      def.resolve();
    }, 5000);

    // this is here for pending uploads
    if (this._audio.url) {
      aud.src = Media.addToken(this._audio.url);
    }

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

    if (this._audio && this._audio.url) {
      this.preload().then(() => {
        this._fadeInMedia();
        this.fixSafari();
      });
    }

    resultDeferred.resolve();

    return resultDeferred;
  }

  fixSafari() {
    if (!this._node) {
      return;
    }
    var aud = this._node.find('audio');
    if (!aud.length) {
      return;
    }
    // fine for regular safari, but mobile safari needs
    // a reload every time it ends. :\
    if (aud.prop('duration') === Infinity) {
      aud.load();
    }
    if (has('ios')) {
      aud.on('ended', function() {
        aud.load();
      });
    }
  }

  getMimeType(url) {
    if (!url || !url.slice) {
      return;
    }
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
