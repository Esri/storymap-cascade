/*
| Copyright 2016 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/

define([
  'lib-build/css!lib/calcite-bootstrap/css/calcite-bootstrap-open.min',
  'lib-build/less!./ui/bootstrap-override',

  'lib-build/css!../../lib/font-awesome/css/font-awesome',

  'lib-build/css!./Core',
  'lib-build/less!./Core',

  'esri/map',
  'esri/arcgis/Portal',
  'esri/arcgis/utils',
  './utils/CommonHelper',
  'esri/urlUtils',

  // Builder
  //'./builder/MyStoriesWrapper',

  // Utils
  'dojo/has',
  'esri/IdentityManager',
  'esri/arcgis/OAuthInfo',
  'esri/config',
  'esri/tasks/GeometryService',
  'esri/request',
  'dojo/topic',
  'dojo/on',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dojo/_base/kernel',
  'dojo/Deferred',
  'dojo/DeferredList',
  'dojo/query',

  'lib/fastclick/lib/fastclick'
], function(
  bootstrapCss,
  bootstrapOverrideCss,

  fontAwesomeCss,

  viewCss,
  viewLess,

  Map,
  arcgisPortal,
  arcgisUtils,
  CommonHelper,
  urlUtils,

  //MyStoriesWrapper,

  has,
  IdentityManager,
  ArcGISOAuthInfo,
  esriConfig,
  GeometryService,
  esriRequest,
  topic,
  on,
  lang,
  array,
  kernel,
  Deferred,
  DeferredList,
  query,

  FastClick
) {
  // Value is replaced with TPL_ENV_PRODUCTION during build
  var CONFIG = { environment: 'TPL_ENV_DEV' },
      _mainView = null,
      _builder = null,
      _urlParams = CommonHelper.getUrlParams();

  //
  // Initialization
  //

  function init(mainView, builder) {
    _mainView = mainView;
    _builder = builder;

    app.userCanEdit = false;

    initLocalization();

    // If browser doesn't support history and it's direct or gallery mode where the URL will have to be rewritten later
    // Redirect to a URL that the browser will be able to overwrite
    // And put a token so that we don't loop in here
    /*
    if (! CommonHelper.browserSupportHistory() && (isDirectCreation || isGalleryCreation) && _urlParams.ieredirected == null) {
      window.location = document.location.protocol + '//' + document.location.host + document.location.pathname + '#' + document.location.search + '&ieredirected';
    }
    */

    // Ignore index.html configuration on AGOL/Portal
    if (CommonHelper.isArcGISHosted()) {
      app.indexCfg = { };
    }
    // Keep only some properties in development
    else if (!isProd()) {
      app.indexCfg = {
        proxyurl: app.indexCfg.proxyurl,
        sharingurl: app.indexCfg.sharingurl,
        username: app.indexCfg.username,
        password: app.indexCfg.password,
        oAuthAppId: app.indexCfg.oAuthAppId,
        story: app.indexCfg.story
      };
    }

    // Check the config file
    /*
    if (! _mainView.checkConfigFileIsOK()) {
      initError('invalidConfig');
      return;
    }
    */

    // Init UI

    document.title = app.cfg.TPL_NAME;

    //
    // Instantiate FastClick to make the app more responsive except on the map due to conflict with popup charts
    //

    if (has('touch')) {
      $('body').addClass('hasTouch');
    }

    // TODO
    FastClick.prototype._needsClick = FastClick.prototype.needsClick;
    FastClick.prototype.needsClick = function(target) {
      if ($(target).parents('.esriPopup').length) {
        return true;
      }
      return FastClick.prototype._needsClick.call(this, target);
    };

    FastClick.attach(document.body);

    // App is embedded
    if (window != window.top /*|| _urlParams.forceEmbed !== undefined || app.indexCfg.forceEmbed*/) {
      $('body').addClass('isEmbed');
    }

    lang.mixin(app, {
      data: {},
      appCfg: {
        supportWebmapPreviewAGOL: false,
        useWebmapInApp: false,
        useStandardHeader: false,
        useAppTitleAsPageTitle: false
      },
      portal: null,
      builder: builder,
      isLoading: true,
      loadingTimeout: null
    });

    if (app.isInBuilder && (has('ie') || has('trident') || has('ff') || has('edge'))) {
      $('#fatalError .error-title').html(i18n.viewer.errors.sorry);
//      $('#fatalError .error-msg').html(i18n.viewer.errors.builderSupport3.replace('${CHROME}', '<a href="https://www.google.com/chrome/" target="_blank">Chrome</a>').replace('${SAFARI}', '<a href="https://www.apple.com/safari/" target="_blank">Safari</a>'));
      $('#fatalError .error-msg').html(i18n.viewer.errors.builderSupport4.replace('${CHROME}', '<a href="https://www.google.com/chrome/" target="_blank">Chrome</a>').replace('${SAFARI}', '<a href="https://www.apple.com/safari/" target="_blank">Safari</a>').replace('${ESRI-SUPPORT}', '<a href="https://support.esri.com" target="_blank">Esri Support</a>').replace('${BROWSER-SUPPORT-VOTE}', '<a href="http://links.esri.com/storymaps/vote-for-cascade-builder-browser-support" target="_blank">vote here</a>'));
      $('#fatalError').show();
      return;
    }

    if (app.isInBuilder && has('ipad')) {
      $('#fatalError .error-title').html(i18n.viewer.errors.sorry);
      $('#fatalError .error-msg').html(i18n.viewer.errors.builderSupport2);
      $('#fatalError').show();
      return;
    }

    if (has('ie') < 11) {
      $('#fatalError .error-title').html(i18n.viewer.errors.sorry);
      $('#fatalError .error-msg').html(
        i18n.viewer.errors.noViewerIE
          .replace('${VERSION}', 11)
          .replace('${UPGRADE}', '<a href="http://browsehappy.com/" target="_blank">' + i18n.viewer.errors.upgradeBrowser + '</a>')
      );
      $('#fatalError').show();
      return;
    }

    on(IdentityManager, 'dialog-create', function() {
      if (app.isLoading) {
        initError('invalidConfignoOAuth');
      }
    });

    // Remove preview from the URL
    topic.subscribe('tpl-ready', function() {
      var urlParams = document.location.search;
      if (urlParams) {
        urlParams = urlParams.replace('&preview', '');
      }

      window.history.replaceState({}, '', 'index.html' + urlParams + document.location.hash);
    });

    // Prepare an error message in builder for small screens
    if (app.isInBuilder) {
      // Touch device
      var errMsg = 'notConfiguredMobile';

      if (has('touch')) {
        // in portrait mode with enough room in landscape for builder
        if (window.innerHeight > window.innerWidth) {
          if (window.innerHeight > 768) {
            errMsg = 'notConfiguredMobile2';
          }
        }
        // in landscape mode with enough room to fit builder but prepare in case of orientation change
        else {
          if (window.innerWidth > 768) {
            errMsg = 'notConfiguredMobile2';
          }
        }
      }

      initError(errMsg, null, true);
    }

    if (! _mainView.init(this)) {
      return;
    }

    startLoadingTimeout();

    var extraParams = CommonHelper.getUrlParams();
    if (extraParams.sharinghost) {
      app.indexCfg.sharingurl = extraParams.sharinghost;
      app.indexCfg.proxyurl = extraParams.sharinghost.split('/content/')[0] + '/proxy';
    }

    // Sharing URL
    if (! app.indexCfg.sharingurl) {
      // Determine if hosted or on a Portal
      var appLocation = document.location.pathname.indexOf('/apps/');

      if (appLocation == -1) {
        appLocation = document.location.pathname.indexOf('/home/');
      }

      if (appLocation != -1) {
        // Get the portal instance name
        var instance = location.pathname.substr(0,appLocation);

        app.indexCfg.sharingurl = '//' + location.host + instance + '/sharing/content/items';
        app.indexCfg.proxyurl = '//' + location.host + instance + '/sharing/proxy';
      }
      else {
        app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL;
      }
    }

    if (app.indexCfg.sharingurl.match(/^http/)) {
      arcgisUtils.arcgisUrl = app.indexCfg.sharingurl;
    }
    else {
      arcgisUtils.arcgisUrl = location.protocol + app.indexCfg.sharingurl;
    }

    // Proxy URL
    if (! app.indexCfg.proxyurl) {
      app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL;
    }
    esriConfig.defaults.io.proxyUrl = location.protocol + app.indexCfg.proxyurl;

    // Allow IE9 to save over HTTP
    if (IdentityManager) {
      IdentityManager.setProtocolErrorHandler(function() {
        return true;
      });
    }

    // USE CORS to save the web app configuration during developement
    if (app.isInBuilder && app.cfg.CORS_SERVER) {
      $.each(app.cfg.CORS_SERVER, function(i, server) {
        esriConfig.defaults.io.corsEnabledServers.push(server);
      });
    }

    // Proxy rules
    if (app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length) {
      $.each(app.cfg.PROXY_RULES, function(i, rule) {
        if (rule && rule.urlPrefix && rule.proxyUrl) {
          urlUtils.addProxyRule(rule);
        }
      });
    }

    // Set timeout depending on the application mode
    esriConfig.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST;

    // Fix for multiple twitter bootstrap popup to be open simultaneously
    $.fn.modal.Constructor.prototype.enforceFocus = function() { };

    // Disable form submit on enter key
    $('form').bind('keydown', function(e) {
      if (e.keyCode == 13) {
        return false;
      }
    });

    topic.subscribe('CORE_UPDATE_EXTENT', setMapExtent);

    // Load the Portal
    app.portal = new arcgisPortal.Portal(app.indexCfg.sharingurl.split('/sharing/')[0]);
    app.portal.on('load', function(response) {
      app.isPortal = !! response.isPortal;

      definePortalConfig();

      // If app is configured to use OAuth
      if (app.indexCfg.oAuthAppId) {
        var info = new ArcGISOAuthInfo({
          appId: app.indexCfg.oAuthAppId,
          popup: false,
          portalUrl: 'https:' + app.indexCfg.sharingurl.split('/sharing/')[0]
        });

        IdentityManager.registerOAuthInfos([info]);

        IdentityManager.checkSignInStatus(info.portalUrl).then(
          function() {
            // User has signed-in using oAuth
            if (! builder) {
              portalLogin().then(initStep2);
            }
            else {
              portalLogin().then(initStep2);
            }
          },
          function() {
            // Not signed-in, redirecting to OAuth sign-in page if builder
            if (!builder) {
              initStep2();
            }
            else {
              portalLogin().then(initStep2);
            }
          }
        );
      }
      else {
        initStep2();
      }
    });
  }

  function initStep2() {
    var appId = CommonHelper.getAppID(isProd()),
        webmapId = CommonHelper.getWebmapID(isProd()),
        supportWebmapPreviewAGOL = !! (app.appCfg ? app.appCfg.supportWebmapPreviewAGOL : true);

    //if (app.isInBuilder )

    // Load using static config file
    var configName = app.indexCfg.story || CommonHelper.getUrlParams().story;
    if (configName) {
      if (! isProd()) {
        setTimeout(function() {
          _mainView.getConfig(configName);
        }, 1000);
        return;
      }
      else {
        _mainView.getConfig(configName);
        return;
      }
    }

    // Load using a Web Mapping Application item
    if (appId) {
      loadWebMappingApp(appId);
      return;
    }

    // Webmap and template doesn't support preview when hosted in AGOL
    if (webmapId && ! supportWebmapPreviewAGOL) {
      if (CommonHelper.isArcGISHosted()) {
        redirectToExternalHelp();
      }
      else {
        loadWebMap(webmapId);
      }

      return;
    }

    // Direct creation and not signed-in
    if (app.isInBuilder && _builder.isDirectCreation && isProd() && CommonHelper.isArcGISHosted() && ! (CommonHelper.getPortalUser() || app.portal.getPortalUser())) {
      redirectToSignIn();
      return;
    }

    // Direct creation and signed in
    if (app.isInBuilder && _builder.isDirectCreation) {
      portalLogin().then(function() {
        initializeUI();
        appInitComplete();
      });
      return;
    }

    if (CommonHelper.isArcGISHosted()) {
      redirectToExternalHelp();
    }
    else if (_urlParams.appid && (! app.indexCfg.authorizedOwners || ! app.indexCfg.authorizedOwners[0])) {
      initError('unspecifiedConfigOwner');
    }
    else if (! app.isProduction) {
      initError('invalidConfigNoAppDev');
    }
    else {
      initError('invalidConfigNoApp');
    }
  }

  function loadWebMappingApp(appId) {
    var forceLogin = _urlParams.forceLogin !== undefined;

    // If forceLogin parameter in URL OR builder
    if (forceLogin || app.isInBuilder) {
      portalLogin().then(
        function() {
          loadWebMappingAppStep2(appId);
        },
        function() {
          initError('notAuthorized');
        }
      );
    }
    // Production in view mode
    else {
      loadWebMappingAppStep2(appId);
    }
  }

  function loadWebMappingAppStep2(appId) {
    arcgisUtils.getItem(appId).then(
      function(response) {
        if (! response) {
          initError('appLoadingFail');
          return;
        }

        var itemRq = response.item,
            dataRq = response.itemData;

        app.data.appItem = {
          item: itemRq,
          data: dataRq
        };

        app.userCanEdit = CommonHelper.userIsAppOwner();

        // Prevent app from accessing the cookie in viewer when user is not the owner
        if (! app.isInBuilder && ! app.userCanEdit) {
          if (! document.__defineGetter__) {
            Object.defineProperty(document, 'cookie', {
              get: function() {
                return '';
              },
              set: function() {
                return true;
              }
            });
          }
          else {
            document.__defineGetter__('cookie', function() {
              return '';
            });
            document.__defineSetter__('cookie', function() {
            });
          }
        }

        if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
          var owner = itemRq.owner,
              ownerFound = false;

          if (owner) {
            ownerFound = $.inArray(owner, app.indexCfg.authorizedOwners) != -1;
          }

          if (! ownerFound && app.indexCfg.authorizedOwners[0] == '*') {
            ownerFound = true;
          }

          if (! ownerFound) {
            $.each(app.indexCfg.authorizedOwners, function(i, owner) {
              var test = owner.match(/^\[(.*)\]$/);

              if (test) {
                if (itemRq.orgId == test[1]) {
                  ownerFound = true;
                }
              }
            });
          }

          if (! ownerFound) {
            initError('invalidConfigOwner');
            return;
          }
        }

        // App proxies
        if (itemRq && itemRq.appProxies) {
          var layerMixins = array.map(itemRq.appProxies, function(p) {
            return {
              url: p.sourceUrl,
              mixin: {
                url: p.proxyUrl
              }
            };
          });

          app.data.appProxies = layerMixins;
        }

        // If in builder, check that user is app owner or org admin
        if (app.isInBuilder && isProd() && !app.userCanEdit) {
          initError('notAuthorized');
          return;
        }

        var isStoryBlank = _mainView.isStoryBlank();

        if (! isStoryBlank) {
          appInitComplete();
        }
        else if (app.isInBuilder) {
          appInitComplete();
        }
        // No data in view mode
        else if(CommonHelper.getAppID(isProd())) {
          if(app.userCanEdit) {
            //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
            //setTimeout(function(){
            CommonHelper.switchToBuilder();
            //}, 1200);
          }
          else {
            initError('notConfiguredDesktop');
          }
        }
        // No data in preview mode (should not happen)
        else {
          initError('noLayer');
        }
      },
      function(error) {
        if (error && error.httpCode == 400) {
          initError('invalidApp');
        }
        else if (error && error.httpCode == 403) {
          initError('notAuthorized');
        }
        else {
          initError('appLoadingFail');
        }
      }
    );
  }

  function portalLogin() {
    var resultDeferred = new Deferred();

    app.portal.signIn().then(
      function() {

        // If in builder, check that user is user can create/edit item
        if (app.isInBuilder && ! CommonHelper.checkUserItemPrivileges()) {
          initError('notAuthorizedBuilder');
          return;
        }

        app.userCanEdit = CommonHelper.userIsAppOwner();

        definePortalConfig();
        app.portal.signedIn = true;
        topic.publish('portal-signin');
        resultDeferred.resolve();
      },
      function() {
        resultDeferred.reject();
      }
    );

    return resultDeferred;
  }

  function loadWebMap(webmapIdOrJSON) {
    _mainView.loadFirstWebmap(webmapIdOrJSON).then(
      lang.hitch(this, function(response) {
        webMapInitCallback(response);
      }),
      lang.hitch(this, function() {
        initError('createMap');
      })
    );
  }

  function webMapInitCallback(/*response*/) {
    console.error('FATAL ERROR');
    return;
    /*
    app.maps[response.itemInfo.item.id] = _mainView.getMapConfig(response);
    app.map = response.map;
    app.data.setWebMap(response.itemInfo);

    app.map.disableKeyboardNavigation();

    initializeUI();

    _mainView.firstWebmapLoaded();
    */
  }

  function redirectToExternalHelp() {
    window.location = app.isPortal && app.cfg.HELP_URL_PORTAL ? app.cfg.HELP_URL_PORTAL : app.cfg.HELP_URL;
  }

  function initializeUI() {
    //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step3);

    // Initialize header
    // Title/subtitle are the first valid string from: index.html config object, web application data, web map data
    // TODO
    var title = app.data.title;

    if (app.appCfg.useAppTitleAsPageTitle) {
      document.title = title ? $('<div>' + title + '</div>').text() : app.cfg.TPL_NAME;
    }
  }

  function appInitComplete() {
    if (_mainView.isStoryBlank() && app.isInBuilder) {
      app.builder.appInitComplete();
      _mainView.appInitComplete();
    }
    else if (app.isInBuilder) {
      _mainView.appInitComplete();
      app.builder.appInitComplete();
    }
    else {
      _mainView.appInitComplete();
    }

    // Load My Stories in builder or viewer if user is owning the story
    if ((app.isInBuilder || app.userCanEdit) && has('ie') != 9 && ! _urlParams.preview) {
      if (has('ff')) {
        $('.builderShare #my-stories-frame').remove();
      }

      if (has('ff') || ! app.isInBuilder) {
        //$('body').append('<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>');
      }

      //MyStoriesWrapper.loadMyStories();
    }

    // Update URL for hosted apps so that when shared it will have the proper metadata on social medias
    if (document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/)
        && document.location.search.match(/^\?appid=/)
        && (! has('ie') || has('ie') >= 10)) {
      window.history.replaceState({}, '', 'index.html' + document.location.search + document.location.hash);
    }
  }

  function initError(error, message, noDisplay) {
    var errorMsg = i18n.viewer.errors[error];

    errorMsg = errorMsg.replace(/{TPL_NAME}/g, app.cfg.TPL_NAME);

    if (error == 'notAuthorized' && app.indexCfg.oAuthAppId) {
      errorMsg += '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' + i18n.viewer.errors.signOut + '</button></div>';
    }

    if (error == 'appLoadingFail') {
      $('#loadingMessage').html(
        '<div id="loadingRetry">'
        + ' <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">'
        + i18n.viewer.loading.failButton
        + ' </button>'
        + '</div>'
      ).hide().fadeIn(1200, function() {
        $('#loadingMessage').addClass('loaded');
      });
    }
    else {
      $('#loadingMessage').hide();
    }

    $('#fatalError .error-msg').html(errorMsg);

    if (! noDisplay) {
      cleanLoadingTimeout();
      $('#loadingIndicator').hide();

      $('#fatalError').show();
    }
  }

  function replaceInitErrorMessage(error) {
    $('#fatalError .error-msg').html(i18n.viewer.errors[error]);
  }

  //
  // Map navigation
  //

  function setMapExtent(extent) {
    if (! extent || ! extent.spatialReference || ! app.map || ! app.map.extent.spatialReference || ! app.map.spatialReference) {
      var r = new Deferred();

      r.resolve();
      return r;
    }

    if (app.map.spatialReference.wkid == extent.spatialReference.wkid) {
      return app.map.setExtent(extent/*, true*/); /* TODO */
    }
    else {
      var resultDeferred = new Deferred();

      esriConfig.defaults.geometryService.project([extent], app.map.spatialReference, function(features) {
        if (! features || ! features[0]) {
          return;
        }

        app.map.setExtent(features[0]/*, true*/); /* TODO */
        resultDeferred.resolve();
      });
      return resultDeferred;
    }
  }

  function zoomToDeviceLocation(success, geom) {
    if (success) {
      if (app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326) {
        esriConfig.defaults.geometryService.project([geom], app.map.spatialReference, function(features) {
          if (! features || ! features[0]) {
            return;
          }

          if (! app.map.extent.contains(features[0])) {
            app.map.centerAt(features[0]);
          }
        });
      }
      else if (! app.map.extent.contains(geom)) {
        app.map.centerAt(geom);
      }
    }
  }

  //
  // UI
  //

  function hasSwitchBuilderButton() {
    return ! app.isInBuilder && (
      (! isProd() && !! CommonHelper.getAppID(isProd()))
      || isProd() && app.userCanEdit)
      && (_urlParams.preview === undefined || _urlParams.preview == 'false');
  }

  function redirectToSignIn() {
    window.location = arcgisUtils.arcgisUrl.split('/sharing/')[0]
      + '/home/signin.html?returnUrl='
      + encodeURIComponent(document.location.href);
  }

  /*
  function redirectToBuilderFromGallery() {
    // TODO display another redirect message
    //app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
    //setTimeout(function(){
    window.location = document.location.href + '&fromGallery';
    //}, 1200);
  }
  */

  //
  // App init
  //

  function startLoadingTimeout() {
    app.loadingTimeout = setTimeout(appLoadingTimeout, app.cfg.TIMEOUT_VIEWER_LOAD);
  }

  function cleanLoadingTimeout() {
    if (typeof app != 'undefined' && app.loadingTimeout) {
      clearTimeout(app.loadingTimeout);
      app.loadingTimeout = null;
    }
  }

  function appLoadingTimeout() {
    // Restart the timeout if the dialog is shown or has been shown and the timeout hasn't been fired after it has been closed
    if (IdentityManager && IdentityManager.dialog && IdentityManager.dialog._alreadyInitialized && ! IdentityManager.loadingTimeoutAlreadyFired) {
      clearTimeout(app.loadingTimeout);
      startLoadingTimeout();
      // Set a flag only if the dialog isn't showned now
      if (! IdentityManager._busy) {
        IdentityManager.loadingTimeoutAlreadyFired = true;
      }
      return;
    }

    /*
    //$("#loadingIndicator").fadeOut();
    $('#loadingMessage').html(
      '<div class="mainMessage">'
      + i18n.viewer.loading.long
      + '<br />'
      + i18n.viewer.loading.long2
      + '</div>'
    ).fadeIn('slow', function() {
      $('#loadingMessage').addClass('loaded');
    });
    */

    //app.map && app.map.destroy();
  }

  function initLocalization() {
    document.documentElement.lang = kernel.locale;
    query('#fatalError .error-title')[0].innerHTML = i18n.viewer.errors.boxTitle;
  }

  function isProd() {
    // Prevent the string from being replaced
    return CONFIG.environment != ['TPL','ENV','DEV'].join('_');
  }

  function definePortalConfig() {
    if (! app.portal) {
      return;
    }

    // Use geocode service from the portal if none declared in config
    if (! app.cfg.HELPER_SERVICES.geocode.length && app.portal.helperServices) {
      if (app.portal.helperServices.geocode && app.portal.helperServices.geocode.length && app.portal.helperServices.geocode[0].url) {
        $.each(app.portal.helperServices.geocode, function(index, geocoder) {
          app.cfg.HELPER_SERVICES.geocode.push(geocoder);
        });
      }
    }

    // Use geometry service from the portal if none declared in config
    var geometryServiceURL;

    if (app.cfg.HELPER_SERVICES.geometry && app.cfg.HELPER_SERVICES.geometry.url) {
      geometryServiceURL = app.cfg.HELPER_SERVICES.geometry.url;
    }
    else if (app.portal.helperServices.geometry && app.portal.helperServices.geometry.url) {
      geometryServiceURL = app.portal.helperServices.geometry.url;
    }
    esriConfig.defaults.geometryService = new GeometryService(geometryServiceURL);

    // Use bing key from the portal if none declared in config
    if (! app.cfg.BING_MAPS_KEY && app.portal.bingKey) {
      app.cfg.BING_MAPS_KEY = app.portal.bingKey;
    }

    // Disable feature service creation as Portal for ArcGIS 10.2 doesn't support that yet
    if (app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE) {
      app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = false;
    }

    app.isPortal = !! app.portal.isPortal;

    // Help URL on Portal for ArcGIS
    if (app.isPortal && app.portal.helpBase && app.portal.portalHostname) {
      // app.cfg.HELP_URL_PORTAL contains the page in the help doc
      // app.portal.helpBase contains the path to the home of help
      // app.portal.helpBase should always be relative to the hostname and include the optional portal instance name
      // app.portal.portalHostname also include the portal instance name so we remove it first

      // Skip if the URL is already a full path
      if (! app.cfg.HELP_URL_PORTAL.match('^//')) {
        var portalHost = app.portal.portalHostname.split('/')[0];

        app.cfg.HELP_URL_PORTAL = '//' + portalHost + app.portal.helpBase + app.cfg.HELP_URL_PORTAL;
      }
    }
  }

  return {
    init: init,
    isProd: isProd,
    appInitComplete: appInitComplete,

    loadWebMap: loadWebMap,
    hasSwitchBuilderButton: hasSwitchBuilderButton,

    zoomToDeviceLocation: zoomToDeviceLocation,

    cleanLoadingTimeout: cleanLoadingTimeout,
    initError: initError,
    replaceInitErrorMessage: replaceInitErrorMessage,
    portalLogin: portalLogin
  };
});
