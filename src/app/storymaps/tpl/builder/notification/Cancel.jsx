import Notification from './Notification';

import viewTpl from 'lib-build/hbars!./Cancel';
import {} from 'lib-build/less!./Cancel';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const DEFAULT_DELAY = 5000;

export default class Cancel extends Notification {

  constructor(params = {}) {
    super(params);

    this._type = 'start';
  }

  render() {
    return viewTpl({
      id: this._id,
      label: this._label,
      displayCancel: this._type == 'start',
      labelCancel: i18n.builder.notification.cancel,
      labelClose: i18n.builder.notification.close
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
        this._node.fadeOut({
          complete: function() {
            this._node.remove();
          }.bind(this)});

        this._resultDeferred.reject();
      }.bind(this), delay);
    }

    this._node.find('.btn-cancel').click(function() {
      this._node.remove();
      this._resultDeferred.resolve();
    }.bind(this));
  }
}
