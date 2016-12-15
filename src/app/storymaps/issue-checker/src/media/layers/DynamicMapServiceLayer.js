import EsriDynamicMapServiceLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class DynamicMapServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriDynamicMapServiceLayer
    });
  }
}
