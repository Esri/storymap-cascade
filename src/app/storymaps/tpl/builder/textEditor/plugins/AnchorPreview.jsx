import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

import {} from 'lib-build/less!./AnchorPreview';

var AnchorPreview = MediumEditor.extensions.anchorPreview.extend({
  name: 'anchor-preview',
  init: function() {
    MediumEditor.extensions.anchorPreview.prototype.init.call(this);
  },
  getTemplate: function() {
    return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">' +
      '    <a class="medium-editor-toolbar-anchor-preview-inner" target="_blank"></a>' +
      '    <i class="fa fa-trash-o delete-btn" aria-hidden="true"></i>' +
      '    <i class="fa fa-pencil edit-btn" aria-hidden="true"></i>' +
      '</div>';
  },
  handleClick: function(event) {
    var anchorExtension = this.base.getExtensionByName('anchor'),
        activeAnchor = this.activeAnchor;

    if (anchorExtension && activeAnchor) {
      // Add a custom class to the edit toolbar for style
      $(anchorExtension.form).parent().addClass('medium-editor-toolbar-anchor-sm');

      // Delete
      if (event.target.classList.contains('delete-btn')) {
        MediumEditor.selection.selectNode(this.activeAnchor, document);

        anchorExtension.execAction('unlink');
        event.preventDefault();
      }

      // Edit
      if (event.target.classList.contains('edit-btn')) {
        MediumEditor.selection.selectNode(this.activeAnchor, document);

        event.preventDefault();

        // Using setTimeout + delay because:
        // We may actually be displaying the anchor form, which should be controlled by delay
        this.base.delay(function() {

          if (activeAnchor) {
            var opts = {
              value: activeAnchor.attributes.href.value,
              target: activeAnchor.getAttribute('target'),
              buttonClass: activeAnchor.getAttribute('class')
            };
            anchorExtension.showForm(opts);
            activeAnchor = null;
          }
        }.bind(this));
      }
    }

    this.hidePreview();
  },
  positionPreview: function(activeAnchor) {
    activeAnchor = activeAnchor || this.activeAnchor;

    var buttonHeight = this.anchorPreview.offsetHeight,
        boundary = activeAnchor.getBoundingClientRect(),
        middleBoundary = (boundary.left + boundary.right) / 2,
        diffLeft = this.diffLeft,
        halfOffsetWidth,
        defaultLeft;

    halfOffsetWidth = this.anchorPreview.offsetWidth / 2;

    var toolbarExtension = this.base.getExtensionByName('toolbar');

    if (toolbarExtension) {
      diffLeft = toolbarExtension.diffLeft;
    }

    defaultLeft = diffLeft - halfOffsetWidth;

    this.anchorPreview.style.top = Math.round(boundary.top - buttonHeight + this.window.pageYOffset) + 'px';
    this.anchorPreview.style.right = 'initial';

    if (middleBoundary < halfOffsetWidth) {
      this.anchorPreview.style.left = defaultLeft + halfOffsetWidth + 'px';
      this.anchorPreview.style.right = 'initial';
    }
    else if ((this.window.innerWidth - middleBoundary) < halfOffsetWidth) {
      this.anchorPreview.style.left = 'auto';
      this.anchorPreview.style.right = 0;
    }
    else {
      this.anchorPreview.style.left = defaultLeft + middleBoundary + 'px';
      this.anchorPreview.style.right = 'initial';
    }
  }
});

export default AnchorPreview;
