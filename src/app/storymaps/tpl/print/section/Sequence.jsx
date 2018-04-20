/* eslint brace-style: 0 */
import React, { Component } from 'react';

import MediaFactory from '../media/MediaFactory';
import ImageGallery from '../media/ImageGallery';
import Text from '../media/Text';

import SectionNumber from './SectionNumber';

import {} from 'lib-build/less!../styles/Sequence';

class Sequence extends Component {

  renderBlock(block, i) {
    if (block.alternate && block.alternate.type && this.props.useAltMedia) {
      return this.renderBlock(block.alternate, i);
    }
    const key = this.props.sectionKey + '-block-' + i;
    if (block.type === 'text') {
      return (
        <Text
          key={key}
          text={block.text.value}
        />
      );
    }
    if (block.type === 'image-gallery') {
      return (
        <ImageGallery
          key={key}
          blockKey={key} // key not accessible within the component so pass as prop also
          media={block['image-gallery']}
        />
      );
    }
    return (<MediaFactory
      media={block}
      key={key}
      themeClass={this.props.appThemeClass}
    />);
  }

  render() {
    const blocks = this.props.section.foreground.blocks;
    const elements = blocks.map(this.renderBlock.bind(this));

    return (
      <div className="sequence">
        <SectionNumber num={this.props.index} />
        {elements}
      </div>
    );
  }
}

export default Sequence;
