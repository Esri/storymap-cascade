import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabWebPage';

export default class TabWebPage extends Tab {
  constructor() {
    super();

    this.title = 'Appearance';
    this.type = 'appearance';
    this.icon = 'fa-sliders';
  }

  render() {
    return viewTpl({});
  }

  postCreate(params) {
    super.postCreate(params);

    this.bindInteraction();
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

  destroy() {
    super.destroy();

    this.unbindInteraction();
  }
}
