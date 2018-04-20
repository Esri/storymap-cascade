import esriRequest from 'esri/request';
import ArcGISUtils from 'esri/arcgis/utils';

import AGOLItem from './AGOLItem';
import Layers from './Layers';

export default class Maps extends AGOLItem {
  static check(options) {
    return super.check(options, 'maps')
    .then(results => {
      // after you scan the maps, we need to scan the layers as well.
      return this._checkAllLayers(results, options.appAccess, options.premiumManager, options.orgId, options.privileges);
    });
  }

  static _checkAllLayers(results, appAccess, premiumManager, orgId, privileges) {
    // PER MAP,
    // 1) get all of its layers,
    // 2) scan all of its layers.

    let promises = [];

    // loop thru each of the maps.
    for (let item of results.items) {
      // get each map's layers
      let promise = this._getAllLayers(item.id)
      .then(allLayers => {
        // check each map's layers
        return Layers.check({
          items: allLayers,
          appAccess: appAccess,
          premiumManager: premiumManager,
          orgId: orgId,
          privileges: privileges
        });
      }).then(checkedResult => {
        // add the now-checked layers onto the map.
        item.layers = checkedResult.items;

        return item;
      });

      promises.push(promise);
    }

    return Promise.all(promises)
    .then(() => {
      return results;
    });
  }

  static _getAllLayers(mapID) {
    return new Promise(resolve => {
      esriRequest({
        url: ArcGISUtils.arcgisUrl + '/' + mapID + '/data',
        content: {
          f: 'json'
        },
        timeout: 15000
      })
      .then(results => {
        let basemapLayers = results.baseMap.baseMapLayers;

        for (let basemapLayer of basemapLayers) {
          basemapLayer.isBasemap = true;
        }

        let allLayers = basemapLayers.concat(results.operationalLayers);

        resolve(allLayers);
      }, () => {
        let emptyLayersList = [];
        resolve(emptyLayersList);
      });
    });
  }
}
