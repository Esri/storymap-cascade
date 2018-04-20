import EsriVectorTileLayer from 'esri/layers/VectorTileLayer';
import ServiceLayer from './ServiceLayer';

export default class VectorTileLayer extends ServiceLayer {
  static check(options) {
    // vector tile layers use the styleUrl property for the URL...
    return super.check(Object.assign({}, options, { CalledClass: EsriVectorTileLayer }));
  }
}
