import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabManageScene';

import BuilderHelper from 'storymaps/common/builder/BuilderHelper';

import i18n from 'lib-build/i18n!./../../../../../resources/tpl/builder/nls/app';

export default class TabManageScene extends Tab {
  constructor(params = {}) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.manage;
    this.type = 'manage';
    this.icon = 'fa-wrench';

    this._mediaType = params.mediaType;
    this._mediaId = params.mediaId;
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

    this._node.find('.config-item[data-action="edit"]').on('click', () => {
      if (! this._mediaType || ! this._mediaId) {
        return;
      }

      if (this._mediaType == 'webmap') {
        window.open(
          BuilderHelper.getMapViewerLink(this._mediaId),
          '_blank'
        );
      }
      else if (this._mediaType == 'webscene') {
        window.open(
          BuilderHelper.getSceneViewerLink(this._mediaId),
          '_blank'
        );
      }
    });

    this._node.find('.config-item[data-action="swap"]').on('click', () => {
      this._onAction('swap');
    });
  }

  destroy() {
    super.destroy();

    this._node.find('.config-item[data-action="remove"]').off('click');
    this._node.find('.config-item[data-action="upload-image"]').off('click');
    this._node.find('.config-item[data-action="edit"]').off('click');
    this._node.find('.config-item[data-action="swap"]').off('click');
  }
}
