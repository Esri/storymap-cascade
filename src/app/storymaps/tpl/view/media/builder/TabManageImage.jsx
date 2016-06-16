import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabManageImage';
//import {} from 'lib-build/less!./TabSize';

export default class TabManageImage extends Tab {
  constructor(params) {
    super(params);

    this.title = 'Manage';
    this.type = 'manage';
    this.icon = 'fa-wrench';
  }

  postCreate(params) {
    super.postCreate(params);

    if (this._options) {
      if (this._options.hideRemove) {
        this._node.find('.config-item[data-action="remove"]').parents('.builder-config-section').hide();
      }
    }

    //
    // Events
    //

    this._node.find('.config-item[data-action="remove"]').on('click', function() {
      this._onAction('remove');
    }.bind(this));

    this._node.find('.config-item[data-action="swap"]').on('click', () => {
      this._onAction('swap');
    });
  }

  destroy() {
    super.destroy();

    this._node.find('.config-item[data-action="remove"]').off('click');
    this._node.find('.config-item[data-action="swap"]').off('click');
  }

  render() {
    return viewTpl({});
  }
}
