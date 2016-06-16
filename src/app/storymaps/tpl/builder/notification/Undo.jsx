import Notification from './Notification';

import viewTpl from 'lib-build/hbars!./Undo';
import {} from 'lib-build/less!./Undo';

const DEFAULT_DELAY = 10000;

export default class Undo extends Notification {

  constructor(params = {}) {
    super(params);
  }

  render() {
    return viewTpl({
      id: this._id,
      label: this._label,
      labelUndo: 'Undo' // TODO
    });
  }

  postCreate() {
    if (this._positionTop !== undefined) {
      this._node.css('top', this._positionTop);
    }

    this._initEvents();
  }

  _initEvents(params = {}) {
    var delay = params.delay || DEFAULT_DELAY;

    let timeRemaining = Math.floor(delay / 1000);
    let countdownInterval = setInterval(function() {
      if (timeRemaining > 0) {
        this._node.find('.undo-countdown').html(--timeRemaining);
      }
    }.bind(this), 1000);
    this._node.find('.undo-countdown').html(timeRemaining);

    setTimeout(function() {
      this._node.remove();
      this._resultDeferred.reject();
      clearInterval(countdownInterval);
    }.bind(this), delay + 1200);

    this._node.find('.btn-undo').click(function() {
      this._node.remove();
      this._resultDeferred.resolve();
    }.bind(this));
  }
}
