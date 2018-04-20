import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';
import ColorPickerWrapper from 'storymaps-react/tpl/builder/ColorPicker';

var SELECTION = MediumEditor.selection;

// Helpers function to save/restore editor selection
// We are bypassing those as it was creating issues when defining
//   a color for the first word of a paragraph following a media
//   (only when inserted in the same session)

function saveSelection() {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  }
  else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }

  return null;
}

function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    else if (document.selection && range.select) {
      range.select();
    }
  }
}

const ColorPicker = MediumEditor.extensions.button.extend({
  name: 'colorPicker',
  action: 'applyForeColor',
  aria: 'color picker',

  init: function() {
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<i class="fa fa-paint-brush" aria-hidden="true"></i>';

    ColorPickerWrapper.initPicker({
      element: this.button,
      showPalette: true,
      onShowCallback: this.onShow.bind(this),
      onChangeCallback: this.onChange.bind(this),
      // Also listening to move because change is not fired the second time
      //  editor is open and you pick the same color
      //  even if you have set the color through set :/
      onMoveCallback: this.onChange.bind(this),
      onHideCallback: this.onHide.bind(this),
      showAlpha: true,
      showClear: true
    });

    this.on(this.button, 'click', this.handleClick.bind(this));
  },

  handleClick: function() {
    // Keep track of the current text selection
    //this._selectedText = this.base.exportSelection();
    this._selectedText = saveSelection();

    // Update color picker with text color
    var selectedTextColor = $(this.base.getSelectedParentElement()).css('color');
    $(this.button).spectrum('set', selectedTextColor);
  },

  onShow: function() {
    this._colorSelected = false;
  },

  onChange() {
    this._colorSelected = true;
  },

  onHide: function(color) {
    // Restore selection
    //this.base.importSelection(this._selectedText);
    restoreSelection(this._selectedText);

    if (this._colorSelected) {
      this.document.execCommand('styleWithCSS', false, true);
      if (color === null) {
        this.document.execCommand('removeFormat', false, 'foreColor');
      }
      else {
        this.document.execCommand('foreColor', false, color);
      }

      // Clear selection to allow immediate view of applied color
      SELECTION.clearSelection(document);
    }

    // Show or hide toolbar
    setTimeout(function() {
      var toolbar = this.base.getExtensionByName('toolbar');
      if (toolbar) {
        if (this._colorSelected) {
          toolbar.hideToolbar();
        }
        else {
          toolbar.showToolbar();
        }
      }
    }.bind(this), 0);
  }
});

export default ColorPicker;
