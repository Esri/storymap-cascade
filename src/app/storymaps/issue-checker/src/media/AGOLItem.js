import Media from './Media';
import ArcGISUtils from 'esri/arcgis/utils';
import esriRequest from 'esri/request';
import IdentityManager from 'esri/IdentityManager';
import IssueTypes from './../IssueTypes';

export default class AGOLItem extends Media {
  static check(options, mediaType) {
    let allPromises = [];

    // check each item.
    for (let item of options.items) {
      let itemPromise = this._checkItem({
        item: item,
        appAccess: options.appAccess,
        mediaType: mediaType,
        privileges: options.privileges
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

  static _checkItem(options) {
    return new Promise(resolve => {
      let url = ArcGISUtils.arcgisUrl + '/' + options.item.id;

      esriRequest({
        url: url,
        content: {
          f: 'json'
        },
        timeout: 15000
      })
      .then(result => {
        this._onItemSuccess(result, options, resolve);
      }, error => {
        this._onItemError(error, options, resolve);
      });
    });
  }

  static _onItemError(error, options, resolve) {
    if (error.httpCode === 400) {
      options.item.errors.push(IssueTypes[options.mediaType].deleted);
    }
    else if (error.httpCode === 403) {
      options.item.errors.push(IssueTypes[options.mediaType].unauthorized);
    }
    else {
      options.item.errors.push(IssueTypes[options.mediaType].inaccessible);
    }
    resolve(options.item);
  }

  static _onItemSuccess(result, options, resolve) {
    options.item.details.sharingLevel = this._assignSharingLevel(result.access);
    options.item.details.owner = result.owner;

    if (options.mediaType === 'maps') {
      options.item.details.title = result.title;
    }
    else if (options.mediaType === 'layers') {
      let isHosted = result.typeKeywords.indexOf('Hosted Service') !== -1;
      let isProxy = result.typeKeywords.indexOf('Service Proxy') !== -1;

      options.item.details.hostedServiceOrServiceProxy = isProxy || isHosted;
    }

    let baseURL = ArcGISUtils.arcgisUrl.split('/sharing/')[0];
    let userId = IdentityManager.findCredential(baseURL).userId;
    let isOwner = options.item.details.owner === userId;
    let canShare = this._determineCanShare(isOwner, result.itemControl);

    options.item.details.privileges = this._findSharingPrivileges({
      privileges: options.privileges,
      canShare: canShare,
      isOwner: isOwner
    });

    this._checkSharingLevel(options, canShare);

    resolve(options.item);
  }

  static _assignSharingLevel(resultAccess) {
    if (resultAccess === 'account') {
      return 'org';
    }
    else if (resultAccess === 'shared') {
      return 'private';
    }
    else {
      return resultAccess;
    }
  }

  static _determineCanShare(isOwner, itemControl) {
    // you can share the item if you own it, OR if you have admin or update rights to the item (via the item's "itemControl" property)
    if (isOwner) {
      return true;
    }
    else if (itemControl === 'admin' || itemControl === 'update') {
      return true;
    }
    else {
      return false;
    }
  }

  static _findSharingPrivileges(options) {
    // if the item isn't yours and you don't have edit rights over it (thru item's itemControl property), you can't change the sharing level.
    if (!options.canShare || !options.privileges) {
      return {
        publicly: false,
        org: false
      };
    }
    // you own it and can share as long as your account privileges allow.
    else if(options.isOwner) {
      return {
        publicly: options.privileges.canShareMinePublic,
        org: options.privileges.canShareMineOrg
      };
    }
    // if you're not the owner (but have edit rights on the item), you can share it, contingent on your account privileges to share others' items.
    else {
      return {
        publicly: options.privileges.canShareOthersPublic,
        org: options.privileges.canShareOthersOrg
      };
    }
  }

  static _checkSharingLevel(options, canShare) {
    if (options.appAccess === 'public') {
      if (options.item.details.sharingLevel === 'org' || options.item.details.sharingLevel === 'private') {
        // "can share" -- we have privileges to share it, either because it's ours or because we have admin/update privileges to it.
        if (canShare) {
          options.item.errors.push(IssueTypes[options.mediaType].unshared);
        }
        else {
          options.item.errors.push(IssueTypes[options.mediaType].othersUnshared);
        }
      }
    }
    else if (options.appAccess === 'org' || options.appAccess === 'account') {
      if (options.item.details.sharingLevel === 'private') {
        options.item.errors.push(IssueTypes[options.mediaType].unshared);
      }
    }
  }
}
