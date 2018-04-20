import Share from './Share';

export default class Fix {
  static fixMapsShare(options) {
    return new Promise((resolve, reject) => {
      let promises = [];

      for (let item of options.items) {
        promises.push(Share.share({
          id: item.id,
          owner: item.owner,
          sharingLevel: options.sharingLevel
        }));
      }

      Promise.all(promises)
      .then(results => {
        let unsharedItems = [];
        let sharedItems = [];

        for (let result of results) {
          if (!result.success) {
            unsharedItems.push(result.id);
          }
          else {
            sharedItems.push(result.id);
          }
        }

        // if any of the items were not shared properly (i.e. "fixed"), we will reject the promise with the details -- which ones did and didn't share.
        if (unsharedItems.length) {
          reject({
            fixedItems: sharedItems,
            unfixedItems: unsharedItems
          });
        }
        else {
          resolve({
            fixedItems: sharedItems
          });
        }
      });
    });
  }

  static fixPremiumSubscriptionContent(items, premiumManager) {
    return new Promise((resolve, reject) => {
      premiumManager.addProxies(items)
      .then(results => {
        // boil the results down to just the IDs (that's all we care about passing back)
        let fixedItems = results.map(item => {
          return item.id;
        });

        resolve({
          fixedItems: fixedItems
        });
      }, results => {
        let unfixedItems = results.map(item => {
          return item.id;
        });

        // the way proxyManager works (the Esri proxy manager), if any fail, they all do (so there won't be any partial successes).
        reject({
          fixedItems: [],
          unfixedItems: unfixedItems
        });
      });
    });
  }
}
