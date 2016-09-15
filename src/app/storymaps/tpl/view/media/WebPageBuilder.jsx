import WebPage from './WebPage';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManageMedia from './builder/TabManageMedia';
import BuilderConfigTabWebPage from './builder/TabWebPage';

import lang from 'dojo/_base/lang';

export default class WebPageBuilder extends WebPage {

  postCreate(params) {
    super.postCreate(params);

    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        tabs.push(new BuilderConfigTabWebPage());
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
      media: this._webpage,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        // TODO: this could be in BuilderConfig
        this._node.toggleClass('builder-config-open');
        params.onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });

    this.initBuilderUI();
  }

  serialize() {
    if (this._node) {
      this._webpage.caption = this._node.find('.block-caption').html();
    }

    return lang.clone({
      type: 'webpage',
      webpage: this._webpage
    });
  }

  //
  // Private
  //

  _onConfigChange() {
    console.log('onConfigChange: ', this._webpage);
    this._applyConfig();
    super._onConfigChange();
  }
}
