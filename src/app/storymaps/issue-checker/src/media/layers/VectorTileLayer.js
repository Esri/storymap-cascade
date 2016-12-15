import EsriVectorTileLayer from 'esri/layers/VectorTileLayer';
import ServiceLayer from './ServiceLayer';

export default class VectorTileLayer extends ServiceLayer {
  static check(options) {
    // vector tile layers use the styleUrl property for the URL...
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriVectorTileLayer
    });
  }
}
