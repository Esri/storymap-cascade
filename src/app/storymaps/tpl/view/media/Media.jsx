import UIUtils from 'storymaps/tpl/utils/UI';
import CommonHelper from 'storymaps/common/utils/CommonHelper';
import topic from 'dojo/topic';
import IdentityManager from 'esri/IdentityManager';

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

    this._node = null;
    this._domID = UIUtils.getUID();

    /*
     * Builder
     */

    this._isUploadPending = false;
    this._builderConfigurationTabs = [];
    this._onConfigAction = null;
  }

  postCreate(params) {
    // TODO: should find the node here?

    this._builderConfigurationTabs = params.builderConfigurationTabs || [];
    this._onConfigAction = params.onConfigAction;
    this._onConfigChangeCallback = params.onConfigChange;
  }

  setCache(cache) {
    this._cache = cache;
  }

  setAlternate(alternateMedia) {
    this._alternateMedia = alternateMedia;
  }

  getAlternate() {
    return this._alternateMedia;
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

  _onEnableButtonClick(e) {
    var btn = $(e.currentTarget);

    btn.toggleClass('enabled');
    this._node.toggleClass('interaction-enabled');
  }

  mapErrors(scanResult) {
    if (scanResult && scanResult.errors && scanResult.errors.length) {
      return scanResult.errors.map(errObj => {
        return errObj.id;
      });
    }
    return false;
  }

  setError(options = {}) {
    Object.assign(this.scanResults, options.scanResult, {hasErrors: true}, {unfixable: options.unfixable || false});
    if (options.msg) {
      this.errorMessage = options.msg;
    }
    else {
      options.msg = this.errorMessage;
    }
    this.updateErrorUI(options);
  }

  removeError(options = {}) {
    Object.assign(this.scanResults, options.scanResult, {hasErrors: false});
    this.errorMessage = null;
    this.updateErrorUI();
  }

  updateErrorUI(options = {}) {
    // toggleClass needs actual boolean, not truthy/falsy
    let hasError = this.scanResults.hasErrors;
    let minimizeInViewer = options.minimizeInViewer || false;
    let showError = options.showLoadingError || false;
    let errorTarget, msgTarget;
    if (options.galleryIndex || options.galleryIndex === 0) {
      let imageGalleryNode = this._node.find('.ug-thumb-wrapper').eq(options.galleryIndex);

      errorTarget = imageGalleryNode;
      msgTarget = imageGalleryNode;
    }
    else {
      errorTarget = this._node.find('.block-media,.background')
                         .addBack('.block-media,.background');
      msgTarget = errorTarget;
    }
    errorTarget.toggleClass('error', hasError)
          .toggleClass('minimize-on-viewer', minimizeInViewer)
          .toggleClass('show-loading-error', showError);
    msgTarget.find('.loading-error').remove();
    if (hasError) {
      this.errorMessage = options.msg || this.errorMessage || i18n.viewer.media.loadingError;
      msgTarget.append(errorTpl({
        message: this.errorMessage
      }));
    }
  }

  getArcGISContent() {
    let arcgisContent = [];

    if (this.type == 'webmap' || this.type == 'webscene') {
      arcgisContent = [{
        type: this.type,
        id: this.id
      }];
    }
    else if (this.type == 'image') {
      let arcgisResourceURL = Media.getArcGISItemResourceURL(this._url);

      if (arcgisResourceURL) {
        arcgisContent = [{
          type: 'item-resource',
          mediaType: this.type,
          url: arcgisResourceURL.url,
          file: arcgisResourceURL.file
        }];
      }
    }
    else if (this.type == 'image-gallery') {
      for (var image of this._images.images) {
        let arcgisResourceURL = Media.getArcGISItemResourceURL(image.url);

        if (arcgisResourceURL) {
          arcgisContent.push({
            type: 'item-resource',
            mediaType: this.type,
            url: arcgisResourceURL.url,
            file: arcgisResourceURL.file
          });
        }
      }
    }

    return arcgisContent;
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

    if (app.portal && app.portal.getPortalUser()) {
      token = app.portal.getPortalUser().credential.token;
    }
    else if (IdentityManager.findCredential(document.location.origin)) {
      token = IdentityManager.findCredential(document.location.origin).token;
    }
    else {
      token = CommonHelper.getCookieToken();
    }

    if (url.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/'))) {
      return url + '?token=' + token;
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
    this._node.remove();
  }

  remove() {
    this._node.remove();
  }

  isPlaceholder() {
    return false;
  }

  _onAction(action, newMedia) {
    // TODO: does that need to be checked?
    if (action == 'remove' || action == 'swap'
        || action == 'image-to-image-gallery' || action == 'image-gallery-to-image') {
      this._onConfigAction({
        action: action,
        media: this,
        newMedia: newMedia
      });
    }

    if (action == 'arcgis-edit') {
      this._openEditor();
    }

    if (action === 'remove') {
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
}
