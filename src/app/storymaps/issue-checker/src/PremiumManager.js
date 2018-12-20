import on from 'dojo/on';
import AppProxyManager from 'esri/arcgis/AppProxyManager';
import AppProxySettings from 'esri/dijit/AppProxySettings';

import Formatter from './helpers/Formatter';

export default class PremiumManager {
  constructor(appId, appURL) {
    this._appProxyManager = null;
    this._appProxySettings = null;

    let matchedExpression = (/(.*\/)/).exec(appURL);
    let urlPiece = matchedExpression ? matchedExpression[0] : '';
    let protocolLessUrl = Formatter.removeProtocol(urlPiece);
    let httpUrl = 'http:' + protocolLessUrl;
    let httpsUrl = 'https:' + protocolLessUrl;

    this._appProxyManager = new AppProxyManager({
      appid: appId,
      referrers: [httpUrl, httpsUrl]
    });

    this._appProxySettings = new AppProxySettings({
      proxyManagerOptions: {
        appid: appId
      },
      webmaps: []
    }, null);
  }

  checkSecureService(url) {
    return this._checkIfPremiumContent(url)
    .then(results => {
      // if the layer is premium/subscription, see if it is proxied
      if(results.isPremium || results.isSubscription) {
        results.hasProxy = this._checkForProxy(url);
      }

      return results;
    });
  }

  _checkForProxy(url) {
    for (let proxy of this._appProxyManager.proxies)	{
      // if the URL is the same as the unprotocoled source URL, you're good.
      if (Formatter.removeProtocol(url) === Formatter.removeProtocol(proxy.sourceUrl)) {
        return true;
      }
    }

    return false;
  }

  _checkIfPremiumContent(url) {
    return new Promise((resolve, reject) => {
      if (this._appProxyManager.loaded) {
        let results = this._resolvePremiumContent(url);
        resolve(results);
      }

      else {
        this._appProxyManager.on('load', () => {
          let results = this._resolvePremiumContent(url);
          resolve(results);
        });

        // should we do something else if the manager never loads?
        this._appProxyManager.on('error', function() {
          reject();
        });
      }
    });
  }

  _resolvePremiumContent(url) {
    let isSubscription = this._appProxySettings.isPremium(url);
    let isPremium = this._appProxySettings.isSubscriber(url);

    // premium content that consumes credits will return true for both of the above, but we want to differentiate the two.
    // if it is both, flag it as premium only and not subscription.
    if (isPremium) {
      isSubscription = false;
    }

    return {
      isPremium: isPremium,
      isSubscription: isSubscription,
      hasProxy: false
    };
  }

  addProxies(items) {
    return new Promise((resolve, reject) => {
      let proxyCandidates = [];

      for (let item of items) {
        proxyCandidates.push({
          sourceUrl: item.url
        });
      }

      this._appProxyManager.createProxies(proxyCandidates)
      .then(() => {
        resolve(items);
      }, () => {
        reject(items);
      });
    });
  }
}
