define([

], function(

) {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  return {
    isMobileBrowser: function() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i).test(navigator.userAgent);
    },
    hasWebGL: function(returnContext) {
      if (!!window.WebGLRenderingContext) {
        var canvas = document.createElement('canvas'),
            names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'],
            context = false;

        for (var i = 0;i < 4;i++) {
          try {
            context = canvas.getContext(names[i]);
            if (context && typeof context.getParameter == 'function') {
              // WebGL is enabled
              if (returnContext) {
                // return WebGL object if the function's argument is present
                return {name: names[i], gl: context};
              }
              // else, return just true
              return true;
            }
          }
          catch (e) {
            //
          }
        }

        // WebGL is supported, but disabled
        return false;
      }

      // WebGL not supported
      return false;
    },
    addCSSRule: function(style, styleNodeIdAttr, targetIframeNode) {
      var target = 'head';

      //if( has("ie") <= 8 )
      //  return;

      if (targetIframeNode) {
        target = targetIframeNode.contents().find('head');
      }

      if (styleNodeIdAttr) {
        var styleNode = $(target).find('#' + styleNodeIdAttr).eq(0);

        if (styleNode.length) {
          styleNode.html(style);
          return;
        }
      }

      $('<style>')
        .prop('type', 'text/css')
        .attr('id', styleNodeIdAttr)
        .html(style)
        .appendTo(target);
    },
    getUID: function() {
      return Date.now()
        + '-' + s4() + s4()
        + '-' + s4()
        + '-' + s4()
        + '-' + s4()
        + '-' + s4() + s4() + s4();
    }
  };
});
