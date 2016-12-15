import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabSectionAppearance';
import {} from 'lib-build/less!./Common';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabSectionAppearance extends Tab {
  constructor(params) {
    super(params);
    this.title = i18n.builder.mediaConfig.tabs.appearance;
    this.type = 'section-appearance';
    this.icon = 'fa-magic';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.sectionAppearance
    });
  }

  postCreate(params) {
    super.postCreate(params);
    let styleItems = this._node.find('.config-item[data-type="style"]');
    let style = this._getTitleStyle();

    this._node.find(`.config-item[data-value="${style}"]`).addClass(this.selectedClass);
    styleItems.on('click', e => {
      let target = $(e.currentTarget);

      // now, populate with one of three things:
      let value = {
        shadow: target.data('shadow') ? true : false,
        text: target.data('text'),
        background: target.data('background') || null
      };

      this.setSectionConfig('titleStyle', value);
      styleItems.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
    });
  }

  _getTitleStyle() {
    let titleStyle = this._sectionOptions.titleStyle;

    if (!titleStyle) {
      return 'background-light';
    }

    if (titleStyle.background) {
      if (titleStyle.background === 'dark') {
        return 'background-dark';
      }
      else {
        return 'background-light';
      }
    }
    else {
      if (titleStyle.shadow && titleStyle.text === 'dark') {
        return 'shadow-dark';
      }
      else {
        return 'shadow-light';
      }
    }
  }

  beforePanelDestroy() {

  }

  destroy() {
    super.destroy();
  }
}
