import Media from './Media';

import {} from 'lib-build/less!./Color';

import lang from 'dojo/_base/lang';

export default class Color extends Media {
  constructor(color) {
    super({
      type: 'color',
      id: null,
      previewThumb: '',
      previewIcon: ''
    });

    this._color = color;
  }

  render(context) {
    if (! this._color || ! context) {
      console.log('Could not render color in section');
      return '';
    }

    return `<div class="media-color" style="background-color: ${this._color.value}"></div>`;
  }

  load() {
    //
  }

  serialize() {
    return lang.clone({
      type: 'color',
      color: this._color
    });
  }
}
