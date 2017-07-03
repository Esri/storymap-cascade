/*
 * Based on Medium Insert Plugin 3.0 development branch on 04/14
 * https://github.com/orthes/medium-editor-insert-plugin
 */

import UIUtils from 'storymaps/tpl/utils/UI';

import {} from 'lib-build/less!./Core';

import has from 'dojo/has';

export default class Core {

  constructor(plugin) {
    this._plugin = plugin;
    this._editor = this._plugin.base;

    this._document = $(document);
    this._editorNode = $(this._editor.elements[0]);

    // The new block menu dom node
    this._menu = null;

    // Advanced placement rules for Immersive
    // This avoid too much measuring that has to be updated at runtime
    // But should be reviewed
    this._placementRules = null;

    this.createMenu();
    this.initEvents();
    this.addBlockEvents();
  }

  setPlacementRules(rules) {
    this._placementRules = rules;

    // jQuery doesn't seems to allow to override values that are set to important with inherit
    if (rules.left) {
      this._menu.attr('style', 'left:' + rules.left);
    }
    this._menu.css(rules);
  }

  // Called when the editor content change
  addBlockEvents() {
    this.getEditorBlocks()
      .removeClass('show-add-invite')
      .off('mousemove')
      .off('mouseleave')
      .mousemove(
        function(e) {
          var target = $(e.target),
              el = target[0];

          if (! target.hasClass('block')) {
            return;
          }

          var position = el.getBoundingClientRect();
          var isOnAddInvite = e.pageY > position.bottom + this.getScrollY();

          $(e.target)
            .toggleClass('show-add-invite', isOnAddInvite)
            // For Safari, also an issue on IE but doesn't help
            .css('cursor', isOnAddInvite ? 'hand' : '');
        }.bind(this)
      )
      .mouseleave(function() {
        var target = $(this);
        if (! target.hasClass('block')) {
          return;
        }

        target
          .toggleClass('show-add-invite', false)
          .css('cursor', '');
      });
  }

  getEditorBlocks() {
    return this._editorNode.find(this._plugin.getBlocksSelector());
  }

  onEditorContentChange() {
    // Need a slight delay for paste
    setTimeout(function() {
      this.addBlockEvents();
    }.bind(this), 200);
  }

  update() {
    this.onEditorContentChange();
  }

  // TODO
  destroy() {
    this._menu.remove();
  }

  createMenu() {
    const buttons = this._plugin.getButtons();

    this._menu = document.createElement('div');
    this._menu.classList.add('add-toolbar-menu-container');
    this._menu.setAttribute('contentediable', false);

    var html = '<div class="add-toolbar-menu"><ul>';

    Object.keys(buttons).forEach(function(name) {
      let button = buttons[name];
      let icon = buttons[name].icon || '';
      let iconHover = buttons[name].iconHover || '';
      let iconNode = `<img class="add-button-icon" src="${icon}" />`;

      html += `<li><a class="add-button" data-button="${name}" data-icon="${icon}" data-icon-hover="${iconHover}">${iconNode} ${button.label}</a></li>`;
    });

    html += '</ul></div>';

    this._menu.innerHTML = html;
    document.body.appendChild(this._menu);

    this._menu = $(this._menu); // Mhhhh
  }

  initEvents() {
    // Listen to all click event (so we can discard when toolbar is active if clicking outside)
    this._plugin.on(document, 'click', this.handleDocumentClick.bind(this));

    // Menu option click
    var buttons = this._menu[0].getElementsByClassName('add-button');
    Array.prototype.forEach.call(buttons, (button) => {
      this._plugin.on(button, 'click', this.handleButtonClick.bind(this));

      if (button.getAttribute('data-icon-hover')) {
        $(button).hover(
          function() {
            $(this).find('img').attr('src', button.getAttribute('data-icon-hover'));
          },
          function() {
            $(this).find('img').attr('src', button.getAttribute('data-icon'));
          }
        );
      }
    });

    // Listen to editor content change to refresh the block evetns
    this._editor.subscribe('editableInput', this.onEditorContentChange.bind(this));

    if (has('mac')) {
      $('body').addClass('is-mac-os');
    }

    this.setPlusPosition();
  }

