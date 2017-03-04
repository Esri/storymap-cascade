import WebScene from './WebScene';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManageScene from './builder/TabManageScene';
import BuilderConfigTabWebScene from './builder/TabWebScene';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const text = i18n.builder.mediaErrors;

export default class WebSceneBuilder extends WebScene {

  constructor(webscene) {
    super(webscene);

    this._configTabWebScene = null;
    this._configTabManageScene = null;
    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    // listen to when THIS SPECIFIC map gets scanned
    topic.subscribe('scan/scenes/' + this._webscene.id, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();

  }

  checkErrors(scanResult) {
    // update the map UI based on the scan results

    const errorIds = this.mapErrors(scanResult);
    if (!errorIds) {
      this.removeError();
      return;
    }

    const unfixableOptions = this.isUnfixableError(errorIds);
    if (unfixableOptions) {
      this.setError(unfixableOptions);
      return;
    }

    // TODO: something different here?
    this.setError({errors: scanResult.errors});

  }

  isUnfixableError(errorIds) {
    let msg, unfixable = false;
    if (errorIds.indexOf(issues.scenes.deleted) >= 0) {
      msg = text.placeholders.deleted.replace('${media-type}', text.mediaTypes.webscene);
      unfixable = true;
    }
    else if (errorIds.indexOf(issues.scenes.inaccessible) >= 0) {
      msg = text.placeholders.inaccessible.replace('${media-type}', text.mediaTypes.webscene);
      unfixable = true;
    }
    else if (errorIds.indexOf(issues.scenes.unauthorized) >= 0) {
      msg = text.placeholders.unauthorized.replace('${media-type}', text.mediaTypes.webscene);
      unfixable = true;
    }
    if (unfixable) {
      return {msg, unfixable, showLoadingError: true};
    }
    return false;

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
        let sceneName = this.getSceneName(this._cache[this.id]);
        this._configTabManageScene = new BuilderConfigTabManageScene({
          hideRemove: this._placement == 'background',
          mediaType: 'webscene',
          mediaId: this.id,
          sceneName
        });
        tabs.push(this._configTabManageScene);
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
}
