import esriRequest from 'esri/request';

import IssueTypes from './../IssueTypes';
import Media from './Media';

export default class Videos extends Media {
  static check(items) {
    return super.check(items, 'videos');
  }

  static _checkItem(video) {
    return new Promise((resolve, reject) => {
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

      esriRequest({
        url: 'https://api.vimeo.com/videos/' + vimeoId,
        headers: {
          'Authorization': 'bearer f22bff482301959a0e18a3257ee8966b',
          'Accept': 'application/vnd.vimeo.*+json;version=3.2'
        }
      })
      .then(() => {
        resolve(video);
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
