import WebScene from './WebScene';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManageScene from './builder/TabManageScene';
import BuilderConfigTabWebScene from './builder/TabWebScene';
import BuilderConfigTabAlternateMedia from './builder/TabAlternateMedia';
import BuilderConfigTabAlternateEmpty from './builder/TabAlternateEmpty';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';
import issues from '../../builder/Issues';

export default class WebSceneBuilder extends WebScene {

  constructor(webscene) {
    super(webscene);

    this._configTabWebScene = null;
    this._configTabManageScene = null;
    this._onToggleMediaConfig = null;
    this._sectionType = '';
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;
    this._sectionType = params.sectionType;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    // listen to when THIS SPECIFIC map gets scanned
    topic.subscribe('scan/scenes/' + this._instanceID, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();

  }

  load(params = {}) {
    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      alternateMedia.load();
    }

    return super.load(params);
  }

  isUnfixableError() {
    return false;
  }

  performAction(params) {
    if (params.performBuilderInit) {
      if (this._builderConfigPanel) {
        this._destroyConfigTabs();
        this._refreshConfigTabs();
      }
      else {
        this._initConfigPanel();
      }
    }

    return super.performAction(params);
  }

  serialize(includeInstanceID) {
    if (this._node) {
      this._webscene.caption = this._node.find('.block-caption').html();
    }

    return super.serialize('webscene', this._webscene, includeInstanceID);
  }

  //
  // Private
  //

  _initConfigTabs() {
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
        const manageTab = this._createManageTab();
        tabs.push(manageTab);
      }
      else if (tab == 'alternate') {
        const alternateTab = this._createAlternateTab(this._sectionType);
        tabs.push(alternateTab);
      }
    }

    return tabs;
  }

  _initConfigPanel() {
    super._initConfigPanel();

    this._builderConfigPanel = new BuilderConfig({
      containerMedia: this._node,
      tabs: this._initConfigTabs(),
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

  getSceneName(sceneObj) {
    const sceneItem = this.getSceneItem(sceneObj);
    if (!sceneItem) {
      return '';
    }
    return sceneItem.title || sceneItem.name;
  }

  getSceneItem(sceneObj) {
    return sceneObj && sceneObj.scene && sceneObj.scene.portalItem;
  }

  findAndSetSceneName(sceneObj) {
    const sceneItem = this.getSceneItem(sceneObj);
    if (!sceneItem) {
      return;
    }
    let sceneTitle;
    if (sceneItem.loaded) {
      sceneTitle = sceneItem.title || sceneItem.name;
      this._configTabManageScene && this._configTabManageScene.setSceneName(sceneTitle);
      return sceneTitle;
    }
    else {
      sceneItem.then(() => {
        sceneTitle = sceneItem.title || sceneItem.name;
        this._configTabManageScene && this._configTabManageScene.setSceneName(sceneTitle);
      });
    }

  }

  _onWebSceneLoaded() {
    this._initConfigPanel();
    this._configTabWebScene.setScene(this._cache[this.id]);
    if (this._configTabManageScene) {
      this.findAndSetSceneName(this._cache[this.id]);
    }
  }

  _onConfigChange() {
    this._applyConfig();
    super._onConfigChange();
  }

  _createAlternateTab(sectionType) {
    const alternateMedia = this.getAlternate();
    let alternateTab = null;
    const errors = lang.getObject('scanResults.errors', false, this);
    const warnings = lang.getObject('scanResults.warnings', false, this);
    const alternateError = errors ? errors.find(error => error.isAlternate) : null;
    const showWarnings = warnings && warnings.some(error => error.id === issues.content.noAlternateMedia);

    if (alternateMedia) {
      alternateTab = new BuilderConfigTabAlternateMedia({
        sectionType: sectionType,
        media: alternateMedia._image,
        errorId: alternateError ? alternateError.id : null,
        showErrors: alternateError,
        placement: this._placement
      });
    }
    else {
      alternateTab = new BuilderConfigTabAlternateEmpty({
        showWarnings: showWarnings
      });
    }

    return alternateTab;
  }

  _createManageTab() {
    let sceneName = this.getSceneName(this._cache[this.id]);
    this._configTabManageScene = new BuilderConfigTabManageScene({
      hideRemove: this._placement == 'background',
      mediaType: 'webscene',
      mediaId: this.id,
      showErrors: this.scanResults.errors && this.scanResults.errors.length && this.scanResults.errors.filter(error => !error.isAlternate).length,
      sceneName
    });

    return this._configTabManageScene;
  }
}
