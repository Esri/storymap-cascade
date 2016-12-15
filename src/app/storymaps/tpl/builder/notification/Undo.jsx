import Notification from './Notification';

import viewTpl from 'lib-build/hbars!./Undo';
import {} from 'lib-build/less!./Undo';

import ProgressBar from 'lib/progressbar.js/dist/progressbar.min';

const DEFAULT_DELAY = 20000;

export default class Undo extends Notification {

  constructor(params = {}) {
    super(params);

    this._clearFollowingsAfterUndo = params.clearFollowingsAfterUndo;
  }

  render() {
    return viewTpl({
      id: this._id,
      label: this._label,
      labelUndo: i18n.builder.notification.undo,
      labelClose: i18n.builder.notification.close
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

    var progressBar = new ProgressBar.Line(this._node.find('.progress')[0], {
      strokeWidth: 4,
      duration: delay,
      color: '#005e95',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
      /*
      from: {color: '#ED6A5A'},
      to: {color: '#FFEA82'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
      */
    });

    progressBar.set(-1.0);

    progressBar.animate(0, { }, function() {
      setTimeout(function() {
        this._node.fadeOut({
          complete: function() {
            this._node.remove();
          }.bind(this)});
        this._resultDeferred.reject();
      }.bind(this), 200);
    }.bind(this));

    this._node.find('.btn-undo').click(function() {
      if (this._clearFollowingsAfterUndo) {
        this._node.nextAll().remove();
      }

      this._node.remove();
      this._resultDeferred.resolve();
    }.bind(this));
  }
}
