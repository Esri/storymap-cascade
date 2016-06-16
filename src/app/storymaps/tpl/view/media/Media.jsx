import UIUtils from 'storymaps/tpl/utils/UI';
import CommonHelper from 'storymaps/common/utils/CommonHelper';
import topic from 'dojo/topic';

export default class Media {

  constructor(params = {}) {
    this.type = params.type;
    this.id = params.id;

    this.previewThumb = params.previewThumb;
    this.previewIcon = params.previewIcon;

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
    else {
      token = CommonHelper.getCookieToken();
    }

    if (url.match(new RegExp('\/sharing\/rest\/content\/items\/' + app.data.appItem.item.id + '\/resources\/'))) {
      return url + '?token=' + token;
    }

    return url;
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

  isConfigActive() {
    return this._node.find('.media-cfg-panel').hasClass('active');
  }

  closeConfigPanel() {
    this._node.find('.media-cfg-invite, .media-cfg-panel').removeClass('active');
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

    this._onConfigChange();
  }

  _onConfigChange() {
    topic.publish('builder-media-update');

    if (this._onConfigChangeCallback) {
      this._onConfigChangeCallback();
    }
  }
}
