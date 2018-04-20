define([
  'dojo/_base/lang',
  'dojo/_base/array',
  'esri/arcgis/utils',
  'esri/IdentityManager',
  'esri/request'
], function(
  lang,
  array,
  arcgisUtils,
  IdentityManager,
  esriRequest
) {
  /**
   * BuilderHelper
   * @class BuilderHelper
   *
   * Collection of helper functions for Builder
   */

  function getPortalURL() {
    return arcgisUtils.arcgisUrl.split('/sharing/')[0];
  }

  function saveApp(doNotOverwriteTitle) {
    var portalUrl = getPortalURL(),
        appItem = lang.clone(app.data.appItem.item),
        appData = lang.clone(app.data.appItem.data),
        uid = appItem.owner || IdentityManager.findCredential(portalUrl).userId,
        token = IdentityManager.findCredential(portalUrl).token;

    // Remove properties that don't have to be committed
    delete appItem.avgRating;
    delete appItem.modified;
    delete appItem.numComments;
    delete appItem.numRatings;
    delete appItem.numViews;
    delete appItem.size;

    //
    // Add/edit the typeKeyword property to be able to identify the app and the layout
    //

    if (! appItem.typeKeywords) {
      appItem.typeKeywords = [];
    }

    // App not created through the builder fromScratch mode don't get those keywords
    appItem.typeKeywords = appItem.typeKeywords.concat(app.cfg.WEBAPP_KEYWORD_APP);

    // Those should only be necessary to be able to convert an appid that wasn't already selfConfigured
    appItem.typeKeywords = appItem.typeKeywords.concat(app.cfg.WEBAPP_KEYWORD_GENERIC);

    // Layout
    var layouts = $.map(app.cfg.LAYOUTS, function(layout) {
      return 'layout-' + layout.id;
    });
    // Filter previous layout keyword
    appItem.typeKeywords = $.grep(appItem.typeKeywords, function(keyword) {
      return $.inArray(keyword, layouts) == -1;
    });
    // Add actual layout keyword
    appItem.typeKeywords.push('layout-cascade-1');

    // Make the typeKeywords array unique
    appItem.typeKeywords = $.grep(appItem.typeKeywords, function(keyword, index) {
      return index == $.inArray(keyword, appItem.typeKeywords);
    });

    // Transform arrays
    appItem.tags = appItem.tags ? appItem.tags.join(',') : '';
    appItem.typeKeywords = appItem.typeKeywords.join(',');

    // App proxies
    appItem.serviceProxyParams = JSON.stringify(appItem.serviceProxyParams);

    // Title
    if (! doNotOverwriteTitle) {
      appItem.title = app.data.title;
    }

    if (appItem.properties) {
      appItem.properties = JSON.stringify(appItem.properties);
    }

    // Edit URL of hosted apps to always include index.html
    if (appItem.url && appItem.url.match(/apps\/[a-zA-Z]+\/\?appid=/)) {
      appItem.url = appItem.url.replace('/?appid=', '/index.html?appid=');
    }

    appItem = lang.mixin(appItem, {
      f: 'json',
      token: token,
      overwrite: true,
      text: JSON.stringify(appData)
    });

    var url = portalUrl + '/sharing/rest/content/users/' + uid + (appItem.ownerFolder ? ('/' + appItem.ownerFolder) : '');

    // Updating
    if (appItem.id) {
      url += '/items/' + appItem.id + '/update';
    }
    // creating
    else {
      url += '/addItem';
    }

    return esriRequest(
      {
        url: url,
        handleAs: 'json',
        content: appItem
      },
      {
        usePost: true
      }
    );
  }

  function cleanApp() {
    if (! app.portal) {
      console.error('Fatal error - not signed in');
      return;
    }

    return;
    // TODO
    /*
    app.portal.signIn().then(
      function() {
        var portalUrl = getPortalURL(),
            uid = IdentityManager.findCredential(portalUrl).userId,
            token = IdentityManager.findCredential(portalUrl).token,
            appItem = lang.clone(app.data.getWebAppItem());

        // Remove properties that don't have to be committed
        delete appItem.avgRating;
        delete appItem.modified;
        delete appItem.numComments;
        delete appItem.numRatings;
        delete appItem.numViews;
        delete appItem.size;

        appItem = lang.mixin(appItem, {
          f: 'json',
          token: token,
          overwrite: true,
          text: JSON.stringify(app.data.getWebAppData().getBlank())
        });

        var saveRq = esriRequest(
          {
            url: portalUrl + '/sharing/rest/content/users/' + uid + (appItem.ownerFolder ? ('/' + appItem.ownerFolder) : '') + '/addItem',
            handleAs: 'json',
            content: appItem
          },
          {
            usePost: true
          }
        );

        saveRq.then(
          function() {
            console.log('Web Application data cleaned successfully');
          },
          function() {
            console.log('Web Application data cleaning has failed');
          }
        );
      },
      function(error) {
        console.error('Web Application data cleaning has failed', error);
      }
    );

    return 'Cleaning ...';
    */
  }

  /*eslint-disable */
  function getBlankAppJSON() {
    return {
      "itemType": "text",
      "guid": null,
      "name": null,
      "type": "Web Mapping Application",
      "typeKeywords": app.cfg.WEBAPP_KEYWORD_GENERIC.concat(app.cfg.WEBAPP_KEYWORD_APP),
      "description": null,
      "tags": app.cfg.WEBAPP_TAG,
      "snippet": null,
      "thumbnail": null,
      "documentation": null,
      "extent": [],
      "lastModified": -1,
      "spatialReference": null,
      "accessInformation": null,
      "licenseInfo": null,
      "culture": "en-us", // TODO
      "properties": null,
      "size": 1,
      "appCategories": [],
      "industries": [],
      "languages": [],
      "largeThumbnail": null,
      "banner": null,
      "screenshots": [],
      "listed": false,
      "ownerFolder": null,
      "protected": false,
      "commentsEnabled": true,
      "numComments": 0,
      "numRatings": 0,
      "avgRating": 0,
      "numViews": 1
    };
  }
  /*eslint-enable */

  /*
  function getMyContentURL() {
    return this.getPortalURL() + '/home/content.html';
  }
  */

  function getMapViewerLink(webmapId) {
    return this.getPortalURL() + '/home/webmap/viewer.html' + '?webmap=' + webmapId;
  }

  function getSceneViewerLink(websceneId) {
    return this.getPortalURL() + '/home/webscene/viewer.html' + '?webscene=' + websceneId;
  }

  function getMyStoriesURL() {
    if (app.isPortal) {
      return this.getPortalURL() + '/apps/MyStories/';
    }
    else {
      return '//storymaps.arcgis.com/en/my-stories/';
    }
  }

  return {
    getPortalURL: getPortalURL,
    saveApp: saveApp,
    getBlankAppJSON: getBlankAppJSON,
    cleanApp: cleanApp,
    getMapViewerLink: getMapViewerLink,
    getSceneViewerLink: getSceneViewerLink,
    getMyStoriesURL: getMyStoriesURL
  };
});
