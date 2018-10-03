import UIUtils from 'storymaps/tpl/utils/UI';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';
import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';
import IdentityManager from 'esri/IdentityManager';
import BuilderHelper from 'storymaps/tpl/builder/BuilderHelper';
import BuilderConfigTabIssues from './builder/TabIssues';
import Issues from '../../builder/Issues';

import errorTpl from 'lib-build/hbars!./MediaError';
import {} from 'lib-build/less!./MediaError';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

export default class Media {

  constructor(params = {}) {
    this.type = params.type;
    this.id = params.id;

    this.previewThumb = params.previewThumb;
    this.previewIcon = params.previewIcon;
    this.scanResults = {
      hasErrors: false,
      hasWarnings: false
    };
    this._scanListener = null;

    /*
     * Cache store media resources to optimize performance when a media can be reused
     * - in an immersive section: all background are sharing the same cache: so a webmap/webscene is only loaded once
     * - in a sequential section: block media are not using the cache yet
     *   - this could be implemented for webscene using 4.x: the map is common but the view are specific
     *     - if media placement is background -> the map and view are saved in the cache
     *     - if media placement is block -> the map is saved but in the cache but the view is not
     *   - this is not doable for webmap before 4.x
     */
    this._cache = {};
    this._isLoaded = false;
    this._alternateMedia = null;
    this._isAlternate = false;

    this._node = null;
    this._domID = UIUtils.getUID();
    this._instanceID = UIUtils.getUID();

    /*
     * Builder
     */

    this._isUploadPending = false;
    this._builderConfigurationTabs = [];
    this._builderConfigPanel = null;
    this._onConfigAction = null;
    this._sectionType = null;
  }

  postCreate(params) {
    // TODO: should find the node here?
    this._builderConfigurationTabs = params.builderConfigurationTabs || [];
    this._onConfigAction = params.onConfigAction;
    this._onConfigChangeCallback = params.onConfigChange;
    this._sectionType = params.sectionType;
    this._container = params.container;

    const alternateMedia = this.getAlternate();
    if (app.isInBuilder && alternateMedia) {
      alternateMedia.postCreate();
    }
  }

  setCache(cache) {
    this._cache = cache;
  }

  setAlternate(alternateMedia) {
    this._alternateMedia = alternateMedia;
    this._alternateMedia._isAlternate = true;
  }

  getAlternate() {
    return this._alternateMedia;
  }

  removeAlternate() {
    this._alternateMedia = null;
  }

  getPreviewThumbnail() {
    return Media.addToken(this.previewThumb);
  }

  getPreviewIcon() {
    return this.previewIcon;
  }

  isSameMedia(media) {
    return this.id == media.id;
  }

  _applyConfig(options) {
    if (this._placement == 'block') {
      options.size = options.size || 'medium';

      let classes = $.map(this._node.attr('class').split(' '), function(l) {
        return l.match(/block-size-/) ? l : null;
      }).join(' ');

      this._node
        .removeClass(classes)
        .addClass('block-size-' + options.size);
    }
  }

  _fadeInMedia() {
    const FADE_DURATION = 1000;

    if (this._node) {
      this._node.removeClass('media-is-loading');
      this._node.find('.media-loading .large-loader').hide();

      setTimeout(() => {
        this._node.find('.media-loading').hide();
        this._node.find('.media-loading .large-loader').show();
      }, FADE_DURATION);

      this._node.find('.media-item').addClass('bring-in');
    }
  }

  _onEnableButtonClick(e) {
    var btn = $(e.currentTarget);

    btn.toggleClass('enabled');
    this._node.toggleClass('interaction-enabled');
  }

  _createAlternateTab() {
    //
  }

  _createManageTab() {
    //
  }

