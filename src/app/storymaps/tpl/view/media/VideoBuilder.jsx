import Video from './Video';
import {} from 'lib-build/less!./VideoBuilder';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSizeImage from './builder/TabSizeImage';
import BuilderConfigTabVideo from './builder/TabVideo';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';

import lang from 'dojo/_base/lang';

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
      else if (tab == 'manage') {
        tabs.push(new BuilderConfigTabManageMedia({
          hideRemove: this._placement == 'background'
        }));
      }
    }

    new BuilderConfig({
      containerPanel: this._node.find('.media-cfg-panel'),
      containerInvite: this._node.find('.media-cfg-invite'),
      tabs: tabs,
      media: this._video,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        params.onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });
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
