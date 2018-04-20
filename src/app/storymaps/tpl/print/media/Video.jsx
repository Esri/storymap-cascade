/* eslint brace-style: 0 */
import React, { Component } from 'react';

import ImageBlock from './ImageBlock';
import ImageBackground from './ImageBackground';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.media;

class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoScreenshot: null,
      altMediaUrl: this.props.altMedia ? this.props.altMedia.url : null,
      videoUrl: null,
      shortUrl: null,
      youtubeKey: 'AIzaSyDevTFP16nz6sA-akiOVi6wWXiplJnQ4qw'
    };
  }

  componentDidMount() {
    const video = this.props.media;
    if (video.source === 'youtube') {
      this.getYoutubeInfo(video.id);
    } else if (video.source === 'vimeo') {
      this.getVimeoVideoInfo(video.id);
    }

  }

  getYoutubeInfo(videoId) {
    const fallbackInfo = {
      videoScreenshot: this.state.videoScreenshot || '//img.youtube.com/vi/' + videoId + '/0.jpg',
      videoUrl: `//www.youtube.com/embed/${videoId}?wmode=opaque&rel=0&showinfo=0`,
      shortUrl: `www.youtube.com/watch?v=${videoId}`
    };
    // if we already have alt media, why request a thumbnail from youtube?
    if (this.state.videoScreenshot) {
      this.onRequestReturn(fallbackInfo);
      return;
    }

    const requestUrl = 'https://www.googleapis.com/youtube/v3/videos'
          + '?part=snippet'
          + '&id=' + videoId
          + '&key=' + this.state.youtubeKey;

    this.sendRequest(requestUrl).then(response => {
      const youtubeData = JSON.parse(response);
      if (youtubeData.error || !youtubeData.items) {
        this.onRequestReturn(fallbackInfo);
        return;
      }

      const youtubeItem = youtubeData.items[0];
      if (!youtubeItem.snippet || !youtubeItem.snippet.thumbnails) {
        this.onRequestReturn(fallbackInfo);
        return;
      }
      const thumbs = youtubeItem.snippet.thumbnails;
      const screenshotTarget = thumbs.maxres || thumbs.standard || thumbs.high || thumbs.medium;
      const videoScreenshot = screenshotTarget.url;
      this.onRequestReturn(Object.assign(fallbackInfo, {videoScreenshot}));
    });

  }

  getVimeoVideoInfo(videoId) {
    const fallbackInfo = {
      videoScreenshot: this.state.videoScreenshot || null,
      videoUrl: `//player.vimeo.com/video/${videoId}`,
      shortUrl: `vimeo.com/${videoId}`
    };
    const extraParams = ['title=0', 'byline=0'];
    // if we already have alt media, why request a thumbnail from vimeo?
    if (this.state.videoScreenshot) {
      fallbackInfo.videoUrl += `?${extraParams.join('&')}`;
      this.onRequestReturn(fallbackInfo);
      return;
    }

    const requestUrl = 'https://vimeo.com/api/v2/video/' + videoId + '.json';
    this.sendRequest(requestUrl).then(response => {
      let vimeoData;
      try {
        vimeoData = JSON.parse(response);
        vimeoData = vimeoData[0];
        let vimeoUrl = vimeoData.url;
        if (vimeoUrl.match(/\?/)) {
          vimeoUrl += `&${extraParams.join('&')}`;
        } else {
          vimeoUrl += `?${extraParams.join('&')}`;
        }
        this.onRequestReturn(Object.assign(fallbackInfo, {
          videoScreenshot: vimeoData.thumbnail_large,
          videoUrl: vimeoUrl
        }));
      }
      catch(err) {
        const secondRequestUrl = '//vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + videoId;
        this.sendRequest(secondRequestUrl).then(response2 => {
          try {
            vimeoData = JSON.parse(response2);
            fallbackInfo.shortUrl = fallbackInfo.videoUrl.substr(2);
            fallbackInfo.videoUrl += `?${extraParams.join('&')}`;
            this.onRequestReturn(Object.assign(fallbackInfo, {
              videoScreenshot: vimeoData.thumbnail_url
            }));
          }
          catch(err2) {
            fallbackInfo.videoUrl += `?${extraParams.join('&')}`;
            this.onRequestReturn(fallbackInfo);
          }
        });
      }
    });
  }

  sendRequest(requestUrl) {
    return new Promise((resolve/*, reject*/) => {
      let httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function(/*evt*/) {
        if (httpRequest.response) {
          resolve(httpRequest.response);
        }
      };
      httpRequest.open('GET', requestUrl, true);
      httpRequest.send();
    });
  }

  onRequestReturn(newState) {
    this.setState(newState);
  }

  isBackground() {
    const video = this.props.media;
    if (video && video.options && video.options.size === 'background') {
      return true;
    }
  }

  renderVideo() {
    const videoIframe = <iframe src={this.state.videoUrl} title={`Video in section ${this.state.index}`}/>;
    let classes;
    if (this.isBackground()) {
      classes = 'media-background';
    } else {
      classes = `media-wrapper media-${this.props.media.options.size}`;
    }
    return (
      <div className="video">
        <div className={classes}>
          {videoIframe}
          {this.renderVideoCaption()}
        </div>
      </div>
    );
  }

  renderImage() {
    const imgMedia = {
      url: this.state.altMediaUrl || this.state.videoScreenshot,
      options: this.props.media.options,
      caption: this.props.media.caption
    };
    if (this.isBackground()) {
      return (
        <div className="video">
          <ImageBackground media={imgMedia} />
          {this.renderVideoCaption()}
        </div>
      );
    }
    return (
      <div className="video">
        <ImageBlock media={imgMedia} />
        {this.renderVideoCaption()}
      </div>
    );

  }

  renderVideoCaption() {
    const shortUrl = this.state.shortUrl || this.state.videoUrl;
    return (
      <figcaption className="video-url">
        {text.videoLabel}&nbsp;
        <a href={`//${shortUrl}`} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
      </figcaption>
    );
  }

  render() {
    if (!this.state) {
      return null;
    }
    if (this.state.altMediaUrl || this.state.videoScreenshot) {
      return this.renderImage();
    }
    return this.renderVideo();
  }
}

export default Video;
