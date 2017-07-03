import NormalizeHelper from './helpers/NormalizeHelper';
import CheckedItem from './CheckedItem';
import AGOLCheckedItem from './AGOLCheckedItem';

export default class Result {
  constructor(mediaIDs) {
    this.media = {
      maps: NormalizeHelper.createObject(),
      scenes: NormalizeHelper.createObject(),
      layers: NormalizeHelper.createObject(),
      images: NormalizeHelper.createObject(),
      videos: NormalizeHelper.createObject(),
      audio: NormalizeHelper.createObject(),
      webpages: NormalizeHelper.createObject()
    };
    this.errors = NormalizeHelper.createObject();
    this.warnings = NormalizeHelper.createObject();

    if (mediaIDs) {
      this._addMediaEntries(mediaIDs);
    }
  }

  _addMediaEntries(mediaIDs) {
    if (mediaIDs.imageIDs) {
      for (let imageID of mediaIDs.imageIDs) {
        let data = new CheckedItem(imageID, 'image');
        NormalizeHelper.addEntry(this.media.images, imageID, data);
      }
    }

    if (mediaIDs.audioIDs) {
      for (let audioID of mediaIDs.audioIDs) {
        let data = new CheckedItem(audioID, 'audio');
        NormalizeHelper.addEntry(this.media.audio, audioID, data);
      }
    }

    if (mediaIDs.videoIDs) {
      for (let videoID of mediaIDs.videoIDs) {
        let data = new CheckedItem(videoID, 'video');
        NormalizeHelper.addEntry(this.media.videos, videoID, data);
      }
    }

    if (mediaIDs.webpageIDs) {
      for (let webpageID of mediaIDs.webpageIDs) {
        let data = new CheckedItem(webpageID, 'webpage');
        NormalizeHelper.addEntry(this.media.webpages, webpageID, data);
      }
    }

    if (mediaIDs.mapIDs) {
      for (let mapID of mediaIDs.mapIDs) {
        let data = new AGOLCheckedItem(mapID, 'map');
        NormalizeHelper.addEntry(this.media.maps, mapID, data);
      }
    }

    if (mediaIDs.sceneIDs) {
      for (let sceneID of mediaIDs.sceneIDs) {
        let data = new AGOLCheckedItem(sceneID, 'scene');
        NormalizeHelper.addEntry(this.media.scenes, sceneID, data);
      }
    }
  }

  addLayerEntries(map) {
    // we cannot assume that there are no duplicates with layers (layers may be used between maps), so we need to only add the ones not on there.
    for (let layer of map.layers) {
      let entry = this.media.layers.byId[layer.id];

      // see if it is already an entry.
      // if so, add the map the layer is used to the existing layer entry.
      if (entry) {
        // if a layer is used in the same map more than once (shouldn't happen), then only add it once.
        if (entry.maps.indexOf(map.id) === -1) {
          entry.maps.push(map.id);
        }
      }

      else {
        // if not,
        // add the map onto the layer (so we know which maps the layer belongs to)
        layer.maps.push(map.id);

        // then add the layer into the results object
        NormalizeHelper.addEntry(this.media.layers, layer.id, layer);
      }
    }
  }
}