  checkErrors(scanResult, params) {
    // start off with a clean slate
    this.scanResults.hasErrors = false;
    this.scanResults.hasWarnings = false;

    // merge the scan results in with our current scan results.
    Object.assign(this.scanResults, scanResult);

    if (this.scanResults.errors.length) {
      let errorOptions = undefined;
      const errorsToIDs = this.scanResults.errors.map(errors => errors.id);
      const additionalParams = {};
      if (this.type === 'image-gallery') {
        additionalParams.index = params.index;
      }
      const unfixableOptions = this.isUnfixableError(errorsToIDs, additionalParams);

      if (unfixableOptions) {
        errorOptions = unfixableOptions;
      }
      this.setError(errorOptions);
    }
    else {
      if (this.scanResults.warnings.length) {
        this.scanResults.hasWarnings = true;
      }

      this.errorMessage = null;
      this.updateErrorUI();
    }

    this._updateConfigPanel();
  }

  isUnfixableError() {
    //
  }

  setError(options = {}) {
    this.scanResults.hasErrors = true;
    this.scanResults.unfixable = options.unfixable || false;

    if (options.msg) {
      this.errorMessage = options.msg;
    }
    else {
      options.msg = this.errorMessage;
    }

    this.updateErrorUI(options);
  }

  setAlternateError() {

  }

  removeAlternateError() {

  }

  updateErrorUI(options = {}) {
    // toggleClass needs actual boolean, not truthy/falsy
    let hasError = this.scanResults.hasErrors;
    let hasWarning = this.scanResults.hasWarnings;
    let minimizeInViewer = options.minimizeInViewer || false;
    let showError = options.showLoadingError || false;
    let errorTarget, msgTarget;
    if (options.galleryIndex || options.galleryIndex === 0) {
      let imageGalleryNode = this._node.find('.ug-thumb-wrapper').eq(options.galleryIndex);

      errorTarget = imageGalleryNode;
      msgTarget = imageGalleryNode;
    }
    else {
      errorTarget = this._node.find('.block, .background').addBack('.block, .background');
      msgTarget = errorTarget.hasClass('.background') ? errorTarget : errorTarget.find('.block-media');
    }
    // remove all error/warning classes from media.
    errorTarget.removeClass('error warning');

    msgTarget.toggleClass('minimize-on-viewer', minimizeInViewer).toggleClass('show-loading-error', showError);

    msgTarget.find('.loading-error').remove();
    if (hasError) {
      errorTarget.addClass('error');
      this.errorMessage = options.msg || this.errorMessage || i18n.viewer.media.loadingError;
      msgTarget.append(errorTpl({
        message: this.errorMessage
      }));
    }
    // add warning class if there are ONLY warnings; if there are errors AND warnings only show error.
    else if (hasWarning) {
      errorTarget.addClass('warning');
    }
  }

  getArcGISContent() {
    let arcgisContent = [];
    let agolMedia;

    if (this.type == 'webmap' || this.type == 'webscene') {
      arcgisContent = [{
        type: this.type,
        id: this.id
      }];
    }
    else if (this.type == 'image' && this._image) {
      agolMedia = this.getMediaArcGISContent(this._image.url, 'image');
    }
    else if (this.type == 'image-gallery') {
      for (var image of this._images.images) {
        agolMedia = this.getMediaArcGISContent(image.url, 'image');
        if (agolMedia) {
          arcgisContent.push(agolMedia);
        }
      }
      agolMedia = null; // clear so it doesn't get re-added below
    }
    else if (this.type == 'audio') {
      agolMedia = this.getMediaArcGISContent(this._audio.url, 'audio');
    }

    const altMedia = this.getAlternate();
    if (altMedia && altMedia._image) {
      agolMedia = this.getMediaArcGISContent(altMedia._image.url, 'image');
    }

    if (agolMedia) {
      arcgisContent.push(agolMedia);
    }

    return arcgisContent;
  }

