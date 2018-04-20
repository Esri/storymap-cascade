/* eslint brace-style: 0 */
import React, { Component } from 'react';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.media;

class Webpage extends Component {
  getShortenedUrl(url) {
    // i tried fetch, and it threw a cors error at me.
    const requestUrl = 'https://arcg.is/prod/shorten?callback=?';
    $.getJSON(requestUrl, {longUrl: url}, (response) => {
      if (response && response.data && response.data.url) {
        this.shortLink.innerHTML = response.data.url;
      }
    });
  }

  componentDidMount() {
    const url = this.props.media.url;
    if (url.match('maps.arcgis.com') || url.match('.esri.com')) {
      this.getShortenedUrl(url);
    }
  }

  getIframe(page) {
    if (page.height) {
      return (
        <iframe
          title="A webpage"
          src={page.url}
          height={page.height}
          className="set-height"
        />
      );
    } else {
      return (
        <iframe
          title="A webpage"
          src={page.url}
        />
      );
    }
  }

  render() {
    const page = this.props.media;
    return (
      <div className="webpage-wrapper">
        {this.getIframe(page)}
        <figcaption>{text.websiteLabel}&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={page.url}
            ref={(node) => {this.shortLink = node;}}>
              {page.url}
          </a>
        </figcaption>
      </div>
    );
  }
}

export default Webpage;
