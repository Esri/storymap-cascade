import Video from './Video';
import {} from 'lib-build/less!./VideoBuilder';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabVideo from './builder/TabVideo';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';
import BuilderConfigTabSectionAppearance from './builder/TabSectionAppearance';
import BuilderConfigTabAlternateMedia from './builder/TabAlternateMedia';
import BuilderConfigTabAlternateEmpty from './builder/TabAlternateEmpty';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from 'issue-checker/IssueTypes';
import cascadeIssues from '../../builder/Issues';
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
    this._scanListener = topic.subscribe('scan/videos/' + this._instanceID, lang.hitch(this, this.checkErrors));
  }

  load(params = {}) {
    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      alternateMedia.load();
    }

    return super.load(params);
  }

  onDuplicateOrEdit(loadedMedia, reload) {
    this._placement = loadedMedia._placement;
    this._videoPlayer = loadedMedia._videoPlayer;
    this._isVideoLoaded = true;
    if (reload) {
      this.reload();
    }
  }

  reload() {
    if (this._video.source === 'vimeo') {
      this.reloadOrReplayVimeoVideo();
    }
    else if (this._video.source === 'youtube') {
      this.reloadOrReplayYoutubeVideo();
    }
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
        // only show the appearance tab for videos if it's an immersive background
        if (this._sectionType == 'immersive' && this._placement === 'background') {
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

    this._createIssuesTab(tabs);

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

    if (this._placement === 'background' && this._sectionType === 'immersive' && this._isVideoLoaded) {
      this._node.find('.toggle-mute-button').toggleClass('mute-button-active', this._video.options.audio !== 'muted');

      if (this._video.options.audio === 'muted') {
        this._mute();
      }
    }
  }

  _createAlternateTab(sectionType) {
    const alternateMedia = this.getAlternate();
    let alternateTab = null;
    const errors = lang.getObject('scanResults.errors', false, this);
    const warnings = lang.getObject('scanResults.warnings', false, this);
    let alternateError = errors ? errors.find(error => error.isAlternate) : null;
    let showWarnings = warnings && warnings.some(error => error.id === cascadeIssues.content.noAlternateMedia);

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
        showWarnings: showWarnings,
        // it's supported on mobile if there aren't warnings
        // (video is supported on mobile on narrative sections/narrative panels, unsupported in cover/immersive backgrounds)
        // "block" placement is narrtive section and panel
        mobileSupported: this._placement === 'block'
      });
    }

    return alternateTab;
  }

  _createManageTab() {
    return new BuilderConfigTabManageMedia({
      hideRemove: this._placement == 'background',
      // show errors if there are errors besides alt media ones
      showErrors: this.scanResults.errors && this.scanResults.errors.filter(error => !error.isAlternate).length && this.scanResults.unfixable
    });
  }

  _makeUrlsHttps() {
    this._video.url = CommonHelper.forceHttpsUrl(this._video.url);
  }

  updateParams(newMedia) {
    this._start = newMedia._start;
    this._end = newMedia._end;
    this._video.start = newMedia._start;
    this._video.end = newMedia._end;
    if (this._cache && this._cache[this.id]) {
      this._cache[this.id].params = {
        start: newMedia._start,
        end: newMedia._end
      };
    }
  }
}
