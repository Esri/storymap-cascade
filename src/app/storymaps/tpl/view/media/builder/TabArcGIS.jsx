import Tab from './Tab';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabArcGIS extends Tab {
  constructor(params) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.appearance;
    this.type = 'appearance';
    this.icon = 'fa-sliders';
  }

  postCreate(params) {
    super.postCreate(params);

    this.bindPopup();
    this.bindInteraction();
    this.bindView();
    this.bindExtras();
  }

  bindPopup() {
    let popups = this._node.find('.config-item[data-type="popup"]');
    let popupsEnabled = this._media.popup || true;
    let dataValue = popupsEnabled ? 'enabled' : 'disabled';

    this._node.find(`.config-item[data-type="popup"][data-value="${dataValue}"]`).addClass(this.selectedClass);
    // on click or something....
    popups.on('click', e => {
      let target = $(e.currentTarget);
      let isEnabled = target.data('value') === 'enabled';

      popups.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
      this.setMedia('popup', isEnabled);
    });
  }

  unbindPopup() {
    let popups = this._node.find('.config-item[data-type="popup"]');
    popups.off('click');
  }

  bindInteraction() {
    let interactions = this._node.find('.config-item[data-type="interaction"]');
    let selectedInteraction = this._media.options.interaction || 'enabled';

    this._node.find(`.config-item[data-type="interaction"][data-value="${selectedInteraction}"]`).addClass(this.selectedClass);
    interactions.on('click', e => {
      let target = $(e.currentTarget);
      let interaction = target.data('value');

      interactions.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
      this.setConfig('interaction', interaction);
    });
  }

  unbindInteraction() {
    let interactions = this._node.find('.config-item[data-type="interaction"]');
    interactions.off('click');
  }

  bindView() {

  }

  unbindView() {

  }

  bindExtras() {
    let extras = this._node.find('.config-item[data-type="extra"]');

    let legendEnabled = false;
    let searchEnabled = false;
    let locateEnabled = false;

    if (this._media.extras) {
      legendEnabled = this._media.extras.legend && this._media.extras.legend.enabled;
      searchEnabled = this._media.extras.search && this._media.extras.search.enabled;
      locateEnabled = this._media.extras.locate && this._media.extras.locate.enabled;
    }

    this._node.find('.config-item[data-type="extra"][data-value="legend"] input[type="checkbox"]').prop('checked', legendEnabled);
    this._node.find('.config-item[data-type="extra"][data-value="search"] input[type="checkbox"]').prop('checked', searchEnabled);
    this._node.find('.config-item[data-type="extra"][data-value="locate"] input[type="checkbox"]').prop('checked', locateEnabled);

    let self = this;
    extras.on('click', e => {
      let target = $(e.currentTarget);
      let type = target.data('value');
      let checked = target.find('input[type="checkbox"]').is(':checked');
      // read out the value
      self.setExtras(type, checked);
    });
  }

  unbindExtras() {
    let extras = this._node.find('.config-item[data-type="extra"]');
    extras.off('click');
  }

  setExtras(name, value) {
    if (!this._media.extras) {
      this._media.extras = {};
    }

    if (!this._media.extras[name]) {
      this._media.extras[name] = {};
    }

    this._media.extras[name]['enabled'] = value;

    this.onChange();
  }

  destroy() {
    super.destroy();

    this.unbindPopup();
    this.unbindInteraction();
    this.unbindView();
    this.unbindExtras();
  }
}
