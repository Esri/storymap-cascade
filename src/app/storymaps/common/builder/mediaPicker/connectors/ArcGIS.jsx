// import $ from 'jquery';
// import config from '../config';
import i18n from 'lib-build/i18n!../../../_resources/nls/media';
import constants from '../constants';
import Helper from '../utils/Helper';
import esriRequest from 'esri/request';

var text = i18n.mediaPicker.browsePanel.sidePanel.agol;

var ArcGISConnector = (function() {
  var _portal, _appItem, _appId, _portalUser, _next;

  var defaultParams = {
    num: 100
  };

  /* search options expectations
  options: {
    // all are single str values except contentTypes, which is an arr
    searchLocation: constants.searchLocation.{STORY, AGOL, ORG, MINE},
    contentTypes: [constants.agolContentType.{WEBMAP, WEBSCENE}],
    sortField: constants.sortField.{DATE, TITLE},
    sortOrder: constants.sort.order.{ASC, DESC},
    searchStr: {str},
    page
  }
  */

  var getPortal = function() {
    _portal = app.portal;
    return _portal;
  };

  var getAppItem = function() {
    _appItem = app.data && app.data.appItem;
    return _appItem;
  };

  var getAppId = function() {
    _appId = getAppItem() && _appItem.item.id;
    return _appId;
  };

  var getAppIdPromise = function() {
    return new Promise((resolve, reject) => {
      if (getAppId()) {
        resolve(_appId);
        return;
      }
      let count = 0;
      var interval = setInterval(() => {
        if (getAppId()) {
          resolve(_appId);
          clearInterval(interval);
          return;
        }
        count++;
        if (count > 5) {
          reject('no appId');
          clearInterval(interval);
          return;
        }
      }, 1000);
    });
  };

  var getUser = function() {
    _portalUser = app.portal && app.portal.user;
    return _portalUser;
  };

  var checkSignin = function() {
    var promise = new Promise((resolve, reject) => {
      if (!app.portal) {
        console.warn('no portal');
        reject();
      }
      if (!_portalUser && !getUser()) {
        app.portal.signIn().then(() => {
          resolve();
        });
      }
    });

    return promise;
  };

  var getItems = function(options) {
    return new Promise((resolve, reject) => {
      if (!app.portal) {
        reject('no portal');
        return;
      }
      if (!_portalUser && !getUser()) {
        reject('no user');
        return;
      }

      if (options.searchLocation === constants.searchLocation.STORY) {
        getStoryResources(options, resolve, reject);
        return;
      }

      let q;
      if (options.idArr) {
        q = buildIdQuery(options.idArr);
      }
      else {
        options.contentTypesArr = buildTypeQ(options.contentTypes);
        if (!options.contentTypesArr) {
          resolve();
          return;
        }
        q = buildQ(options);
      }

      var queryParams = Object.assign({}, defaultParams, {
        q: q
      });
      if (options.sortField) {
        queryParams.sortField = options.sortField;
      }
      if (options.sortOrder) {
        queryParams.sortOrder = options.sortOrder;
      }
      queryItems(queryParams, resolve, reject);
    });
  };

  var getStoryResources = function(options, resolve, reject) {
    if (!_appId && !getAppId()) {
      resolve();
      return;
    }
    const resourcesUrl = Helper.stripTrailingSlash((_portal || getPortal()).portalUrl) + '/content/items/' + _appId + '/resources/';

    esriRequest({
      url: resourcesUrl,
      handleAs: 'json',
      content: {
        f: 'json'
      }
    }).then(response => handleResourceReturn(response, resourcesUrl, resolve),
           err => handleQueryError(err, reject));

  };

  var handleResourceReturn = function(response, resourcesUrl, resolve) {
    var results = formatResources(response.resources, resourcesUrl);
    resolve(results);
  };

  var queryItems = function(queryParams, resolve, reject) {
    app.portal.queryItems(queryParams)
      .then(response => handleQueryReturn(response, resolve), err => handleQueryError(err, reject));
  };

  var handleQueryReturn = function(response, resolve) {
    var results = formatResults(response.results);
    _next = response.nextQueryParams;
    resolve(results);
  };

  var handleQueryError = function(err, reject) {
    reject(err);
  };

  var uploadResources = function(formdata) {
    return new Promise((resolve, reject) => {
      if (!_appId && !getAppId()) {
        reject();
        return;
      }
      const portalUrl = Helper.stripTrailingSlash((_portal || getPortal()).portalUrl);
      const username = (_portalUser || getUser()).username;
      const folder = (_appItem || getAppItem()).item.ownerFolder;

      const uploadUrl = portalUrl + '/content/users/' + username + (folder ? '/' + folder : '') + '/items/' + _appId + '/addResources';

      esriRequest({
        url: uploadUrl,
        handleAs: 'json',
        form: formdata
      }, {
        usePost: true
      }).then(result => {
        if (result.success) {
          const baseAttachmentUrl = portalUrl + '/content/items/' + _appId + '/resources/';
          resolve(Object.assign(result, { baseAttachmentUrl }));
        }
        else {
          reject(result);
        }
      });
    });

  };

  var removeResources = function(item) {
    return new Promise((resolve, reject) => {
      if (!_appId && !getAppId()) {
        reject();
        return;
      }
      const portalUrl = Helper.stripTrailingSlash((_portal || getPortal()).portalUrl);
      const username = (_portalUser || getUser()).username;
      const folder = (_appItem || getAppItem()).item.ownerFolder;

      const removeUrl = portalUrl + '/content/users/' + username + (folder ? '/' + folder : '') + '/items/' + _appId + '/removeResources';

      esriRequest({
        url: removeUrl,
        handleAs: 'json',
        content: {
          resource: item.fileName,
          f: 'json'
        }
      }, {
        usePost: true
      }).then(result => {
        if (result.success) {
          resolve();
        }
        else {
          reject(result);
        }
      });
      if (item.thumbFile && item.thumbFile !== item.fileName) {
        esriRequest({
          url: removeUrl,
          handleAs: 'json',
          content: {
            resource: item.thumbFile,
            f: 'json'
          }
        }, {
          usePost: true
        }).then(result => {
          if (!result || !result.success) {
            console.warn('unsuccessful deletion of thumbnail file');
          }
        });

      }
    });

  };

  var formatResources = function(resources, resourcesUrl) {
    var returnArr = [];

    resources.forEach((resource) => {
      // resource is currently an object with a single
      // property, "resource", which is the file name. make a shortcut to it.

      const r = resource.resource;

      // skip the __thumb files
      if (r.indexOf('__thumb') >= 0) {
        return;
      }
      let nameSplit = r.split('__');
      let endSplit = nameSplit.slice(-1)[0].split('.');
      let fileExt = endSplit.slice(-1)[0];
      let thumbFile = findThumbUrl(r, resources);

      let name = (nameSplit.length === 1) ? nameSplit[0] : (nameSplit.slice(0, -1).join('__') + '.' + fileExt);
      // TODO: what to do with files that don't have datestamps in their titles?
      let modified = endSplit[0].match(/^[0-9]{13}$/) ? new Date(parseInt(endSplit[0])) : null;
      let thumbUrl = Helper.stripTrailingSlash(resourcesUrl) + '/' + encodeURIComponent(thumbFile) + '?token=' + _portalUser.credential.token;

      returnArr.push({
        name,
        modified,
        thumbUrl,
        thumbFile,
        picUrl: Helper.stripTrailingSlash(resourcesUrl) + '/' + r,
        displayName: text.filterAndSort.image,
        id: r, // these need unique ids for react gallery item array
        type: constants.contentType.IMAGE,
        fileName: r,
        title: name,
        fromResources: true
      });
    });
    return returnArr;
  };

  var findThumbUrl = function(originalResourceName, allResources) {
    const originalNameWithoutExtension = originalResourceName.substr(0, originalResourceName.lastIndexOf('.'));
    let thumbFile = allResources.find(resource => {
      const r = resource.resource;
      // skip the non-thumb files
      if (r.indexOf('__thumb') < 0) {
        return false;
      }
      if (r.indexOf(originalNameWithoutExtension) === 0) {
        return true;
      }
      return false;
    });
    thumbFile = thumbFile ? thumbFile.resource : originalResourceName;
    return thumbFile;
  };

  var formatResults = function(results) {
    return results.map(result => {
      return Object.assign({
        name: result.title,
        title: result.title,
        id: result.id,
        agolType: result.type,
        type: standardizeItemType(result.type),
        displayName: result.displayName,
        owner: result.owner,
        modified: result.modified,
        snippet: result.snippet
      }, getThumbUrlOptions(result));
    });
  };

  var standardizeItemType = function(agolType) {
    switch (agolType) {
      case constants.agolContentType.WEBMAP:
        return constants.contentType.WEBMAP;
      case constants.agolContentType.WEBSCENE:
        return constants.contentType.WEBSCENE;
      case constants.agolContentType.IMAGE:
        return constants.contentType.IMAGE;
      default:
        return 'agh, whats this???';
    }

  };

  var getThumbUrlOptions = function(item) {
    var thumbUrl = item.thumbnailUrl;
    if (!thumbUrl) {
      var baseUrl = app.portal.staticImagesUrl;
      if (!baseUrl) {
        console.warn('no staticImagesUrl in portal');
        return {};
      }
      switch (item.type) {
        case 'Web Scene':
          thumbUrl = baseUrl + '/scene.png';
          break;
        case 'Web Map':
        default:
          thumbUrl = baseUrl + '/desktopapp.png';
      }
    }
    return {
      thumbUrl: thumbUrl,
      thumbHeight: 133,
      thumbWidth: 200
    };
  };

  var getNext = function() {
    return new Promise((resolve, reject) => {
      if (!_next || _next.start < 0) {
        resolve(null);
        return;
      }
      queryItems(_next, resolve, reject);
    });
  };

  var buildIdQuery = function(ids) {
    return 'id:' + ids.join(' OR id:');
  };

  var buildQ = function(options) {
    // build an array of everything we want in our q string, then join with a space.
    var qArr = [];

    // if a search string exists, add it first.
    if (options.searchStr) {
      qArr.push(processSearchStr(options.searchStr));
    }

    // add the content type and search location strings to q
    qArr.push(
      ...options.contentTypesArr,
      buildLocQ(options.searchLocation)
    );

    return qArr.join(' ');

  };

  var processSearchStr = function(str) {
    if (str.match(/^[A-Fa-f0-9]{32}$/)) {
      return 'id:' + str;
    }
    return str;
  };

  var buildTypeQ = function(contentTypeArr) {
    var includeArr = [], excludeArr = [];
    if (contentTypeArr.indexOf(constants.contentType.WEBMAP) >= 0) {
      includeArr.push('type:"Web Map"');
      excludeArr.push('-type:"Web Mapping Application"');
    }
    if (contentTypeArr.indexOf(constants.contentType.WEBSCENE) >= 0) {
      includeArr.push('type:"Web Scene"');
      excludeArr.push('-type:"CityEngine Web Scene"');
    }
    if (includeArr.length === 0) {
      return false;
    }
    let includeStr;
    if (includeArr.length === 1) {
      includeStr = includeArr[0];
    }
    else {
      includeStr = '(' + includeArr.join(' OR ') + ')';
    }
    var excludeStr = excludeArr.join(' ');
    return [includeStr, excludeStr];
  };

  var buildLocQ = function(searchLocation) {
    switch (searchLocation) {
      case constants.searchLocation.ORG:
        return 'orgid:' + _portalUser.orgId;
      case constants.searchLocation.MINE:
        return 'owner:' + _portalUser.username;
      case constants.searchLocation.AGOL:
        return ''; // no search location is all of agol
      default:
        console.warn('TODO: deal with searchLocation', searchLocation);
        return '';
    }
  };

  return {
    checkSignin,
    getItems,
    getNext,
    getPortal,
    getAppItem,
    getAppId,
    getAppIdPromise,
    getUser,
    uploadResources,
    removeResources
  };
}());

export { ArcGISConnector };
