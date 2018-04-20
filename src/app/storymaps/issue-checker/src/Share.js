import ArcGISUtils from 'esri/arcgis/utils';
import esriRequest from 'esri/request';

import Maps from './media/Maps';
import Result from './Result';
import NormalizeHelper from './helpers/NormalizeHelper';
import IssueTypes from './IssueTypes';

export default class Share {
  static shareApp(options) {
    return new Promise((resolve, reject) => {
      // here's the thing: we need to:
      // 1) share the app
      // 2) share the maps

      let promises = [];

      // share the app.
      promises.push(this.share({
        sharingLevel: options.sharingLevel,
        owner: options.owner,
        id: options.appID
      }));

      if (options.media.mapIDs) {
        promises.push(this._shareMaps(options.media, options.sharingLevel, options.premiumManager, options.orgId, options.privileges));
      }

      Promise.all(promises)
      .then(results => {
        let appResult = results[0];
        let mapResults = results[1];
        let hasUnsharedContent = mapResults && mapResults.unsharedItems.length;

        if (!appResult.success || hasUnsharedContent) {
          reject({
            appShared: appResult.success,
            sharedItems: mapResults ? mapResults.sharedItems : [],
            unsharedItems: mapResults ? mapResults.unsharedItems : []
          });
        }
        else {
          resolve({
            sharingLevel: options.sharingLevel,
            itemsChanged: mapResults ? mapResults.sharedItems : []
          });
        }
      });
    });
  }

  static _shareMaps(media, sharingLevel, premiumManager, orgId, privileges) {
    return new Promise(resolve => {
      // in order to share the maps, we need to know what maps need sharing, and which we CAN share. Quickest way to find this out is by scanning the maps.
      // prep the data for the scan.
      let resultMedia = new Result(media);
      let allMaps = NormalizeHelper.getAllItems(resultMedia.media.maps);

      // We're "checking" the map against the sharing level we want to share the app to -- quickest way to find out which maps need to/can be shared with the app.
      Maps.check({
        items: allMaps,
        appAccess: sharingLevel,
        premiumManager,
        orgId,
        privileges
      })
      .then(mapResults => {
        // share only those maps with the correct error.
        let promises = [];

        for (let map of mapResults.items) {
          // share the map if it needs to be shared, and can be.
          if (map.errors.indexOf(IssueTypes.maps.unshared) !== -1) {
            promises.push(this.share({
              sharingLevel: sharingLevel,
              owner: map.details.owner,
              id: map.id
            }));
          }

          // also share the dependent subscription layers as well!
          for (let layer of map.layers) {
            this._shareLayer({
              layer: layer,
              promises: promises,
              sharingLevel: sharingLevel,
              premiumManager: premiumManager
            });
          }
        }

        Promise.all(promises)
        .then(results => {
          this._onBulkShareComplete(results, resolve);
        });
      });
    });
  }

  static _shareLayer(options) {
    // add any layers that are unshared here...
    if (options.layer.errors.indexOf(IssueTypes.layers.unshared) !== -1) {
      options.promises.push(this.share({
        sharingLevel: options.sharingLevel,
        owner: options.layer.details.owner,
        id: options.layer.id
      }));
    }

    if (options.layer.errors.indexOf(IssueTypes.layers.subscriptionContent) !== -1) {
      // this only works for doing one at a time, as the promise.push takes in a sharing of a single item.
      options.promises.push(options.premiumManager.addProxies([
        {
          id: options.layer.id,
          url: options.layer.details.url
        }
      ])
      .then(results => {
        return {
          success: true,
          id: results[0].id
        };
      }, results => {
        return {
          success: false,
          id: results[0].id
        };
      }));
    }
  }

  static _onBulkShareComplete(results, resolve) {
    // break it down into the items that were shared correctly and the ones that were not.
    let finalResult = {
      sharedItems: [],
      unsharedItems: []
    };

    for (let result of results) {
      if (result.success) {
        finalResult.sharedItems.push(result.id);
      }
      else {
        finalResult.unsharedItems.push(result.id);
      }
    }

    resolve(finalResult);
  }

  static share(options) {
    return new Promise(resolve => {

      let shareWith = {
        org: options.sharingLevel === 'org' || options.sharingLevel === 'account',
        public: options.sharingLevel === 'public'
      };

      let baseURL = ArcGISUtils.arcgisUrl.split('/items')[0];

      esriRequest({
        url: baseURL + '/users/' + options.owner + '/shareItems',
        content: {
          f: 'json',
          items: [options.id],
          everyone: shareWith.public,
          org: shareWith.org
        }
      },
      {
        usePost: true
      })
      .then(results => {
        let result = results.results[0];

        if (result.success) {
          resolve({
            id: options.id,
            success: true
          });
        }
        else {
          resolve({
            id: options.id,
            success: false
          });
        }
      }, error => {
        resolve({
          id: options.id,
          success: false
        });
      });
    });
  }
}
