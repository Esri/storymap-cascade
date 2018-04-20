/* eslint brace-style: 0 */
import React, { Component } from 'react';

import ImageBackground from './ImageBackground';
import ImageBlock from './ImageBlock';
import Video from './Video';
import Audio from './Audio';
import Webpage from './Webpage';
import Webmap from './Webmap';
import Webscene from './Webscene';

class MediaFactory extends Component {

  renderDevError(mediaObj, mediaType) {
    return (
      <div className="missing-type-error">
        MISSING: Media type {mediaType}
      </div>
    );
  }

  render() {
    let mediaObj = this.props.media;
    if (!mediaObj) {
      return null;
    }
    if (this.props.useAltMedia && mediaObj.alternate && mediaObj.alternate.type) {
      mediaObj = mediaObj.alternate[mediaObj.alternate.type] || mediaObj.alternate;
    }
    const mediaType = mediaObj.type;
    const media = mediaObj[mediaType] || mediaObj;
    const size = media.options.size;

    if (mediaType === 'image') {
      if (size === 'background') {
        return (
          <ImageBackground
            media={media}
            themeClass={this.props.themeClass || null}
          />
        );
      } else {
        return (
          <ImageBlock
            media={media}
            themeClass={this.props.themeClass || null}
          />
        );
      }
    }
    if (mediaType === 'video') {
      return (
        <Video
          media={media}
          themeClass={this.props.themeClass || null}
        />
      );
    }
    if (mediaType === 'audio') {
      return (<Audio media={media} />);
    }
    if (mediaType === 'webpage') {
      return (<Webpage media={media} />);
    }
    if (mediaType === 'webmap') {
      return (<Webmap media={media} />);
    }
    if (mediaType === 'webscene') {
      return (<Webscene media={media} />);
    }
    console.warn('media type not found?', mediaObj, media);
    return this.renderDevError(mediaObj, mediaType);
  }
}

export default MediaFactory;
