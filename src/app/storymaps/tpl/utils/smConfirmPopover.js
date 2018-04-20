// A basic in-house jQuery plugin for Bootstrap Popovers as confirmation dialogs.
// Requires jQuery, Bootstrap 3.x
// Intentionally NOT using any ES6 in case it needs to be used as-is on IE11
// https://learn.jquery.com/plugins/basic-plugin-creation/
//
// OPTIONS
// At MINIMUM, calling code needs to provide:
// title (string) -- the title for the confirm dialog
// confirmButtonText (string) -- the text for the confirm button
// denyButtonText (string) -- the text for the deny button
//
// Calling code should provide one or both of these callbacks if button click events are needed:
// onConfirmButtonClick (function) -- called when the confirm button is clicked
// onDenyButtonClick (function) -- called when the deny button is clicked
//
// All bootstrap popover properties can be overridden, except for "html" and "content" properties
//
// Example:
// // creating the popover
// $('#my-element').smConfirmPopover({
//   title: 'Are you sure?',
//   confirmButtonText: 'Yes',
//   denyButtonText: 'No',
//   onConfirmButtonClick: function() {
//     // the confirm button was clicked
//   },
//   onDenyButtonClick: function() {
//     // the confirm button was clicked
//   },
//   // override bootstrap popover/plugin defaults
//   placement: 'right',
//   delay: 2000,
// });
//
// // deleting the confirm popover
// $('#my-element').smConfirmPopover('destroy');
//
(function($) {
  $.fn.smConfirmPopover = function(options) {
    if (options === 'destroy') {
      destroy.bind(this)();
    }
    else {
      init.bind(this)();
    }

    function init() {
      var settings = $.extend({
        trigger: 'focus',
        placement: 'auto top'
      }, options);

      var template = '<div class="sm-confirm-button-container">' +
        '<button class="sm-confirm-button btn btn-sm btn-danger">' + settings.confirmButtonText + '</button>' +
        '<button class="sm-deny-button btn btn-sm btn-default">' + settings.denyButtonText + '</button>' +
      '</div>';

      this.popover({
        trigger: settings.trigger,
        container: settings.container || false,
        placement: settings.placement,
        html: true,
        title: settings.title,
        content: template
      });

      addEvents.bind(this)(settings);
    }

    function destroy() {
      removeEvents.bind(this)();
      this.popover('destroy');
    }

    function addEvents(settings) {
      this.on('shown.bs.popover', function() {
        $('.sm-confirm-button').on('click', function(e) {
          settings.onConfirmButtonClick && settings.onConfirmButtonClick(e);
        });
        $('.sm-deny-button').on('click', function(e) {
          settings.onDenyButtonClick && settings.onDenyButtonClick(e);
        });
      });
    }

    function removeEvents() {
      $('.sm-confirm-button').off('click');
      $('.sm-deny-button').off('click');
    }

    return this;
  };
}(jQuery));
