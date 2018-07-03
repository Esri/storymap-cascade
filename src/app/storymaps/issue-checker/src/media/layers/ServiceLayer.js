import IssueTypes from './../../IssueTypes';
import Formatter from './../../helpers/Formatter';

export default class ServiceLayer {
  static check(options) {
    return new Promise(resolve => {

      options.layerResults.details.title = options.layer.title;
      options.layerResults.details.url = options.layer.url;

      let inputUrl = options.layer.url;

      if (inputUrl && !options.keepProtocol) {
        inputUrl = Formatter.removeProtocol(options.layer.url);
      }

      let serviceLayer = new options.CalledClass(inputUrl);

      let timer = window.setTimeout(() => {
        this._onLayerError(null, options.layerResults, resolve);
      }, 15000);

      serviceLayer.on('load', serviceResult => {
        window.clearTimeout(timer);

        let isSecureService = this._checkIfCredentialedLayer({
          layer: serviceResult.layer,
          orgId: options.orgId
        });

        if (isSecureService) {
          return this._checkSecureLayer({
            layer: options.layerResults,
            url: options.layer.url,
            resolve: resolve,
            appAccess: options.appAccess,
            premiumManager: options.premiumManager
          });
        }
        else {
          resolve(options.layerResults);
        }
      });

      serviceLayer.on('error', error => {
        window.clearTimeout(timer);
        this._onLayerError(error, options.layerResults, resolve);
      });
    });
  }

  static _checkSecureLayer(options) {
    // if the premium manager doesn't exist yet (meaning we haven't yet saved the app), don't call it.
    if (!options.premiumManager) {
      return options.resolve(options.layer);
    }

    return options.premiumManager.checkSecureService(options.url)
    .then(premiumResults => {
      // this is only an issue if 1) the app is public, and 2) there isn't already a proxy for the secure content.
      if (options.appAccess === 'public' && !premiumResults.hasProxy) {
        if (premiumResults.isPremium) {
          options.layer.errors.push(IssueTypes.layers.premiumContent);
        }

        else if (premiumResults.isSubscription) {
          options.layer.errors.push(IssueTypes.layers.subscriptionContent);
        }

        /*
        else {
          options.layer.errors.push(IssueTypes.layers.secureService);
        }
        */
      }

      options.resolve(options.layer);
    }, () => {
      options.resolve(options.layer);
    });
  }

  static _checkIfCredentialedLayer({layer, orgId}) {
    if (layer.credential && orgId) {
      return true;
    }
    else {
      return false;
    }
  }

  static _onLayerError(error, layerResults, resolve) {
    layerResults.errors.push(IssueTypes.layers.inaccessible);
    resolve(layerResults);
  }
}
