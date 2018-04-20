export default class Formatter {
  static removeProtocol(url) {
    return url.replace((/(.*?):\/\//), '//');
  }

  static extractHostname(url) {
    // take all after the double-slash, up to (not including) a colon (port) or slash (path)
    var extraction = (/.*\/\/([^\/:]*)/).exec(url);

    if (extraction && extraction[1]) {
      return extraction[1];
    }
    else {
      return url;
    }
  }
}
