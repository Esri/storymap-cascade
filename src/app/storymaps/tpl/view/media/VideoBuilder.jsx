import Video from './Video';
import {} from 'lib-build/less!./VideoBuilder';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSizeImage from './builder/TabSizeImage';
import BuilderConfigTabVideo from './builder/TabVideo';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';
import BuilderConfigTabSectionAppearance from './builder/TabSectionAppearance';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const text = i18n.builder.mediaErrors;

export default class VideoBuilder extends Video {

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

    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSizeImage());
      }
      else if (tab == 'appearance') {
        if (this._sectionType == 'immersive') {
          tabs.push(new BuilderConfigTabVideo());
        }
      }
      else if (tab == 'section-appearance') {
        tabs.push(new BuilderConfigTabSectionAppearance({
          sectionOptions: params.foregroundOptions,
          onSectionChange: params.applySectionConfig
        }));
      }
      else if (tab == 'manage') {
        tabs.push(new BuilderConfigTabManageMedia({
          hideRemove: this._placement == 'background'
        }));
      }
    }

    new BuilderConfig({
      containerMedia: this._node,
      tabs: tabs,
      media: this._video,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        params.onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });

    this.initBuilderUI();

    // we subscribe to the scan change for this SPECIFIC video only (hence the scan/video/videoID pattern).
    topic.subscribe('scan/videos/' + this._video.url, lang.hitch(this, this.checkErrors));
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
    if (errorIds.indexOf(issues.videos.inaccessible) >= 0) {
      return {
        msg: text.placeholders.inaccessible.replace('${media-type}', text.mediaTypes.video),
        showLoadingError: true,
        unfixable: true
      };
    }
    return false;
  }

  serialize() {
    // TODO: those shoul dbe filtered before
    delete this._video.user;
    delete this._video.thumbUrl;
    delete this._video.viewCount;
    delete this._video.likeCount;

    if (this._node) {
      this._video.caption = this._node.find('.block-caption').html();
    }

    return lang.clone({
      type: 'video',
      video: this._video
    });
  }

  //
  // Private
  //

  _onConfigChange() {
    console.log('onConfigChange: ', this._video);
    this._applyConfig();
    super._onConfigChange();
  }
}
