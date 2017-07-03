import {} from 'lib-build/less!./Panel';

import tabThumbTpl from 'lib-build/hbars!./TabThumb';
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
    this._selectedTab = this._tabs[0];

    this.selectedClass = 'selected';

    this._init();
  }

  refreshTabs(tabs) {
    this._tabs = tabs;

    this._selectedTab = this._tabs.find(tab => tab.type === this._selectedTab.type);

    this._init();
  }
  //
  // Private
  //
  //

  _init() {
    this._nodeMedia.removeClass(ACTIVE_CLASS);
    this._nodeInvite.html(viewInvite({}));
    this._nodePanel.html(viewConfig({}));

    // Open/close button
    this._nodeInvite
      .off('click')
      .click(this._toggleConfigPanel.bind(this));

    this._renderTabThumbs();
  }

  _renderTabThumbs() {
    // List of tabs
    const tabsContainer = this._nodePanel.find('.builder-tabs');
    // start with a clean slate
    tabsContainer.find('.tab').off('click');
    tabsContainer.empty();

    for (const tab of this._tabs) {
      const tabThumb = this._renderTabThumb(tab);
      tabsContainer.append(tabThumb);
    }

    // set one as selected.
    // attach onclick events
    this._addClickEvent();
  }

  _addClickEvent() {
    const tabsContainer = this._nodePanel.find('.builder-tabs');
    const tabs = tabsContainer.find('.tab');

    tabs.off('click').on('click', e => {
      this._onTabClick(e, tabsContainer, tabs);
    });
  }

  _onTabClick(event, tabsContainer, tabs) {
    // render the new tab, destroy the old one
    let target = $(event.currentTarget);
    let newTabType = target.data('tab');
    let oldTabType = tabsContainer.find('.tab.' + this.selectedClass).data('tab');
    let newTab = this._tabs.find(tab => newTabType === tab.type);
    let oldTab = this._tabs.find(tab => oldTabType === tab.type);

    tabs.removeClass(this.selectedClass);
    target.addClass(this.selectedClass);

    oldTab && this.destroyTab(oldTab);
    newTab && this.renderTab(newTab);
  }

  _renderTabThumb(tab) {
    return tabThumbTpl({
      tab,
      isSelected: tab.type === this._selectedTab.type
    });
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

    this._selectedTab = tab;
  }

  _toggleConfigPanel(e) {
    // if shutting, destroy the active panel as well
    if (this._nodeMedia.hasClass(ACTIVE_CLASS)) {
      this.closePanel(e);
    }
    else {
      this.openPanel();
    }

    if (this._onToggle) {
      this._onToggle();
    }
  }

  _findOverrideTab() {
    let overrideTab = null;
    // don't love reading the DOM to get state, but it'll do for now
    // if there are errors, we'll show the issues tab if it exists, otherwise the manage tab.
    if (this._nodeMedia.hasClass('error') || this._nodeMedia.find('.error').length) {
      overrideTab = this._tabs.find(tab => tab.type === 'issues');

      if (!overrideTab) {
        overrideTab = this._tabs.find(tab => tab.type === 'manage');
      }
    }
    // if there are warnings but NO issues, we'll show the alt media tab.
    else if (this._nodeMedia.hasClass('warning') || this._nodeMedia.find('.warning').length) {
      overrideTab = this._tabs.find(tab => tab.type === 'alternate');
    }

    return overrideTab;
  }

  openPanel(stayOnTab) {
    let openTab = this._selectedTab;

    if (!stayOnTab) {
      const overrideTab = this._findOverrideTab();

      if (overrideTab) {
        let tabNode = this._nodePanel.find('.builder-tabs .tab.' + this.selectedClass);
        tabNode.removeClass(this.selectedClass);
        const selectedTabThumb = this._nodePanel.find(`.builder-tabs .tab[data-tab="${overrideTab.type}"]`);
        selectedTabThumb.addClass(this.selectedClass);

        openTab = overrideTab;
      }
    }

    openTab && this.renderTab(openTab);

    this._renderTabThumbs();

    this._nodeMedia.addClass(ACTIVE_CLASS);
  }

  closePanel(e) {
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

    this._nodeMedia.removeClass(ACTIVE_CLASS);
  }
}
