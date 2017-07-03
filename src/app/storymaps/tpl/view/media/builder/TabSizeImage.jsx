import TabSize from './TabSize';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import viewTpl from 'lib-build/hbars!./TabSizeImage';
import {} from 'lib-build/less!./Common';

export default class TabSizeImage extends TabSize {
  constructor(params) {
    super(params);
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.size
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this.checkbox = this._node.find('input.crop-tall-checkbox');
    this._node.find('[data-toggle="tooltip"]').tooltip();
    this.crop = params.media.options.fitHeight;
    this._applyInitialUI();
    this._addEvents();
  }

  _applyInitialUI() {
    this.checkbox.prop('checked', !this.crop);
    this._toggleCropInput();
  }

  _addEvents() {
    this.checkbox.on('click', this._onCheckboxClicked.bind(this));
    this._node.find('.config-item[data-type="size"]').on('click', this._toggleCropInput.bind(this));
  }

  _onCheckboxClicked() {
    const preConfigOffset = this._getDistanceFromViewportBottom();

    this.crop = !this.crop;
    this.setConfig('fitHeight', this.crop);

    this._scrollToSamePosition(preConfigOffset);
  }

  _toggleCropInput() {
    // enable/disable the crop checkbox if it is large
    this._node.find('.section-content.crop-tall').toggleClass('disabled', this._selectedSize !== 'large');
  }
}
