/* eslint brace-style: 0 */
import React from 'react';
import Media from './Media';
// import Text from './Text';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.media;

class Audio extends Media {

  getMimeType(url) {
    var ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
    switch (ext) {
      case 'mp3':
        return 'audio/mpeg';
      case 'm4a':
        return 'audio/mp4';
      case 'wav':
      default:
        return `audio/${ext}`;
    }
  }

  componentDidMount() {
    // have to do this here because react doesn't recognize
    // controlsList as a valid attribute (MDN lists it as
    // experimental and only working in Chrome as of 2/2018)
    if (this.audioEl) {
      this.audioEl.setAttribute('controlsList', 'nodownload');
    }
  }

  render() {
    const audio = this.props.media;
    let audioUrl = this.addToken(audio.url);
    const mimeType = this.getMimeType(audioUrl);

    return (
      <div className={`media-wrapper media-${audio.options.size}`}>
      <figure>
          <audio
            type={mimeType}
            preload="metadata"
            controls
            ref={(node) => {this.audioEl = node;}}
            src={audioUrl}
          />
          <figcaption className="video-url">
            <a href={`//${audioUrl}`} target="_blank" rel="noopener noreferrer">
              {text.audioLabel} {audioUrl}
            </a>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Audio;
