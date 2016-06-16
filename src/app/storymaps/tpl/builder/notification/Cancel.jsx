import Notification from './Notification';

import viewTpl from 'lib-build/hbars!./Cancel';
import {} from 'lib-build/less!./Cancel';

const DEFAULT_DELAY = 5000;

export default class Cancel extends Notification {

  constructor(params = {}) {
    super(params);

    this._type = 'start';
  }

  render() {
    var type = 'alert-info';

    if (this._type == 'success') {
      type = 'alert-success';
    }
    else if (this._type == 'error') {
      type = 'alert-danger';
    }

    return viewTpl({
      id: this._id,
      type: type,
      label: this._label,
      displayCancel: this._type == 'start',
      labelCancel: 'Cancel' // TODO
    });
  }

  update(params = {}) {
    this._type = params.type;

    super.update(params);
  }

  postCreate() {
    this._initEvents();
  }

  _initEvents(params = {}) {
    var delay = params.delay || DEFAULT_DELAY;

    if (this._type != 'start') {
      setTimeout(function() {
        this._node.remove();
        this._resultDeferred.reject();
      }.bind(this), delay);
    }

    this._node.find('.btn-cancel').click(function() {
      this._node.remove();
      this._resultDeferred.resolve();
    }.bind(this));
  }
}
