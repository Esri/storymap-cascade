import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabWebPage';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabWebPage extends Tab {
  constructor() {
    super();

    this.title = i18n.builder.mediaConfig.tabs.appearance;
    this.type = 'appearance';
    this.icon = 'fa-sliders';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.appearance
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this.bindInteraction();
  }

  bindInteraction() {
    let selectedInteraction = this._media.options.interaction || 'button';

    if (selectedInteraction === 'mouseover' && !this._node.find('.config-item[data-type="interaction"][data-value="mouseover"]').length) {
      this._node.find('.config-item[data-type="interaction"]').last().after('<li class="config-item btn btn-gray" data-type="interaction" data-value="mouseover">Mouseover</li>');
    }
    this._node.find(`.config-item[data-type="interaction"][data-value="${selectedInteraction}"]`).addClass(this.selectedClass);

    let interactions = this._node.find('.config-item[data-type="interaction"]');
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

  destroy() {
    super.destroy();

    this.unbindInteraction();
  }
}
