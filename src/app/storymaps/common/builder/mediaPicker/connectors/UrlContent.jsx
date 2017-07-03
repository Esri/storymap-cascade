import config from '../config';
import constants from '../constants';

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
        resolve({
          id: videoId,
          source: 'vimeo',
          title: data.title,
          description: data.description,
          user: data.user_name,
          thumbUrl: data.thumbnail_small,
          url: getVimeoVideoEmbed(videoId),
          viewCount: data.stats_number_of_plays,
          likeCount: data.stats_number_of_likes
        });
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
        resolve({
          id: videoId,
          source: 'youtube',
          title: item.snippet.title,
          description: item.snippet.description,
          user: item.snippet.channelTitle,
          thumbUrl: item.snippet.thumbnails['default'].url,
          url: getYoutubeEmbed(videoId),
          viewCount: item.statistics.viewCount,
          likeCount: item.statistics.likeCount
        });
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
            + '&key=' + config.YOUTUBE_API_KEY;

      $.ajax({
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

  var getVimeoVideoInfo = function(videoId) {
    return new Promise((resolve, reject) => {
      const requestUrl = '//vimeo.com/api/v2/video/' + videoId + '.json';

      $.ajax({
        type: 'GET',
        url: requestUrl,
        jsonp: 'callback',
        dataType: 'jsonp',
        timeout: 4000
      }).then((data) => {
        if (data && data[0]) {
          resolve(data[0]);
        }
        else {
          reject();
        }
      }, (error) => {
        reject(error);
      });
    });
  };

  var getYoutubeId = function(url) {
    var urlTest = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{3,20})/.exec(url);
    return urlTest ? urlTest.pop() : null;
  };

  var regexVerifyYoutubeId = function(videoid) {
    return videoid.match(/^[a-zA-Z0-9_-]{11}$/);
  };

  var getVimeoId = function(url) {
    var urlTest = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/.exec(url);
    return urlTest ? urlTest.pop() : null;
  };

  var getYoutubeEmbed = function(videoId) {
    return '//www.youtube.com/embed/' + videoId + '?wmode=opaque&rel=0';
  };

  var getVimeoVideoEmbed = function(videoId) {
    return '//player.vimeo.com/video/' + videoId;
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