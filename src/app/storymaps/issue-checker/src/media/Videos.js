import esriRequest from 'esri/request';
import EsriConfig from 'esri/config';

import IssueTypes from './../IssueTypes';
import Media from './Media';

export default class Videos extends Media {
  static check(options) {
    return super.check(Object.assign({}, options, { mediaType: 'videos' }));
  }

  static _checkItem(options) {
    return super._checkItem(Object.assign(options))
    .then(video => {
      return new Promise(resolve => {
        let youTubeRegex = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        let vimeoRegex = /^.*(vimeo\.com\/)((video\/))?([0-9]+)/;

        let youTubeTest = youTubeRegex.exec(video.id);
        let vimeoTest = vimeoRegex.exec(video.id);
        // is the video youTube or not?
        if (youTubeTest) {
          Videos._checkYouTubeVideo(video, youTubeTest, resolve);
        }
        else if (vimeoTest) {
          Videos._checkVimeoVideo(video, vimeoTest, resolve);
        }
        else {
          Videos._onVideoError(video, resolve);
        }
      });
    });
  }

  static _checkYouTubeVideo(video, youTubeTest, resolve) {
    video.details.source = 'youTube';

    if (youTubeTest.length !== 4) {
      Videos._onVideoError(video, resolve);
    }
    else {
      let youTubeId = youTubeTest[3];

      esriRequest({
        url: 'https://www.googleapis.com/youtube/v3/videos',
        content: {
          part: 'snippet',
          id: youTubeId,
          key: 'AIzaSyCHc4DP7IJU2neC0lbuKh5Fg5g3RVeRoiE'
        },
        timeout: 4000
      })
      .then(results => {
        if (!(results.items && results.items.length > 0)) {
          Videos._onVideoError(video, resolve);
        }
        else {
          resolve(video);
        }
      }, () => {
        Videos._onVideoError(video, resolve);
      });
    }
  }

  static _checkVimeoVideo(video, vimeoTest, resolve) {
    video.details.source = 'vimeo';

    if (vimeoTest.length !== 5) {
      Videos._onVideoError(video, resolve);
    }
    else {
      let vimeoId = vimeoTest[4];

      if (EsriConfig && EsriConfig.defaults.io.corsEnabledServers.indexOf('vimeo.com') < 0) {
        EsriConfig.defaults.io.corsEnabledServers.push('vimeo.com');
      }

      esriRequest({
        url: 'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + vimeoId,
      })
      .then((res) => {
        if (res && res.type === 'video') {
          resolve(video);
        }
        else {
          Videos._onVideoError(video, resolve);
        }
      }, () => {
        Videos._onVideoError(video, resolve);
      });
    }
  }

  static _onVideoError(video, resolve) {
    video.errors.push(IssueTypes.videos.inaccessible);
    resolve(video);
  }
}
