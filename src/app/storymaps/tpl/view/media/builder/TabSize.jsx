import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabSize';
import {} from 'lib-build/less!./Common';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabSize extends Tab {
  constructor() {
    super();

    this.title = i18n.builder.mediaConfig.tabs.size;
    this.type = 'size';
    this.icon = 'fa-arrows-alt';
    this._selectedSize = '';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.size
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this._selectedSize = this._media.options.size || 'large';
    let sizeItems = this._node.find('.config-item[data-type="size"]');

    this._node.find(`.config-item[data-value="${this._selectedSize}"]`).addClass(this.selectedClass);
    sizeItems.on('click', e => {
      let target = $(e.currentTarget);

      const preConfigOffset = this._getDistanceFromViewportBottom();

      this._selectedSize = target.data('value');
      this.setConfig('size', this._selectedSize);
      sizeItems.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);

      this._scrollToSamePosition(preConfigOffset);
    });
  }

  _getDistanceFromViewportBottom() {
    const preBBox = this._rootNode[0].getBoundingClientRect();
    const preScrollOffset = app.display.windowHeight - preBBox.bottom;

    return preScrollOffset;
  }

  _scrollToSamePosition(preConfigOffset) {
    /*
    with media going from large -> smaller size, tall images especially, story jumps around at that point...
    need to do this so sections are docked and working ok.
    probably better to handle this in the media instead of the tabs, but then we have to do for each media
    type and who knows what else it'll affect...
    get how far the media config panel is from the bottom of the screen (so we can put it back in this spot)
    */
    const postConfigOffset = this._getDistanceFromViewportBottom();

    // get how far down the story you are after the size change
    const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // scroll you down to that spot, offset by how far from the bottom of the screen the media config panel is
    // (so it looks just like it did before you changed the config)
    const scrollTop = currentScroll - (postConfigOffset - preConfigOffset);

    $(window).scrollTop(scrollTop);

    // to make sure the app updates correclty, we'll force an update (will force an onScroll event on the story and sections)
    app.ui.update({
      forceUpdate: true
    });
  }

  destroy() {
    super.destroy();

    let sizeItems = this._node.find('.config-item[data-type="size"]');

    sizeItems.off('click');
  }
}
