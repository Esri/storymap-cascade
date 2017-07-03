import WebPage from './WebPage';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';
import BuilderConfigTabWebPage from './builder/TabWebPage';
import BuilderConfigTabAlternateMedia from './builder/TabAlternateMedia';
import BuilderConfigTabAlternateEmpty from './builder/TabAlternateEmpty';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';
import issues from '../../builder/Issues';

export default class WebPageBuilder extends WebPage {

  constructor(webpage) {
    super(webpage);

    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;

    this._initConfigPanel();

    this.initBuilderUI();

    topic.subscribe('scan/webpages/' + this._instanceID, lang.hitch(this, this.checkErrors));
  }

  _initConfigTabs() {
    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        tabs.push(new BuilderConfigTabWebPage());
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
      media: this._webpage,
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

  load(params = {}) {
    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      alternateMedia.load();
    }

    return super.load(params);
  }

  serialize(includeInstanceID) {
    if (this._node) {
      this._webpage.caption = this._node.find('.block-caption').html();
    }

    return super.serialize('webpage', this._webpage, includeInstanceID);
  }

  //
  // Private
  //

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
    return new BuilderConfigTabManageMedia({
      hideRemove: this._placement == 'background',
      showErrors: this.scanResults.errors && this.scanResults.errors.length && this.scanResults.errors.filter(error => !error.isAlternate).length
    });
  }
}
