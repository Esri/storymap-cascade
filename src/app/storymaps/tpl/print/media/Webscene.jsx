/* eslint brace-style: 0 */
import React, { Component } from 'react';

import Text from './Text';

import IdentityManager3 from 'esri/IdentityManager';

let PORTAL_INITIATED = false;

class Webscene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sceneStarted: false,
      sceneLoaded: false
    };
    this.loadJsapi4();
    this.sceneView = null;
  }

  static isDuplicate(sceneInfoA, sceneInfoB) {
    let slidesMatch = false;
    const noSlidesA = (sceneInfoA.slide === undefined || sceneInfoA.slide < 0);
    const noSlidesB = (sceneInfoB.slide === undefined || sceneInfoB.slide < 0);

    if (noSlidesA && noSlidesB) {
      slidesMatch = true;
    } else if (noSlidesA || noSlidesB) {
      slidesMatch = false;
    } else if (sceneInfoA.slide === sceneInfoB.slide) {
      slidesMatch = true;
    }

    return slidesMatch;

  }

  loadJsapi4() {
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
    ], function(esriConfig, urlUtils, esriId, OAuthInfo, SceneView, PortalItem, WebScene, watchUtils) {
      this.esriConfig4 = esriConfig;
      this.urlUtils4 = urlUtils;
      this.IdentityManager4 = esriId;
      this.OAuthInfo4 = OAuthInfo;
      this.SceneView4 = SceneView;
      this.PortalItem4 = PortalItem;
      this.WebScene4 = WebScene;
      this.watchUtils4 = watchUtils;

      this.transferStuffToJsapi4();
      this.loadWebscene();
    }.bind(this));
  }

  transferStuffToJsapi4() {
    let portalUrl = app.indexCfg.sharingurl.split('/sharing/')[0];
    this.transferPortalUrl(portalUrl);
    this.setupWorkers();
    this.transferProxySettings();

    if (!PORTAL_INITIATED) {
      this.initPortal(portalUrl);
    } else {
      this.transferCredentials();
    }
  }

  transferPortalUrl(portalUrl) {
    this.esriConfig4.portalUrl = portalUrl;
  }

  setupWorkers() {
    this.esriConfig4.workers.loaderUrl = app.pathJSAPI4 + 'dojo/dojo.js';
    this.esriConfig4.workers.loaderConfig = {
      baseUrl: app.pathJSAPI4 + 'dojo',
      packages: [
        { name: 'esri4', location: '../esri' },
        { name: 'esri', location: '../esri' },
        { name: 'dojo', location: '.' },
        { name: 'dojox', location: '../dojox' },
        { name: 'dstore', location: '../dstore' },
        { name: 'moment', location: '../moment' },
        { name: '@dojo', location: '../@dojo' },
        { name: 'cldrjs', location: '../cldrjs', main: 'dist/cldr' },
        { name: 'globalize', location: '../globalize', main: 'dist/globalize' },
        { name: 'maquette', location: '../maquette', main: 'dist/maquette.umd' },
        { name: 'maquette-css-transitions', location: '../maquette-css-transitions', main: 'dist/maquette-css-transitions.umd' },
        { name: 'maquette-jsx', location: '../maquette-jsx', main: 'dist/maquette-jsx.umd' },
        { name: 'tslib', location: '../tslib', main: 'tslib' }
      ]
    };
  }

  transferProxySettings() {
    this.esriConfig4.request.proxyUrl = location.protocol + app.indexCfg.proxyUrl;
    if (app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length) {
      $.each(app.cfg.PROXY_RULES, function(i, rule) {
        if (rule && rule.urlPrefix && rule.proxyUrl) {
          this.urlUtils4.addProxyRule(rule);
        }
      });
    }
  }

  initPortal(portalUrl) {
    let info = new this.OAuthInfo4({
      appId: app.indexCfg.oAuthAppId,
      popup: false,
      portalUrl: 'https:' + portalUrl
    });
    this.IdentityManager4.registerOAuthInfos([info]);
  }

  transferCredentials() {
    const userCredentials = IdentityManager3.toJson().credentials;
    for (let info of userCredentials) {
      this.IdentityManager4.registerToken(info);
    }
  }

  loadWebscene() {
    this.setState({
      sceneStarted: true
    });
    const sceneData = this.props.media;

    const scene = new this.WebScene4({
      portalItem: new this.PortalItem4({
        id: sceneData.id
      })
    });

    this.sceneView = new this.SceneView4({
      map: scene,
      container: this.sceneContainer
    });

    this.sceneView.when(() => {

      this.sceneView.ui.move('zoom', 'bottom-right');
      this.sceneView.ui.move('compass', 'bottom-right');
      this.sceneView.ui.remove('navigation-toggle');

      if (sceneData.slide !== undefined && sceneData.slide !== -1) {
        this.watchUtils4.init(scene, 'presentation.slides', (slides => {
          if (slides && slides.items && slides.items.length) {
            this.sceneView.when(() => {
              slides.items[sceneData.slide].applyTo(this.sceneView, {animate: false});
            });
          }
        }));
      }

    });

    // disable scroll wheel navigation because this is a scrolling page
    // (the true at the end is for the useCapture param)
    this.sceneView.surface.addEventListener('wheel', (evt) => {
      evt.stopImmediatePropagation();
    }, true);

  }

  render() {
    const scene = this.props.media;
    let wrapperClasses = 'media-wrapper';
    if (scene.options.size) {
      wrapperClasses += ` media-${scene.options.size}`;
    }
    return (
      <div className={wrapperClasses}>
        <div ref={(node) => {this.sceneContainer = node;}} className='scene-view'></div>
        {scene.caption ? <Text text={scene.caption} tag="figcaption" /> : null }
      </div>
    );
  }
}

export default Webscene;
