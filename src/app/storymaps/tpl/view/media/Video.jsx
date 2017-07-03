import Media from './Media';

import {} from 'lib-build/less!./Video';
import viewBlock from 'lib-build/hbars!./VideoBlock';
import viewBackground from 'lib-build/hbars!./VideoBackground';
import viewBackgroundError from 'lib-build/hbars!./VideoBackgroundError';
import viewBackgroundErrorDetailed from 'lib-build/hbars!./VideoBackgroundErrorDetailed';
import viewVideoVimeo from 'lib-build/hbars!./VideoVimeo';
import UIUtils from 'storymaps/tpl/utils/UI';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import Deferred from 'dojo/Deferred';

import {} from 'lib/froogaloop/froogaloop';
import {} from 'lib/youtube-api/index';

var CONFIG = {
  ratio: 16 / 9
};

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/video.png';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/video.png';

export default class Video extends Media {

  constructor(video) {
    super({
      type: 'video',
      id: video.source + '-' + video.id,
      previewThumb: PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._video = video;
    this._source = video.source;
    this._videoid = video.id;

    this._soundLevelPreImmersive = null;
    this._placement = null;
    this._videoPlayer = null;
    this._loadDeferred = null;
    this._isVideoLoaded = false;
    this._pendingAction = null;
    this._isSupported = true;

    // If video has just been added in builder
    // TODO: section have to declare the default behavior for the media
    this._sectionType = 'sequence';
    this._isBuilderAdd = false;

    // TODO: shouldn't be needed
    if (! this._video.options) {
      this._video.options = {};
    }
  }

  render(params) {
    var output = '';

    if (! this._video || ! params) {
      console.log('Could not render video in section');
      return output;
    }

    this._placement = params.placement;

    if (this._placement == 'block') {
      output += viewBlock({
        domId: this._domID,
        videoId: this.id,
        caption: this._video.caption,
        placeholder: i18n.viewer.media.captionPlaceholder,
        captionEditable: app.isInBuilder
      });
    }
    else if (this._placement == 'background') {
      if (UIUtils.isMobileBrowser()) {
        this._isSupported = false;
        app.data.errorVideoMobile = true;

        if (params.sectionType === 'immersive') {
          output += viewBackgroundErrorDetailed({
            domId: this._domID,
            message: i18n.viewer.media.loadingError
          });
        }
        else {
          output += viewBackgroundError({
            domId: this._domID
          });
        }
      }
      else {
        output += viewBackground({
          domId: this._domID,
          videoId: this.id
        });
      }
    }

    return output;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    this._sectionType = params.sectionType;

    if (! params.container) {
      return;
    }

    if (this._placement == 'block') {
      this._node = params.container.find('#' + this._domID);
    }
    else {
      if (!this._isSupported) {
        this._node = params.container.find('#' + this._domID).parent();
      }
      else {
        this._node = params.container.find('.video[data-id="' + this.id + '"]').parent().parent();
      }
    }

    this._nodeMedia = this._node.find('.video-player');

    this._applyConfig();
  }

  getNode() {
    return this._node;
  }

  _applyConfig() {
    var options = this._video.options;

    if (!this._isSupported) {
      return;
    }

    // Test
    if (typeof options == 'string') {
      options = {};
    }

    options.size = options.size || 'small';

    if (this._isVideoLoaded && options.audio) {
      var isMuted = this._video.options.audio == 'muted',
          volume = isMuted ? 0 : 1;

      try {
        if (this._video.source == 'vimeo') {
          this._videoPlayer.api('setVolume', volume);
        }
        else {
          this._videoPlayer.setVolume(volume * 100);
        }
      }
      catch (e) {
        console.error(e);
      }
    }

    super._applyConfig(options);
  }

  load(params = {}) {
    this._loadDeferred = new Deferred();

    if (this._isLoaded || !this._isSupported) {
      this._loadDeferred.resolve();
      return this._loadDeferred;
    }

    this._isLoaded = true;
    this._isBuilderAdd = params.isBuilderAdd;

    if (this._cache[this.id]) {
      this._videoPlayer = this._cache[this.id].videoPlayer;
      // TODO: need a more robust system like maps
      this._isVideoLoaded = true;
      return this._loadDeferred;
    }

    // https://developers.google.com/youtube/iframe_api_reference
    // https://developer.vimeo.com/player/js-api

    var opt = '0';
    var controls = '';

    if (this._placement == 'background') {
      opt = '1';
    }
    else if (this._video.options && this._video.options.ui == 'simple') {
      opt = '1';
      controls = '<div class="player-controls"><button class="play">' + i18n.viewer.media.videoPlayPause + '</button>&nbsp;&nbsp;&nbsp;<button class="mute">' + i18n.viewer.media.videoMuteUnmute + '</button></div>';
    }

    if (this._source == 'vimeo') {
      var classes = this._placement == 'foreground' ? 'video-fg video-player' : 'video';

      var newMedia = $(viewVideoVimeo({
        domId: 'player-' + this._domID,
        classes: classes + ' initialized',
        url: 'https://player.vimeo.com/video/' + this._videoid + '?api=1&background=' + opt + '&player_id=player-' + this._domID,
        options: this._video.options,
        playerControls: controls
      }));

      this._nodeMedia.replaceWith(newMedia);
      this._nodeMedia = newMedia;

      this._videoPlayer = $f(newMedia[0]); // eslint-disable-line no-undef

      try {
        this._videoPlayer.addEvent('ready', this._onVimeoPlayerReady.bind(this));
      }
      catch (e) {
        console.error(e);
      }
    }
    else if (this._video.source == 'youtube') {
      this._videoPlayer = new window.YT.Player(this._node.find('.video-player[data-id=' + this.id + ']')[0], {
        height: '',
        width: '',
        loop: 1,
        videoId: this._videoid,
        playerVars: {
          rel: 0,
          modestbranding: 1
        },
        events: {
          onReady: function(e) {
            try {
              this._onYoutubePlayerReady(e, this._video.id);
            }
            catch (e) {
              console.error(e);
            }
          }.bind(this),
          onError: function() {
            if (app.builder) {
              this.setError({showLoadingError: true});
            }
            else {
              this.setError();
            }
          }.bind(this)
        }
      });
    }

    this._cache[this.id] = {
      videoPlayer: this._videoPlayer
    };

    return this._loadDeferred;
  }

  resize(params) {
    if (this._placement == 'background') {
      this._resizeVideoBackground(params);
    }
    /*
    else {
      this._resizeVideoForeground();
    }
    */
  }

  performAction(params) {
    if (! this._videoPlayer || !this._isSupported) {
      return;
    }

    if (! this._isVideoLoaded) {
      this._pendingAction = params;
      return;
    }

    // Is Immersive background - On Cover we do nothing about sound
    // TODO: should just store the proper property...
    var isImmersiveBg = params.viewIndex !== undefined,
        isMuted = this._video.options.audio == 'muted';

    try {
      if (this._video.source == 'vimeo') {
        if (params.isActive) {
          // Sound
          if (this._placement == 'background') {
            if (isImmersiveBg && ! isMuted) {
              this._videoPlayer.api('getVolume', function(volume) {
                if (volume != 1) {
                  this._soundLevelPreImmersive = volume;
                }
              }.bind(this));

              if (params.visibilityProgress) {
                this._videoPlayer.api('setVolume', params.visibilityProgress);
              }
            }
          }

          this._videoPlayer.api('play');
        }
        else {
          if (this._placement == 'background') {
            if (this._soundLevelPreImmersive != null) {
              this._videoPlayer.api('setVolume', this._soundLevelPreImmersive);
            }
            this._videoPlayer.api('pause');
          }
          else {
            this._videoPlayer.api('pause');
          }
        }
      }
      else if (this._video.source == 'youtube') {
        if (params.isActive) {
          // Sound
          if (this._placement == 'background') {
            if (isImmersiveBg && ! isMuted) {
              let volume = this._videoPlayer.getVolume();
              if (volume != 100) {
                this._soundLevelPreImmersive = volume;
              }

              this._videoPlayer.setVolume(100);
            }
          }

          this._videoPlayer.playVideo();
        }
        else {
          if (this._placement == 'background') {
            if (this._soundLevelPreImmersive != null) {
              this._videoPlayer.setVolume(params.visibilityProgress * 100);
            }
            this._videoPlayer.pauseVideo();
          }
          else {
            this._videoPlayer.pauseVideo();
          }
        }
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  //
  // YouTube and Vimeo callback looks different as Vimeo autoplay by default
  //  but not Youtube, would be good to harmonize to factorize code
  //

  _onVimeoPlayerReady() {
    this._isVideoLoaded = true;

    if (this._placement == 'block') {
      this._videoPlayer.api('pause');
    }
    else {
      var isMuted = this._video.options.audio == 'muted';

      if (! this._isBuilderAdd) {
        this._videoPlayer.api('setVolume', 0);

        if (this._sectionType == 'immersive') {
          this._videoPlayer.api('pause');
        }
      }
      else {
        if (this._sectionType == 'immersive' && ! isMuted) {
          this._videoPlayer.api('setVolume', 1);
        }
        else {
          this._videoPlayer.api('setVolume', 0);
        }

        this._videoPlayer.api('play');

        // this is called twice when adding in Immersive so can't do that
        //this._isBuilderAdd = false;
      }

      this._videoPlayer.api('setLoop', true);
    }

    this._loadDeferred.resolve();
    this.resize();
    this._applyConfig();

    this._fadeInMedia();

    if (this._pendingAction) {
      this.performAction(this._pendingAction);
      this._pendingAction = null;
    }
  }

  _onYoutubePlayerReady() {
    this._isVideoLoaded = true;

    if (this._placement == 'background') {
      this._videoPlayer.setLoop(true);

      if (! this._isBuilderAdd) {
        this._videoPlayer.setVolume(0);
      }
      else {
        if (this._sectionType == 'immersive') {
          this._videoPlayer.setVolume(100);
        }
        else {
          this._videoPlayer.setVolume(0);
        }
        this._videoPlayer.playVideo();
      }
    }

    // The node change from a div to an iframe during loading
    this._nodeMedia = this._node.find('.video-player');

    this._loadDeferred.resolve();
    this.resize();
    this._applyConfig();

    this._fadeInMedia();

    if (this._pendingAction) {
      this.performAction(this._pendingAction);
      this._pendingAction = null;
    }
  }

  _resizeVideoBackground(params) {
    params = params || {
      windowWidth: app.display.windowWidth,
      windowHeight: app.display.windowHeight
    };

    if (! this._nodeMedia || !this._isSupported) {
      return;
    }

    var videoWidth = -1,
        videoHeight = -1,
        windowWidth = app.display.windowWidth,
        windowHeight = app.display.windowHeight + /* add margin so that vimeo controls aren't visible */ 60,
        windowRatio = windowWidth / windowHeight;

    if (windowRatio < CONFIG.ratio) {
      videoWidth = windowHeight * CONFIG.ratio;
      videoHeight = windowHeight;
    }
    else {
      videoWidth = windowWidth;
      videoHeight = videoWidth / CONFIG.ratio;
    }

    this._nodeMedia.css({
      width: videoWidth,
      height: videoHeight
    });

    this._nodeMedia.parent().css({
      width: windowWidth,
      height: windowHeight
    });

    this._nodeMedia.parent().scrollLeft((videoWidth - windowWidth) / 2);
    this._nodeMedia.parent().scrollTop((videoHeight - windowHeight) / 2);
  }
}
