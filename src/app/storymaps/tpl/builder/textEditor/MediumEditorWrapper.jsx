import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

import {} from 'lib-build/css!lib/medium-editor/dist/css/medium-editor';
import {} from 'lib-build/less!./MediumEditorWrapper';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import BlockToolbar from './plugins/blockToolbar/Plugin';
import BlockAdd from './plugins/blockAdd/Plugin';
import AnchorPreview from './plugins/AnchorPreview';
import ColorPicker from './plugins/ColorPicker';
import Anchor from './plugins/Anchor';

import CommonHelper from 'storymaps/tpl/utils/CommonHelper';
import SectionCommon from 'storymaps-react/tpl/view/section/Common';

import Deferred from 'dojo/Deferred';

/*
 * There is two ways to handle the editor for a set of block
 *  1. instanciate the editor once and have all the block managed by it (images, ...)
 *  2. instanciate one editor for each block we want to be editable
 *
 * Performance either way is not a concern
 * The block toolbar handle both case very well
 *
 * 1. pros: nothing to do when adding/deleting/merging a block
 * 1. cons: can be harder to know what the editor is doing and position the addToolbar in between blocks
 *     Tried two ways to manage the addToolbar:
 *       1.a: use div inside the DOM: make split/merge really hard as the editor need to ignore those
 *       1.b: use pseudo element: harder to style and manage events but don't mess with the editor
 *
 * 2. pros: make it easy to do the add toolbar
 * 2. cons: need to handle adding/deleting/merging a block (catch the enter/backspace and do the work)
 *            also ideally need to handle key navigation
 *
 * The implementation is 1.b
 */

var SELECTION = MediumEditor.selection;

// Default text color - needed to prevent some editor behavior
var DEFAULT_TEXT_COLOR = 'rgb(76, 76, 76)'; // OR #4c4c4c

