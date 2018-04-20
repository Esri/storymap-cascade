import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./Anchor';

var SELECTION = MediumEditor.selection;

var Anchor = MediumEditor.extensions.anchor.extend({
  name: 'anchor',
  aria: '',
  placeholderText: i18n.builder.textEditor.link.invite,
  linkValidation: true,
  init: function() {
    MediumEditor.extensions.anchor.prototype.init.call(this);
  },
  // Make sure to add a class we can style with CSS
  // Not sure why but '' is only added second time the form is displayed
  createForm: function() {
    var form = MediumEditor.extensions.anchor.prototype.createForm.call(this);
    form.className += ' medium-editor-toolbar-anchor-creation';
    return form;
  },
  completeFormSave: function(opts) {
    MediumEditor.extensions.anchor.prototype.completeFormSave.call(this, opts);

    // Clear selected text
    //SELECTION.clearSelection(document);

    // Hide regular toolbar
    this.hideToolbarDefaultActions();

    setTimeout(function() {
      // Make sure that the anchor toolbar is fully hidden
      var toolbar = this.base.getExtensionByName('toolbar');
      if (toolbar) {
        toolbar.hideToolbar();
      }

      // Open anchor preview
      var anchorPreview = this.base.getExtensionByName('anchor-preview');
      anchorPreview.handleEditableMouseover({
        target: SELECTION.getSelectedElements(document)[0]
      });
    }.bind(this), 0);

    /*
    // Attempt to trigger hover on the link to have the preview toolbar to open
    $(_selection.getSelectedElements(document)).trigger('mouseenter');

    setTimeout(function() {
      console.log(_selection);
      $(_selection.getSelectedElements(document)).trigger('mouseenter');
    }, 100);
    */
  }
});

export default Anchor;
