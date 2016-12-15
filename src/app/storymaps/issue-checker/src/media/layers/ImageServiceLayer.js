import EsriImageServiceLayer from 'esri/layers/ArcGISImageServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class ImageServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriImageServiceLayer
    });
  }
}
