/* eslint brace-style: 0 */
import { Component } from 'react';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';
import MediaView from 'storymaps-react/tpl/view/media/Media';
import {} from 'lib-build/less!../styles/Media';

class Media extends Component {

  addToken(url) {
    return MediaView.addToken(url);
  }

  getPosition(opts) {
    if (!opts) {
      return null;
    }
    const pl = opts.placement;
    if (!pl || !pl.fill || pl.type !== 'fill') {
      return null;
    }
    const fill = pl.fill;
    return (fill.x * 100).toFixed(2) + '% ' + (fill.y * 100).toFixed(2) + '%';
  }

  getSizeUrl(optionalWidth) {
    if (!this.props.media) {
      return null;
    }
    if (!this.props.media.sizes) {
      return null;
    }
    let sizeTarget = CommonHelper.findASize(this.props.media.sizes, optionalWidth);
    sizeTarget = CommonHelper.fixSizeUrls([sizeTarget]);
    return sizeTarget[0].url;
  }

  getFitClass(opts) {
    if (!opts) {
      return null;
    }
    if (opts.size === 'large' && opts.fitHeight) {
      return 'crop';
    }
    const pl = opts.placement;
    if (!pl || !pl.fit || pl.type !== 'fit') {
      return null;
    }
    return 'contain';
  }

  getBackgroundColor(opts) {
    if (!opts) {
      return '';
    }
    /* eslint no-cond-assign: 0 */
    let w = opts.placement;
    const bgColor = (w && (w = w.fit) && (w = w.color));
    return bgColor;
  }
}

export default Media;
