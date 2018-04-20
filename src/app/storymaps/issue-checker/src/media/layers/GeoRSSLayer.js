import EsriGeoRSSLayer from 'esri/layers/GeoRSSLayer';
import ServiceLayer from './ServiceLayer';

export default class GeoRSSLayer extends ServiceLayer {
  static check(options) {
    return super.check(Object.assign({}, options, {
      CalledClass: EsriGeoRSSLayer,
      keepProtocol: true
    }));
  }
}
