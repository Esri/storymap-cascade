import IdentityManager from 'esri/IdentityManager';
import MapViewerWrapperUtils from './MapViewerWrapperUtils';
import BuilderHelper from 'storymaps/tpl/builder/BuilderHelper';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import dojo from 'dojo';

// To be able to use MV in development mode you need to be on a while listed domain (the Portal for ArcGIS domain, *.arcgis.com or *.esri.com)
/*
 * Params must define the following Map Viewer callback
 * - onLoad
 * - onError
 * - onSaveSucceed
 * - onSaveError
 * And a reference to the frame window object
 * - frameWindow
 *
 * use load() to start the process
 *  - newMap: boolean
 *  - id: map id when not creating a new map
 */
export default class MapViewerWrapper {
  constructor(params) {
    this._viewerIsloaded = false;
    this._viewerMapIsLoaded = false;
    this._isNewMap = false;
    this._mapViewerLoadingPolling = null;
    this._mapViewerChangesCheck = null;
    // MAP_VIEWER_DOMAIN value should not be changed after this
    const portalUrl = MapViewerWrapperUtils.getPortalURL();
    this.MAP_VIEWER_DOMAIN = MapViewerWrapperUtils.getPortalDomain(portalUrl);

    this._frameWindow = params.frameWindow;
    this._onSaveSucceedCallback = params.onSaveSucceed;
    this._onSaveErrorCallback = params.onSaveError;
    this._onLoadCallback = params.onLoad;
    this._onErrorCallback = params.onError;
    this._onEnableSaveCallback = params.onEnableSave;

    this.CONFIG = {
      mapViewerOpt: 'embedded=1&hide=share,save,analysis,directions,measure'
    };
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }

  load(newMap, id) {
    // get the token from the IdentityManager
    const portalURL = BuilderHelper.getPortalURL();
    const token = IdentityManager.findCredential(portalURL).token;

    let url = '';

    if (!newMap && !id) {
      throw 'INVALID CALL TO MapViewerWrapper.load';
    }

    if (!this._onSaveSucceedCallback || !this._onSaveErrorCallback || !this._onLoadCallback
      || !this._onErrorCallback || !this._onEnableSaveCallback || !this._frameWindow
    ) {
      throw 'INVALID CALL TO MapViewerWrapper.load';
    }

    url += MapViewerWrapperUtils.getMapViewerURL();

    if (newMap) {
      this._isNewMap = true;
      url += '?' + this.CONFIG.mapViewerOpt;
    }
    else {
      url += '?webmap=' + id;
      url += '&' + this.CONFIG.mapViewerOpt;
    }

    // Map Viewer is using the locale declared in user profile whereas the app are using the one declared by browser
    // Need to force the locale to make sure the experience between builder and MV is consistent
    url += '&locale=' + dojo.locale;

    // add a token to the URL if we're not on the same domain as the map editor
    if (!MapViewerWrapperUtils.viewerIsSameDomain() && MapViewerWrapperUtils.isWhiteListedDomain()) {
      url += '#' + token;
    }

    else if (!MapViewerWrapperUtils.viewerIsSameDomain() && !MapViewerWrapperUtils.isWhiteListedDomain()) {
      throw i18n.builder.mapEditor.unauthorizedDomain;
    }

    this._viewerIsloaded = false;
    this._viewerMapIsLoaded = false;
    this._mapViewerLoadingPolling = setInterval(this.pollMapViewerLoading.bind(this), 500);

    return url;
  }

  cancelLoading() {
    clearInterval(this._mapViewerLoadingPolling);
    this.stopUnsavedChangesCheck();
  }

  _send(json) {
    try {
      this._frameWindow.postMessage(JSON.stringify(json), this.MAP_VIEWER_DOMAIN);
    }
    catch (error) {
      // This doesn't seems to be called as the error would happen in the frame
      this._onErrorCallback(error);
    }
  }

  close() {
    if (this._mapViewerLoadingPolling) {
      clearInterval(this._mapViewerLoadingPolling);
    }
    this.stopUnsavedChangesCheck();
  }

  pollMapViewerLoading() {
    if (!this._viewerMapIsLoaded) {
      // when saving a map at viewer startup make sure this is called quickly to pass the caller source to the viewer,
      // so the viewer can send a message once the map finished loading or an error occurred
      // otherwise there will be no feedback after the save operation
      this._send({
        type: 'isLoaded'
      });
    }
    else {
      clearInterval(this._mapViewerLoadingPolling);
    }
  }

  startUnsavedChangesCheck() {
    if (!this._mapViewerChangesCheck) {
      this._mapViewerChangesCheck = setInterval(this.checkUnsavedChanges.bind(this), 1000);
    }
  }

  stopUnsavedChangesCheck() {
    if (this._mapViewerChangesCheck) {
      clearInterval(this._mapViewerChangesCheck);
      this._mapViewerChangesCheck = null;
    }
  }

  checkUnsavedChanges() {
    this._send({
      type: 'hasUnsavedChanges'
    });
  }

  saveExistingMap() {
    this._send({
      type: 'saveMap'
    });
  }

  receiveMessage(event) {
    // make sure event is coming from map viewer
    if (event.origin !== this.MAP_VIEWER_DOMAIN) {
      return;
    }
    // make sure the source is the map viewer
    if (event.source !== this._frameWindow) {
      return;
    }

    const json = JSON.parse(event.data);

    switch (json.type) {
      // called when save action has finished
      case 'mapSaved':
        this._onSaveSucceedCallback(json.webmapId);
        break;

      // if save action returns error
      case 'mapSaveError':
        this._onSaveErrorCallback();
        break;
      // response to getWebmapId
      case 'webmapId':
        this.startUnsavedChangesCheck();

        // if creating a new map, "save" should always be enabled
        if (this._isNewMap) {
          this._onEnableSaveCallback();
        }

        setTimeout(() => {
          this._send({
            type: 'isWebmapEditable'
          });
        }, 1000);

        break;
      // response to isWebmapEditable
      case 'webmapEditable':
        // If the map is not editable, enable the save button so it can be copied
        if (!json.value) {
          this._onEnableSaveCallback();
        }
        break;
      // response to hasUnsavedChanges
      case 'unsavedChanges':
        if (json.value) {
          this._onEnableSaveCallback();
        }

        break;
      // response to isLoaded
      case 'loaded':
        this._viewerMapIsLoaded = json.value;

        if (this._viewerMapIsLoaded) {
          if (!this._viewerIsloaded) {
            this._onLoadCallback();

            this._send({
              type: 'getWebmapId'
            });

            this._viewerIsloaded = true;
          }
          else {
            setTimeout(() => {
              this._send({
                type: 'isWebmapEditable'
              });
            }, 1000);
          }
        }
        else {
          // the map viewer is loaded -- just not the map

          // This message is fired after MV is loaded until all layers are loaded
          // So only catch the event once
          if (!this._viewerIsloaded) {
            // Shortly after MV is loaded, before all layer are loaded -> display the MV
            // This prevent waiting from broken layer to timeout before displaying it
            setTimeout(this._onLoadCallback.bind(this), 500);

            this._send({
              type: 'getWebmapId'
            });
          }

          this._viewerIsloaded = true;
        }
        break;
      case 'newViewerBaseUrl':
        // TODO
        //json.baseUrl;
        break;
      case 'message':
        // If the app and viewer are not on the same domain, it will fail here
        break;
    }
  }
}
