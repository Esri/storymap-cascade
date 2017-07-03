import UIUtils from 'storymaps/tpl/utils/UI';
import Media from './Media';
import ImageGallery from './ImageGallery';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import CancelNotification from '../../builder/notification/Cancel';

import {} from 'lib-build/less!./ImageGalleryBuilder';

import topic from 'dojo/topic';

import issues from '../../builder/Issues';

export default class ImageGalleryBuilder extends ImageGallery {

  constructor(images) {
    super(images);
  }

  postCreate(params) {
    let createResults = super.postCreate(params);

    createResults.promise.then(() => {
      // Creating with an ArcGIS Upload
      if (this._images.images.length == 2) {
        var secondImage = this._images.images[1];

        if (secondImage.dataUrl && secondImage.uploadDeferred) {
          this._addImageAtIndex(secondImage, 1);
        }
        else {
          const appId = app.data.appItem.item.id;
          if (appId && secondImage.url && secondImage.url.match(appId + '/resources')) {
            this._addImageAtIndex(secondImage, 1);
          }
        }
      }
    });

    return createResults;
  }

  getPreviewThumbnail() {
    if (this._images.images && this._images.images.length) {
      let img = this._images.images[0];
      if (img.previewThumb) {
        return Media.addToken(img.previewThumb);
      }
      return Media.addToken(img.url);
    }

    return null;
  }

  addEditEvent() {
    this._node.find('.ig-settings').off('click').on('click', event => {
      let itemNode = $(event.currentTarget).closest('.ug-thumb-wrapper');
      let index = itemNode.index();

      this._openMediaPickerForIndex(index);
    });
  }

  addAddEvent() {
    this._node.find('.ig-add').off('click').on('click', event => {
      let index = this._images.images.length;
      let target = $(event.currentTarget);

      // if button is disabled, don't open!
      if (!target.hasClass('disabled')) {
        this._openMediaPickerForIndex(index);
      }
    });
  }

  _openMediaPickerForIndex(index) {
    // TODO: edit - need to change data model to store image source

    app.builder.mediaPicker.open({
      mode: 'add',
      authorizedMedia: ['image']
    }).then(selection => {
      if (selection.type === 'image') {
        this._addImageAtIndex(selection.image, index);
      }
    }, () => {
      //
    });
  }

  _addImageAtIndex(image, index) {
    let url = image.url;

    if (image.dataUrl && image.uploadDeferred) {
      image.uploadDeferred.then(
        function(image2) {
          this._onUploadSuccess(image2.url, index);
        }.bind(this),
        function() {
          this._onUploadFail(index);
        }.bind(this)
      );

      // Add image with dataUrl
      this._images.images[index] = {
        url: url,
        dataUrl: image.dataUrl,
        instanceID: UIUtils.getUID()
      };

      this._onUploadStart(index);
    }
    else {
      this._loadImage(url, index);
    }
  }

  _loadImage(url, index) {
    let image = new window.Image();

    image.onload = e => {
      let width = e.currentTarget.naturalWidth;
      let height = e.currentTarget.naturalHeight;

      if (width && height) {
        this._images.images[index] = {
          height: height,
          width: width,
          url: url,
          instanceID: UIUtils.getUID()
        };

        this._update();
      }
    };

    image.src = Media.addToken(url);
  }

  _onUploadStart(index) {
    this._uploadNotification = new CancelNotification({
      label: i18n.builder.media.imageUpload
    });

    this._uploadNotification.display().then(
      function() {
        this._images.images.splice(index, 1);
        this._update();
      }.bind(this),
      function() {
        //
      }
    );
  }

  _onUploadSuccess(url, index) {
    if (this._uploadNotification) {
      this._uploadNotification.update({
        type: 'success',
        label: i18n.builder.media.imageUploadSuccess
      });
    }

    topic.publish('builder-media-update');
    this._loadImage(url, index);
  }

  _onUploadFail(index) {
    if (this._uploadNotification) {
      this._uploadNotification.update({
        type: 'error',
        label: i18n.builder.media.imageUploadFail
      });
    }

    // Remove the last
    this._images.images.splice(index, 1);
    this._update();
  }

  addRemoveEvent() {
    this._node.find('.ig-remove').off('click').on('click', event => {
      // find which item it is that you should remove...
      let itemNode = $(event.currentTarget).closest('.ug-thumb-wrapper');
      let index = itemNode.index();

      this._images.images.splice(index, 1);

      if (this._images.images.length == 1) {
        this._onAction('image-gallery-to-image');
        return;
      }

      this._update();
    });
  }

