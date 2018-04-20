/* eslint brace-style: 0 */
import React from 'react';
import Media from './Media';
import Text from './Text';

class ImageBlock extends Media {

  getHeightClass(img) {
    if (!img.height || !img.width) {
      return '';
    }
    let classArr = [];
    const heightRatio = img.height / img.width;
    if (heightRatio > 1.25) {
      classArr.push('img-portrait');
    }
    if (heightRatio > 1.4) {
      classArr.push('img-tall');
    }
    return classArr.join(' ');
  }

  getWidthClass(img) {
    if (!img.options || !img.options.size) {
      return '';
    }
    return `media-${img.options.size}`;
  }

  getTargetWidth(img) {
    if (!img.options || !img.options.size || img.options.size === 'large') {
      return null;
    }
    const bodyWidth = $('body').width();
    if (img.options.size === 'small') {
      return Math.round(bodyWidth * 0.6);
    }
    if (img.options.size === 'medium') {
      return Math.round(bodyWidth * 0.8);
    }
    return null;
  }

  render() {
    const img = this.props.media;
    const targetWidth = this.getTargetWidth(img);
    const imgUrl = this.getSizeUrl(targetWidth) || img.url;
    const tokenizedUrl = this.addToken(imgUrl);

    const sizeClass = `${this.getWidthClass(img)} ${this.getHeightClass(img)}`;
    const fitClass = this.getFitClass(img.options) || '';
    const themeClass = this.props.themeClass || '';
    return (
      <div className={`media-wrapper ${sizeClass}`}>
        <figure className={themeClass}>
          <img src={tokenizedUrl} alt="" className={fitClass} />
          {img.caption ? <Text text={img.caption} tag="figcaption" /> : null }
        </figure>
      </div>
    );

  }
}

export default ImageBlock;
