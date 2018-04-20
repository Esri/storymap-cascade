import ArcGISUtils from 'esri/arcgis/utils';

import AGOLItem from './../AGOLItem';

export default class AGOLHostedLayer {
  static check(options) {
    options.layerResults.details.title = options.layerItem.title;

    return AGOLItem._checkItem({
      item: options.layerResults,
      appAccess: options.appAccess,
      mediaType: options.mediaType,
      privileges: options.privileges
    }).then(result => {
      let baseURL = ArcGISUtils.arcgisUrl.split('/sharing/')[0];
      result.details.linkURL = baseURL + '/home/item.html?id=' + result.id;

      return result;
    });
  }
}
