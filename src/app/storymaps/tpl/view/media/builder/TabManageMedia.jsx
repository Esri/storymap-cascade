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
    this.altText = params.altText;
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.manage,
      altText: this.altText
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this._node.find('[data-toggle="tooltip"]').tooltip();

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

    this._node.find('.alt-text-text').on('input', () => {
      this.setMedia('altText', this._node.find('.alt-text-text').val());
      this.altText = this._node.find('.alt-text-text').val();
    });
  }

  destroy() {
    super.destroy();

    this._node.find('.config-item[data-action="remove"]').off('click');
    this._node.find('.config-item[data-action="upload-image"]').off('click');
    this._node.find('.config-item[data-action="swap"]').off('click');
    this._node.find('[data-toggle="tooltip"]').tooltip('destroy');
    this._node.find('.alt-text-text').off('input');
  }
}
