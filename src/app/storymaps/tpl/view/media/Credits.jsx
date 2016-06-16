import Media from './Media';

import viewTpl from 'lib-build/hbars!./CreditsItemViewer';
import {} from 'lib-build/less!./Credits';

export default class Credits extends Media {
  constructor(credits) {
    super({
      type: 'credits',
      id: null,
      previewThumb: '',
      previewIcon: ''
    });

    this._credits = credits;
  }

  render(context) {
    if (! this._credits || ! context) {
      console.log('Could not render credits block in section');
      return '';
    }

    let markup = `<div id="${this._domID}" class="block block-type-credits"><ul class="cr-list">`;

    if (this._credits.length) {
      for (let credit of this._credits) {
        markup += viewTpl({
          label: credit.label,
          link: credit.link,
          source: credit.source,
          empty: false,
          incomplete: false
        });
      }
    }

    markup += '</ul></div>';

    return markup;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    this._node = params.container.find('#' + this._domID);
  }

  load() {
    //
  }

  resize() {
    //
  }

  getNode() {
    return this._node;
  }

  performAction() {
    //
  }
}
