import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabManage';
import {} from 'lib-build/less!./Common';
import {} from 'lib-build/less!./TabManage';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import BuilderHelper from 'storymaps/tpl/builder/BuilderHelper';

export default class TabManage extends Tab {
  constructor(params = {}) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.manage;
    this.type = 'manage';
    this.icon = 'fa-wrench';
    this.mapName = params.mapName;

    this._mediaType = params.mediaType;
    this._mediaId = params.mediaId;
    this._showErrors = params.showErrors;
    this._mapEditorEnabled = params.mapEditorEnabled;
  }

  setMapName(mapName) {
    this.mapName = mapName;
    if (this._node) {
      this.updateMapName();
    }
  }

  updateMapName() {
    this._node.find('.webmap-name').text(this.mapName);
  }

  render() {
    return viewTpl({
      mapName: this.mapName,
      strings: i18n.builder.mediaConfig.manage,
      showErrors: this._showErrors,
      mapEditorEnabled: this._mapEditorEnabled
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

    this._node.find('.config-item[data-action="edit"]').on('click', () => {
      if (! this._mediaType || ! this._mediaId) {
        return;
      }

      if (this._mediaType == 'webmap') {
        if (this._mapEditorEnabled) {
          this._onAction('arcgis-edit');
        }
        else {
          this._onAction('arcgis-edit-external');
        }
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