  addReorderEvent() {
    // move backward
    this._node.find('.ig-move-backward').on('click', event => {
      $(event.currentTarget).closest('.ig-move').tooltip('hide');

      let itemNode = $(event.currentTarget).closest('.ug-thumb-wrapper');
      let index = itemNode.index();

      let tempValue = this._images.images[index];
      this._images.images[index] = this._images.images[index - 1];
      this._images.images[index - 1] = tempValue;

      this._update();
    });

    // move forward
    this._node.find('.ig-move-forward').on('click', event => {
      $(event.currentTarget).closest('.ig-move').tooltip('hide');

      let itemNode = $(event.currentTarget).closest('.ug-thumb-wrapper');
      let index = itemNode.index();

      let tempValue = this._images.images[index];
      this._images.images[index] = this._images.images[index + 1];
      this._images.images[index + 1] = tempValue;

      this._update();
    });
  }

  _update() {
    topic.publish('builder-media-update');

    const FADE_DURATION = 400;
    let imageGalleryNode = this._node.find('.image-gallery-wrapper');

    this._fadeOutGallery(imageGalleryNode);

    window.setTimeout(() => {
      let galleryHeight = imageGalleryNode.outerHeight();

      // destroy the gallery
      this._destroyGallery();

      // inject the HTML of the new one
      this._injectNewGallery(galleryHeight);
      let newImageGalleryNode = this._node.find('.image-gallery-wrapper');
      let placeholder = this._node.find('.ig-temp-placeholder');

      // load the new gallery
      this._isLoaded = false;
      let loadPromise = this.load();
      loadPromise && loadPromise.then(() => {
        this._fadeInGallery(newImageGalleryNode, placeholder);
      });
    }, FADE_DURATION);
  }

  _fadeOutGallery(node) {
    node.removeClass('show-me');
    node.addClass('hide-me');
  }

  _injectNewGallery(galleryHeight) {
    // add the new html
    this._node.html(this._render(false));
    let newImageGalleryNode = this._node.find('.image-gallery-wrapper');

    // hide the image gallery
    newImageGalleryNode.css('display', 'none');
    newImageGalleryNode.css('opacity', 0);

    let placeholder = this._node.find('.ig-temp-placeholder');

    // make the placeholder's height the same as the old gallery's to reduce jank
    placeholder.height(galleryHeight);
    placeholder.css('display', 'block');
  }

  _fadeInGallery(node, placeholder) {
    topic.publish('builder-should-check-story');

    node.css('display', 'block');
    placeholder.css('display', 'none');

    node.removeClass('hide-me');
    node.addClass('show-me');
  }

  _destroyGallery() {
    this._node.find('.ug-thumb-wrapper .ig-move.ig-direction-backward').tooltip('destroy');
    this._node.find('.ug-thumb-wrapper .ig-move.ig-direction-forward').tooltip('destroy');
    this._node.find('.ig-add').tooltip('destroy');

    if (this._gallery) {
      this._gallery.destroy();
    }
  }

  _addBuilderEvents() {
    this.addRemoveEvent();
    this.addEditEvent();
    this.addAddEvent();
    this.addReorderEvent();

    this._node.find('.ug-thumb-wrapper .ig-move.ig-direction-backward').tooltip({
      container: 'body',
      title: i18n.builder.imageGallery.moveBackward
    });

    this._node.find('.ug-thumb-wrapper .ig-move.ig-direction-forward').tooltip({
      container: 'body',
      title: i18n.builder.imageGallery.moveForward
    });

    this._node.find('.ug-thumb-wrapper').hover(event => {
      $(event.currentTarget).find('.builder-ui.ig-item').removeClass('hidden');
    }, event => {
      $(event.currentTarget).find('.builder-ui.ig-item').addClass('hidden');
    });
  }

  load() {
    return super.load();
  }

  _onGalleryLoaded() {
    super._onGalleryLoaded();

    let addButton = this._node.find('.ig-add');

    addButton.removeClass('disabled');
    addButton.tooltip({
      container: 'body',
      title: i18n.builder.imageGallery.addImage
    });

    this._addBuilderEvents();

    for (let image of this._images.images) {
      topic.subscribe('scan/images/' + image.instanceID, (scanResult) => {
        let index = this._images.images.findIndex(item => {
          return item.url === image.url;
        });

        this.checkErrors(scanResult, { index });
      });
    }
  }

  isUnfixableError(errorIds, params) {
    var errorText = i18n.builder.mediaErrors;
    if (errorIds.indexOf(issues.images.inaccessible) >= 0) {
      return {
        msg: errorText.placeholders.inaccessible.replace('${media-type}', errorText.mediaTypes.image),
        unfixable: true,
        showLoadingError: true,
        galleryIndex: params.index
      };
    }
    return false;
  }

  serialize() {
    if (this._node) {
      this._images.caption = this._node.find('.block-caption').html();
    }

    for (const image of this._images.images) {
      delete image.dataUrl;
      // That would mean game over if saving while an upload is in progress
      //delete image.uploadDeferred;
      delete image.adjustedHeight;
    }

    // instanceID is sent with the images, not the gallery, so we won't want to tack one on here.
    return super.serialize('image-gallery', this._images, false);
  }
}
