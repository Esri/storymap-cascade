import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabManageMedia';
//import {} from 'lib-build/less!./TabSize';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabManageMedia extends Tab {
  constructor(params) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.manage;
    this.type = 'manage';
    this.icon = 'fa-wrench';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.manage
    });
  }

  postCreate(params) {
    super.postCreate(params);

    if (this._options) {
      if (this._options.hideRemove) {
        this._node.find('.config-item[data-action="remove"]').parents('.builder-config-section').hide();
      }
    }

    //
    // Events
    //

    this._node.find('.config-item[data-action="remove"]').on('click', () => {
      this._onAction('remove');
    });

    this._node.find('.config-item[data-action="upload-image"]').on('click', () => {
      // TODO: Send action
      console.log('action');
    });

    this._node.find('.config-item[data-action="swap"]').on('click', () => {
      this._onAction('swap');
    });
  }

  destroy() {
    super.destroy();

    this._node.find('.config-item[data-action="remove"]').off('click');
    this._node.find('.config-item[data-action="upload-image"]').off('click');
    this._node.find('.config-item[data-action="swap"]').off('click');
  }
}
