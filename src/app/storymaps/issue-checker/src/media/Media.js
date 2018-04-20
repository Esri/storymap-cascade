import IssueTypes from './../IssueTypes';
import dojoRequest from 'dojo/request';
import EsriConfig from 'esri/config';
import Formatter from './../helpers/Formatter';

export default class Media {
  static check({items, mediaType, appUrl, portal}) {
    let allPromises = [];

    // check each item.
    for (let item of items) {
      let itemPromise = this._checkItem({
        item,
        mediaType,
        appUrl,
        portal
      });
      allPromises.push(itemPromise);
    }

    return Promise.all(allPromises)
    .then(results => {
      return {
        mediaType: mediaType,
        items: results
      };
    });
  }

  static _checkItem({item, mediaType, appUrl, portal}) {
    return new Promise(resolve => {
      if (this._isUrlHttp(item.id)) {
        this._calculateHttpsFixPotential(item.id, portal.portalHostname)
        .then(resultIssueType => {
          const issueType = IssueTypes[mediaType][resultIssueType];
          // if app is on Portal, it's a warning
          if (portal.isPortal) {
            item.warnings.push(issueType);
          }
          // if the app does not yet have a URL (and not on Portal), or if app URL is https (and not on Portal) or org is ssl-only, it's error
          else if (!appUrl || appUrl.indexOf('https://') !== -1 || portal.allSSL) {
            item.errors.push(issueType);
          }
          // non-portal, non-ssl-only org, and app URL is not https
          else {
            item.warnings.push(issueType);
          }

          resolve(item);
        });
      }
      else {
        resolve(item);
      }
    });
  }

  static _isUrlHttp(url) {
    return (/http:\/\//).test(url);
  }

  static _calculateHttpsFixPotential(itemUrl, portalHostname) {
    const itemHostname = Formatter.extractHostname(itemUrl);

    return new Promise(resolve => {
      if (this._isOnHttpsWhitelist(itemHostname, portalHostname)) {
        resolve('httpContentFixable');
      }
      else {
        this._requestDomain(itemHostname, resolve);
      }
    });
  }

  static _requestDomain(hostname, resolve) {
    const url = `${EsriConfig.defaults.io.proxyUrl}?https://${hostname}`;

    const request = dojoRequest(url, {
      method: 'head',
      timeout: 15000
    });

    request.response.then(successResponse => {
      if (successResponse.status === 200) {
        resolve('httpContentFixable');
      }
      else {
        resolve('httpContentIndeterminate');
      }
    }, () => {
      resolve('httpContentUnfixable');
    });
  }

  static _isOnHttpsWhitelist(itemHostname, portalHostname) {
    const whitelist = this._getHttpsEnabledDomains(portalHostname);

    const index = whitelist.findIndex(item => {
      // is it match exactly, or does match PART of the hostname with a dot (i.e. hostname is my.maps.arcgis.com so .arcgis.com is a fit)
      return item === itemHostname || itemHostname.indexOf(`.${item}`) !== -1;
    });

    return index !== -1;
  }

  static _getHttpsEnabledDomains(portalHostname) {
    return [
      'arcgis.com',
      'youtube.com',
      'youtu.be',
      'vimeo.com',
      'staticflickr.com',
      'flickr.com',
      'ggpht.com',
      'googleusercontent.com',
      'unsplash.com',
      portalHostname
    ];
  }
}
