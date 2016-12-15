import EsriGeoRSSLayer from 'esri/layers/GeoRSSLayer';
import ServiceLayer from './ServiceLayer';

export default class GeoRSSLayer extends ServiceLayer {
  static check(options) {
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriGeoRSSLayer,
      keepProtocol: true
    });
  }
}
