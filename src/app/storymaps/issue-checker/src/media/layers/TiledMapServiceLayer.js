import EsriTiledMapServiceLayer from 'esri/layers/ArcGISTiledMapServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class TiledMapServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check({
      layer: options.item,
      layerResults: options.layerResults,
      appAccess: options.appAccess,
      CalledClass: EsriTiledMapServiceLayer
    });
  }
}
