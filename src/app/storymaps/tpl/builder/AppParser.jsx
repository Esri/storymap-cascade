import NormalizeHelper from 'issue-checker/helpers/NormalizeHelper';

export default class AppParser {
  static getMedia(sections, isEmptyStory) {
    let media = {
      maps: NormalizeHelper.createObject(),
      scenes: NormalizeHelper.createObject(),
      images: NormalizeHelper.createObject(),
      videos: NormalizeHelper.createObject(),
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
    switch (item.type) {
      case 'image':
        this._updateMediaItem(item.image.url, media.images, sectionID);
        break;
      case 'webmap':
        this._updateMediaItem(item.webmap.id, media.maps, sectionID);
        break;
      case 'webscene':
        this._updateMediaItem(item.webscene.id, media.scenes, sectionID);
        break;
      case 'video':
        this._updateMediaItem(item.video.url, media.videos, sectionID);
        break;
      case 'webpage':
        this._updateMediaItem(item.webpage.url, media.webpages, sectionID);
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
        this._updateMediaItem(item.url, media.images, sectionID);
      }
    }
  }

  /*
    if the item doesn't exist, create a new entry, otherwise just add the section onto the existing stuff.
  */
  static _updateMediaItem(id, media, sectionID) {
    // see if the item exists.
    let item = media.byId[id];

		// if it doesn't yet exist, populate it now.
    if(!item) {
      let newItem = {
        id: id,
        sections: [sectionID]
      };
      // stick it in the data -- the id in the allItems array, and the actual object in byId.
      media.allItems.push(id);
      media.byId[id] = newItem;
    }

		// if it does exist, add a section to the existing item.
    else {
      let sectionIndex = -1;

      sectionIndex = item.sections.indexOf(sectionID);

      if(sectionIndex === -1) {
        item.sections.push(sectionID);
      }
    }
  }
}
