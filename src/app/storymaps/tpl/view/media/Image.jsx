import Media from './Media';
import CommonHelper from 'storymaps/common/utils/CommonHelper';

import {} from 'lib-build/less!./Image';
import viewBlock from 'lib-build/hbars!./ImageBlock';
import viewBackground from 'lib-build/hbars!./ImageBackground';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import UIUtils from 'storymaps/tpl/utils/UI';
import Deferred from 'dojo/Deferred';

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/image.jpg';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/image.png';

export default class Image extends Media {

  constructor(image, isNewMedia) {
    // fix sharing url on image constructor...
    const needsFixing = CommonHelper.uploadedImageNeedsFixing(image.url);
    if (needsFixing) {
      image.url = CommonHelper.fixUploadedImageUrl(image.url);
      if (image.thumbUrl) {
        image.thumbUrl = CommonHelper.fixUploadedImageUrl(image.thumbUrl);
      }
    }

    // sizes is an array of objects with {height, width, url}.
    if (image.sizes && image.sizes.length) {
      const screenWidth = $('body').width() || window.screen.width;

      // sort sizes arr by longestSide, with largest first.
      image.sizes.forEach((sizeObj) => {
        sizeObj.longestSide = Math.max(sizeObj.width, sizeObj.height);
        // do this here while we're already iterating through the sizes
        if (needsFixing) {
          sizeObj.url = CommonHelper.fixUploadedImageUrl(sizeObj.url);
        }
      });
      image.sizes.sort((a, b) => {
        if (b.longestSide === a.longestSide) {
          return Math.min(b.width, b.height) - Math.min(a.width, a.height);
        }
        // what if they're the same? then compare shorter side...?
        return b.longestSide - a.longestSide;
      });

      // find the size who's longest side is closest to, without going too far over,
      // the screen width. (remember, image.sizes is already sorted, descending order).
      // start with the largest one, and reduce, in case none of the available photos
      // are larger than the screen width.
      let previewTarget, mainTarget = image.sizes[0];
      image.sizes.every((sizeObj) => {
        if (sizeObj.longestSide > screenWidth - 50) {
          mainTarget = sizeObj;
          return true;
        }
        return false;
      });

      // find the size who's longest side is closest to 250px
      image.sizes.every((sizeObj) => {
        if (sizeObj.longestSide >= 250) {
          previewTarget = sizeObj;
          return true;
        }
        return false;
      });

      // just in case the sizes object wasn't properly formatted, check for mainTarget.
      if (mainTarget.url && mainTarget.width && mainTarget.height) {
        image.url = mainTarget.url;
        image.width = mainTarget.width;
        image.height = mainTarget.height;
      }
      if (previewTarget) {
        image.thumbUrl = previewTarget.url;
      }
    }
    let id = image.url;

    if (image.dataUrl && image.uploadDeferred) {
      id = UIUtils.getUID();
    }

    super({
      type: 'image',
      id: id,
      previewThumb: image.thumbUrl || image.dataUrl || image.url || PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._image = image;
    this._url = image.url;
    this._placement = null;
    this._isNewMedia = isNewMedia;

    // TODO: shouldn't be needed
    if (! this._image.options) {
      this._image.options = {};
    }

    if (image.dataUrl && image.uploadDeferred) {
      this._isUploadPending = true;
      this._url = image.dataUrl;

      delete this._image.dataUrl;

      image.uploadDeferred.then(
        this._onUploadSuccess.bind(this),
        this._onUploadFail.bind(this)
      );
    }
  }

  render(context) {
    var output = '',
        options = [];

    if (! this._image || ! context) {
      console.log('Could not render image in section');
      return output;
    }

    this._placement = context.placement;

    if (this._placement == 'block') {
      this._setBlockFitHeight();

      var style = this._computeBlockStyle();

      options.push('block-size-' + style.size);

      if (style.isPortrait) {
        options.push('portrait');
      }

      // This set a max-height in CSS that is needed for large image
      if (style.size === 'large' && this._image.options.fitHeight) {
        options.push('fit-height');
      }
      output += viewBlock({
        id: this._domID,
        classes: ['block', 'image'].concat(options).join(' '),
        padding: style.padding,
        maxImageWidth: style.maxWidth,
        caption: this._image.caption,
        placeholder: i18n.viewer.media.captionPlaceholder,
        captionEditable: app.isInBuilder
      });
    }
    else if (context.placement == 'background') {
      output += viewBackground({
        id: this._domID,
        classes: ['image', 'image-background'].join(' '),
        caption: this._image.caption
      });
    }

    return output;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    /*
     * Background Image behave a little differently than other medias because
     *  - they can be in the story while they are getting uploaded and we need to support duplicate of it's view/section
     *  - in Immersive you may want to use the same image twice in the section and have different transition
     * So background Image are always duplicated inside the section
     * That's ok as browser will cache them
     */
    if (this._placement == 'block') {
      this._node = params.container.find('#' + this._domID);
    }
    else {
      this._node = params.container.find('#' + this._domID).parent();
    }

    if (this._isUploadPending) {
      this._onUploadStart();
    }

    this._applyConfig();
  }

  _applyConfig() {
    var options = this._image.options;

    this._applyPlacement();

    // Test
    this._applySize(options);

    if (this._placement === 'block' && options.size === 'large') {
      // this is slightly redundant since we do this in render(), but didn't think I could remove
      // class changes there since it affected the media's height.
      this._applyFitHeight();
    }

    super._applyConfig(options);
  }

  _applySize(options) {
    options.size = options.size || 'small';
    // change that max-width valueyvalue.
    if (this._placement === 'block') {
      const styles = this._computeBlockStyle();
      this._node.find('.block-media').css('max-width', styles.maxWidth);
    }
  }

  _applyFitHeight() {
    this._node.toggleClass('fit-height', this._image.options.fitHeight);
  }

  _applyPlacement() {
    if (this._image.options && this._image.options.placement) {
      let backgroundImage = this._node.find('.image-background');
      let placement = this._image.options.placement;
      // only things with these properties explicitly set should be applied
      if (placement.type === 'fill') {
        backgroundImage.css('background-size', 'cover');

        // if there's also a particular placement of the image, apply that (else just center the image)
        if (placement.fill) {
          let containerDimensions = {
            width: backgroundImage.width(),
            height: backgroundImage.height()
          };
          let rawItemDimensions = {
            width: this._image.width,
            height: this._image.height
          };
          let itemDimensions = Media.getTargetDimensions(rawItemDimensions, containerDimensions);
          let cropDistance = Media.findCropDistance(itemDimensions, backgroundImage, placement.fill);

          backgroundImage.css('background-position', `${cropDistance.x}px ${cropDistance.y}px`);
        }
        else {
          backgroundImage.css('background-position', '50% 50%');
        }
      }
      else if (placement.type === 'fit') {
        backgroundImage.css('background-color', placement.fit.color);
        backgroundImage.css('background-size', 'contain');
        backgroundImage.css('background-position', '50% 50%');
      }
    }
  }

  // Loading through an invisible image
  preload() {
    var resultDeferred = new Deferred();

    var im = new window.Image();

    im.onload = function(e) {
      var width = e.currentTarget.naturalWidth,
          height = e.currentTarget.naturalHeight;

      resultDeferred.resolve({
        width: width,
        height: height
      });
      // if app isn't in builder mode, and the
      // image has, in fact, loaded, take off the error
      if (!app.builder && !this._isAlternate) {
        this.removeError && this.removeError();
      }
    }.bind(this);

    im.onerror = function() {
      if (app.builder) {
        this._isAlternate ? this.setAlternateError({showLoadingError: true}) : this.setError({showLoadingError: true});
      }
      else if (!this._isAlternate) {
        this.setError({minimizeInViewer: true});
      }
    }.bind(this);

    im.src = Media.addToken(this._url);

    return resultDeferred;
  }

  load() {
    // alternate media load very differently, so they have their own method
    if (this._isAlternate) {
      return this.loadAlternate();
    }

    var resultDeferred = new Deferred();

    if (this._isLoaded || ! this._node) {
      //resultDeferred.reject();
      return resultDeferred;
    }

    this._isLoaded = true;

    // Preload to get/update image dimension and hide loading indicator
    this.preload().then((p) => {
      if (p && p.width && p.height) {
        this._image.width = p.width;
        this._image.height = p.height;

        if (this._placement === 'block') {
          const styles = this._computeBlockStyle();
          this._node.find('.image-container').css('padding-top', styles.padding + '%');
          this._node.find('.block-media').css('max-width', styles.maxWidth);
        }
      }
      this._fadeInMedia();
    });

    if (this._placement == 'block') {
      this._node.find('.image-container').css('backgroundImage', 'url("' + Media.addToken(this._url) + '")');
    }
    else {
      this._node.find('.image-background').css('backgroundImage', 'url("' + Media.addToken(this._url) + '")');

      if (this._image['mobile-pos'] && UIUtils.isMobileBrowser()) {
        this._node.find('.image-background').css('backgroundPositionX', this._image['mobile-pos']);
      }
    }

    resultDeferred.resolve();
    return resultDeferred;
  }

  // basically the same as load(), but for alternates
  loadAlternate() {
    var resultDeferred = new Deferred();

    if (this._isLoaded) {
      return resultDeferred;
    }

    this._isLoaded = true;

    // Preload to get/update image dimension
    this.preload().then((p) => {
      if (p && p.width && p.height) {
        this._image.width = p.width;
        this._image.height = p.height;
      }
    });

    resultDeferred.resolve();
    return resultDeferred;
  }

  performAction() {
    if (! this._isLoaded) {
      this.load();
    }
  }

  resize() {
    //
    this._applyPlacement();
  }

  isLoaded() {
    return true; // TODO need to load image async
  }

  getNode() {
    return this._node;
  }

  update() {
    //
  }

  isPlaceholder() {
    return !! this._image.isPlaceholder;
  }

  _computeBlockStyle() {
    var size = 'small';

    if (this._image.options && this._image.options.size) {
      size = this._image.options.size;
    }

    /*
     * The image sizing in block using the padding technique
     * The vertical padding is relative to the width so this offer
     *  when coupled with background-image a really convenient way to avoid
     *  any JS running when resizing the app
     */

    const isPortrait = this._image.height >= this._image.width;

    let padding = this._image.height / this._image.width * 100;
    padding = Math.round(padding * 10) / 10;

    // if the image is small or medium, don't make it wider than its width.
    // large will disobey this since we'll want the nice full-bleed look.
    const maxWidth = size !== 'large' ? this._image.width + 'px' : 'none';

    return {
      size,
      padding,
      isPortrait,
      maxWidth
    };
  }

  _setBlockFitHeight() {
    if (typeof this._image.options.fitHeight === 'undefined') {
      if (this._isNewMedia) {
        this._image.options.fitHeight = false;
      }
      else {
        this._image.options.fitHeight = true;
      }
    }
  }
}
