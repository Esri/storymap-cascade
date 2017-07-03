// import $ from 'jquery';
// import config from '../config';
import i18n from 'lib-build/i18n!commonResources/nls/media';
import constants from '../constants';
import Helper from '../utils/Helper';
import esriRequest from 'esri/request';
import topic from 'dojo/topic';

var text = i18n.mediaPicker.browsePanel.sidePanel.agol;

var ArcGISConnector = (function() {
  var _portal, _appItem, _appId, _portalUser, _sharingUrl;

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

  var getSharingUrl = function() {
    const portal = (_portal || getPortal());

    _sharingUrl = '//' + portal.portalHostname.replace(/\/$/, '') + '/sharing/rest';

    return _sharingUrl;
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

  var getOwner = function() {
    if (!_appItem) {
      console.warn('no app owner');
      return;
    }
    return _appItem.item.owner;
  };

  var checkSignin = function() {
    var promise = new Promise((resolve, reject) => {
      if (!app.portal) {
        console.warn('no portal');
        reject();
        return;
      }
      if (app.portal.user && app.portal.signedIn) {
        resolve();
      }
      else {
        topic.subscribe('portal-signin', function() {
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
        if (options.contentTypes) {
          let tempContentTypes = buildTypeQ(options.contentTypes);
          if (tempContentTypes) {
            q += ' ' + tempContentTypes.join(' ');
          }
        }
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

  var getResourcesUrl = function() {
    return (_sharingUrl || getSharingUrl()) + '/content/items/' + _appId + '/resources/';
  };

  var getStoryResources = function(options, resolve, reject) {
    if (!_appId && !getAppId()) {
      resolve();
      return;
    }
    const resourcesUrl = getResourcesUrl();

    esriRequest({
      url: resourcesUrl,
      handleAs: 'json',
      content: {
        num: 1000,
        f: 'json'
      }
    }).then(response => handleResourceReturn(response, resolve),
           err => handleQueryError(err, reject));

  };

  var handleResourceReturn = function(response, resolve) {
    var results = formatResources(response.resources);
    resolve(results);
  };

  var queryItems = function(queryParams, resolve, reject) {
    app.portal.queryItems(queryParams)
      .then(response => handleQueryReturn(response, resolve), err => handleQueryError(err, reject));
  };

  var handleQueryReturn = function(response, resolve) {
    var results = formatResults(response.results);
    // _next = response.nextQueryParams;
    resolve(results);
  };

  var handleQueryError = function(err, reject) {
    reject(err);
  };

  var getFormDataFromFileDetails = function(fileDetails) {
    let formdata = new FormData();
    formdata.append('f', 'json');
    addToFormData(formdata, fileDetails);

    return formdata;

  };

  var addToFormData = function(formdata, fileDetails) {
    formdata.append('file', fileDetails.file, fileDetails.processedFileName);
    if (fileDetails.thumb) {
      formdata.append('thumb', fileDetails.thumb, fileDetails.thumbName);
    }
  };

  var uploadSingleResource = function(fileDetails) {
    return new Promise((resolve, reject) => {
      if (!_appId && !getAppId()) {
        reject();
        return;
      }

      let formdata = getFormDataFromFileDetails(fileDetails);

      const portalUrl = _sharingUrl || getSharingUrl();
      const owner = getOwner();
      const folder = (_appItem || getAppItem()).item.ownerFolder;

      const uploadUrl = portalUrl + '/content/users/' + owner + (folder ? '/' + folder : '') + '/items/' + _appId + '/addResources';

      esriRequest({
        url: uploadUrl,
        handleAs: 'json',
        form: formdata
      }, {
        usePost: true
      }).then(result => {
        if (result.success) {
          const resourcesUrl = getResourcesUrl();
          const picUrl = resourcesUrl + encodeURIComponent(fileDetails.processedFileName);
          const thumbUrl = fileDetails.thumb ? resourcesUrl + encodeURIComponent(fileDetails.thumbName) : null;
          resolve(Object.assign(result, {picUrl, thumbUrl}));
        }
        else {
          reject(result);
        }
      }, err => {
        reject(err);
      });
    });

  };

  var removeResources = function(item) {
    return new Promise((resolve, reject) => {
      if (!_appId && !getAppId()) {
        reject();
        return;
      }
      const portalUrl = _sharingUrl || getSharingUrl();
      const owner = getOwner();
      const folder = (_appItem || getAppItem()).item.ownerFolder;

      const removeUrl = portalUrl + '/content/users/' + owner + (folder ? '/' + folder : '') + '/items/' + _appId + '/removeResources';

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
          console.warn('removeResources .then !result.success', result);
          reject(result);
        }
      }, (err) => {
        console.warn('removeResources errback', err);
        reject(err);
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
        }, err => {
          console.warn('unsuccessful deletion of thumbnail file', err);
        });

      }
    });

  };

  var formatResources = function(resources) {
    const resourcesUrl = getResourcesUrl();
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
      const type = getResourceType(fileExt);
      // skip the unsupported resource types
      if (!type) {
        return;
      }

      let thumbFile = findThumbUrl(r, resources);
      let thumbUrl = Helper.stripTrailingSlash(resourcesUrl) + '/' + encodeURIComponent(thumbFile);
      let tokenizedThumbUrl = thumbUrl + '?token=' + _portalUser.credential.token;
      let name = (nameSplit.length === 1) ? nameSplit[0] : (nameSplit.slice(0, -1).join('__') + '.' + fileExt);
      // TODO: what to do with files that don't have datestamps in their titles?
      let modified = endSplit[0].match(/^[0-9]{13}$/) ? new Date(parseInt(endSplit[0])) : '';

      returnArr.push({
        name: decodeURIComponent(name),
        modified,
        thumbUrl,
        tokenizedThumbUrl,
        thumbFile,
        type,
        picUrl: Helper.stripTrailingSlash(resourcesUrl) + '/' + encodeURIComponent(r),
        displayName: text.filterAndSort.image,
        id: r, // these need unique ids for react gallery item array
        fileName: r,
        title: name,
        fromResources: true
      });
    });
    return returnArr;
  };

  var findThumbUrl = function(originalResourceName, allResources) {
    const lastDot = originalResourceName.lastIndexOf('.');
    const originalNameWithoutExtension = lastDot >= 0 ? originalResourceName.substr(0, lastDot) : originalResourceName;
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
        agolType: result.type, // used by gallery item to identify agol items
        type: standardizeItemType(result.type),
        displayName: result.displayName,
        owner: result.owner,
        modified: result.modified,
        snippet: result.snippet
      }, getThumbUrlOptions(result));
    });
  };

  var getResourceType = function(fileExt) {
    if (!fileExt) {
      return false;
    }
    fileExt = '.' + fileExt.toLowerCase();
    for (let key in constants.contentType) {
      if (constants.uploadFileExtensions[key]) {
        if (constants.uploadFileExtensions[key].indexOf(fileExt) >= 0) {
          return constants.contentType[key];
        }
      }
    }
    return false;

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
        console.warn('no type found for', agolType);
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
        case constants.agolContentType.WEBSCENE:
          thumbUrl = baseUrl + '/scene.png';
          break;
        case constants.agolContentType.WEBMAP:
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
    getPortal,
    getAppItem,
    getAppId,
    getAppIdPromise,
    getUser,
    uploadSingleResource,
    removeResources,
    formatResources
  };
}());

export { ArcGISConnector };
