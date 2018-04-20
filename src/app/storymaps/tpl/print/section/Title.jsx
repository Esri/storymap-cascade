/* eslint brace-style: 0 */
import React, { Component } from 'react';
import ImageBackground from '../media/ImageBackground';
import SectionNumber from './SectionNumber';
import {} from 'lib-build/less!../styles/Title';

class Title extends Component {

  getTextClasses(style, text) {
    if (!text) {
      return 'title';
    }
    const classArr = [
      'title',
      `bg-${(style.background || 'none')}`,
      `text-${style.text}`,
      style.shadow ? 'text-shadow' : ''
    ];
    return classArr.join(' ');
  }

  render() {
    const titleJson = this.props.section;
    const bg = titleJson.background;
    const foreground = titleJson.foreground;
    const style = foreground.options.titleStyle;
    const text = foreground.title;
    return (
      <div className="title-section">
        <SectionNumber num={this.props.index} />
        <ImageBackground
          media={bg.image}
          themeClass={this.props.appThemeClass || null}
        />
        <div className="title-text">
          <h1
            className={this.getTextClasses(style, text)}>{text}</h1>
        </div>
      </div>
    );
  }
}

export default Title;
