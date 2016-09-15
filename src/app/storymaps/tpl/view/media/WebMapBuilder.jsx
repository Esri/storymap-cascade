import WebMap from './WebMap';

import {} from 'lib-build/less!./WebMapBuilder';
import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManage from './builder/TabManage';
import BuilderConfigTabWebMap from './builder/TabWebMap';

import lang from 'dojo/_base/lang';

export default class WebMapBuilder extends WebMap {

  constructor(webmap) {
    super(webmap);

    this._configTabWebMap = null;
    this._isMultiViewSection = false;
    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    this.initBuilderUI();

    this._node.find('.media-media').attr('data-builder-invite', 'Update the map to tell your story, click the checkmark to save the changes');
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

  _initConfigPanel() {
    let tabs = [];

    this._configTabWebMap = new BuilderConfigTabWebMap({
      map: this._cache[this.id],
      layerListNode: this._node.find('.layer-list-container'),
      onOpen: () => {
        this.performAction({
          forceSetExtent: true
        });
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
        tabs.push(new BuilderConfigTabManage({
          hideRemove: this._placement == 'background',
          mediaType: 'webmap',
          mediaId: this.id
        }));
      }
    }

    new BuilderConfig({
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
  }

  _onConfigChange() {
    this._applyConfig();

    if (! this._webmap.layers || this._webmap.layers.length == 0) {
      this._configTabWebMap.initLayerList();
    }

    super._onConfigChange();
  }
}
