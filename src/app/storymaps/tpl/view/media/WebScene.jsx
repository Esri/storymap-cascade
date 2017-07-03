import Media from './Media';

import {} from 'lib-build/less!./WebScene';
import viewBlock from 'lib-build/hbars!./WebSceneBlock';
import viewBackground from 'lib-build/hbars!./WebSceneBackground';

import viewBlockError from 'lib-build/hbars!./WebSceneBlockError';
import viewBackgroundError from 'lib-build/hbars!./WebSceneBackgroundError';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import UIUtils from 'storymaps/tpl/utils/UI';

import IdentityManager from 'esri/IdentityManager';

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/scene.png';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/scene.png';

var NEED_PORTAL_INIT = true;

export default class WebScene extends Media {

  constructor(webscene) {
    super({
      type: 'webscene',
      id: webscene.id,
      previewThumb: PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._webscene = webscene;

    this._placement = null;
    this._isLoaded = false;

    this._isSupported = UIUtils.hasWebGL() && ! UIUtils.isMobileBrowser();

    this._stopMousewheel = event => {
      event.stopImmediatePropagation();
    };

    if (! this._isSupported) {
      app.data.errorWebGL = true;
    }

    if (! this._webscene.options) {
      this._webscene.options = {
        interaction: 'enabled'
      };
    }

    if (this._webscene.slide === undefined) {
      this._webscene.slide = -1;
    }

    this._fourApiLoaded = this._loadFourApi();
  }

  render(context) {
    var output = '';

    if (! this._webscene || ! context) {
      console.log('Could not render webscene in section');
      return output;
    }

    this._placement = context.placement;

    if (context.placement == 'background') {

      /*
      if (! UIUtils.hasWebGL() || UIUtils.isMobileBrowser()) {
        throw 'RUNTIME-NO-WEBGL';
      }
      */

      if (this._isSupported) {
        output += viewBackground({
          id: this._domID,
          websceneId: this.id,
          labelExploreStart: i18n.viewer.media.exploreMap,
          labelExploreStop: i18n.viewer.media.exploreStop
        });
      }
      else {
        output += viewBackgroundError({
          id: this._domID,
          message: i18n.viewer.media.sceneNotSupported
        });
      }
    }
    else {
      if (this._isSupported) {
        output += viewBlock({
          id: this._domID,
          websceneId: this.id,
          caption: this._webscene.caption,
          placeholder: i18n.viewer.media.captionPlaceholder,
          captionEditable: app.isInBuilder,
          labelExploreStart: i18n.viewer.media.exploreMap,
          labelExploreStop: i18n.viewer.media.exploreStop
        });
      }
      else {
        output += viewBlockError({
          id: this._domID,
          message: i18n.viewer.media.sceneNotSupported
        });
      }
    }

    return output;
  }

  setLoaded(isLoaded) {
    this._isLoaded = isLoaded;
  }

  _applyConfig() {
    var options = this._webscene.options;

    if (! this._isSupported) {
      return;
    }

    super._applyConfig(options);

    this._applyInteraction();

    this.performAction({});

    if (app.isInBuilder && this._configTabWebScene) {
      this._configTabWebScene.attachEvents();
    }
  }

  _applyInteraction() {
    // TODO: duplicate between map/scene/page should be in Media
    //  store an object for options or always use _media.options???
    if (this._webscene.options.interaction) {
      let classes = $.map(this._node.attr('class').split(' '), function(l) {
        return l.match(/interaction-/) ? l : null;
      }).join(' ');

      this._node
        .removeClass(classes)
        .addClass('interaction-' + this._webscene.options.interaction);

      this._node.find('.interaction-container').removeClass('enabled');
    }
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    if (this._placement == 'block') {
      this._node = params.container.find('#' + this._domID);
    }
    else {
      if (!this._isSupported) {
        this._node = params.container.find('#' + this._domID).parent();
      }
      else {
        this._node = params.container.find('.scene[data-id="' + this.id + '"]').parent();
      }
    }

    this._applyConfig();
  }

  getNode() {
    return this._node;
  }

  _loadFourApi() {
    return new Promise(resolve => {
      require([
        'esri4/config',
        'esri4/core/urlUtils',
        'esri4/identity/IdentityManager',
        'esri4/identity/OAuthInfo',
        'esri4/views/SceneView',
        'esri4/portal/PortalItem',
        'esri4/WebScene',
        'esri4/core/watchUtils',
        'lib-build/css!esri4/css/main.css'
      ],
      function(
        esriConfig,
        urlUtils,
        esriId,
        OAuthInfo,
        SceneView,
        PortalItem,
        WebScene,
        watchUtils
      ) {
        this._esriConfig = esriConfig;
        this._urlUtils = urlUtils;
        this._esriId = esriId;
        this._OAuthInfo = OAuthInfo;
        this._SceneView = SceneView;
        this._PortalItem = PortalItem;
        this._AGOLWebScene = WebScene;
        this._watchUtils = watchUtils;

        resolve();
      }.bind(this));
    });
  }

  load() {
    if (! this._node || this._isLoaded || ! this._isSupported) {
      return;
    }

    this.setLoaded(true);

    this._node.addClass('media-is-loading');

    let userCredentials = IdentityManager.toJson();

    this._fourApiLoaded.then(() => {
      let portalUrl = app.indexCfg.sharingurl.split('/sharing/')[0];
      this._esriConfig.portalUrl = portalUrl;

      this._esriConfig.workers.loaderConfig = {
        packages: [
          {
            name: 'esri4',
            location: 'https://jsdev.arcgis.com/4.4/esri'
          }
        ]
      };

      // Proxy rules
      this._esriConfig.request.proxyUrl = location.protocol + app.indexCfg.proxyurl;

      if (app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length) {
        $.each(app.cfg.PROXY_RULES, function(i, rule) {
          if (rule && rule.urlPrefix && rule.proxyUrl) {
            this._urlUtils.addProxyRule(rule);
          }
        });
      }

      if (NEED_PORTAL_INIT) {
        if (app.indexCfg.oAuthAppId) {
          let info = new this._OAuthInfo({
            appId: app.indexCfg.oAuthAppId,
            popup: false,
            portalUrl: 'https:' + portalUrl
          });

          this._esriId.registerOAuthInfos([info]);

          this._esriId.checkSignInStatus('https:' + app.indexCfg.sharingurl.split('/sharing/')[0] + '/sharing').then(
            this._loadStep2.bind(this),
            function() {
              console.error('Error during oAuth process for web scene');
              this._loadStep2.bind(this)();
            }.bind(this)
          );
        }
        else {
          // initialize also add a serverInfo with www.arcgis.com
          //esriId.initialize(userCredentials);

          for (let info of userCredentials.credentials) {
            this._esriId.registerToken(info);
          }

          this._loadStep2.bind(this)();
        }

        NEED_PORTAL_INIT = false;
      }
      else {
        this._loadStep2.bind(this)();
      }
    });
  }

  // Web Scene loading
  _loadStep2() {
    let scene = new this._AGOLWebScene({
      portalItem: new this._PortalItem({
        id: this.id
      })
    });

    // catch a failed scene
    scene.otherwise(function() {
      if (app.builder) {
        this.setError({unfixable: true, showLoadingError: true});
      }
      else {
        this.setError({minimizeInViewer: true});
      }
    }.bind(this));

    let view = new this._SceneView({
      map: scene,
      container: this._node.find('.scene')[0]
    });

    // Store in the section cache
    this._cache[this.id] = {
      scene: scene,
      view: view
    };

    view.then(function() {
      this._cache[this.id].initialViewpoint = view.viewpoint;

      view.ui.move('zoom', 'bottom-right');
      view.ui.move('compass', 'bottom-right');
      view.ui.remove('navigation-toggle');

      this._fadeInMedia();
    }.bind(this));

    // Disable wheel
    view.surface.addEventListener('wheel', this._stopMousewheel, true);

    // Apply the slide
    if (this._webscene.slide !== undefined && this._webscene.slide !== -1) {
      this._watchUtils.init(scene, 'presentation.slides', function(slides) {
        if (slides && slides.items && slides.items.length) {
          view.then(() => {
            slides.items[this._webscene.slide].applyTo(view, {
              animate: false
            });
          });
        }

        if (app.isInBuilder) {
          this._onWebSceneLoaded();
        }
      }.bind(this));
    }
    else {
      if (app.isInBuilder) {
        this._onWebSceneLoaded();
      }
    }

    // The event is only registered once for all views in immersive
    this._node
      .removeClass('media-is-loading')
      .find('.interaction-container').click(this._onEnableButtonClick.bind(this));
  }

  performAction(params) {
    var media = this._cache[this.id],
        scene = media ? media.scene : null,
        view = media ? media.view : null;

    if (! scene || ! view || ! view.ready || ! this._isSupported) {
      return;
    }

    if (this._webscene.slide === -1) {
      if (this._cache[this.id].initialViewpoint) {
        view.goTo(this._cache[this.id].initialViewpoint);
      }
    }
    else if (this._webscene.slide !== undefined && this._webscene.slide <= scene.presentation.slides.items.length) {
      scene.presentation.slides.items[this._webscene.slide].applyTo(view, {
        animate: params.animate === false ? false : true
      });
    }

    this._applyInteraction();
  }

  unload() {
    if (this._cache[this.id] && this._cache[this.id].view) {
      this._cache[this.id].view.surface.removeEventListener('wheel', this._stopMousewheel, true);
      this._cache[this.id].view.destroy();

      this._cache[this.id] = null;
    }

    this.setLoaded(false);
    this._node.find('.media-loading').show();
  }

  resize() {
    //
  }
}
