import Media from './Media';
import ImageGallery from './ImageGallery';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import CancelNotification from '../../builder/notification/Cancel';

import {} from 'lib-build/less!./ImageGalleryBuilder';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

export default class ImageGalleryBuilder extends ImageGallery {

  constructor(images) {
    super(images);

    this.MAX_NUMBER_IMAGES = 4;
  }

  postCreate(params) {
    super.postCreate(params);

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

    this._updateTooltip();
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
      let itemNode = $(event.currentTarget).closest('.image-gallery-item');
      let index = itemNode.data('index');

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
        dataUrl: image.dataUrl
      };
      this._update();

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
          url: url
        };

        this._update();
      }

      // do an issue check
      topic.publish('builder-should-check-story');
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
      let itemNode = $(event.currentTarget).closest('.image-gallery-item');
      let index = itemNode.data('index');

      this._images.images.splice(index, 1);

      if (this._images.images.length == 1) {
        this._onAction('image-gallery-to-image');
        return;
      }
      else {
        // do an issue check (we do it for image-gallery-to-image where it's called later on)
        topic.publish('builder-should-check-story');
      }

      this._update();
    });
  }

  _update() {
    super._update();
    this._updateTooltip();
  }

  _updateTooltip() {
    let addButton = this._node.find('.ig-add');
    // disable the plus button and show a tooltip if the max limit for the image gallery has been reached.
    if (this._images.images.length === this.MAX_NUMBER_IMAGES) {
      addButton.addClass('disabled');
      addButton.tooltip({
        container: 'body',
        title: i18n.builder.imageGallery.reachedLimit
      });
    }
    else {
      addButton.removeClass('disabled');
      addButton.tooltip({
        container: 'body',
        title: i18n.builder.imageGallery.addImage
      });
    }
  }

  load() {
    super.load();

    this._node.find('.image-gallery-image-link').on('click', () => {
      this._node.find('.builder-ui.ig-item').addClass('hidden');
    });

    this._node.find('.image-gallery-item-wrapper').hover(event => {
      // if caused by hovering over the add button, disregard.
      if ($(event.target).closest('.ig-add').length) {
        return;
      }

      $(event.currentTarget).find('.builder-ui.ig-item').removeClass('hidden');
    }, event => {
      $(event.currentTarget).find('.builder-ui.ig-item').addClass('hidden');
    });

    this.addRemoveEvent();
    this.addEditEvent();
    this.addAddEvent();
  }

  serialize() {
    if (this._node) {
      this._images.caption = this._node.find('.block-caption').html();
    }

    for (var image of this._images.images) {
      delete image.dataUrl;
      // That would mean game over if saving while an upload is in progress
      //delete image.uploadDeferred;
      delete image.adjustedHeight;
    }

    return lang.clone({
      type: 'image-gallery',
      'image-gallery': this._images
    });
  }
}
