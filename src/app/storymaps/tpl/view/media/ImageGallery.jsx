import Media from './Media';
import CommonHelper from 'storymaps/common/utils/CommonHelper';

import {} from 'lib-build/less!./ImageGallery';
import viewTpl from 'lib-build/hbars!./ImageGallery';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import {} from 'lib/jquery/dist/jquery.min';
import {} from 'lib/fluidbox/dist/js/jquery.fluidbox.min';
import {} from 'lib-build/css!lib/fluidbox/dist/css/fluidbox.min';

import lang from 'dojo/_base/lang';

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
    });

    super({
      type: 'image-gallery',
      id: null,
      previewThumb: null,
      previewIcon: null
    });

    this._images = images;
    this._placement = null;
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
  }

  load() {
    if (this._isLoaded) {
      return;
    }

    this._isLoaded = true;

    var self = this;

    this._node.find('.image-gallery-item').each(function(i) {
      var node = $(this),
          imgHidden = node.find('.image-gallery-img-hidden'),
          img = node.find('.image-gallery-img'),
          fluidbox = imgHidden.parent();

      imgHidden.attr('src', node.data('src'));
      img.css('backgroundImage', 'url("' + node.data('src') + '"');

      //
      // Image maximize
      //

      var onImageMaximized = function() {
        fluidbox.trigger('close.fluidbox');
        $(window).off('scroll', onImageMaximized);
      };

      fluidbox
        .on('openend.fluidbox', function() {
          $(window).scroll(onImageMaximized);
        })
        .fluidbox({
          maxWidth: app.display.windowWidth
        });

      //
      // Loading indicator
      //
      var im = new window.Image();

      im.onload = function() {
        node.find('.media-loading').hide();
      }.bind(this);

      im.onerror = function() {
        if (app.builder) {
          self.setError({showLoadingError: true, galleryIndex: i});
        }
        else {
          self.setError({minimizeInViewer: true, galleryIndex: i});
        }
      }.bind(this);

      im.src = node.data('src');
    });
  }

  performAction() {
    //
  }

  resize() {
    this._calculateImageHeights();

    this._node.find('.image-gallery-item-wrapper').each(function(i, el) {
      $(el).css('height', this._images.images[i].adjustedHeight);
    }.bind(this));
  }

  _update() {
    this._node.html(this._render(false));
    this._isLoaded = false;
    this.load();
  }

  _calculateImageHeights() {
    let isMobile = window.innerWidth <= 768;

    let spaceBetweenImage = 15;
    // total image gutter space
    let spaceBetweenImages = spaceBetweenImage * (this._images.images.length - 1);
    // width allowed for block
    let blockWidth = app.display.windowWidth * (isMobile ? 0.9 : 0.8);
    // width for images is that minus what's needed for image gutters
    let widthForImages = blockWidth - spaceBetweenImages;

    // if mobile, each image gets 50% of the width (minus a padding of course)
    let widthForMobileImage = (blockWidth - spaceBetweenImage) / 2;

    let widthForDesktopImage = widthForImages / this._images.images.length;
    // each one gets an equal amount of width to use
    let widthForEachImage = isMobile ? widthForMobileImage : widthForDesktopImage;

    for (let i = 0; i < this._images.images.length; i++) {
      let image = this._images.images[i];
      let imageHeight = 0;
      let imageRatio = image.width / image.height;
      // the adjusted height is based on the width it can take in the gallery
      // if the image natural width is less than the width allotted for it, use its natural height

      if (image.width < widthForEachImage) {
        imageHeight = image.height;
      }
      else {
        imageHeight = Math.round(widthForEachImage / imageRatio);
      }
      image.adjustedHeight = imageHeight;
    }
  }

  _render(initialRender) {

    this._calculateImageHeights();

    let template = viewTpl({
      images: this._addTokens(this._images.images),
      caption: this._images.caption,
      placeholder: i18n.viewer.media.captionPlaceholder,
      captionEditable: app.isInBuilder
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