  getMediaArcGISContent(url, type) {
    let arcgisResourceURL = Media.getArcGISItemResourceURL(url);

    if (arcgisResourceURL) {
      return {
        type: 'item-resource',
        mediaType: type,
        url: arcgisResourceURL.url,
        file: arcgisResourceURL.file
      };
    }
    return null;

  }

  static getArcGISItemResourceURL(url = '') {
    let urlClean = decodeURIComponent(url);

    var urlMatch = urlClean.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/(.*)$'));
    if (urlMatch && urlMatch.length == 2) {
      return {
        url: urlClean,
        file: urlMatch[1]
      };
    }

    return null;
  }

  /*
   * Get token to item resources
   */
  static addToken(url) {
    var mayNeedToken = app.data.appItem
      && app.data.appItem.item.access != 'public'
      && app.data.appItem.item.id
      && url;

    if (! mayNeedToken) {
      return url;
    }

    let token = '';
    let portalUrl = CommonHelper.getPortalURL();
    let idCredential = IdentityManager.findCredential(portalUrl);

    if (app.portal && app.portal.getPortalUser()) {
      token = app.portal.getPortalUser().credential.token;
    }
    else if (idCredential) {
      token = idCredential.token;
    }
    else {
      token = CommonHelper.getCookieToken();
    }

    if (url.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/'))) {
      return CommonHelper.forceHttpsUrl(url) + '?token=' + token;
    }

    return url;
  }

  static findCropDistance(item, container, offsetRatio) {
    let containerWidth = container.width();
    let containerHeight = container.height();
    let containerAspectRatio = containerWidth / containerHeight;
    let itemAspectRatio = item.width / item.height;
    let transferBy = {
      x: 0,
      y: 0
    };
    let amountToMove = 0;

    // transfer the item over...
    // if the item's width-height ratio is less than the target element (target is wider), height is cropped and width fills (so we don't want to change the x-offset).
    let shouldPanX = itemAspectRatio > containerAspectRatio;
    let shouldPanY = itemAspectRatio < containerAspectRatio;

    if (shouldPanY) {
      // transfer it by that much (so it's in top left), then do it by the center
      // the item is as wide as the container, as tall as container * aspectRatio...
      let itemTargetHeight = containerWidth / itemAspectRatio;
      amountToMove = this.getDimensionAmount(itemTargetHeight, containerHeight, offsetRatio.y);

      transferBy.x = 0;
      transferBy.y = amountToMove;
    }
    // if it's greater (target is taller), height fills and width is cropped (so we won't want to change y-offset).
    else if (shouldPanX) {
      let itemTargetWidth = containerHeight * itemAspectRatio;
      amountToMove = this.getDimensionAmount(itemTargetWidth, containerWidth, offsetRatio.x);

      transferBy.x = amountToMove;
      transferBy.y = 0;
    }
    // if it's the same, we don't want to offset at all.
    else {
      transferBy.x = 0;
      transferBy.y = 0;
    }

    return transferBy;
  }

  static getDimensionAmount(itemTargetDimension, containerDimension, offsetRatio) {
    // find the focus point on the target item, in pixels
    let focusPoint = itemTargetDimension * offsetRatio;
    // to have that point centered, you'd have to translate the item by the amount here:
    let amountToMove = (focusPoint - (containerDimension / 2)) * -1;

    // but if centering it would make the item translate "into" the container so it's not all showing, have it move to the near edge only.
    if (amountToMove > 0) {
      amountToMove = 0;
    }
    // conversely, if centering would make the item translate "through" the container so far that some of it would not be showing, have it move so it's translated through only to the far edge (and no more).
    else if ((itemTargetDimension - (amountToMove * -1)) < containerDimension) {
      amountToMove = (itemTargetDimension - containerDimension) * -1;
    }
    return amountToMove;
  }

