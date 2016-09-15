import UIUtils from 'storymaps/tpl/utils/UI';
import Deferred from 'dojo/Deferred';

import {} from 'lib-build/less!./Notification';

export default class Notification {
  constructor(params) {
    this._id = UIUtils.getUID();
    this._container = $('.notification-container');
    this._label = params.label;
    this._positionTop = params.positionTop;

    this._resultDeferred = null;
    this._node = null;
  }

  display(p = {}) {
    this._resultDeferred = new Deferred();

    if (! this._container || ! this._label) {
      this._resultDeferred.reject();
      return this._resultDeferred;
    }

    if (p.clearPreviousUndo) {
      // TODO: should only remove undo once there is more notification type
      this._container.empty();
    }

    this._container.append(this.render());
    this._node = $('#' + this._id);

    this._node.fadeIn();

    this.postCreate();

    return this._resultDeferred;
  }

  update(params) {
    this._label = params.label;

    if (this._node) {
      this._node.replaceWith(this.render());
      this._node = $('#' + this._id);
      this._node.show();

      this.postCreate();
    }
  }
}
