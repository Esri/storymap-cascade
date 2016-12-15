import {} from 'lib-build/less!./Panel';

import viewInvite from 'lib-build/hbars!./PanelInvite';
import viewConfig from 'lib-build/hbars!./PanelConfig';

var ACTIVE_CLASS = 'config-panel-active';

export default class BuilderConfig {

  constructor(params) {
    params = params || {};

    if (! params.containerMedia
        || ! params.tabs
        || ! params.media || ! params.onChange || ! params.onAction) {
      return;
    }

    this._nodeMedia = params.containerMedia;
    this._nodeInvite = this._nodeMedia.find('.media-cfg-invite');
    this._nodePanel = this._nodeMedia.find('.media-cfg-panel');

    this._tabs = params.tabs;
    this._media = params.media;
    this._onChange = params.onChange;
    this._onToggle = params.onToggle;
    this._onAction = params.onAction;
    this._closeBtnStyle = params.closeBtnStyle;

    this.selectedClass = 'selected';

    this._init();
  }

  //
  // Private
  //

  _init() {
    this._nodeMedia.removeClass(ACTIVE_CLASS);
    this._nodeInvite.html(viewInvite({}));
    this._nodePanel.html(viewConfig({}));

    // Open/close button
    this._nodeInvite
      .off('click')
      .click(this._toggleConfigPanel.bind(this));

    // List of tabs
    var tabsContainer = this._nodePanel.find('.builder-tabs');
    var hasIssuesTab = this._tabs.some(function(tab) {
      return (tab.type.indexOf('issues') >= 0);
    });

    this._tabs.forEach(function(tab, i) {
      let errorSpan = '';
      if (tab.type.indexOf('issues') >= 0 || (tab.type === 'manage') && !hasIssuesTab) {
        errorSpan = '<span class="border-error"></span>';
      }
      tabsContainer.append(
        `<li class="tab btn-clear lighter${i === 0 ? ' selected' : ''}" data-tab="${tab.type}">` +
          errorSpan +
          `<span class="config-tab-icon fa ${tab.icon}"></span>` +
          `${tab.title}` +
        '</li>'
      );
    });

    // set one as selected.
    // attach onclick events
    var tabs = tabsContainer.find('.tab');
    // for some reason, "this" breaks
    var self = this;
    tabs.on('click', e => {
      // render the new tab, destroy the old one
      let target = $(e.currentTarget);
      let newTabType = target.data('tab');
      let oldTabType = tabsContainer.find('.tab.' + this.selectedClass).data('tab');
      let newTab = self._tabs.find(tab => newTabType === tab.type);
      let oldTab = self._tabs.find(tab => oldTabType === tab.type);

      tabs.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);

      oldTab && self.destroyTab(oldTab);
      newTab && self.renderTab(newTab);
    });

    //this._onChange();
  }

  destroyTab(tab) {
    tab.destroy();
  }

  renderTab(tab) {
    let container = this._nodePanel.find('.builder-active-tab');

    container.html(tab.render());
    tab.postCreate({
      container: container,
      media: this._media,
      onChange: this._onChange,
      onAction: this._onAction,
      rootNode: this._nodePanel
    });
  }

  _toggleConfigPanel(e) {
    // if shutting, destroy the active panel as well
    if (this._nodeMedia.hasClass(ACTIVE_CLASS)) {
      // when used for background media, only the x allow to close close
      if (this._closeBtnStyle == 'light' && $(e.target).hasClass('builder-invite-background')) {
        return;
      }

      // destroy the existing tab
      let tabNode = this._nodePanel.find('.builder-tabs .tab.' + this.selectedClass);
      let tabType = tabNode.data('tab');
      let openTab = this._tabs.find(tab => tabType === tab.type);

      // before the panel is destoyed, we may want to make data model changes...
      openTab && openTab.beforePanelDestroy();

      openTab && this.destroyTab(openTab);
    }
    else {
      let tabNode = this._nodePanel.find('.builder-tabs .tab.' + this.selectedClass);

      if (this._nodeMedia.hasClass('error') || this._nodeMedia.find('.error').length) {
        var switchToTab = this._nodePanel.find('[data-tab="issues"]');
        if (!switchToTab.length) {
          switchToTab = this._nodePanel.find('[data-tab="manage"]');
        }
        if (switchToTab.length) {
          tabNode.removeClass(this.selectedClass);
          tabNode = switchToTab.addClass(this.selectedClass);
        }
      }

      let tabType = tabNode.data('tab');
      let openTab = this._tabs.find(tab => tabType === tab.type);

      openTab && this.renderTab(openTab);

      //this._onChange();
    }

    this._nodeMedia.toggleClass(ACTIVE_CLASS);

    if (this._onToggle) {
      this._onToggle();
    }
  }
}
