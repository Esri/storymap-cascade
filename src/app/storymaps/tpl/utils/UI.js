define([
  'lib-build/hbars!storymaps/tpl/view/media/Accordion'
], function(
  accordionViewTpl
) {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  function decodeHtmlTags(text) {
    var updatedText =  text.replaceAll('&amp;', '&');
    return updatedText.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
  }

  function parseElementContentToHTML(element) {
    var elementHtml = decodeHtmlTags(element.innerHTML);
    $(element).html($.parseHTML(elementHtml));
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
    },
    getHeaderHeight: function() {
      var headerHeight = 50;
      if(!window.app.isEmbeddedInEsriStoryMap) {
        headerHeight += 90; //90px is the height of the series header that is shown when not embedded
      }
      return headerHeight;
    },
    //Parse the text into html
    turnBlockTextsIntoHtml: function() {
      $('p.block').each(function(index, element) {
        parseElementContentToHTML(element);
      });      
    },
    //Parse the text into html
    turnTitleTextsIntoHtml: function() {
      $('.title-text, .title, .subtitle, .title-immersive').each(function(index, element) {
        parseElementContentToHTML(element);
      });      
    },  
    /*Turn elements with accordion class into real accordions.*/
    createAccordions: function() {
      var couldBeMoreAccordions = true;
      var accordionLevel = 0;
      var accordionIndex = 0;
      while(couldBeMoreAccordions && accordionLevel < 5) {
        accordionLevel++;
        couldBeMoreAccordions = false;
        $('.accordion').each(function(index, element) {
          couldBeMoreAccordions = true;
          var $accordion = $(element);
          var $accordionContent = $accordion.find('.accordion-content:first');
          var accordionContentHtml = $accordionContent.html();
          $accordionContent.remove();
          var accordionTitleHtml = $accordion.html();
          var accordionId = 'accordion-' +accordionIndex;
          accordionIndex++;
          $accordion.replaceWith(accordionViewTpl({
            accordionId: accordionId,
            accordionTitleHtml: accordionTitleHtml,
            accordionContentHtml: accordionContentHtml
          }));
        });          
      }      
    }
  };
});
