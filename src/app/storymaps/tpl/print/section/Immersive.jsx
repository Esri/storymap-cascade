/* eslint brace-style: 0 */
import React, { Component } from 'react';

import MediaFactory from '../media/MediaFactory';
import ImageBlock from '../media/ImageBlock';
import ImageBackground from '../media/ImageBackground';
import Video from '../media/Video';
import Webmap from '../media/Webmap';
import Webscene from '../media/Webscene';
import Text from '../media/Text';

import SectionNumber from './SectionNumber';

import {} from 'lib-build/less!../styles/Immersive';

class Immersive extends Component {

  renderTitle(views) {
    if (views && views.length && views[0].foreground && views[0].foreground.title) {
      return (
        <div className="title-immersive">{views[0].foreground.title.value}</div>
      );
    }
    return null;
  }

  renderText(text, blockKey) {
    return (
      <Text key={blockKey} text={text} tag="div" />
    );
  }

  renderForegroundImage(image, colorClass, blockKey) {
    return (
      <ImageBlock
        key={blockKey}
        themeClass={colorClass}
        media={image}
      />
    );
  }

  renderForegroundVideo(video, colorClass, blockKey) {
    return (
      <Video
        key={blockKey}
        themeClass={colorClass}
        media={video}
      />
    );
  }

  areBackgroundsDuplicate(backgroundA, backgroundB) {
    if (!backgroundA || !backgroundB ||
        !backgroundA.type || !backgroundB.type ||
        backgroundA.type !== backgroundB.type) {
      return false;
    }

    const idA = backgroundA[backgroundA.type].id || backgroundA[backgroundA.type].url;
    const idB = backgroundB[backgroundB.type].id || backgroundB[backgroundB.type].url;

    if (idA !== idB) {
      return false;
    }

    // at this point, we know the media type is the same and the id is the same. now we have
    // specific checks for webmaps and webscene.
    if (backgroundA.type === 'image') {
      return ImageBackground.isDuplicate(backgroundA.image, backgroundB.image);
    }
    if (backgroundA.type === 'webmap') {
      return Webmap.isDuplicate(backgroundA.webmap, backgroundB.webmap);
    }
    if (backgroundA.type === 'webscene') {
      return Webscene.isDuplicate(backgroundA.webscene, backgroundB.webscene);
    }
    return true;
  }

  renderBackground(view, i, views) {
    const prevBg = views[i - 1] ? views[i - 1].background : null;
    let viewBg = view.background;

    if (this.areBackgroundsDuplicate(prevBg, viewBg)) {
      return null;
    }

    const mediaType = viewBg.type;
    const media = viewBg[mediaType] || viewBg;
    if (media === 'empty' || !media) {
      return (
        <ImageBackground
          media={null}
          themeClass={null}
        />
      );
    }
    media.options = media.options || {};
    Object.assign(media.options, {size: 'background'});

    return (
      <MediaFactory
        media={media}
        useAltMedia={this.props.useAltMedia}
        themeClass={this.props.appThemeClass}
      />
    );

  }

  renderPanelBlock(block, j, viewKey, colorClass) {
    const blockKey = viewKey + '-block-' + j;
    const blockType = block.type;

    if (blockType === 'text') {
      return (
        <Text key={blockKey} text={block.text.value} tag="div" />
      );
    }
    const media = block[blockType];

    return (
      <MediaFactory
        media={media}
        themeClass={colorClass}
        key={blockKey}
        useAltMedia={this.props.useAltMedia}
      />
    );

  }

  renderViews(views) {

    return views.map((view, i) => {
      const viewKey = this.props.sectionKey + '-view-' + i;
      const viewBg = this.renderBackground(view, i, views);

      const colorClass = view.foreground.panels[0].settings.theme;

      const viewFg = view.foreground.panels[0].blocks.map((block, j) => {
        return this.renderPanelBlock(block, j, viewKey, colorClass);
      });

      return (
        <div className="immersive-view" key={viewKey}>
          {viewBg}
          <div className="immersive-panel">
            {viewFg}
          </div>
        </div>
      );
    });
  }

  render() {
    const views = this.props.section.views;

    return (
      <div className="immersive">
        <SectionNumber num={this.props.index} />
        {this.renderTitle(views)}
        {this.renderViews(views)}
      </div>
    );
  }
}

export default Immersive;
