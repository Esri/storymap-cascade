define([
  'lib-app/wow/wow',
  'lib-build/css!lib-app/wow/animate'
], function(

) {
  return {
    init: function() {
      var hidden, visibilityChange;
      // Opera 12.10 and Firefox 18 and later support
      if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      }
      else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
      }
      else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
      }
      else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      }

      function handleVisibilityChange() {
        console.log('App focus is back');

        if (! document[hidden]) {
          new WOW().init(); // eslint-disable-line no-undef
        }

        // TODO pause/play video
      }

      if (typeof document.addEventListener === 'undefined' || typeof document[hidden] === 'undefined') {
        console.log('Page Visibility API not supported');
      }
      else {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
      }

      new WOW().init(); // eslint-disable-line no-undef
    }
  };
});
