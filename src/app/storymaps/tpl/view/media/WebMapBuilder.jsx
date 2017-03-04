import WebMap from './WebMap';

import {} from 'lib-build/less!./WebMapBuilder';
import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManage from './builder/TabManage';
import BuilderConfigTabWebMap from './builder/TabWebMap';
import BuilderConfigTabIssues from './builder/TabIssues';

import MapEditor from './WebMapEditor';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const text = i18n.builder.mediaErrors;

export default class WebMapBuilder extends WebMap {

  constructor(webmap) {
    super(webmap);

    this._configTabWebMap = null;
    this._configTabIssues = null;
    this._configTabManage = null;
    this._isMultiViewSection = false;
    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    // listen to when THIS SPECIFIC map gets scanned
    topic.subscribe('scan/maps/' + this._webmap.id, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();

    this._node.find('.media-media').attr('data-builder-invite', i18n.builder.mediaConfig.appearance.mapExtentPrompt);
  }

  checkErrors(scanResult) {
    // update the map UI based on the scan results

    this.errorIds = this.mapErrors(scanResult);
    if (!this.errorIds) {
      this.removeError(scanResult);
    }
    else {
      const unfixableOptions = this.isUnfixableError(this.errorIds);
      if (unfixableOptions) {
        this.setError(unfixableOptions);
      }
      else {
        this.setError({
          scanResult: scanResult,
          errors: scanResult.errors
        });
      }
    }
    if (this.builderConfig && this._node.hasClass('builder-config-open') && this._configTabIssues && this.errorIds) {
      this._configTabIssues.errorIds = this.errorIds;
      this.builderConfig.renderTab(this._configTabIssues);
    }
    else {
      this._destroyConfigPanel();
      this._initConfigPanel();
    }

  }

  isUnfixableError(errorIds = []) {
    let msg = '';
    if (errorIds.indexOf(issues.maps.deleted) >= 0) {
      msg = text.placeholders.deleted.replace('${media-type}', text.mediaTypes.webmap);
    }
    else if (errorIds.indexOf(issues.maps.inaccessible) >= 0) {
      msg = text.placeholders.inaccessible.replace('${media-type}', text.mediaTypes.webmap);
    }
    else if (errorIds.indexOf(issues.maps.unauthorized) >= 0) {
      msg = text.placeholders.unauthorized.replace('${media-type}', text.mediaTypes.webmap);
    }
    else {
      return false;
    }
    return {
      unfixable: true,
      showLoadingError: true,
      msg
    };
  }

  performAction(params = {}) {
    if (params.performBuilderInit) {
      this._initConfigPanel();
    }

    return super.performAction(params);
  }

  serialize() {
    if (this._node) {
      this._webmap.caption = this._node.find('.block-caption').html();
    }

    return lang.clone({
      type: 'webmap',
      webmap: this._webmap
    });
  }

  //
  // Private
  //

  _destroyConfigPanel() {
    if (this.builderConfig && this.builderConfig._tabs) {
      var activeTab = this.builderConfig._tabs.find(function(tab) {
        return tab._isActive;
      });
      if (activeTab) {
        this.builderConfig.destroyTab(activeTab);
      }
    }
  }

  _initConfigPanel() {
    let tabs = [];

    this._configTabWebMap = new BuilderConfigTabWebMap({
      map: this._cache[this.id],
      layerListNode: this._node.find('.layer-list-container'),
      onOpen: () => {
        if (this.map) {
          this.performAction({
            forceSetExtent: true
          });
        }
      }
    });

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        tabs.push(this._configTabWebMap);
      }
      else if (tab == 'manage') {
        let mapName = this.getMapName(this._cache[this.id]);
        this._configTabManage = new BuilderConfigTabManage({
          hideRemove: this._placement == 'background',
          mediaType: 'webmap',
          mediaId: this.id,
          mapName
        });
        tabs.push(this._configTabManage);
      }
    }

    if (this.scanResults && this.scanResults.hasErrors && !this.scanResults.unfixable) {
      this._configTabIssues = new BuilderConfigTabIssues({
        map: this._cache[this.id],
        scanResults: this.scanResults,
        errorIds: this.errorIds
      });
      tabs.push(this._configTabIssues);
    }

    this.builderConfig = new BuilderConfig({
      containerMedia: this._node,
      tabs: tabs,
      media: this._webmap,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        // TODO: this could be in BuilderConfig
        this._node.toggleClass('builder-config-open');
        this._onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });
  }

  _onWebMapLoaded() {
    if (this._configTabWebMap) {
      this._configTabWebMap.setMap(this._cache[this.id]);
    }
    if (this._configTabIssues) {
      this._configTabIssues.setMap(this._cache[this.id]);
    }
    if (this._configTabManage) {
      let mapName = this.getMapName(this._cache[this.id]);
      this._configTabManage.setMapName(mapName);
    }
  }

  getMapName(mapObj) {
    if (!mapObj) {
      return '';
    }
    const mapItem = mapObj.itemInfo && mapObj.itemInfo.item;
    if (!mapItem) {
      return '';
    }
    return mapItem.title || mapItem.name;
  }

  _openEditor() {
    // TODO: add a container to the media to load the editor
    //   or perhaps flip the media to a new media that will only handle the editing?
    var mapEditor = new MapEditor({
      container: $('#mapEditPopup')
    });

    mapEditor.present({
      id: this.id
      // TODO
      // newMap: true,
      // title: app.builder.getAddEditEntryTitle()
    });
  }

  _onConfigChange() {
    this._applyConfig();

    if (! this._webmap.layers || this._webmap.layers.length == 0) {
      this._configTabWebMap.initLayerList();
    }

    super._onConfigChange();
  }
}
