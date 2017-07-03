import NormalizeHelper from 'issue-checker/helpers/NormalizeHelper';

export default class AppParser {
  static getMedia(sections, isEmptyStory) {
    let media = {
      maps: NormalizeHelper.createObject(),
      scenes: NormalizeHelper.createObject(),
      images: NormalizeHelper.createObject(),
      videos: NormalizeHelper.createObject(),
      audio: NormalizeHelper.createObject(),
      webpages: NormalizeHelper.createObject()
    };

    if (isEmptyStory) {
      return media;
    }

    if (!sections) {
      return media;
    }

    // loop through all sections and when find media send it there.
    // we'll do the same.
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      // our index is 0-based, so the 0th index is actually section 1.
      let sectionID = section.id;

      switch (section.type) {
        case 'cover':
        case 'sequence':
        case 'title':
          this._parseSection(section.background, section.foreground.blocks, media, sectionID);
          break;
        case 'immersive':
          this._parseImmersiveSection(section, media, sectionID);
          break;
        case 'credits':
          this._parseCreditsSection(section, media, sectionID);
          break;
        default:
          break;
      }
    }
    return media;
  }

  static _parseImmersiveSection(section, media, sectionID) {
    // we will treat each view as if it were its own "section" -- a foreground and some blocks. The section number will of course be the same for all views in an immersive section.
    let background = null;
    let blocks = null;
    let view = null;
    let panel = null;

    for (let i = 0; i < section.views.length; i++) {
      view = section.views[i];
      background = view.background;
      blocks = [];

      // loop through the foreground's panels. For each, take its blocks and concat them on the one previous.
      for (let j = 0; j < view.foreground.panels.length; j++) {
        panel = view.foreground.panels[j];

        // only concat if there are actually blocks
        if (panel && panel.blocks && panel.blocks.length) {
          blocks = blocks.concat(panel.blocks);
        }
      }

      this._parseSection(background, blocks, media, sectionID);
    }
  }

  static _parseCreditsSection(section, media, sectionID) {
    let blocks = [];
    let panel = null;

    for (let i = 0; i < section.foreground.panels.length; i++) {
      panel = section.foreground.panels[i];

      if (panel.type === 'blocks' && panel.blocks && panel.blocks.length) {
        blocks = blocks.concat(panel.blocks);
      }
    }

    this._parseSection(section.background, blocks, media, sectionID);
  }

  static _parseSection(background, blocks, media, sectionID) {
    this._parseMediaItem(background, media, sectionID);
    this._parseBlocks(blocks, media, sectionID);
  }

  static _parseMediaItem(item, media, sectionID) {
    if (item.alternate && item.alternate.image) {
      this._updateMediaItem({
        instanceID: item.alternate.image.instanceID,
        id: item.alternate.image.url,
        media: media.images,
        sectionID: sectionID,
        mediaType: 'image'
      });
    }

    switch (item.type) {
      case 'image':
        this._updateMediaItem({
          instanceID: item.image.instanceID,
          id: item.image.url,
          media: media.images,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'image'
        });
        break;
      case 'audio':
        this._updateMediaItem({
          instanceID: item.audio.instanceID,
          id: item.audio.url,
          media: media.audio,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'audio'
        });
        break;
      case 'webmap':
        this._updateMediaItem({
          instanceID: item.webmap.instanceID,
          id: item.webmap.id,
          media: media.maps,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'map'
        });
        break;
      case 'webscene':
        this._updateMediaItem({
          instanceID: item.webscene.instanceID,
          id: item.webscene.id,
          media: media.scenes,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'scene'
        });
        break;
      case 'video':
        this._updateMediaItem({
          instanceID: item.video.instanceID,
          id: item.video.url,
          media: media.videos,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'video'
        });
        break;
      case 'webpage':
        this._updateMediaItem({
          instanceID: item.webpage.instanceID,
          id: item.webpage.url,
          media: media.webpages,
          sectionID: sectionID,
          alternateMedia: item.alternate && item.alternate.image ? item.alternate.image.instanceID : null,
          mediaType: 'webpage'
        });
        break;
      default:
        break;
    }
  }

  static _parseBlocks(blocks, media, sectionID) {
    if (blocks && blocks.length) {
      for (let block of blocks) {
        if (block.type === 'image-gallery') {
          this._parseImageGallery(block, media, sectionID);
        }
        else {
          this._parseMediaItem(block, media, sectionID);
        }
      }
    }
  }

  static _parseImageGallery(gallery, media, sectionID) {
    if (gallery && gallery['image-gallery'] && gallery['image-gallery'].images) {
      let images = gallery['image-gallery'].images;
      for (let item of images) {
        this._updateMediaItem({
          instanceID: item.instanceID,
          id: item.url,
          media: media.images,
          sectionID: sectionID,
          mediaType: 'image'
        });
      }
    }
  }

  /*
    Create an entry for the media item. we use the instanceId to store it because you can have multiple instances of the same media,
    so it's not reliable to just use the image's url or map's id. This way you have one instance per media.
  */
  static _updateMediaItem(params) {
    let newItem = {
      instanceID: params.instanceID,
      id: params.id,
      section: params.sectionID,
      mediaType: params.mediaType
    };

    if (params.alternateMedia) {
      newItem.alternateMedia = params.alternateMedia;
    }
    // stick it in the data -- the id in the allItems array, and the actual object in byId.
    params.media.allItems.push(params.instanceID);
    params.media.byId[params.instanceID] = newItem;
  }
}
