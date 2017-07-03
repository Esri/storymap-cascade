define([
  '../../utils/UI',
  'dojo/topic',
  'lib-build/less!./Common'
],
function(
  UIUtils,
  topic
) {
  return {
    initMedia: function(params) {
      return app.ui.MediaFactory.createInstance({
        mediaJSON: params.media,
        mediaCache: params.mediaCache,
        isNewMedia: params.isNewMedia
      });
    },
    checkErrors: function(config, section, index) {
      var hasError = false;

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
        block = app.ui.MediaFactory.createInstance({
          mediaJSON: blockJSON
        });
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
      var block = app.ui.MediaFactory.createInstance({
        mediaJSON: media,
        isNewMedia: true
      });
      return block;
    },

    // TODO: should renderBackground also init the media?
    renderBackground: function(params) {
      var output = '';

      params = params || {};

      if (! params.media) {
        return output;
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
        placement: 'background',
        sectionType: params.sectionType
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
          else if (media.type == 'audio') {
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

    },

    onEditMediaAlternate: function(params) {
      var newMedia = this.initMedia({
        media: params.newMediaJSON,
        isNewMedia: true
      });

      // also, how get it its caption that it'll need?
      params.mainMedia.setAlternate(newMedia);

      newMedia.postCreate();

      newMedia.load();

      params.oldMedia && params.oldMedia.destroy();

      this.checkMedia(params.newMediaJSON);
    },

    onRemoveMediaAlternate: function(params) {
      // not only destroy the media, but tell the parent to remove it so it won't be serialized.
      params.mainMedia.removeAlternate();

      params.media && params.media.destroy();
      this.checkMedia();
    },

    _applyTitleBackground: function(style, backgroundNode) {
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
    },

    _applyTitleText: function(style, textNode) {
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
    },

    _applyTextShadow: function(style, textNode) {
      if (style.shadow) {
        textNode.addClass('text-shadow');
      }
      else {
        textNode.removeClass('text-shadow');
      }
    },

    applyTitleStyle: function(style, textNode, backgroundNode) {
      if (style) {
        this._applyTitleBackground(style, backgroundNode);
        this._applyTitleText(style, textNode);
        this._applyTextShadow(style, textNode);
      }
      else {
        textNode.addClass('text-shadow');
      }
    },

    checkMedia: function(item) {
      if (item && item.type === 'image-gallery') {
        return;
      }

      if (item && item.type === 'image' && item.image.uploadDeferred) {
        item.image.uploadDeferred.then(
          function() {
            // do an issue check
            topic.publish('builder-should-check-story');
          }.bind(this),
          function() {
            // do an issue check
            topic.publish('builder-should-check-story');
          }.bind(this)
        );
      }
      else {
        // do an issue check
        topic.publish('builder-should-check-story');
      }
    }
  };
});
