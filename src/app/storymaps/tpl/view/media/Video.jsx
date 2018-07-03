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

import VimeoPlayer from 'lib/vimeo-player-js/dist/player';
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
    this._start = video.start;
    this._end = video.end;

    this._soundLevelPreImmersive = null;
    this._isMuted = false;
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
        altText: this._video.altText,
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
          videoId: this.id,
          altText: this._video.altText,
          muteUnmuteString: i18n.viewer.media.videoMuteUnmute
        });
      }
    }

    return output;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    this._sectionType = params.sectionType;
    if (this._sectionType === 'immersive' && !this._placement) {
      this._placement = 'background';
    }

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
        this._node.find('.toggle-mute-button').tooltip();
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
      var isMuted = this._video.options.audio == 'muted';
      var volume = isMuted ? 0 : 1;

      this._setVolume(volume);
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

    this._node.find('.toggle-mute-button').on('click', function() {
      if (!this._isVideoLoaded) {
        return;
      }

      if (this._isMuted) {
        this._unMute();
      }
      else {
        this._mute();
      }
    }.bind(this));

    // show the "mute/unmute" button if this is a newly-built video in immersive section with "button to enable" setting for sound
    if (this._isBuilderAdd && this._sectionType === 'immersive') {
      this._node.find('.toggle-mute-button').toggleClass('mute-button-active', params.isActive && this._video.options.audio !== 'muted');
    }

    // https://developers.google.com/youtube/iframe_api_reference
    // https://developer.vimeo.com/player/js-api

    if (this._source == 'vimeo') {
      this._videoPlayer = this.constructVimeoPlayer();
      try {
        this._onVimeoPlayerReady();
      }
      catch (e) {
        console.error(e);
      }
    }
    else if (this._video.source == 'youtube') {
      this._videoPlayer = this.constructYoutubePlayer();
    }

    this._cache[this.id] = {
      videoPlayer: this._videoPlayer,
      params: {
        start: this._start,
        end: this._end
      }
    };

    return this._loadDeferred;
  }

  constructVimeoPlayer() {
    var opt = '0';
    var controls = '';

    if (this._placement == 'background') {
      opt = '1';
    }
    else if (this._video.options && this._video.options.ui == 'simple') {
      opt = '1';
      controls = '<div class="player-controls"><button class="play">' + i18n.viewer.media.videoPlayPause + '</button>&nbsp;&nbsp;&nbsp;<button class="mute">' + i18n.viewer.media.videoMuteUnmute + '</button></div>';
    }

    var classes = this._placement == 'foreground' ? 'video-fg video-player' : 'video';
    var url = 'https://player.vimeo.com/video/' + this._videoid + '?title=0&byline=0&portrait=0&transparent=0&api=1&background=' + opt + '&player_id=player-' + this._domID;

    var newMedia = $(viewVideoVimeo({
      domId: 'player-' + this._domID,
      classes: classes + ' initialized',
      url: url,
      options: this._video.options,
      altText: this._video.altText,
      playerControls: controls,
      id: this.id
    }));

    this._nodeMedia.replaceWith(newMedia);
    this._nodeMedia = newMedia;

    return new VimeoPlayer(newMedia[0], {
      background: this._placement === 'background' ? true : false
    });

  }

  constructYoutubePlayer() {
    var loop, playlist;
    if (this._placement === 'background') {
      loop = 1;
      playlist = this._videoid;
    }

    return new window.YT.Player(this._node.find('.video-player[data-id=' + this.id + ']')[0], {
      height: '',
      width: '',
      videoId: this._videoid,
      playerVars: {
        loop: loop,
        rel: 0,
        showinfo: 0,
        wmode: 'opaque',
        iv_load_policy: 3,
        start: this._start,
        end: this._end,
        enablejsapi: 1,
        playlist: playlist
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
        onStateChange: this.onYoutubeStateChange.bind(this),
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
        isMuted = this._video.options.audio === 'muted';

    // the "mute/unmute" button is only visible on immersive sections, when the author has indicated a video may be played with sound,
    // when the video has been loaded, and when the view is active.
    // If view is navigated away from, the button hides again.
    if (isImmersiveBg) {
      this._node.find('.toggle-mute-button').toggleClass('mute-button-active', params.isActive && this._video.options.audio !== 'muted');
    }

    try {
      if (this._video.source == 'vimeo') {
        if (params.isActive) {
          // Sound
          if (this._placement == 'background') {
            if (isImmersiveBg && ! isMuted) {
              this._videoPlayer.getVolume().then(function(volume) {
                if (volume != 1) {
                  this._soundLevelPreImmersive = volume;
                }
                else if (params.visibilityProgress) {
                  this._setVolume(params.visibilityProgress);
                }
              }.bind(this));

            }
          }
          this._videoPlayer.play();
        }
        else {
          if (this._placement == 'background') {
            // june 2018 patch d -- stop setting video volumes to 0
            // when scrolling away
            // if (this._soundLevelPreImmersive != null) {
            //   this._setVolume(this._soundLevelPreImmersive);
            // }
            this._videoPlayer.pause();
          }
          else {
            this._videoPlayer.pause();
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

              this._setVolume(1);
            }
          }
          if (this._videoPlayer.getPlayerState() !== window.YT.PlayerState.PLAYING) {
            this._videoPlayer.playVideo();
          }
        }
        else {
          if (this._placement == 'background') {
            if (this._soundLevelPreImmersive != null) {
              this._setVolume(params.visibilityProgress);
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
      this._videoPlayer.pause();
    }
    else {
      this._mute();

      if (! this._isBuilderAdd) {
        if (this._sectionType == 'immersive') {
          // need a single bound function to be able to remove it later
          this._cb = this.handleFirstVimeoImmersivePlay.bind(this);
          this._videoPlayer.on('play', this._cb);
        }
      }
      else {
        this._videoPlayer.play();
      }

      this._videoPlayer.setLoop(true);
    }

    // this can't be before the stuff above because of the play event listeners
    this._videoPlayer.on('play', this.reloadOrReplayVimeoVideo.bind(this));
    this._videoPlayer.on('seek', this.reloadOrReplayVimeoVideo.bind(this));

    this._loadDeferred.resolve();
    this.resize();
    this._applyConfig();

    this._fadeInMedia();

    if (this._pendingAction) {
      this.performAction(this._pendingAction);
      this._pendingAction = null;
    }
  }

  reloadOrReplayVimeoVideo(data) {
    var cachedParams = this.getCachedParams();
    var thisStart = cachedParams ? cachedParams.start : this._start;
    if ((!data || data.seconds < 1) && thisStart) {
      this._videoPlayer.setCurrentTime(thisStart);
    }
  }

  // maybe pause this, depending on whether we're pre-loading.
  // the only way i found to do this was to check dom node classes.
  // maybe there's a better way... ?
  handleFirstVimeoImmersivePlay() {
    this._videoPlayer.off('play', this._cb);
    if (!this._node.hasClass('active') || !this._node.parents('.section-immersive.active').length) {
      this._videoPlayer.pause();
    }
    this.reloadOrReplayVimeoVideo();
  }

  _onYoutubePlayerReady() {
    this._isVideoLoaded = true;

    if (this._placement == 'background') {
      this._mute();
      this._videoPlayer.setLoop(true);

      if (this._isBuilderAdd) {
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

  onYoutubeStateChange(state) {
    if (state.data === window.YT.PlayerState.ENDED) {
      this.reloadOrReplayYoutubeVideo();
    }
  }

  reloadOrReplayYoutubeVideo() {
    if (!this._videoPlayer) {
      return;
    }
    var cachedParams = this.getCachedParams();
    var params = {
      videoId: this._videoid,
      startSeconds: cachedParams ? cachedParams.start : this._start,
      endSeconds: cachedParams ? cachedParams.end : this._end
    };
    if (this._placement === 'background') {
      this._videoPlayer.loadVideoById(params);
    }
    else {
      this._videoPlayer.cueVideoById(params);
    }
  }

  getCachedParams() {
    var cached = this._cache ? this._cache[this.id] : null;
    return cached && cached.params;
  }

  _mute() {
    // set sound to zero, then mute.
    this._setVolume(0);

    if (this._video.source === 'youtube') {
      this._videoPlayer.mute();
    }

    this._isMuted = true;

    this._node.find('.toggle-mute-icon').removeClass('glyphicon-volume-up').addClass('glyphicon-volume-off');
  }

  _unMute() {
    // unmute, then set sound to 100.
    this._isMuted = false;

    if (this._video.source === 'youtube') {
      this._videoPlayer.unMute();
    }

    this._setVolume(1);

    this._node.find('.toggle-mute-icon').removeClass('glyphicon-volume-off').addClass('glyphicon-volume-up');
  }

  _setVolume(volume) {
    // sound should not be set if the player is muted.
    if (this._isMuted) {
      return;
    }

    try {
      if (this._video.source === 'vimeo') {
        this._videoPlayer.setVolume(volume);
      }
      else if (this._video.source === 'youtube' && !this._videoPlayer.getVolume()) {
        // YouTube volume goes from 0 - 100, not from 0 - 1
        this._videoPlayer.setVolume(volume * 100);
      }
    }
    catch (e) {
      console.error(e);
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
