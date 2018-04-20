import EsriImageServiceLayer from 'esri/layers/ArcGISImageServiceLayer';
import ServiceLayer from './ServiceLayer';

export default class ImageServiceLayer extends ServiceLayer {
  static check(options) {
    return super.check(Object.assign({}, options, { CalledClass: EsriImageServiceLayer }));
  }
}
