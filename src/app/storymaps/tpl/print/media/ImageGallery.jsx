/* global $ */
/* eslint brace-style: 0 */
import React from 'react';

import {} from 'lib/jquery/dist/jquery.min';
import {} from 'storymaps/tpl/utils/UniteGallery';

import Media from './Media';
import Text from './Text';

class ImageGallery extends Media {

  componentDidMount() {
    $(this.galleryContainer).unitegallery({
      gallery_theme: 'tiles',
      gallery_control_keyboard: false,
      tiles_type: 'justified',
      tile_enable_action: false,
      tile_enable_overlay: false,
      tiles_justified_row_height: 150,
      theme_preloading_height: 150,
      tiles_justified_space_between: 10
    });
  }

  renderImages() {
    return this.props.media.images.map((img, i) => {
      const tokenizedUrl = this.addToken(img.url);
      return (
        <img
          key={`${this.props.blockKey}-img${i}`}
          alt=""
          src={tokenizedUrl}
          data-index={i}
          data-image={tokenizedUrl}
          data-width={img.width}
          data-height={img.height}
        />
      );
    });
  }

  render() {
    return (
      <div className="media-wrapper gallery">
        <div
          id={`gallery-${this.props.blockKey}`}
          ref={(node) => {this.galleryContainer = node;}}
        >
          {this.renderImages()}
        </div>
        <Text text={this.props.media.caption} tag="figcaption" />
      </div>
    );

  }
}

export default ImageGallery;
