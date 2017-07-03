import UIUtils from 'storymaps/tpl/utils/UI';
import Media from './Media';
import CommonHelper from 'storymaps/common/utils/CommonHelper';

import {} from 'lib-build/less!./ImageGallery';
import viewTpl from 'lib-build/hbars!./ImageGallery';
import actionOverlayTpl from 'lib-build/hbars!./ImageGalleryActionOverlays';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';
import i18nBuilder from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib/jquery/dist/jquery.min';
import {} from 'storymaps/common/utils/UniteGallery';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

export default class ImageGallery extends Media {

  constructor(images) {
    // fix sharing url on image constructor...
    images.images.forEach(image => {
      const needsFixing = CommonHelper.uploadedImageNeedsFixing(image.url);
      if (needsFixing) {
        image.url = CommonHelper.fixUploadedImageUrl(image.url);
        if (image.thumbUrl) {
          image.thumbUrl = CommonHelper.fixUploadedImageUrl(image.thumbUrl);
        }
      }
      // add the instanceID property for scanning
      image.instanceID = UIUtils.getUID();
    });

    super({
      type: 'image-gallery',
      id: null,
      previewThumb: null,
      previewIcon: null
    });

    this._images = images;
    this._placement = null;
    this._gallery = null;
    this._isLoaded = false;
  }

  render(context) {
    if (! this._images || ! context || context.placement != 'block') {
      console.log('Could not render image gallery in section');
      return '';
    }

    this._placement = context.placement;

    return this._render(true);
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    this._node = params.container.find('#' + this._domID);

    let galleryPromise = this._initGallery();

    return {
      isAsync: true,
      promise: galleryPromise
    };
  }

  _initGallery() {
    let baseRowHeight = 200;
    let baseGutterWidth = 5;

    if (app.display.windowWidth < 768) {
      baseRowHeight = 110;
    }
    else {
      if (this._images.images.length <= 4) {
        baseGutterWidth = 15;
      }
    }

    this._gallery = this._node.find('.image-gallery-wrapper').unitegallery({
      gallery_theme: 'tiles',
      gallery_control_keyboard: false,
      tiles_type: 'justified',
      theme_preloading_height: 0,
      tile_enable_action: false,
      tile_enable_overlay: false,
      tiles_justified_row_height: baseRowHeight,
      tiles_justified_space_between: baseGutterWidth
    });

    this._isLoaded = true;

    return new Promise(resolve => {
      this._gallery.on('load', () => {
        this._onGalleryLoaded();
        resolve();
      });

      this._gallery.on('resize', () => {
        topic.publish('media-dynamic-resize');
      });
    });
  }

  _onGalleryLoaded() {
    let imageWrappers = this._node.find('.ug-thumb-wrapper');

    let self = this;
    imageWrappers.each(function(index) {
      let itemProperties = {
        isFirst: false,
        isLast: false
      };

      if (index === 0) {
        itemProperties.isFirst = true;
      }
      else if (index === self._images.images.length - 1) {
        itemProperties.isLast = true;
      }

      $(this).append(actionOverlayTpl({
        itemProperties: itemProperties
      }));
    });

    if (!app.isInBuilder) {
      for (let i = 0; i < this._images.images.length; i++) {
        let image = this._images.images[i];
        let testImage = new window.Image();

        testImage.onerror = () => {
          let errorText = i18nBuilder.builder.mediaErrors;

          this.setError({
            msg: errorText.placeholders.inaccessible.replace('${media-type}', errorText.mediaTypes.image),
            unfixable: true,
            minimizeInViewer: true,
            galleryIndex: i
          });
        };

        testImage.src = Media.addToken(image.url);
      }
    }
  }

  load() {
    if (this._isLoaded) {
      return;
    }

    return this._initGallery();
  }

  performAction() {
    //
  }

  resize() {
    //
  }

  _render(initialRender) {

    let template = viewTpl({
      images: this._addTokens(this._images.images),
      caption: this._images.caption,
      placeholder: i18n.viewer.media.captionPlaceholder,
      captionEditable: app.isInBuilder,
      imageGalleryID: 'image-gallery' + this._domID
    });

    // if initial render, set the wrapper div and the height with the template. If not, just set the height and the template.
    if (initialRender) {
      return (
        `<div id="${this._domID}" class="block image-gallery" contenteditable="false">` +
          template +
        '</div>'
      );
    }

    else {
      return template;
    }
  }

  // TODO
  _addTokens(imagesOrig) {
    var images = lang.clone(imagesOrig);

    for (var image of images) {
      image.url = Media.addToken(image.url);
    }

    return images;
  }
}
