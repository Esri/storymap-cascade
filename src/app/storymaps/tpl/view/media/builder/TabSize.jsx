import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabSize';
import {} from 'lib-build/less!./Common';

import i18n from 'lib-build/i18n!./../../../../../resources/tpl/builder/nls/app';

export default class TabSize extends Tab {
  constructor() {
    super();

    this.title = i18n.builder.mediaConfig.tabs.size;
    this.type = 'size';
    this.icon = 'fa-arrows-alt';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.size
    });
  }

  postCreate(params) {
    super.postCreate(params);

    var size = this._media.options.size || 'large';
    let sizeItems = this._node.find('.config-item[data-type="size"]');

    this._node.find(`.config-item[data-value="${size}"]`).addClass(this.selectedClass);
    sizeItems.on('click', e => {
      let target = $(e.currentTarget);

      this.setConfig('size', target.data('value'));
      sizeItems.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
    });
  }

  destroy() {
    super.destroy();

    let sizeItems = this._node.find('.config-item[data-type="size"]');

    sizeItems.off('click');
  }
}
