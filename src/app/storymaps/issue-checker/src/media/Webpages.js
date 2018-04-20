import Media from './Media';

export default class Webpages extends Media {
  static check(options) {
    return super.check(Object.assign({}, options, { mediaType: 'webpages' }));
  }
}
