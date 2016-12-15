import viewTpl from 'lib-build/hbars!./ImmersiveTitleConfig';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./ImmersiveTitleConfig';

export default class ImmersiveTitleConfig {
  constructor(params) {
    this._node = null;
    this._sectionOptions = null;
    this._configPanel = null;
    this.applyConfig = params ? params.applyConfigCallback : null;
    this._style = params ? params.style : null;
  }

  render() {
    return viewTpl({
      strings: i18n.builder.immersive.titleConfig
    });
  }

  postCreate(params) {
    if (!params.container && params.sectionOptions) {
      return;
    }

    this._node = params.container;
    this._sectionOptions = params.sectionOptions;

    this._configPanel = this._node.find('.builder-config-panel');

    this._addEvents();
  }

  _addEvents() {
    let styleItems = this._node.find('.panel-cfg-item-wrapper[data-type="style"]');
    let style = this._determineTitleStyle();
    let selectedClass = 'fa fa-check active';

    this._node.find(`.panel-cfg-item-wrapper[data-value="${style}"]`).addClass(selectedClass);
    styleItems.on('click', e => {
      let target = $(e.currentTarget);

      let value = {
        shadow: target.data('shadow') ? true : false,
        text: target.data('text'),
        background: target.data('background') || null
      };

      styleItems.removeClass(selectedClass);
      target.addClass(selectedClass);

      this.setStyle(value);

      if (typeof this.applyConfig === 'function') {
        this.applyConfig();
      }
    });
  }

  _determineTitleStyle() {
    if (!this._sectionOptions) {
      return 'shadow-light';
    }

    let style = this._sectionOptions.style;

    if (!style) {
      return 'shadow-light';
    }

    if (style.background) {
      if (style.background === 'dark') {
        return 'background-dark';
      }
      else {
        return 'background-light';
      }
    }
    else {
      if (style.shadow && style.text === 'dark') {
        return 'shadow-dark';
      }
      else {
        return 'shadow-light';
      }
    }
  }

  getStyle() {
    return this._style;
  }

  setStyle(style) {
    this._style = style;
  }

  toggleBuilderPanel(target) {
    let openPanelButton = this._node.find('.builder-config-panel-btn.title-config-open');

    if (target.hasClass('title-config-open')) {
      this._configPanel.addClass('active');
      openPanelButton.css('display', 'none');
    }
    else {
      this._configPanel.removeClass('active');
      openPanelButton.css('display', 'block');
    }
  }
}
