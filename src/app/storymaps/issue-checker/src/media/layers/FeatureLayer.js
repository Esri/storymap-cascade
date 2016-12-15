import EsriFeatureLayer from 'esri/layers/FeatureLayer';
import ServiceLayer from './ServiceLayer';

export default class FeatureLayer extends ServiceLayer {
  static check(options) {
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriFeatureLayer
    });
  }
}
