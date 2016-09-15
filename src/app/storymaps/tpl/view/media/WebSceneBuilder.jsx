import WebScene from './WebScene';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManageScene from './builder/TabManageScene';
import BuilderConfigTabWebScene from './builder/TabWebScene';

import lang from 'dojo/_base/lang';

export default class WebSceneBuilder extends WebScene {

  constructor(webscene) {
    super(webscene);

    this._configTabWebScene = null;
    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    this.initBuilderUI();
  }

  performAction(params) {
    if (params.performBuilderInit) {
      this._initConfigPanel();
    }

    return super.performAction(params);
  }

  serialize() {
    if (this._node) {
      this._webscene.caption = this._node.find('.block-caption').html();
    }

    return lang.clone({
      type: 'webscene',
      webscene: this._webscene
    });
  }

  //
  // Private
  //

  _initConfigPanel() {
    let tabs = [];

    this._configTabWebScene = new BuilderConfigTabWebScene({
      scene: this._cache[this.id]
    });

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        tabs.push(this._configTabWebScene);
      }
      else if (tab == 'manage') {
        tabs.push(new BuilderConfigTabManageScene({
          hideRemove: this._placement == 'background',
          mediaType: 'webscene',
          mediaId: this.id
        }));
      }
    }

    new BuilderConfig({
      containerMedia: this._node,
      tabs: tabs,
      media: this._webscene,
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

  _onWebSceneLoaded() {
    this._initConfigPanel();
    this._configTabWebScene.setScene(this._cache[this.id]);
  }

  _onConfigChange() {
    console.log('onConfigChange: ', this._webscene);
    this._applyConfig();
    super._onConfigChange();
  }
}
