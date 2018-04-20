import EsriFeatureLayer from 'esri/layers/FeatureLayer';
import ServiceLayer from './ServiceLayer';

export default class FeatureLayer extends ServiceLayer {
  static check(options) {
    return super.check(Object.assign({}, options, { CalledClass: EsriFeatureLayer }));
  }
}
