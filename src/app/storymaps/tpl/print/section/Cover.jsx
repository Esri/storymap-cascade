/* eslint brace-style: 0 */
import React, { Component } from 'react';
import MediaFactory from '../media/MediaFactory';
import SectionNumber from './SectionNumber';
import {} from 'lib-build/less!../styles/Cover';
import MediaView from 'storymaps-react/tpl/view/media/Media';

class Cover extends Component {

  renderHeader() {
    const header = this.props.header;
    let headerLogo = null,
        headerLink = null;

    if (header.logo  && header.logo.enabled) {
      let imgUrl = MediaView.addToken(header.logo.url);
      const logoClasses = `logo-img${imgUrl.match('esri-logo') ? '' : ' not-esri'}`;
      headerLogo = (
        <a className="logoLink" href={header.logo.link} target="_blank" alt="Link to organization">
          <img className={logoClasses} src={imgUrl} alt="Logo" />
        </a>
      );
    }

    if (header.link) {
      headerLink = (
        <a
          className="tagline"
          href={header.link.url}
          target="_blank"
          alt="Secondary organizational link"
        >
          {header.link.title}
        </a>
      );
    }

    return (
      <div className="cover-header">
        {headerLogo}
        {headerLink}
      </div>
    );
  }

  render() {
    const cover = this.props.section;
    const foreground = cover.foreground;
    const background = cover.background;
    const style = foreground.options.titleStyle;

    let media = background[background.type] || background;
    media.type = media.type || background.type;
    if (background.alternate) {
      media.alternate = background.alternate[background.alternate.type] || background.alternate;
      media.alternate.options = media.alternate.options || {};
      Object.assign(media.alternate.options, {size: 'background'});
    }
    media.options = media.options || {};
    Object.assign(media.options, {size: 'background'});

    const textClasses = `text-${style.text} ${(style.shadow ? 'text-shadow' : '')}`;

    return (
      <div className="cover">
        <SectionNumber num={this.props.index} />
        <MediaFactory
          media={media}
          useAltMedia={this.props.useAltMedia}
          themeClass={this.props.appThemeClass}
        />
        {this.renderHeader()}
        <div className={`cover-text bg-${(style.background || 'none')}`}>
          <h1 className={`title ${textClasses}`}>{foreground.title}</h1>
          {foreground.subtitle ? (
            <h2 className={`subtitle ${textClasses}`}>{foreground.subtitle}</h2>
          ) : (
            null
          )}
        </div>
      </div>
    );
  }
}

export default Cover;