  setPlusPosition() {
    const scrollDiv = $('<div>', {
      className: 'scrollbar-measure',
      style: 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
    });
    $('body').append(scrollDiv);

    const scrollWidth = scrollDiv[0].offsetWidth - scrollDiv[0].clientWidth;
    if (scrollWidth && scrollWidth > 0) {
      const offsetWidth = scrollWidth / 4;
      UIUtils.addCSSRule(`.section-layout-sequence p.block::before { margin-left: -${offsetWidth}px;}`, 'plus-adjustment');
    }
    scrollDiv.remove();
  }

  handleDocumentClick(e) {
    var target = $(e.target),
        targetIsAddBlock = false,
        targetPosition = null;

    if (this._editorNode.has(target).length && target.hasClass('block')) {
      targetPosition = e.target.getBoundingClientRect();
      if (e.pageY > targetPosition.bottom + this.getScrollY()) {
        targetIsAddBlock = true;
      }
    }

    this.hideMenuAndInvite();

    if (targetIsAddBlock) {
      if (this._menu.hasClass('active')) {
        if (this._menu.data('block-index') == target.index()) {
          this._menu.removeClass('active');
          return;
        }
      }

      this._menu
        .css({
          top: this.getScrollY() + targetPosition.bottom
        })
        .data('block-index', target.index())
        .addClass('active');

      // Hide block toolbar
      if (this._editor.options.extensions && this._editor.options.extensions.blockToolbar) {
        this._editor.options.extensions.blockToolbar.hide();
      }

      target.addClass('add-menu-active');

      //
      // Scroll the page if there isn't enough room for the menu
      //
      let toolbarBBOX = this._menu[0].getBoundingClientRect(),
          scrollOffset = 0;

      if (toolbarBBOX.bottom > app.display.windowHeight) {
        scrollOffset = app.display.windowHeight - toolbarBBOX.bottom;
      }

      if (scrollOffset) {
        var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        $('html,body').animate({
          scrollTop: currentScroll - scrollOffset + 10
        }, 150);
      }
    }
  }

  hideMenuAndInvite() {
    this.getEditorBlocks().removeClass('add-menu-active');
    this._menu.removeClass('active');
  }

  handleButtonClick(e) {
    const name = e.currentTarget.getAttribute('data-button');
    const buttons = this._plugin.getButtons();

    if (buttons[name].action) {
      var targetEl = this._editorNode.find('.add-menu-active'),
          sectionIndex = targetEl.parents('.section').eq(0).index();

      buttons[name].action({
        previousNode: targetEl,
        sectionIndex: sectionIndex,
        blockIndex: targetEl.index()
      }).then(function(content) {
        let node = null;

        // Adding a new section
        if (! content) {
          this.hideMenuAndInvite();
          return;
        }

        // Adding a block
        targetEl.after(content);
        this.update();
        this.hideMenuAndInvite();

        // Focus text block and display block toolbar
        if (name == 'text') {
          node = targetEl.next();
          this._editor.selectElement(node[0]);

          setTimeout(function() {
            node.click();
          }, 50);
        }

        // First sequence of the story
        if (targetEl.hasClass('block-placeholder')) {
          targetEl.remove();
          this._editorNode.attr('contentEditable', 'true');

          if (node) {
            this._editor.selectElement(node[0]);
            setTimeout(function() {
              node.click();
            }, 50);
          }
        }
      }.bind(this), function() {
        // this catches the cancelled or rejected deferred
        // so it doesn't throw console errors.
      });
    }
  }

  getScrollY() {
    return this._document.scrollTop();
  }
}
