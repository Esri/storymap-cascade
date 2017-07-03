import Credits from './Credits';
import CommonHelper from 'storymaps/common/utils/CommonHelper';

import viewTpl from 'lib-build/hbars!./CreditsItemBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class CreditsBuilder extends Credits {
  constructor(credits) {
    super(credits);

    this._onContentChange = null;
    // builder variable
  }

  render(context) {
    if (!this._credits || !context) {
      console.log('Could not render credits block in section');
      return '';
    }

    let markup = `<div id="${this._domID}" class="block block-type-credits" contenteditable="false"><ul class="cr-list">`;

    if (this._credits.length) {
      for (let credit of this._credits) {
        markup += viewTpl({
          label: credit.label,
          link: credit.link,
          source: credit.source,
          text: i18n.builder.credits,
          empty: false,
          incomplete: false
        });
      }
    }
    else {
      markup += viewTpl({
        label: null,
        link: null,
        source: null,
        text: i18n.builder.credits,
        empty: true,
        incomplete: true
      });
    }

    markup += '</ul></div>';

    return markup;
  }

  addPopoverEvents(element) {
    element.find('.cr-item-input[data-toggle="popover"]').popover({
      html: true,
      // don't use arrow function because it messes up the "this" that bootstrap uses
      content: function() {
        let link = $(this).data('link');
        return `<div class="form-group form-group-sm"><input type="text" class="credit-link" placeholder="${i18n.builder.credits.linkPrompt}" value="${link}"></div>`;
      },
      trigger: 'manual',
      placement: 'top'
    });

    element.find('.cr-item-input[data-toggle="popover"]').focus(event => {
      let target = $(event.currentTarget);

      // show the popover if it's not already shown
      if (!target.data('bs.popover').$tip) {
        target.popover('show');
      }
      else if (!target.data('bs.popover').$tip.hasClass('in')) {
        target.popover('show');
      }
    });

    element.find('.cr-item-input[data-toggle="popover"]').blur(event => {
      let target = $(event.currentTarget);

      setTimeout(function() {
        // see if the input in the popover is focused, if not, dismiss
        let popover = target.data('bs.popover');
        if (popover.$tip && !popover.$tip.find('.credit-link').is(':focus')) {
          target.popover('hide');
        }
      }, 50);
    });

    let self = this;
    element.find('.cr-item-input[data-toggle="popover"]').on('shown.bs.popover', function() {
      let trigger = $(this);
      let popover = $(this).data('bs.popover');

      popover.$tip && popover.$tip.find('.credit-link').blur(() => {
        // see if the input is now focused on. If not, hide it.
        setTimeout(function() {
          if (!trigger.is(':focus')) {
            trigger.popover('hide');
          }
        }, 50);
        self._onContentChange();
        self.validate(element, trigger);
      });

      popover.$tip && popover.$tip.find('.credit-link').on('keyup', () => {
        self._onContentChange();
      });

      popover.$tip && popover.$tip.find('.credit-link').on('paste', event => {
        let target = $(event.currentTarget);
        setTimeout(() => {
          let text = self.sanitizeText(target[0].value);

          target[0].value = text;
        }, 0);
      });
    });

    // we need to persist the value of the input field, so when it's hiding, read the value and write it to the triggering element.
    element.find('.cr-item-input[data-toggle="popover"]').on('hide.bs.popover', function() {
      let popover = $(this).data('bs.popover');

      if (popover.$tip) {
        let value = popover.$tip.find('.credit-link').val();
        // set it back to the data-link that we are using to create the popover
        let trimmedValue = value.trim();
        // add/remove link-like styling if there is or isn't a link here
        if (!trimmedValue) {
          $(this).removeClass('cr-link');
        }
        else {
          $(this).addClass('cr-link');
        }

        let urlTrimmedValue = CommonHelper.prependURLHTTP(trimmedValue);
        $(this).data('link', urlTrimmedValue);
      }
    });
  }

  showValidationError(element) {
    element.find('.cr-item-input').addClass('cr-error');
    element.find('.cr-validation-warning').removeClass('cr-hidden');
  }

  hideValidationError(element) {
    element.find('.cr-item-input').removeClass('cr-error');
    element.find('.cr-validation-warning').addClass('cr-hidden');
  }

  addEvents(element) {
    this.addPopoverEvents(element);
    // builder stuff
    element.find('.cr-builder-ui').hover(event => {
      let target = $(event.currentTarget);

      target.removeClass('cr-hidden');
      target.find('.cr-add-button').removeClass('cr-hidden');
    }, event => {
      let target = $(event.currentTarget);
      target.addClass('cr-hidden');
      target.find('.cr-add-button').addClass('cr-hidden');
    });

    element.find('.cr-item-main').hover(event => {
      let target = $(event.currentTarget);
      let parent = target.closest('.cr-item');
      let numCreditsNodes = this._node.find('.cr-item').length;

      // if there is more than one credit OR there's only one but it's not empty, allow for removing it.
      if (!parent.hasClass('cr-empty') || numCreditsNodes > 1) {
        target.find('.cr-item-remove').removeClass('cr-hidden');
      }
    }, event => {
      let target = $(event.currentTarget);

      target.find('.cr-item-remove').addClass('cr-hidden');
    });

    element.find('.cr-add-button').on('click', event => {
      let target = $(event.currentTarget);
      let itemContainer = target.closest('.cr-item');
      // insert it after this item.
      itemContainer.after(this.renderEmptyCredit());
      // and then add its events
      this.addEvents(itemContainer.next('.cr-item'));
      this._onContentChange();
    });

    element.find('.cr-item-remove').on('click', event => {
      let target = $(event.currentTarget);
      let itemContainer = target.closest('.cr-item');

      // destroy the attached popover, and remove the element from the DOM
      itemContainer.find('.cr-item-input[data-toggle="popover"]').popover('destroy');
      itemContainer.remove();

      // see how many items there are now. If none, then add an empty one in its place.
      let numCredits = this._node.find('.cr-item').length;
      if (numCredits === 0) {
        let newCredit = this.renderEmptyCredit();
        let creditsListNode = this._node.find('.cr-list');
        creditsListNode.append(newCredit);
        // and add an event to it (it is the "last" child there -- should be the only child there)
        this.addEvents(creditsListNode.children(':last'));
      }
      this._onContentChange();
    });

    element.find('.cr-item-input').on('keyup', event => {
      let parent = $(event.currentTarget).closest('.cr-item');
      let contentInputValue = parent.find('.cr-item-input.cr-content')[0];
      let sourceInputValue = parent.find('.cr-item-input.cr-source')[0];

      if(contentInputValue && sourceInputValue) {
        let contentText = contentInputValue.textContent;
        let sourceText = sourceInputValue.textContent;

        // if EITHER input is non-empty, take off the empty tag.
        if (contentText.length > 0 || sourceText.length > 0) {
          parent.removeClass('cr-empty');
        }
        else {
          parent.addClass('cr-empty');
        }

        // if BOTH inputs are non-empty, we deem the element complete.
        if (contentText.length > 0 && sourceText.length > 0) {
          parent.removeClass('cr-incomplete');
          this.hideValidationError(parent);
        }
        // if they're BOTH empty, we'll remove the errors.
        else if (contentText.length === 0 && sourceText.length === 0) {
          this.hideValidationError(parent);
        }
        else {
          parent.addClass('cr-incomplete');
        }
      }
      this._onContentChange();
    });

    // if hit enter on a filled-out row, put in a new credit row beneath it.
    element.find('.cr-item-input').on('keydown', event => {
      if (event.keyCode === 13) {
        let parent = $(event.currentTarget).closest('.cr-item');

        if (!parent.hasClass('cr-incomplete')) {
          parent.after(this.renderEmptyCredit());
          // and then add its events
          this.addEvents(parent.next('.cr-item'));
        }
        // but don't allow enter to make a newline in the credits.
        event.preventDefault();
      }

      // Prevent ctrl + B/I/U or ctrl + b/i/u
      if(event.ctrlKey || event.metaKey) {
        var key = event.keyCode;
        if (key == 66 || key == 98 || key == 73 || key == 105 || key == 85 || key == 117) {
          return false;
        }
      }
    });

    element.find('.cr-item-input').on('paste', event => {
      let target = $(event.currentTarget);
      setTimeout(() => {
        let text = this.sanitizeText(target[0].textContent);

        target[0].innerHTML = text;
      }, 0);
    });

    element.find('.cr-item-input').blur(event => {
      let target = $(event.currentTarget);

      this.validate(element, target);
      this._onContentChange();
    });
  }

  validate(element, target) {
    setTimeout(() => {
      let item = target.closest('.cr-item');
      // if the text inputs are in focus
      let inputsInFocus = element.find('.cr-item-input').is(':focus');
      // if the popover in focus
      let popoverInFocus = element.find('.popover .credit-link').is(':focus');
      // if the item is partially filled out (but not empty)
      let dirty = item.hasClass('cr-incomplete') && !item.hasClass('cr-empty');
      // if none of the editing fields are in focus and the item is partially filled out, show the error.
      if (!inputsInFocus && !popoverInFocus && dirty) {
        this.showValidationError(item);
      }
      else {
        this.hideValidationError(item);
      }
    }, 50);
  }

  renderEmptyCredit() {
    return viewTpl({
      label: '',
      link: '',
      source: '',
      text: i18n.builder.credits,
      empty: true,
      incomplete: true
    });
  }

  postCreate(params) {
    super.postCreate(params);
    this._onContentChange = params.onContentChange;

    this.addEvents(this._node.find('.cr-item'));
  }

  sanitizeText(rawValue) {
    let sanitizedText = $('<div>' + rawValue + '</div>').text();

    return sanitizedText;
  }

  serialize() {
    // clear the credits list
    this._credits = [];

    // get all the non-empty credit items
    let creditNodes = this._node.find('.cr-item:not(.cr-empty)');

    for (let node of creditNodes) {
      let $node = $(node);
      // sanitize each input
      let sanitizedLabel = this.sanitizeText($node.find('.cr-item-input.cr-content').text());
      let sanitizedSource = this.sanitizeText($node.find('.cr-item-input.cr-source').text());
      let sanitizedLink = this.sanitizeText($node.find('.cr-item-input.cr-source').data('link'));

      let credit = {
        label: sanitizedLabel,
        source: sanitizedSource,
        link: sanitizedLink
      };

      this._credits.push(credit);
    }

    // we don't want the instanceID put on and credits aren't handled like other media
    return super.serialize('credits', this._credits, false);
  }
}