  static getTargetDimensions(rawItemDimensions, containerDimensions) {
    let itemDimensions = {
      width: 0,
      height: 0
    };
    let rawItemAspectRatio = rawItemDimensions.width / rawItemDimensions.height;
    let containerAspectRatio = containerDimensions.width / containerDimensions.height;

    if (rawItemAspectRatio > containerAspectRatio) {
      // it's wider, so the height is the same
      itemDimensions.height = containerDimensions.height;
      itemDimensions.width = containerDimensions.height * rawItemAspectRatio;
    }
    else {
      // it's taller, so the widths are the same..
      itemDimensions.width = containerDimensions.width;
      itemDimensions.height = containerDimensions.width / rawItemAspectRatio;
    }

    return itemDimensions;
  }

  resize() {
    //
  }

  postLoad() {
    //
  }

  /*
   * Builder
   */

  getNode() {
    return this._node;
  }

  getAuthorizedTransitionsWith() {
    return [];
  }

  initBuilderUI() {
    if (this._placement == 'block') {
      this._node.find('.media-delete').html('<div class="media-delete-background"></div><i class="media-delete-icon config-icon fa fa-trash-o"></i>');
      this._node.find('.media-delete-icon').click(function() {
        this._onAction('remove');
      }.bind(this));
    }
  }

  isConfigActive() {
    return this._node.hasClass('config-panel-active');
  }

  closeConfigPanel() {
    this._node.removeClass('config-panel-active');
  }

  destroy() {
    this._node && this._node.remove();
  }

  remove() {
    this._node && this._node.remove();
  }

  serialize(type, media, includeInstanceID) {
    const serializedObject = lang.clone({
      type: type,
      [type]: media
    });

    const alternateMedia = this.getAlternate();
    if (alternateMedia) {
      serializedObject.alternate = alternateMedia.serialize(includeInstanceID);
      if (serializedObject.alternate && serializedObject.alternate.image) {
        this._addAlternateCaption(serializedObject[type], serializedObject.alternate.image);
        this._addAlternateSize(serializedObject[type], serializedObject.alternate.image);
      }
    }

    // include the instanceID if we are doing a scan.
    if (includeInstanceID && typeof serializedObject[type] === 'object') {
      serializedObject[type].instanceID = this._instanceID;
    }

    return serializedObject;
  }

  isPlaceholder() {
    return false;
  }

  convertToHttps() {
    this._onToggleMediaConfig(this);

    // serialize to make sure any caption entered -- but not yet saved -- will be saved.
    this.serialize();

    // switch any needed urls in the data structure
    this._makeUrlsHttps();

    this._isLoaded = false;

    if (this._cache && this._cache[this.id]) {
      this._cache[this.id] = null;
    }

    // remove the dojo topic that listens for scans
    this._scanListener.remove();

    const mediaMarkup = this.render({
      placement: this._placement
    });

    if (this._placement === 'background') {
      // replace old markup with new
      this._node.empty().html(mediaMarkup);
    }
    else {
      // replace old markup with new
      this._node.replaceWith(mediaMarkup);
    }

    this.postCreate({
      container: this._container,
      onToggleMediaConfig: this._onToggleMediaConfig,
      builderConfigurationTabs: this._builderConfigurationTabs,
      onConfigAction: this._onConfigAction,
      onConfigChange: this._onConfigChangeCallback,
      sectionType: this._sectionType,
      foregroundOptions: this._foregroundOptions,
      applySectionConfig: this._applySectionConfig
    });

    this.load();

    this.closeConfigPanel();
    this._node.removeClass('builder-config-open');
  }