export default function(params = {}) {
  var _node = params.node,
      _addMedia = params.addMedia,
      _style = params.style,
      _addButtons = params.addButtons || [],
      _authorizedMedia = params.authorizedMedia,
      _onChangeCallback = params.onChange,
      _editor = null;

  if (! _node || ! _addMedia || ! _style) {
    console.error('Could not initialize MediumEditor');
    return;
  }

  let placeholder = {
    text: i18n.builder.textEditor.placeholder.continueStory,
    hideOnClick: false
  };

  if (params.placeholder === false) {
    placeholder = false;
  }

   // Buttons in highlighting toolbar
  const highlightButtons = [
    {
      name: 'bold',
      aria: ''
    },
    {
      name: 'italic',
      aria: ''
    },
    {
      name: 'underline',
      aria: ''
    },
    {
      name: 'strikethrough',
      aria: ''
    },
    {
      name: 'anchor',
      aria: ''
    },
    {
      name: 'colorPicker',
      aria: ''
    }
  ];

  // Buttons in block toolbar
  const blockButtonsFull = ['h1', 'h2', 'quote', 'justifyLeft', 'justifyCenter', 'justifyRight'],
      blockButtonsCompact = ['justifyLeft', 'justifyCenter', 'justifyRight', 'h2'],
      // All block buttons need to have an entry there describing how the block toolbar has to query their status
      // TODO: there must be a more efficient way to do this
      queryStateMethods = {
        justifyLeft: 'ALREADY_APPLIED',
        justifyCenter: 'ALREADY_APPLIED',
        justifyRight: 'ALREADY_APPLIED',
        quote: 'ALREADY_APPLIED',
        h1: 'ALREADY_APPLIED',
        h2: 'ALREADY_APPLIED'/*,
        orderedlist: 'ALREADY_APPLIED',
        unorderedlist: 'ALREADY_APPLIED'*/
      };

  // Buttons in new block menu
  const addButtons = {
    text: {
      icon: 'resources/tpl/builder/icons/text-editor/Text.png',
      label: i18n.builder.textEditor.blockAdd.text,
      action: function() {
        var resultDeferred = new Deferred();

        var html = '<p class="block"></p>';

        resultDeferred.resolve(html);

        return resultDeferred;
      }
    },
    media: {
      icon: 'resources/tpl/builder/icons/text-editor/Media.png',
      label: i18n.builder.textEditor.blockAdd.media,
      action: function(params) {
        function onMediaSelected(resultDeferred, selection) {
          const html = _addMedia({
            media: selection,
            blockIndex: params.blockIndex
          });
          resultDeferred.resolve(html);
        }

        const resultDeferred = new Deferred();
        params = params || {};

        if (! params.previousNode) {
          resultDeferred.reject();
          return resultDeferred;
        }

        app.builder.mediaPicker.open({
          mode: 'add',
          authorizedMedia: _authorizedMedia
        }).then(
          function(selection) {
            onMediaSelected(resultDeferred, selection);
          }, function(message) {
            if (message === 'swap-map-editor') {
              SectionCommon.launchMapEditorFromMediaPicker().then(results => {
                onMediaSelected(resultDeferred, results);
              }, () => {
                resultDeferred.reject();
              });
            }
            else {
              resultDeferred.reject();
            }
          }
        );

        return resultDeferred;
      }
    },
    title: {
      icon: 'resources/tpl/builder/icons/text-editor/Title.png',
      label: i18n.builder.textEditor.blockAdd.title,
      action: function(params = {}) {
        var resultDeferred = new Deferred();

        if (params.sectionIndex === undefined) {
          resultDeferred.reject();
          return resultDeferred;
        }

        app.Controller.splitAndAddSection({
          section: params.sectionIndex,
          split: params.blockIndex,
          type: 'title'
        });

        resultDeferred.resolve();

        return resultDeferred;
      }
    },
    immersive: {
      icon: 'resources/tpl/builder/icons/text-editor/Immersive.png',
      //iconHover: 'resources/tpl/builder/icons/text-editor/Immersive-hover.gif',
      label: i18n.builder.textEditor.blockAdd.immersive,
      action: function(params = {}) {
        var resultDeferred = new Deferred();

        if (params.sectionIndex === undefined) {
          resultDeferred.reject();
          return resultDeferred;
        }

        app.Controller.splitAndAddSection({
          section: params.sectionIndex,
          split: params.blockIndex,
          type: 'immersive'
        });

        resultDeferred.resolve();

        return resultDeferred;
      }
    }
  };

  // Tags that always receive a block class
  var blockElements = 'p, h1, h2, blockquote, ol, ul';

  // Selector used to know what block are decorated with + button
  // TODO: should be defined programattically in the same fashion than blockToolbar
  var addBlocksSelector = '.block';

  // List of media element that:
  // - cannot be deleted with backspace from the next block
  // - are serialized by their parent section or panel
  var mediaElements = '.image-gallery, .image, .block-type-webmap, .block-webpage, .block-type-webscene, .block-type-video, .block-audio';

  //
  // Control what features are exposed
  //

  var addButtonsEnabled = {};
  for (var btn of _addButtons) {
    if (addButtons[btn]) {
      addButtonsEnabled[btn] = addButtons[btn];
    }
  }

  var blockButtonsEnabled = _style == 'compact' ? blockButtonsCompact : blockButtonsFull;

  var blockAddExtension = null;

  if (_addButtons.length) {
    blockAddExtension = new BlockAdd({
      buttons: addButtonsEnabled,
      blocksSelector: addBlocksSelector,
      style: _style
    });
  }

  var editor = new MediumEditor(_node, {
    targetBlank: true,
    autoLink: true,
    imageDragging: false,
    fileDragging: false,
    diffTop: -20,
    buttonLabels: 'fontawesome',
    toolbar: {
      allowMultiParagraphSelection: false,
      buttons: highlightButtons
    },
    placeholder: placeholder,
    paste: {
      // This configuration force only plain text
      forcePlainText: true,
      cleanPastedHTML: false
    },
    extensions: {
      imageDragging: new function() { },
      // TODO? not AMD friendly, can't find Medium...
      //'autolist': new MediumEditorAutolist()
      'blockToolbar': new BlockToolbar({
        buttons: blockButtonsEnabled,
        queryStateMethods: queryStateMethods,
        style: _style
      }),
      'blockAdd': blockAddExtension,
      // Override anchor preview
      'anchor-preview': new AnchorPreview(),
      'anchor': new Anchor(),
      'colorPicker': new ColorPicker()
    }
  });

  if (params.disableEditing) {
    _node.attr('contenteditable', false);
  }

  editor.subscribe('focus', function(event, editable) {
    // if selecting before the block, select in the block instead
    var selection = window.getSelection();
    // Firefox gets the wrong selection sometimes.
    // See if the anchor node is the same as the medium-editor node... it shouldn't be.
    // If it is, and it has a child with class "block", we'll change the selection to be inside of the block instead.
    if (selection.anchorNode === editable && selection.anchorNode.nodeType === 1 && selection.isCollapsed) {
      // find where this selection is.
      var elementIndex = selection.anchorOffset;
      var element = null;
      // select the candidate node.
      var candidateElement = selection.anchorNode.childNodes[elementIndex];

      // if the node is an element, we're good.
      if (candidateElement.nodeType === 1) {
        element = candidateElement;
      }
      // if it's not an element, look directly before or after for an element, taking one if found.
      else {
        var nodeAfter = selection.anchorNode.childNodes[elementIndex + 1];
        var nodeBefore = selection.anchorNode.childNodes[elementIndex - 1];
        if (nodeAfter && nodeAfter.nodeType === 1) {
          element = nodeAfter;
        }
        else if (nodeBefore && nodeBefore.nodeType === 1) {
          element = nodeBefore;
        }
      }

      // select that element if it has the class "block".
      if ($(element).hasClass('block')) {
        selection.collapse(element);
      }
    }
  });

  // Prevent focus on some elements
  editor.subscribe('editableKeydown', function(event) {
    var el = $(editor.getSelectedParentElement());

    // Prevent backspace on some elements
    if (event.keyCode == 8) {
      // If at the start of a block
      if (SELECTION.getSelectionRange(document).startOffset === 0) {
        // If a caption
        if (el.is('.block-caption')) {
          // if you're trying to hit delete an already-empty caption, we will prevent you. Otherwise caption text can be deleted.
          if (SELECTION.getSelectionRange(document).endOffset === 0) {
            event.preventDefault();
          }
        }
        // Inside a media
        else if (el.is(mediaElements) || el.parents('.block').eq(0).is(mediaElements)) {
          event.preventDefault();
        }

        setTimeout(function() {
          _editor.options.extensions.blockToolbar.updateToolbar();
        }, 0);
      }
    }
    // Prevent deleting the next block if it match mediaElements
    else if (event.keyCode == 46) {
      var range = SELECTION.getSelectionRange(document);
      var nextBlock = el.next();

      if (el.hasClass('block') && nextBlock.is(mediaElements)) {
        // delete empty block
        if (range.startOffset == range.startContainer.length) {
          event.preventDefault();
        }
        // delete whole block
        else if (range.startOffset == 0 && range.endOffset == 0 && range.collapsed == false) {
          setTimeout(function() {
            SELECTION.moveCursor(document, nextBlock.find('.block-caption')[0], 0);
            _editor.options.extensions.blockToolbar.updateToolbar();
          }, 0);
        }
      }
    }
    // Arrows
    else if (event.keyCode == 37 || event.keyCode == 38
        || event.keyCode == 39 || event.keyCode == 40) {
      setTimeout(function() {
        _editor.options.extensions.blockToolbar.updateToolbar();
      }, 0);
    }
  });

  editor.subscribe('editableKeydownEnter', function(e) {
    var blockContent = $(editor.getSelectedParentElement());
    var range = SELECTION.getSelectionRange(document);

    // Hide add menu
    blockAddExtension.hide();

    // Insert a new block if hitting enter at the end of a h1/h2/blockquote
    if (blockContent.is('h1') || blockContent.is('h2') || blockContent.is('blockquote')) {
      // Enter on the first character require this
      if (blockContent.prev().is(blockElements)) {
        blockContent.prev().addClass('block');
      }

      if (range.startOffset == range.startContainer.length) {
        // Insert an empty block and focus it
        blockContent.after('<p class="block"></p>');
        MediumEditor.selection.moveCursor(document, blockContent.next()[0], 0);

        setTimeout(function() {
          _editor.options.extensions.blockToolbar.updateToolbar();
        }, 10);

        e.preventDefault();
        return;
      }
    }

    // Insert a new block if hitting enter at the end of a caption
    if (blockContent.is('.block-caption')) {
      if (range.startOffset == range.startContainer.length) {
        blockContent.parents('.block').eq(0).after('<p class="block"></p>');
        MediumEditor.selection.moveCursor(document, blockContent.parents('.block').eq(0).next()[0], 0);
      }

      e.preventDefault();
      return;
    }

    // Prevent adding two consecutive empty block
    if (blockContent.is(addBlocksSelector)) {
      var childrens = blockContent.children();

      // The block is empty
      if (blockContent.html() == '' && childrens.length == 0) {
        e.preventDefault();
      }

      // The previous block is empty and cursor on first character
      if ((blockContent.prev().html() == '' || blockContent.prev().html() == '<br>')
          && range.startOffset === 0) {
        e.preventDefault();
      }

      // Or the block is visually empty...
      if (childrens.length == 1) {
        if (childrens[0].tagName.toLowerCase() == 'br' && ! blockContent.text()) {
          e.preventDefault();
        }
      }
      else {
        // Click on the new next block so the block toolbar is updated
        setTimeout(function() {
          _editor.options.extensions.blockToolbar.updateToolbar();
        }, 100);
      }
    }
  }.bind(this));

  // On text change
  editor.subscribe('editableInput', function(event, editable) {
    var blockContent = $(editor.getSelectedParentElement());

    // Do not allow children inside caption
    if (blockContent.is('p') && blockContent.parent().is('.block-caption')) {
      blockContent.parent().html(blockContent.html());
      return;
    }

    // Add block class to all elements that qualify
    if (blockContent.is(blockElements)) {
      blockContent.addClass('block');
    }
    // Allow to create h1, h2, blockquote from bold, italic, underline
    else if (blockContent.is('b, i, u') && blockContent.parent().is(blockElements)) {
      blockContent.parent().addClass('block');
    }

    // Clean up paste from word
    $(editable).find('p').contents().each(function() {
      if(this.nodeType === Node.COMMENT_NODE || this.nodeType == 8) {
        $(this).remove();
      }
    });

    onContentChange();
  });

  // Prevent the editor from creating span when merging blocks
  // But keep span with a color as that's what the editor use for the text color
  // Need to check if some other properties are not defined. Sometimes the editor use those
  //   instead of b,u,i,strike tags. It seems to always happen once
  //   you have at least a span with a color in a paragraph
  var el = $(editor.elements[0]);
  el.on('input', function() {

    el.children('p, h1, h2, blockquote').children('span[style]').each(function() {
      if ((! this.style.fontWeight && ! this.style.fontStyle && ! this.style.textDecoration)
          && ! this.style.color
          || this.style.color == 'inherit'
          || this.style.color == DEFAULT_TEXT_COLOR) {
        $(this).contents().unwrap();
      }
    });

    // Prevent pressing enter twice rapidely to wrap caption content inside a paragraph
    el.find('.block-caption').find('p').each(function() {
      $(this).contents().unwrap();
    });

    // Specific to block-caption
    setTimeout(function() {
      el.find('.block-caption').children('span[style]').each(function() {
        if ((! this.style.fontWeight && ! this.style.fontStyle && ! this.style.textDecoration)
            && ! this.style.color
            || this.style.color == 'inherit'
            || this.style.color == DEFAULT_TEXT_COLOR) {
          $(this).contents().unwrap();
        }
      });
    }, 50);

    // Prevent invalid block when creating h1/h2/blockquote from empty block through block toolbar
    el.children('h1:not(.block), h2:not(.block), blockquote:not(.block)').children('p:empty').each(function() {
      var ghost = $(this),
          parent = ghost.parent();

      parent.addClass('block');
      ghost.replaceWith('<br>');

      var newEl = parent.children();

      editor.selectElement(newEl[0]);

      setTimeout(function() {
        newEl.click();
      }, 50);
    });

    // A <p>,<h1>,... may be created without block class when changing block using block toolbar
    //  especially if the caret is on a span
    // Would be best for performance to somehow only do this in blockToolbar
    el.children('p:not(.block), h1:not(.block), h2:not(.block), blockquote:not(.block)').addClass('block');
  });

  editor.subscribe('editablePaste', function() {
    setTimeout(function() {
      // Add block class after a paste
      $(editor.elements[0]).find(blockElements).addClass('block');
    }, 100);
  });

  _editor = editor;

  _editor.extensions.forEach((extension) => {
    // Modify placeholder so that it hides if entering an empty block with space
    if (extension.name == 'placeholder') {
      extension.updatePlaceholder = function(el, dontShow) {
        // If the element has content, hide the placeholder
        // if (el.querySelector('img, blockquote, ul, ol') || (el.textContent.replace(/^\s+|\s+$/g, '') !== '')) {
        if (el.querySelector('img, blockquote, ul, ol') || (el.textContent !== '')) {
          return this.hidePlaceholder(el);
        }

        if (!dontShow) {
          this.showPlaceholder(el);
        }
      };
    }
  });

  this.serialize = function() {
    var blocks = [],
        rawOutput = $(_editor.serialize()['element-0'].value);

    $.each(rawOutput, function(i, node) {
      var el = $(node);

      // Ignore text element
      if (node.nodeType == 3) {
        return;
      }

      if (el.is(blockElements)) {
        blocks.push({
          type: 'text',
          text: {
            value: el[0].outerHTML
          }
        });
      }
      else if (el.is(mediaElements)) {
        blocks.push({
          type: 'media',
          id: el.attr('id')
        });
      }
    });

    return blocks;
  };

  this.hideToolbars = function() {
    _editor.options.extensions.blockToolbar.hide();
    _editor.options.extensions.blockAdd.hide();

    _editor.extensions.forEach((extension) => {
      if (extension.name == 'toolbar') {
        extension.hideToolbar();
      }
    });
  };

  this.setAddMenuPlacementRules = function(rules) {
    blockAddExtension.setPlacementRules(rules);
  };

  this.focus = function() {
    _editor.elements[0].focus();
  };

  var onContentChange = CommonHelper.throttle(function() {
    if (_onChangeCallback) {
      _onChangeCallback();
    }
  }, 500);
}
