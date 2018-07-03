define([
  'esri/urlUtils',
  'esri/arcgis/utils',
  'dojo/cookie',
  'dojo/_base/Color',
  './SocialSharing'
],
function(
  urlUtils,
  arcgisUtils,
  cookie,
  Color,
  SocialSharing
) {
  return {
    switchToBuilder: function() {
      if(document.location.search.match(/appid/)) {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search, true) + '&edit' + document.location.hash;
      }
      else if (document.location.search.slice(-1) == '?') {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + '?edit'  + document.location.hash;
      }
      else {
        document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + '?edit'  + document.location.hash;
      }
    },
    getMyStoriesURL: function() {
      if (app.isPortal) {
        return this.getPortalURL() + '/apps/MyStories/';
      }
      else {
        return '//storymaps.arcgis.com/en/my-stories/';
      }
    },
    // Get URL parameters IE9 history not supported friendly
    getUrlParams: function(optionalUrl) {
      var urlParams = urlUtils.urlToObject(optionalUrl || document.location.search).query;

      if (urlParams) {
        return urlParams;
      }

      if (! this.browserSupportHistory() && ! urlParams) {
        return urlUtils.urlToObject(document.location.hash).query || {};
      }

      return {};
    },
    getUrlHash: function(optionalUrl) {
      var urlHash = urlUtils.urlToObject(optionalUrl || document.location).hash;

      if (urlHash) {
        return urlHash;
      }

      return '';
    },
    browserSupportHistory: function() {
      return !!(window.history && history.pushState);
    },
    isArcGISHosted: function() {
      // App is hosted if the URL contains /apps/XYZ/ or /home/XYZ/ or /arcgis/apps/
      return (/(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/).test(document.location.pathname);
    },
    isArcGISOnlineHosted: function() {
      return document.location.host.match(/\.arcgis\.com$/);
    },
    isDefaultLogoLink: function(link) {
      return (/\/\/www\.esri\.com$/i).test(link);
    },
    getAppID: function(isProd) {
      var urlParams = this.getUrlParams();

      if (app.indexCfg && app.indexCfg.appid) {
        return app.indexCfg.appid;
      }

      if (this.isArcGISHosted() || ! isProd) {
        return urlParams.appid;
      }

      // Only authorize URL params outside of arcgis.com if a webmap/app owner is specified
      if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
        return urlParams.appid;
      }
    },
    getWebmapID: function(isProd) {
      var urlParams = this.getUrlParams();

      if(app.indexCfg && app.indexCfg.webmap) {
        return app.indexCfg.webmap;
      }

      if (this.isArcGISHosted() || ! isProd) {
        return urlParams.webmap;
      }

      // Only authorize URL params outside of arcgis.com if a webmap owner is specified
      if(app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
        return urlParams.webmap;
      }
    },
    getPortalURL: function() {
      return arcgisUtils.arcgisUrl.split('/sharing/')[0];
    },
    getPortalUser: function() {
      var esriCookie = cookie('esri_auth');

      if(! esriCookie) {
        return;
      }

      esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));

      // Cookie has to be set on the same organization
      if(esriCookie.urlKey && esriCookie.customBaseUrl
          && (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) {
        return;
      }

      return esriCookie ? esriCookie.email : null;
    },
    getCookieToken: function() {
      var esriCookie = cookie('esri_auth');

      if(! esriCookie) {
        return;
      }

      esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));

      // Cookie has to be set on the same organization
      if(esriCookie.urlKey && esriCookie.customBaseUrl
          && (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) {
        return;
      }

      return esriCookie ? esriCookie.token : null;
    },
    userIsAppOwner: function() {
      var portalUser = app.portal ? app.portal.getPortalUser() : null,
          appItem = app.data.appItem ? app.data.appItem.item : null;

      return  (portalUser && appItem && portalUser.username == appItem.owner)
        || (this.getPortalUser() != null && appItem && this.getPortalUser() == appItem.owner)
        // Admin privilege
        || (portalUser && portalUser.privileges && $.inArray('portal:admin:updateItems', portalUser.privileges) > -1)
        || (appItem && appItem.itemControl == 'admin')
        // Group with shared ownership
        || (appItem && appItem.itemControl == 'update');
    },
    checkUserItemPrivileges: function() {
      var portalUser = app.portal ? app.portal.getPortalUser() : null;

      return (portalUser && ! portalUser.orgId && ! portalUser.privileges)
        || (portalUser && portalUser.privileges && $.inArray('portal:user:createItem', portalUser.privileges) > -1);
    },
    prependURLHTTP: function(url) {
      if (!url || url === '' || url.match(/^mailto:/)) {
        return url;
      }
      if (! /^(https?:\/\/)|^(\/\/)/i.test(url)) {
        return 'http://' + url;
      }
      return url;
    },

    forceHttpsUrl: function(url) {
      var urlWithoutProtocol = url.replace(/^.*?\/\//, '');
      return 'https://' + urlWithoutProtocol;
    },

    forceProtocolRelativeUrl: function(url) {
      var urlWithoutProtocol = url.replace(/^.*?\/\//, '');
      return '//' + urlWithoutProtocol;
    },

    uploadedImageNeedsFixing: function(url) {
      if (!url || !app.portal || !app.portal.url) {
        return false;
      }
      // fix sharing url on image constructor...
      var appItem = app.data && app.data.appItem;
      if (!appItem) {
        return false;
      }
      var appId = appItem.item.id;
      if (!appId) {
        return false;
      }

      var createdVersion = appItem.data.values.template.createdWith;
      var editedVersion = appItem.data.values.template.editedWith;
      var needsFixing = (createdVersion.match(/^1.[0|1]/) && editedVersion.match(/^1.[0|1]/));
      if (needsFixing && url.match(appId + '/resources')) {
        return true;
      }
      return false;

    },

    fixUploadedImageUrl: function(url) {
      var specificPortalUrl = url.replace(/^(https?:\/\/)|^(\/\/)/, '').split(/\//)[0];
      var genericPortalUrl = app.portal.portalHostname;
      if (!specificPortalUrl || !genericPortalUrl) {
        return url;
      }
      return url.replace(specificPortalUrl, genericPortalUrl);
    },

    fixUrlWithMultipleQueryParams: function(url) {
      if (!url) {
        return url;
      }
      // if there aren't multiple query params here, just return the url.
      var queryCount = url.match(/\?/g);
      if (!queryCount || queryCount.length < 2) {
        return url;
      }

      // replace every ? after the first one with an &
      var count = 0;
      url = url.replace(/\?/g, function(match) {
        count++;
        return (count > 1) ? '&' : match;
      });

      // use urlUtils to get the query object. if multiple values for a single key exist,
      // urlUtils puts them into an array on that key.
      var urlSplit = urlUtils.urlToObject(url);
      var queryObj = urlSplit.query;
      var queryArr = [];

      for (var key in queryObj) {
        // if it's an array, use the first value as the real value.
        if ($.isArray(queryObj[key])) {
          queryObj[key] = queryObj[key][0];
        }
        queryArr.push('' + key + '=' + queryObj[key]);
      }

      // reconstruct the url with a single set of query params.
      return urlSplit.path + '?' + queryArr.join('&');
    },

    fixSizeUrls: function(sizeArr, needsFixing) {
      if (needsFixing === undefined) {
        needsFixing = this.uploadedImageNeedsFixing(sizeArr[0].url);
      }
      if (!needsFixing) {
        return sizeArr;
      }
      sizeArr.forEach(function(sizeObj) {
        sizeObj.url = this.fixUploadedImageUrl(sizeObj.url);
      });
      return sizeArr;
    },

    // sort sizes arr by longestSide, with largest first.
    sortSizeUrls: function(a, b) {
      if (!a.longestSide || !b.longestSide) {
        return b.width - a.width;
      }
      if (b.longestSide === a.longestSide) {
        return Math.min(b.width, b.height) - Math.min(a.width, a.height);
      }
      return b.longestSide - a.longestSide;
    },

    // find the size who's longest side is closest to, without going too far over,
    // the screen width. (remember, image.sizes is already sorted, descending order).
    // start with the largest one, and reduce, in case none of the available photos
    // are larger than the screen width.
    findASize: function(sizeArr, optionalWidth, isSorted) {
      if (!isSorted) {
        sizeArr.sort(this.sortSizeUrls);
      }
      optionalWidth = optionalWidth || $('body').width() || window.screen.width;
      var mainTarget = sizeArr[0];
      sizeArr.every(function(sizeObj) {
        if (sizeObj.longestSide >= optionalWidth - 50) {
          mainTarget = sizeObj;
          return true;
        }
        return false;
      });
      return mainTarget;
    },

    getLightOrDarkText: function(bgColor) {
      var yiq = this.getYIQ(bgColor);
      return (yiq >= 128) ? 'dark' : 'light';
    },

    getYIQ: function(thisColor) {
      var djColor = new Color(thisColor);
      var rgbArr = djColor.toRgb();
      return (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000;
    },

    throttle: function(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;

      return function() {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function() {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        }
        else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
  };
});
