import {} from 'lib/spectrum/spectrum';
import {} from 'lib-build/css!lib/spectrum/spectrum';
import {} from 'lib-build/less!./ColorPicker';
import i18n from 'lib-build/i18n!commonResources/nls/texteditor';

export default class ColorPicker {
  static initPicker(options) {
    let defaultPalette = [
      ['#005a32', '#238443', '#41ab5d', '#78c679', '#addd8e', '#d9f0a3', '#f7fcb9', '#ffffe5'],
      ['#005824', '#238b45', '#41ae76', '#66c2a4', '#99d8c9', '#ccece6', '#e5f5f9', '#f7fcfd'],
      ['#016450', '#02818a', '#369BC0', '#67a9cf', '#a6bfdb', '#D0DAE6', '#ece2f0', '#fff7ff'],
      ['#034e7b', '#0570b0', '#3690c0', '#74a9cf', '#a6bddb', '#d0d1e6', '#ece7f2', '#fff7fb'],
      ['#0c2c84', '#225ea8', '#1d91c0', '#41b6c4', '#7fcdbb', '#c7e9b4', '#edf8b1', '#ffffd9'],
      ['#4a1486', '#6a51a3', '#807dba', '#9e9ac8', '#bcbddc', '#dadaeb', '#efedf5', '#fcfbfd'],
      ['#7a0177', '#ae017e', '#dd3497', '#f768a1', '#fa9fb5', '#fcc5c0', '#fde0dd', '#fff7f3'],
      ['#91003f', '#ce1256', '#e7298a', '#df65b0', '#c994c7', '#d4b9da', '#e7e1ef', '#f7f4f9'],
      ['#b10026', '#e31a1c', '#fc4e2a', '#fd8d3c', '#feb24c', '#fed976', '#ffeda0', '#ffffcc'],
      ['#8c2d04', '#cc4c02', '#ec7014', '#fe9929', '#fec44f', '#fee391', '#fff7bc', '#ffffe6'],
      ['#444444', '#7D7D7D', '#B5B5B5', '#EEEEEE', '#3A3921', '#777762', '#B3B3A1', '#F0F0E1']
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
