import Video from './Video';
import {} from 'lib-build/less!./VideoBuilder';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabVideo from './builder/TabVideo';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';
import BuilderConfigTabSectionAppearance from './builder/TabSectionAppearance';
import BuilderConfigTabAlternateMedia from './builder/TabAlternateMedia';
import BuilderConfigTabAlternateEmpty from './builder/TabAlternateEmpty';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const text = i18n.builder.mediaErrors;

export default class VideoBuilder extends Video {

  constructor(video) {
    super(video);

    this._onToggleMediaConfig = null;
    this._foregroundOptions = null;
    this._applySectionConfig = null;
  }

  render(params = {}) {
    if (params.placement == 'block' && this._video.title) {
      this._video.caption = this._video.title;
    }

    delete this._video.title;
    delete this._video.description;

    return super.render(params);
  }

  postCreate(params = {}) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;
    this._foregroundOptions = params.foregroundOptions;
    this._applySectionConfig = params.applySectionConfig;

    this._initConfigPanel();

    this.initBuilderUI();

    // we subscribe to the scan change for this SPECIFIC video only (hence the scan/video/videoID pattern).
    topic.subscribe('scan/videos/' + this._instanceID, lang.hitch(this, this.checkErrors));
  }

  load(params = {}) {
    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      alternateMedia.load();
    }

    return super.load(params);
  }

  isUnfixableError(errorIds) {
    if (errorIds.indexOf(issues.videos.inaccessible) >= 0) {
      return {
        msg: text.placeholders.inaccessible.replace('${media-type}', text.mediaTypes.video),
        showLoadingError: true,
        unfixable: true
      };
    }
    return false;
  }

  serialize(includeInstanceID) {
    // TODO: those shoul dbe filtered before
    delete this._video.user;
    delete this._video.thumbUrl;
    delete this._video.viewCount;
    delete this._video.likeCount;

    if (this._node) {
      this._video.caption = this._node.find('.block-caption').html();
    }

    return super.serialize('video', this._video, includeInstanceID);
  }

  _initConfigTabs() {
    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        if (this._sectionType == 'immersive') {
          tabs.push(new BuilderConfigTabVideo());
        }
      }
      else if (tab == 'section-appearance') {
        tabs.push(new BuilderConfigTabSectionAppearance({
          sectionOptions: this._foregroundOptions,
          onSectionChange: this._applySectionConfig
        }));
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
      media: this._video,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        this._node.toggleClass('builder-config-open');
        this._onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });
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
    let alternateError = errors ? errors.find(error => error.isAlternate) : null;
    let showWarnings = warnings && warnings.some(error => error.id === issues.content.noAlternateMedia);

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
      // show errors if there are errors besides alt media ones
      showErrors: this.scanResults.errors && this.scanResults.errors.length && this.scanResults.errors.filter(error => !error.isAlternate).length
    });
  }
}
