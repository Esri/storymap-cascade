define([
  '../../utils/UI',
  'lib-build/less!./Common'
],
function(
  UIUtils
) {

  /*
  function resizeSnapSection2(sectionIndex, sectionTop)
  {
    var posY = sectionTop.toString().slice(-2),
        sectionPos = sectionIndex + 1;

      console.log(sectionIndex, sectionTop, posY);

    if (posY > 50) {
      posY -= 50;
    }

    posY -= 33;

    if (posY < 0) {
      posY = 0;
    }

    // TODO: should use an ID for builder
    UIUtils.addCSSRule(
      '.section:nth-child(' + sectionPos + ').active .background { top: ' + posY + 'px; }',
      'section-bg-' + sectionPos
    );

    // TODO
    if ($(this).hasClass('section-layout-snap-click-action')) {
      UIUtils.addCSSRule(
        '.section:nth-child(' + sectionPos + ').active .foreground { top: ' + posY + 'px; }',
        'section-fg-' + sectionPos
      );
    }
  }
  */

  /*
  function resizeSnapSection(sectionNode)
  {
    var sectionIndex = sectionNode.index() + 1,
        posY = parseInt(sectionNode.position().top).toString().slice(-2);

    console.log(sectionIndex, sectionNode.position().top, posY);

    if (posY > 50) {
      posY -= 50;
    }

    posY -= 37;

    if (posY < 0) {
      posY = 0;
    }

    UIUtils.addCSSRule(
      '.section:nth-child(' + sectionIndex + ').active .background { top: ' + posY + 'px; }',
      'section-bg-' + sectionIndex
    );

    // TODO
    if ($(this).hasClass('section-layout-snap-click-action')) {
      UIUtils.addCSSRule(
        '.section:nth-child(' + sectionIndex + ').active .foreground { top: ' + posY + 'px; }',
        'section-fg-' + sectionIndex
      );
    }
  }
  */

  return {
    initMedia: function(media, mediaCache) {
      return app.ui.MediaFactory.createInstance(media, mediaCache);
    },
    checkErrors: function(config, section, index) {
      var hasError = false;

      //
      // TODO for the prototype, would be best if the message was displayed on screen
      //  instead of in the console
      //

      // cover, sequence, snap-caption, credits
      if (section.background && section.foreground) {
        if (config.backgroundMedia.indexOf(section.background.type) < 0) {
          console.error('Section ', index, ' is using invalid background');
          hasError = true;
        }

        if (section.foreground.layout) {
          if (! config.foregroundLayout || ! config.foregroundLayout.length || config.foregroundLayout.indexOf(section.foreground.layout) < 0) {
            console.error('Section ', index, ' is using invalid foreground');
            hasError = true;
          }
        }
      }
      // Other snap
      else if (section.views) {
        $.each(section.views, function(i, view) {
          if (config.backgroundMedia.indexOf(view.background.type) < 0) {
            console.error('Section ', index, ' - view ' + i + 'is using invalid background');
            hasError = true;
          }
        });
      }
      else {
        console.error('Section ', index, ' is not using a proper background/foreground configuration');
      }

      if (hasError) {
        console.error('Section', index, ' ignored');
        return;
      }
    },
    renderBlocks: function(blocksJSON) {
      var resMarkup = '',
          lastBlockType = null,
          blocks = [],
          block = null,
          style = '';

      $.each(blocksJSON, function(i, blockJSON) {
        block = app.ui.MediaFactory.createInstance(blockJSON);
        style = blockJSON[blockJSON.type].style || [];

        if (! block) {
          return;
        }

        if (! lastBlockType || lastBlockType != 'text') {
          style.push('first-letter-huge');
        }

        resMarkup += block.render({
          placement: 'block',
          style: style
        });

        lastBlockType = blockJSON.type;

        blocks.push(block);
      });

      return {
        output: resMarkup,
        blocks: blocks
      };
    },

    createBlock: function(media) {
      var block = app.ui.MediaFactory.createInstance(media);
      return block;
    },

    // TODO: should renderBackground also init the media?
    renderBackground: function(params) {
      var output = '';

      params = params || {};

      if (! params.media) {
        return output;
      }

      // from now alternate is only for mobile
      if (UIUtils.isMobileBrowser() && params.media.getAlternate && params.media.getAlternate()) {
        params.media = params.media.getAlternate();
      }

      if (! params.noBackgroundTag) {
        var bgOptions = ' ' + (params.media.options || '');

        var optClass = [];
        if (params.transition) {
          optClass.push(' transition-' + params.transition);
        }

        output += '<div class="background background-type-' + params.media.type + ' ' + optClass.join(' ') + '" style="' + bgOptions + '">';
      }

      output += params.media.render({
        placement: 'background'
      });

      if (! params.noBackgroundTag) {
        output += '</div>';
      }

      return output;
    },

    getMediaIndexes: function(medias, mediaSearched, fromObject) {
      if (! medias || ! medias.length || ! mediaSearched) {
        return -1;
      }

      var mediaSearchedType = mediaSearched.type,
          mediaSearchedInfos = null;

      if (fromObject) {
        mediaSearchedInfos = mediaSearched;
      }
      else {
        mediaSearchedInfos = mediaSearched[mediaSearchedType];
      }

      var foundMediaIndexes = [];

      $.each(medias, function(index, media) {
        if (media.type == mediaSearchedType) {
          /*
           * There is no test for image: they are always duplicated
           */
          if (media.type == 'webmap' || media.type == 'webscene') {
            if (media.id == mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'webpage') {
            if (media.id == mediaSearchedInfos.url) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'video') {
            if (media.id == mediaSearchedInfos.source + '-' + mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
          else if (media.type == 'image') {
            if (media.id == mediaSearchedInfos.id) {
              foundMediaIndexes.push(index);
            }
          }
        }
      });

      return foundMediaIndexes;
    },

    //resizeSnapSection2: resizeSnapSection2,
    resize: function() {
      /*
       * Set the correct snapping position for Snap section
       */
      // TODO snap baseclass
      /*$('.section-immersive').each(function() {
        resizeSnapSection($(this));
      });*/

      /*
      $('.section-immersive .background-type-image').each(function(i, screen) {
        var bgCaption = $(this).find('.background .caption');

        if (bgCaption.length) {
          bgCaption.css('top', app.display.sectionHeight - 200);
        }
      });
      */

      /*
      UIUtils.addCSSRule(
        // - 100 to make sure in all scroll condition, all the image would be visible
        '.image.block.size-small { max-height: ' + (app.display.sectionHeight - 100) + 'px; }',
        'image-block'
      );
      */
    },

    applyTitleStyle: function(style, textNode, backgroundNode) {
      if (style) {
        if (style.background) {
          if (style.background === 'light') {
            backgroundNode.addClass('background-light');
            backgroundNode.removeClass('background-dark');
          }
          else {
            backgroundNode.addClass('background-dark');
            backgroundNode.removeClass('background-light');
          }
        }
        else {
          backgroundNode.removeClass('background-dark');
          backgroundNode.removeClass('background-light');
        }

        if (style.text) {
          if (style.text === 'light') {
            textNode.addClass('text-light');
            textNode.removeClass('text-dark');
          }
          else {
            textNode.addClass('text-dark');
            textNode.removeClass('text-light');
          }
        }

        if (style.shadow) {
          textNode.addClass('text-shadow');
        }
        else {
          textNode.removeClass('text-shadow');
        }
      }
    }
  };
});
