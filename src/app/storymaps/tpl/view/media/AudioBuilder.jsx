import Audio from './Audio';
import {} from 'lib-build/less!./AudioBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';

const text = i18n.builder;

export default class AudioBuilder extends Audio {

  constructor(audio, isNewMedia) {
    super(audio, isNewMedia);
    this._onToggleMediaConfig = null;
  }

  postCreate(params) {
    super.postCreate(params);
    this._onToggleMediaConfig = params.onToggleMediaConfig;
    this._initConfigPanel();

    // we subscribe to the scan change for this SPECIFIC image only (hence the scan/image/imageID pattern).
    topic.subscribe('scan/audio/' + this._instanceID, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();
  }

  _initConfigPanel() {
    super._initConfigPanel();
    this._builderConfigPanel = new BuilderConfig({
      containerMedia: this._node,
      tabs: this._initConfigTabs(),
      media: this._audio,
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

  _initConfigTabs() {
    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'manage') {
        tabs.push(new BuilderConfigTabManageMedia({
          hideRemove: this._placement == 'background',
          showErrors: this.scanResults.errors && this.scanResults.errors.length
        }));
      }
    }
    return tabs;
  }

  isUnfixableError(errorIds) {
    var errorText = text.mediaErrors;
    if (errorIds.indexOf(issues.audio.inaccessible) >= 0) {
      return {
        msg: errorText.placeholders.inaccessible,
        unfixable: true,
        showLoadingError: true
      };
    }
    return false;
  }

  load(params = {}) {
    return super.load(params);
  }

  serialize(includeInstanceID) {
    if (this._node) {
      this._audio.caption = this._node.find('.block-caption').html();
    }

    return super.serialize('audio', this._audio, includeInstanceID);
  }

  //
  // Private
  //

  _onConfigChange() {
    this._applyConfig();
    super._onConfigChange();
  }

}
