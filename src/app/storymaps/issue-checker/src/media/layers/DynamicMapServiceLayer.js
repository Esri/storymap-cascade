import EsriDynamicMapServiceLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class DynamicMapServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check(Object.assign({}, options, { CalledClass: EsriDynamicMapServiceLayer }));
  }
}