  _onAction(action, newMedia) {
    // TODO: does that need to be checked?
    if (action === 'remove' || action === 'swap' || action === 'alternate-media-swap' || action === 'alternate-media-add'
        || action === 'alternate-media-remove' || action === 'image-to-image-gallery' || action === 'image-gallery-to-image'
        || action === 'arcgis-edit' || action === 'https-open-picker') {
      let mediaItem = this;
      const isAlternate = action.indexOf('alternate-') !== -1;

      if (isAlternate) {
        mediaItem = this.getAlternate();
      }

      this._onConfigAction({
        action: action,
        media: mediaItem,
        newMedia: newMedia,
        mainMedia: isAlternate ? this : null
      });
    }

    if (action === 'arcgis-edit-external') {
      window.open(
        BuilderHelper.getMapViewerLink(this.id),
        '_blank'
      );
    }

    if (action === 'https-swap') {
      this.convertToHttps();
    }

    if (action === 'remove' || action === 'alternate-media-remove' || action === 'https-swap') {
      topic.publish('builder-should-check-story');
    }

    this._onConfigChange();
  }

  _onConfigChange() {
    topic.publish('builder-media-update');

    if (this._onConfigChangeCallback) {
      this._onConfigChangeCallback();
    }
  }

  _initConfigPanel() {
    //
  }

  _initConfigTabs() {
    //
  }

  _destroyConfigTabs() {
    if (this._builderConfigPanel && this._builderConfigPanel._tabs) {
      var activeTab = this._builderConfigPanel._tabs.find(function(tab) {
        return tab._isActive;
      });
      if (activeTab) {
        this._builderConfigPanel.destroyTab(activeTab);
      }
    }
  }

  _refreshConfigTabs() {
    const tabs = this._initConfigTabs();
    this._builderConfigPanel.refreshTabs(tabs);
  }

  _updateConfigPanel() {
    const configPanelOpen = this._node.hasClass('builder-config-open');

    this._builderConfigPanel && this._destroyConfigTabs();
    this._builderConfigPanel && this._refreshConfigTabs();

    if (configPanelOpen && this._builderConfigPanel) {
      // this doesn't call our onToggle callback we've set on the media config down below, that's because
      // we shouldn't be "toggling" the panel -- it should just be "keeping it open"
      this._builderConfigPanel.openPanel(true);
    }
  }

  _createIssuesTab(tabs) {
    let issuesTab = null;

    const errors = lang.getObject('scanResults.errors', false, this);
    const warnings = lang.getObject('scanResults.warnings', false, this);
    const hasFixableMediaErrors = errors && errors.filter(error => !error.isAlternate).length && !this.scanResults.unfixable;
    const hasFixableMediaWarnings = warnings && warnings.filter(warning => warning.id !== Issues.content.noAlternateMedia).length && !this.scanResults.unfixable;

    if (hasFixableMediaErrors || hasFixableMediaWarnings) {
      let tabErrors = [];
      let tabWarnings = [];

      // if there are breaking isues (i.e. image does not exist), we don't care about smaller issues like that its URL is http.
      // We won't show the issues tab in that case
      if (hasFixableMediaErrors) {
        tabErrors = errors.map(error => {
          return {
            id: error.id,
            severity: 'error'
          };
        });
      }

      if (hasFixableMediaWarnings) {
        tabWarnings = warnings.map(warning => {
          return {
            id: warning.id,
            severity: 'warning'
          };
        }).filter(warning => warning.id !== Issues.content.noAlternateMedia);
      }

      issuesTab = new BuilderConfigTabIssues({
        map: this._cache[this.id],
        scanResults: this.scanResults,
        // errors should come before warnings
        issues: tabErrors.concat(tabWarnings),
        instanceID: this._instanceID
      });
    }

    if (issuesTab) {
      tabs.push(issuesTab);
    }
  }

  _addAlternateCaption(mainMedia, alternateMedia) {
    if (mainMedia && mainMedia.caption) {
      alternateMedia.caption = mainMedia.caption;
    }
  }

  _addAlternateSize(mainMedia, alternateMedia) {
    // if main has size, add it on to the other...
    if (mainMedia && mainMedia.options && mainMedia.options.size) {
      // check if there's no options object (safety check)
      if (!alternateMedia.options) {
        alternateMedia.options = {};
      }
      // alt media's size is set from the main media's.
      alternateMedia.options.size = mainMedia.options.size;
    }
  }
}
