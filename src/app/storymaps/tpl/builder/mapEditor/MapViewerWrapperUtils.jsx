import arcgisUtils from 'esri/arcgis/utils';

export default class MapViewerWrapperUtils {
  static isWhiteListedDomain() {
    return document.location.host.match(/\.esri\.com$/)
    || document.location.host.match(/\.arcgis\.com$/);
  }

  static getMapViewerLink(webmapId) {
    return this.getMapViewerURL() + '?webmap=' + webmapId;
  }

  static getMapViewerURL() {
    return this.getPortalURL() + '/home/webmap/viewer.html';
  }

  static getPortalURL() {
    let url = arcgisUtils.arcgisUrl.split('/sharing/')[0];

    // Prevent SSL only org to fail loading maps for apps that are accessed over http
    if (app.portal.allSSL) {
      url = url.replace('http:', 'https:');
    }

    return url;
  }

  static getPortalDomain(url) {
    const link = document.createElement('a');

    link.setAttribute('href', url);
    return link.protocol + '//' + link.hostname;
  }

  static viewerIsSameDomain() {
    const mapViewerDomain = this.getPortalURL().split('//').slice(-1)[0];
    const mapViewerDomainSplit = mapViewerDomain.split('.');
    const host = document.location.host;
    const hostSplit = host.split('.');

    if (mapViewerDomain === host
        // For Portal Web Adaptor
        || (mapViewerDomain.split('/').length > 1 && mapViewerDomain.split('/')[0] === host)
    ) {
      return true;
    }
    else if (hostSplit.length < 3) {
      return host === mapViewerDomain;
    }
    else {
      return hostSplit.slice(1).join('.') === mapViewerDomainSplit.slice(-2).join('.');
    }
  }
}
