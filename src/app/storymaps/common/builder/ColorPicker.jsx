import {} from 'lib/spectrum/spectrum';
import {} from 'lib-build/css!lib/spectrum/spectrum';
import {} from 'lib-build/less!./ColorPicker';
import i18n from 'lib-build/i18n!commonResources/nls/texteditor';

export default class ColorPicker {
  static initPicker(options) {
    let defaultPalette = [
      ['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'],
      ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f'],
      ['#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#cfe2f3', '#d9d2e9', '#ead1dc'],
      ['#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#9fc5e8', '#b4a7d6', '#d5a6bd'],
      ['#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6fa8dc', '#8e7cc3', '#c27ba0'],
      ['#c00', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3d85c6', '#674ea7', '#a64d79'],
      ['#900', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#0b5394', '#351c75', '#741b47'],
      ['#600', '#783f04', '#7f6000', '#274e13', '#0c343d', '#073763', '#20124d', '#4c1130']
    ];

    $(options.element).spectrum({
      allowEmpty: options.showClear || false,
      color: options.color || '#000',
      showInput: true,
      showAlpha: options.showAlpha || false,
      showPalette: options.showPalette || false,
      showInitial: false,
      showSelectionPalette: false,
      hideAfterPaletteSelect: false,
      clickoutFiresChange: false,
      preferredFormat: 'hex3',
      appendTo: options.appendTo || 'body',
      palette: options.palette || defaultPalette,
      chooseText: i18n.textEditor.color.choose,
      cancelText: i18n.textEditor.color.cancel,
      clearText: i18n.textEditor.color.clear,
      show: function(color) {
        if (options.onShowCallback) {
          options.onShowCallback(color ? color.toRgbString() : null);
        }
      },
      move: function(color) {
        if (options.onMoveCallback) {
          options.onMoveCallback(color ? color.toRgbString() : null);
        }
      },
      change: function(color) {
        if (options.onChangeCallback) {
          options.onChangeCallback(color ? color.toRgbString() : null);
        }
      },
      hide: function(color) {
        if (options.onHideCallback) {
          options.onHideCallback(color ? color.toRgbString() : null);
        }
      },
      beforeShow: function() {
        $(options.element).spectrum('container').find('.sp-clear')
          .html('<i class="fa fa-undo" aria-hidden="true"></i>')
          .css('background-image', 'none');

        if (options.beforeShowCallback) {
          options.beforeShowCallback();
        }
      }
    });
  }
}
