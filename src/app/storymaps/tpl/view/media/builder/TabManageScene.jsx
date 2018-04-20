import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabManageScene';

import BuilderHelper from 'storymaps/tpl/builder/BuilderHelper';
import {} from 'lib-build/less!./Common';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabManageScene extends Tab {
  constructor(params = {}) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.manage;
    this.type = 'manage';
    this.icon = 'fa-wrench';
    this.sceneName = params.sceneName;

    this._mediaType = params.mediaType;
    this._mediaId = params.mediaId;
  }

  setSceneName(sceneName) {
    this.sceneName = sceneName;
    if (this._node) {
      this.updateSceneName();
    }
  }

  updateSceneName() {
    this._node.find('.webscene-name').text(this.sceneName);
  }

  render() {
    return viewTpl({
      sceneName: this.sceneName,
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

      window.open(
        BuilderHelper.getSceneViewerLink(this._mediaId),
        '_blank'
      );
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
