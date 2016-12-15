export default class Formatter {
  static removeProtocol(url) {
    return url.replace((/(.*?):\/\//), '//');
  }
}
