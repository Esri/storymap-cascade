import EsriTiledMapServiceLayer from 'esri/layers/ArcGISTiledMapServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class TiledMapServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check(Object.assign({}, options, { CalledClass: EsriTiledMapServiceLayer }));
  }
}
