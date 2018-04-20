/* eslint brace-style: 0 */
import React from 'react';
import Media from './Media';

class ImageBackground extends Media {

  static isDuplicate(imgA, imgB) {
    // if we're here, we already know the image urls are the same.
    // the question is just whether the options are the same.
    const plA = imgA.options ? imgA.options.placement : null;
    const plB = imgB.options ? imgB.options.placement : null;
    if (!plA && !plB) {
      return true;
    }
    if (plA && plB) {
      if (plA.type !== plB.type) {
        return false;
      }
      if (plA.type === 'fit') {
        return plA.fit.color === plB.fit.color;
      }
      return (plA.fill.x === plB.fill.x && plA.fill.y === plB.fill.y);
    }
    return false;
  }

  renderBlankBackground() {
    return (
      <div className="media-background">
        <img
          alt="blank"
          src="resources/tpl/builder/icons/immersive/background-placeholder.jpg"
        />
      </div>
    );
  }

  getStyleOptions(img) {
    return {
      objectPosition: this.getPosition(img.options) || '50% 50%',
      backgroundColor: this.getBackgroundColor(img.options) || ''
    };
  }

  render() {
    const img = this.props.media;
    if (!img || !img.url) {
      return this.renderBlankBackground();
    }
    const imgUrl = this.getSizeUrl() || img.url;
    const styleObj = this.getStyleOptions(img);

    return (
      <div className={`media-background ${this.props.themeClass || ''}`}>
        <img
          src={this.addToken(imgUrl)}
          alt=""
          className={this.getFitClass(img.options) || ''}
          style={styleObj}
        />
      </div>
    );

  }
}

export default ImageBackground;
