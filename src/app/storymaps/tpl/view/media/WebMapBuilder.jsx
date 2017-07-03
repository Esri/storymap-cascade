import WebMap from './WebMap';

import {} from 'lib-build/less!./WebMapBuilder';
import BuilderConfig from './builder/Panel';
import BuilderConfigTabSize from './builder/TabSize';
import BuilderConfigTabManage from './builder/TabManage';
import BuilderConfigTabWebMap from './builder/TabWebMap';
import BuilderConfigTabIssues from './builder/TabIssues';
import BuilderConfigTabAlternateMedia from './builder/TabAlternateMedia';
import BuilderConfigTabAlternateEmpty from './builder/TabAlternateEmpty';

import MapEditor from './WebMapEditor';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

const text = i18n.builder.mediaErrors;

export default class WebMapBuilder extends WebMap {

  constructor(webmap) {
    super(webmap);

    this._configTabWebMap = null;
    this._configTabIssues = null;

    this._configTabManage = null;
    this._configTabAlternate = null;
    this._isMultiViewSection = false;
    this._onToggleMediaConfig = null;
    this._sectionType = null;
  }

  postCreate(params) {
    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;
    this._sectionType = params.sectionType;

    if (! params.delayBuilderInit) {
      this._initConfigPanel();
    }

    // listen to when THIS SPECIFIC map gets scanned
    topic.subscribe('scan/maps/' + this._instanceID, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();

    this._node.find('.media-media').attr('data-builder-invite', i18n.builder.mediaConfig.appearance.mapExtentPrompt);
  }

  load(params = {}) {
    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      alternateMedia.load();
    }

    return super.load(params);
  }

  isUnfixableError(errorIds = []) {
    let msg = '';
    if (errorIds.indexOf(issues.maps.deleted) >= 0) {
      msg = text.placeholders.deleted.replace('${media-type}', text.mediaTypes.webmap);
    }
    else if (errorIds.indexOf(issues.maps.inaccessible) >= 0) {
      msg = text.placeholders.inaccessible.replace('${media-type}', text.mediaTypes.webmap);
    }
    else if (errorIds.indexOf(issues.maps.unauthorized) >= 0) {
      msg = text.placeholders.unauthorized.replace('${media-type}', text.mediaTypes.webmap);
    }
    else {
      return false;
    }
    return {
      unfixable: true,
      showLoadingError: true,
      msg
    };
  }

  performAction(params = {}) {
    if (params.performBuilderInit) {
      if (this._builderConfigPanel) {
        this._destroyConfigTabs();
        this._refreshConfigTabs();
      }
      else {
        this._initConfigPanel();
      }
    }

    return super.performAction(params);
  }

  serialize(includeInstanceID) {
    if (this._node) {
      this._webmap.caption = this._node.find('.block-caption').html();
    }
    // we don't pass this._webmap since the webmap.jsx will pass them -- both are working off of the class-member variable this._webmap.
    return super.serialize(includeInstanceID);
  }

  getMapName(mapObj) {
    if (!mapObj) {
      return '';
    }
    const mapItem = mapObj.itemInfo && mapObj.itemInfo.item;
    if (!mapItem) {
      return '';
    }
    return mapItem.title || mapItem.name;
  }

  //
  // Private
  //

  _initConfigTabs() {
    let tabs = [];

    this._configTabWebMap = new BuilderConfigTabWebMap({
      map: this._cache[this.id],
      layerListNode: this._node.find('.layer-list-container'),
      onOpen: () => {
        if (this.map) {
          this.performAction({
            forceSetExtent: true
          });
        }
      }
    });

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSize());
      }
      else if (tab == 'appearance') {
        tabs.push(this._configTabWebMap);
      }
      else if (tab == 'manage') {
        const manageTab = this._createManageTab();
        tabs.push(manageTab);
      }
      else if (tab == 'alternate') {
        const alternateTab = this._createAlternateTab(this._sectionType);
        tabs.push(alternateTab);
      }
    }

    const errors = lang.getObject('scanResults.errors', false, this);
    // if there are errors and any are unfixable and there are errors besides alternate errors
    if (this.scanResults && this.scanResults.hasErrors && !this.scanResults.unfixable && errors && errors.filter(error => !error.isAlternate).length) {
      this._configTabIssues = new BuilderConfigTabIssues({
        map: this._cache[this.id],
        scanResults: this.scanResults,
        errorIds: this.scanResults.errors.map(error => error.id)
      });
      tabs.push(this._configTabIssues);
    }

    return tabs;
  }

  _initConfigPanel() {
    super._initConfigPanel();

    this._builderConfigPanel = new BuilderConfig({
      containerMedia: this._node,
      tabs: this._initConfigTabs(),
      media: this._webmap,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        // TODO: this could be in BuilderConfig
        this._node.toggleClass('builder-config-open');
        this._onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });
  }

  _onWebMapLoaded() {
    if (this._configTabWebMap) {
      this._configTabWebMap.setMap(this._cache[this.id]);
    }
    if (this._configTabIssues) {
      this._configTabIssues.setMap(this._cache[this.id]);
    }
    if (this._configTabManage) {
      let mapName = this.getMapName(this._cache[this.id]);
      this._configTabManage.setMapName(mapName);
    }
  }

  _createAlternateTab(sectionType) {
    const alternateMedia = this.getAlternate();
    let alternateTab = null;
    const errors = lang.getObject('scanResults.errors', false, this);
    let alternateError = errors ? this.scanResults.errors.find(error => error.isAlternate) : null;

    if (alternateMedia) {
      alternateTab = new BuilderConfigTabAlternateMedia({
        sectionType: sectionType,
        media: alternateMedia._image,
        errorId: alternateError ? alternateError.id : null,
        showErrors: alternateError,
        placement: this._placement
      });
    }
    else {
      alternateTab = new BuilderConfigTabAlternateEmpty({
        // it's ok to not have alt media for maps, anywhere.
        showWarnings: false
      });
    }

    this._configTabAlternate = alternateTab;

    return this._configTabAlternate;
  }

  _createManageTab() {
    let mapName = this.getMapName(this._cache[this.id]);

    const errors = lang.getObject('scanResults.errors', false, this);

    this._configTabManage = new BuilderConfigTabManage({
      hideRemove: this._placement == 'background',
      mediaType: 'webmap',
      mediaId: this.id,
      // only show errors if there are unfixable scan results (if there are fixable ones, they'll go on the issues tab)
      showErrors: errors && errors.filter(error => !error.isAlternate).length && this.scanResults.unfixable,
      mapName
    });

    return this._configTabManage;
  }

  _openEditor() {
    // TODO: add a container to the media to load the editor
    //   or perhaps flip the media to a new media that will only handle the editing?
    var mapEditor = new MapEditor({
      container: $('#mapEditPopup')
    });

    mapEditor.present({
      id: this.id
      // TODO
      // newMap: true,
      // title: app.builder.getAddEditEntryTitle()
    });
  }

  _onConfigChange() {
    this._applyConfig();
    super._onConfigChange();
  }
}
