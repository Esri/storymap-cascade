import Media from './Media';
import AGOLHostedLayer from './layers/AGOLHostedLayer';
import FeatureLayer from './layers/FeatureLayer';
import ImageServiceLayer from './layers/ImageServiceLayer';
import TiledMapServiceLayer from './layers/TiledMapServiceLayer';
import DynamicMapServiceLayer from './layers/DynamicMapServiceLayer';
import VectorTileLayer from './layers/VectorTileLayer';
import GeoRSSLayer from './layers/GeoRSSLayer';
import LayerCheckedItem from './../LayerCheckedItem';
import IssueTypes from './../IssueTypes';

export default class Layers extends Media {
  static check(options) {
    let allPromises = [];

    // check each item.
    for (let item of options.items) {
      let itemPromise = this._checkItem({
        item: item,
        appAccess: options.appAccess,
        premiumManager: options.premiumManager,
        orgId: options.orgId,
        privileges: options.privileges
      });
      allPromises.push(itemPromise);
    }

    return Promise.all(allPromises)
    .then(results => {
      return {
        mediaType: 'layers',
        items: results
      };
    });
  }

  static _checkItem(options) {
    // vector tile layers' URLs to check are on a different property than URL,
    // so we need to pass it to the URL property since we use that to determine if it is a service or not.
    if (options.item.layerType === 'VectorTileLayer') {
      options.item.url = options.item.styleUrl;
    }

    if (!options.item.itemId && !options.item.url) {
      return Promise.resolve({
        id: options.item.id,
        mediaType: 'layer',
        errors: [],
        warnings: [],
        maps: [],
        details: {
          title: options.item.title
        }
      });
    }
    else if (options.item.itemId && !options.item.url) {
      let serviceLayer = new LayerCheckedItem(options.item.itemId);

      return AGOLHostedLayer.check({
        layerItem: options.item,
        appAccess: options.appAccess,
        mediaType: 'layers',
        layerResults: serviceLayer,
        privileges: options.privileges
      });
    }
    else {
      // get their URL
      if (options.item.type ===  'CSV' || options.item.type === 'KML' || options.item.type === 'WMS' ||
        options.item.type === 'WFS' || options.item.type === 'WebTiledLayer') {
        return Promise.resolve({
          id: options.item.id,
          mediaType: 'layer',
          errors: [],
          warnings: [],
          maps: [],
          details: {
            title: options.item.title,
            notChecked: true
          }
        });
      }
      else {
        if (options.item.itemId && options.item.url) {
          let serviceLayer = new LayerCheckedItem(options.item.itemId);

          return this._checkItemURLService({
            item: options.item,
            appAccess: options.appAccess,
            layerResults: serviceLayer,
            premiumManager: options.premiumManager,
            orgId: options.orgId,
            privileges: options.privileges
          });
        }
        else {
          let serviceLayer = new LayerCheckedItem(options.item.id);

          return this._checkURLService({
            layer: options.item,
            appAccess: options.appAccess,
            layerResults: serviceLayer,
            premiumManager: options.premiumManager,
            orgId: options.orgId
          });
        }
      }
    }
  }

  static _checkItemURLService(options) {
    return AGOLHostedLayer.check({
      layerItem: options.item,
      appAccess: options.appAccess,
      mediaType: 'layers',
      layerResults: options.layerResults,
      privileges: options.privileges
    })
    .then(results => {
      // if the AGOL item is a hosted service or service proxy, we don't need to check the URL... because it's the item that counts.
      if (results.details.hostedServiceOrServiceProxy) {
        return results;
      }
      else {
        // otherwise we need to check the URL endpoint as well.

        // remove AGOL item layers that we don't need... if the AGOL layer is deleted but the service endpoint works,
        // we should silence the AGOL item issue. We've seen countless situations where the AGOL item issue didn't matter when the endpoint was healthy.
        this._removeLayerIssue(results.errors, IssueTypes.layers.deleted);
        this._removeLayerIssue(results.errors, IssueTypes.layers.inaccessible);
        this._removeLayerIssue(results.errors, IssueTypes.layers.unauthorized);

        return this._checkURLService({
          layer: options.item,
          appAccess: options.appAccess,
          layerResults: results,
          premiumManager: options.premiumManager,
          orgId: options.orgId
        });
      }
    });
  }

  static _checkURLService(options) {
    if (options.layer.layerType === 'ArcGISFeatureLayer') {
      return FeatureLayer.check(options);
    }
    else if (options.layer.layerType === 'ArcGISImageServiceLayer') {
      return ImageServiceLayer.check(options);
    }
    else if (options.layer.layerType === 'ArcGISTiledMapServiceLayer') {
      return TiledMapServiceLayer.check(options);
    }
    else if (options.layer.layerType === 'ArcGISMapServiceLayer') {
      return DynamicMapServiceLayer.check(options);
    }
    else if (options.layer.layerType === 'VectorTileLayer') {
      return VectorTileLayer.check(options);
    }
    else if (options.layer.layerType === 'GeoRSS') {
      return GeoRSSLayer.check(options);
    }
    else {
      return DynamicMapServiceLayer.check(options);
    }
  }

  static _removeLayerIssue(errors, issueType) {
    let issueIndex = errors.indexOf(issueType);
    if (issueIndex !== -1) {
      errors.splice(issueIndex, 1);
    }
  }
}
