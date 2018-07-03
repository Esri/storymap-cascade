import MapEditor from 'storymaps-react/tpl/builder/mapEditor/WebMapEditor';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';
import topic from 'dojo/topic';
import {} from 'lib-build/less!./Common';

export default class SectionCommon {
  static initMedia(params) {
    return app.ui.MediaFactory.createInstance({
      mediaJSON: params.media,
      mediaCache: params.mediaCache,
      isNewMedia: params.isNewMedia
    });
  }

  static checkErrors(config, section, index) {
    let hasError = false;

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
  }

  static renderBlocks(blocksJSON) {
    let resMarkup = '';
    let lastBlockType = null;
    const blocks = [];
    let block = null;
    let style = '';

    for (let blockJSON of blocksJSON) {
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
    }

    return {
      output: resMarkup,
      blocks: blocks
    };
  }

  static createBlock(media) {
    const block = app.ui.MediaFactory.createInstance({
      mediaJSON: media,
      isNewMedia: true
    });
    return block;
  }

  // TODO: should renderBackground also init the media?
  static renderBackground(params) {
    let output = '';

    params = params || {};

    if (! params.media) {
      return output;
    }

    if (! params.noBackgroundTag) {
      const bgOptions = ' ' + (params.media.options || '');

      const optClass = [];
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
  }

  static getMediaIndexes(medias, mediaSearched, fromObject) {
    if (! medias || ! medias.length || ! mediaSearched) {
      return -1;
    }

    const mediaSearchedType = mediaSearched.type;
    let mediaSearchedInfos = null;

    if (fromObject) {
      mediaSearchedInfos = mediaSearched;
    }
    else {
      mediaSearchedInfos = mediaSearched[mediaSearchedType];
    }

    const foundMediaIndexes = [];

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
  }

  //resizeSnapSection2: resizeSnapSection2,
  static resize() {

  }

  static onEditMediaAlternate(params) {
    const newMedia = this.initMedia({
      media: params.newMediaJSON,
      isNewMedia: true
    });

    // also, how get it its caption that it'll need?
    params.mainMedia.setAlternate(newMedia);

    newMedia.postCreate();

    newMedia.load();

    params.oldMedia && params.oldMedia.destroy();

    this.checkMedia(params.newMediaJSON);
  }

  static onRemoveMediaAlternate(params) {
    // not only destroy the media, but tell the parent to remove it so it won't be serialized.
    params.mainMedia.removeAlternate();

    params.media && params.media.destroy();
    this.checkMedia();
  }

  static _applyTitleBackground(style, backgroundNode) {
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
  }

  static _applyTitleText(style, textNode) {
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
  }

  static _applyTextShadow(style, textNode) {
    if (style.shadow) {
      textNode.addClass('text-shadow');
    }
    else {
      textNode.removeClass('text-shadow');
    }
  }

  static applyTitleStyle(style, textNode, backgroundNode) {
    if (style) {
      this._applyTitleBackground(style, backgroundNode);
      this._applyTitleText(style, textNode);
      this._applyTextShadow(style, textNode);
    }
    else {
      textNode.addClass('text-shadow');
    }
  }

  static checkMedia(item) {
    if (item && item.type === 'image-gallery') {
      return;
    }

    if (item && item.type === 'image' && item.image.uploadDeferred) {
      item.image.uploadDeferred.then(
        () => {
          // do an issue check
          topic.publish('builder-should-check-story');
        },
        () => {
          // do an issue check
          topic.publish('builder-should-check-story');
        }
      );
    }
    else {
      // do an issue check
      topic.publish('builder-should-check-story');
    }
  }

  static launchMapEditor(media) {
    return new Promise((resolve, reject) => {
      const mapEditor = new MapEditor({
        container: $('#mapEditPopup')
      });
      const params = media ? { id: media.id } : { newMap: true };

      mapEditor.present(params)
      .then(results => {
        let webmapObj = null;
        if (results.newMap && results.newMapInfos) {
          // if creating a new map or doing "save-as" on existing mapEditor
          // if we're editing someone else's map, we hit "save as" to make a copy
          // so we treat this as "adding a new item"
          webmapObj = {
            type: 'webmap',
            id: results.newMapInfos.id
          };
        }
        else {
          // if we're editing our own map ("save", not "save as") -- we basically want to "reload" it
          // We want to keep the overrides to location, layers, popups, etc
          // so we use the same JSON as the pre-edited media (since all changes to the map in the map editor
          // are on the map item itself, not in our JSON).
          const mediaProperty = `_${media.type}`;
          webmapObj = media[mediaProperty];
        }

        resolve({
          type: 'webmap',
          webmap: webmapObj
        });
      }, () => {
        reject();
      });
    });
  }

  static launchMapEditorFromMediaPicker() {
    return new Promise((resolve, reject) => {
      const modal = app.builder.mediaPicker.getContainerNode();

      // having 2 modals open at once causes issues. So wait to launch the map editor modal
      // until the media picker modal is fully hidden.
      modal.on('hidden.bs.modal', () => {
        // don't love setTimeout but it makes for a better UX to wait slightly before opening the map editor
        setTimeout(() => {
          this.launchMapEditor(null).then(results => {
            resolve(results);
          }, () => {
            reject();
          });
        }, 500);

        // VERY important to unsubscribe right after event is caught; we don't want to open the map editor
        // any time the media picker is closed for any reason... just when it's for this case.
        modal.off('hidden.bs.modal');
      });
    });
  }

  static isSameMediaWithSecureProtocol(oldMedia, newMedia) {
    const isSameMediaType = newMedia.type === oldMedia.type;
    const isApplicableMediaType = oldMedia.type === 'webpage' || oldMedia.type === 'image' || oldMedia.type === 'audio' || oldMedia.type === 'video';

    if (!isApplicableMediaType || !isSameMediaType) {
      return false;
    }

    const oldMediaUrl = oldMedia[`_${newMedia.type}`].url;
    const newMediaUrl = newMedia[newMedia.type].url;

    const sameUrlNowHttps = CommonHelper.forceHttpsUrl(oldMediaUrl) === newMediaUrl;
    const sameURLNowProtocolRelative = CommonHelper.forceProtocolRelativeUrl(oldMediaUrl) === newMediaUrl;
    const oldMediaIsHttp = oldMediaUrl.indexOf('http://') !== -1;

    return oldMediaIsHttp && (sameUrlNowHttps || sameURLNowProtocolRelative);
  }

  static onEditBackgroundVideo(medias, newMediaJSON, newMedia) {
    const mediaIndexes = this.getMediaIndexes(medias, newMediaJSON);
    $.each(mediaIndexes, (i, mediaIndex) => {
      const media = medias[mediaIndex];
      if (media.updateParams) {
        media.updateParams(newMedia);
      }
    });
  }
}
