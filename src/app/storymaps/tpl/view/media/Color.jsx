import Media from './Media';

import {} from 'lib-build/less!./Color';

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

    return '<div class="media-color"></div>';
  }

  postCreate(params) {
    if (!params.container) {
      return;
    }
    this._node = params.container.find('.media-color');
    this._applyConfig();
  }

  _applyConfig() {
    this._node.css('background-color', this._color.value);
  }

  updateColor(color) {
    this._color.value = color;
    this._applyConfig();
  }

  load() {
    //
  }

  update(color) {
    this.updateColor(color);
  }

  serialize() {
    // TODO dead code
    return super.serialize('color', this._color, false);
  }
}
