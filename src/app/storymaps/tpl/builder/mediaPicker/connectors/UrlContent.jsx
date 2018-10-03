import constants from '../constants';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';

var URLConnector = (function() {

  var checkVimeoUrl = function(url) {
    return new Promise((resolve, reject) => {
      const videoId = getVimeoId(url);
      if (!videoId) {
        resolve(constants.fetchStatus.NON_MATCHING_URL);
        return;
      }
      getVimeoVideoInfo(videoId).then((data) => {
        if (!data) {
          reject({
            reason: constants.fetchStatus.NOT_FOUND,
            type: 'VIDEO'
          });
          return;
        }
        const videoParams = getVimeoParams(url);
        resolve(Object.assign({
          id: videoId,
          source: 'vimeo',
          title: data.title,
          user: data.user_name,
          thumbUrl: data.thumbnail_small,
          url: getVimeoVideoEmbed(videoId, videoParams)
        }, videoParams));
      }).catch((error) => {
        reject({
          reason: constants.fetchStatus.NOT_FOUND,
          type: 'VIDEO',
          error: error
        });
      });
    });

  };

  var checkYoutubeUrl = function(url) {
    return new Promise((resolve, reject) => {
      const videoId = getYoutubeId(url);
      if (!videoId) {
        resolve(constants.fetchStatus.NON_MATCHING_URL);
        return;
      }

      if (!regexVerifyYoutubeId(videoId)) {
        reject({
          reason: constants.fetchStatus.BAD_FORMAT,
          type: 'VIDEO'
        });
        return;
      }

      getYoutubeVideoInfo(videoId).then((item) => {
        if (!item) {
          reject({
            reason: constants.fetchStatus.NOT_FOUND,
            type: 'VIDEO'
          });
          return;
        }
        const videoParams = getYoutubeParams(url);
        resolve(Object.assign({
          id: videoId,
          source: 'youtube',
          title: item.snippet.title,
          user: item.snippet.channelTitle,
          thumbUrl: item.snippet.thumbnails['default'].url,
          url: getYoutubeEmbed(videoId, videoParams)
        }, videoParams));
      }).catch((error) => {
        if (error && error.status == 403) {
          reject({
            reason: constants.fetchStatus.NOT_AUTHORIZED,
            type: 'VIDEO',
            error: error
          });
        }
        else {
          reject({
            reason: constants.fetchStatus.NOT_FOUND,
            type: 'VIDEO',
            error: error
          });
        }
      });
    });
  };

  var getYoutubeVideoInfo = function(videoId) {
    return new Promise((resolve, reject) => {
      const requestUrl = 'https://www.googleapis.com/youtube/v3/videos'
            + '?part=snippet,statistics'
            + '&id=' + videoId
            + '&key=' + app.cfg.MEDIA_KEYS.YOUTUBE_API;

      $.ajax({
        dataType: 'json',
        url: requestUrl,
        timeout: 4000
      }).then((response) => {
        if (response && response.items && response.items.length) {
          resolve(response.items[0]);
        }
        else {
          reject();
        }
      }, (error) => {
        reject(error);
      });

    });

  };

  var getYoutubeParams = function(url) {
    var urlParams = CommonHelper.getUrlParams(url);
    var whitelistedParams = {};
    if (urlParams.start) {
      if (urlParams.start.match(/[h|m|s]/) && !urlParams.t) {
        urlParams.t = urlParams.start;
      }
      else {
        whitelistedParams.start = parseInt(urlParams.start);
      }
    }
    if (urlParams.end) {
      whitelistedParams.end = parseInt(urlParams.end);
    }
    // sometimes start time is in the form t=2m30s.
    if (urlParams.t) {
      var totalSeconds = 0;
      var hours = urlParams.t.match(/\d+h/);
      if (hours) {
        totalSeconds += (parseInt(hours[0]) * 60 * 60);
      }
      var minutes = urlParams.t.match(/\d+m/);
      if (minutes) {
        totalSeconds += (parseInt(minutes[0]) * 60);
      }
      var seconds = urlParams.t.match(/\d+s/);
      if (seconds) {
        totalSeconds += parseInt(seconds[0]);
      }
      if (!hours && !minutes && !seconds) {
        totalSeconds = parseInt(urlParams.t);
      }
      if (totalSeconds) {
        whitelistedParams.start = totalSeconds;
      }
    }
    return whitelistedParams;
  };

  var getVimeoVideoInfo = function(videoId) {
    return new Promise((resolve, reject) => {
      const requestUrl = '//vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + videoId;

      $.ajax({
        type: 'GET',
        url: requestUrl,
        jsonp: 'callback',
        dataType: 'jsonp',
        timeout: 4000
      }).then((data) => {
        if (data && data.type === 'video') {
          resolve(data);
        }
        else {
          reject();
        }
      }, (error) => {
        reject(error);
      });
    });
  };

  var getVimeoParams = function(url) {
    var urlHash = CommonHelper.getUrlHash(url);
    var whitelistedParams = {};
    var timeHash = urlHash.match(/t=\d+s/);
    if (timeHash) {
      var seconds = parseInt(timeHash[0].slice(2, -1));
      whitelistedParams.start = seconds;
    }
    return whitelistedParams;
  };

  var getYoutubeId = function(url) {
    var urlTest = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{3,20})/.exec(url);
    return urlTest ? urlTest.pop() : null;
  };

  var regexVerifyYoutubeId = function(videoid) {
    return videoid.match(/^[a-zA-Z0-9_-]{11}$/);
  };

  var getVimeoId = function(url) {
    var urlTest = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?|#)/.exec(url);
    return urlTest ? urlTest.pop() : null;
  };

  var getYoutubeEmbed = function(videoId, whitelistedParams) {
    var addr = '//www.youtube.com/embed/' + videoId;
    if (whitelistedParams && Object.keys(whitelistedParams).length) {
      var whitelistedArr = [];
      for (let key in whitelistedParams) {
        whitelistedArr.push(key + '=' + whitelistedParams[key]);
      }
      if (whitelistedArr.length) {
        addr += '?' + whitelistedArr.join('&');
      }
    }
    return addr;
  };

  var getVimeoVideoEmbed = function(videoId, whitelistedParams) {
    var addr = '//player.vimeo.com/video/' + videoId;
    if (whitelistedParams && whitelistedParams.start) {
      addr += '#t=' + whitelistedParams.start + 's';
    }
    return addr;
  };

  var checkForIframe = function(url) {
    return (url.match(/^<iframe[^>][\s\S]*<\/iframe>$/) && url.match(/<iframe/g).length <= 2);
  };

  var getIframeSrc = function(iframeStr) {
    const src = $(iframeStr).attr('src'); // seemed easier than parsing
    if (src) {
      return src;
    }
    return null;
  };

  var getIframeHeight = function(iframeStr) {
    const height = $(iframeStr).attr('height');
    if (height && height.indexOf('%') < 0) {
      return parseInt(height, 10);
    }
    return null;
  };

  var checkForImage = function(url) {
    return new Promise((resolve, reject) => {
      if (url.match(/\.(jpe?g|png|gif)$/i)) {
        url = url.replace(/^https?:\/\//, '//');
        const image = new Image();
        image.onload = function() {
          this.onload = null;
          resolve({url: url});
        };
        image.onerror = function(err) {
          this.onload = null;
          this.onerror = null;
          reject({
            reason: constants.fetchStatus.NOT_FOUND,
            type: 'IMAGE',
            error: err
          });
        };
        image.src = url;
      }
      else {
        resolve(constants.fetchStatus.NON_MATCHING_URL);
      }
    });
  };

  var checkForAudio = function(url) {
    return new Promise((resolve, reject) => {
      if (url.match(/\.(mp3|m4a|wav)$/i)) {
        const audio = new Audio([url]);
        audio.onloadedmetadata = function() {
          this.onloadedmetadata = null;
          this.onerror = null;
          resolve({url: url});
        };
        audio.onerror = function(err) {
          this.onloadedmetadata = null;
          this.onerror = null;
          reject({
            reason: constants.fetchStatus.NOT_FOUND,
            type: 'AUDIO',
            error: err
          });
        };
        audio.ondurationchange = function() {
          if (audio.duration && !isFinite(audio.duration)) {
            reject({
              reason: constants.fetchStatus.NOT_FOUND,
              type: 'AUDIO',
              error: 'duration not finite'
            });
          }
        };
      }
      else {
        resolve(constants.fetchStatus.NON_MATCHING_URL);
      }
    });
  };

  return {
    checkYoutubeUrl,
    checkVimeoUrl,
    checkForIframe,
    getIframeSrc,
    getIframeHeight,
    checkForImage,
    checkForAudio
  };
}());

export { URLConnector };
