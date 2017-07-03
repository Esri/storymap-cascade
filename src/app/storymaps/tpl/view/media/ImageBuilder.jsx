import Image from './Image';
import {} from 'lib-build/less!./ImageBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import BuilderConfig from './builder/Panel';
import BuilderConfigTabSizeImage from './builder/TabSizeImage';
import BuilderConfigTabBackground from './builder/TabBackground';
import BuilderConfigTabManageImage from './builder/TabManageImage';
import BuilderConfigTabSectionAppearance from './builder/TabSectionAppearance';

import CancelNotification from '../../builder/notification/Cancel';

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import issues from '../../builder/Issues';

const text = i18n.builder;

export default class ImageBuilder extends Image {
  constructor(image, isNewMedia) {
    super(image, isNewMedia);

    this._uploadNotification = null;
    this._onToggleMediaConfig = null;
    this._foregroundOptions = null;
    this._applySectionConfig = null;
  }

  postCreate(params) {
    // if it's an alternate media, its postCreate will be very different
    if (this._isAlternate) {
      this.postCreateAlternate();
      return;
    }

    super.postCreate(params);

    this._onToggleMediaConfig = params.onToggleMediaConfig;
    this._foregroundOptions = params.foregroundOptions;
    this._applySectionConfig = params.applySectionConfig;

    // Placeholder image are managed by the section
    if (this._image.isPlaceholder) {
      this._node.find('.media-cfg-invite').hide();
    }
    else {
      this._initConfigPanel();

      //
      // Image gallery invite
      //
      this._node.find('.img-gallery-invite').click(this._onCreateImageGallery.bind(this));

      this._node.find('.img-gallery-add').tooltip({
        container: 'body',
        title: text.imageGallery.addImage
      });
    }

    // we subscribe to the scan change for this SPECIFIC image only (hence the scan/image/imageID pattern).
    topic.subscribe('scan/images/' + this._instanceID, lang.hitch(this, this.checkErrors));

    this.initBuilderUI();
  }

  postCreateAlternate() {
    if (this._isUploadPending) {
      this._onUploadStart();
    }
  }

  _initConfigTabs() {
    let tabs = [];

    for(let tab of this._builderConfigurationTabs) {
      if (tab == 'size') {
        tabs.push(new BuilderConfigTabSizeImage());
      }
      else if (tab == 'section-appearance') {
        tabs.push(new BuilderConfigTabSectionAppearance({
          sectionOptions: this._foregroundOptions,
          onSectionChange: this._applySectionConfig
        }));
      }
      else if (tab == 'background') {
        tabs.push(new BuilderConfigTabBackground({
          sectionType: this._sectionType
        }));
      }
      else if (tab == 'manage') {
        const manageTab = this._createManageTab();
        tabs.push(manageTab);
      }
    }

    return tabs;
  }

  _initConfigPanel() {
    super._initConfigPanel();

    this._builderConfigPanel = new BuilderConfig({
      containerMedia: this._node,
      tabs: this._initConfigTabs(),
      media: this._image,
      onChange: this._onConfigChange.bind(this),
      onAction: this._onAction.bind(this),
      onToggle: function() {
        this._node.toggleClass('builder-config-open');
        this._onToggleMediaConfig(this);
      }.bind(this),
      closeBtnStyle: this._placement == 'background' ? 'light' : 'standard'
    });
  }

  isUnfixableError(errorIds) {
    var errorText = text.mediaErrors;
    if (errorIds.indexOf(issues.images.inaccessible) >= 0) {
      return {
        msg: errorText.placeholders.inaccessible.replace('${media-type}', errorText.mediaTypes.image),
        unfixable: true,
        showLoadingError: true
      };
    }
    return false;
  }

  serialize(includeInstanceID) {
    if (this._image.uploadDeferred) {
      delete this._image.uploadDeferred;
    }

    if (this._node) {
      this._image.caption = this._node.find('.block-caption').html();
    }

    return super.serialize('image', this._image, includeInstanceID);
  }

  //
  // Private
  //

  _onConfigChange() {
    this._applyConfig();
    super._onConfigChange();
  }

  _onUploadStart() {
    if (this._isAlternate) {
      return;
    }
    this._uploadNotification = new CancelNotification({
      container: this._node.parents('.section').eq(0),
      label: text.media.imageUpload
    });

    this._node.find('.img-gallery-invite').addClass('disabled');

    this._uploadNotification.display().then(
      function() {
        this._onAction('remove');
      }.bind(this),
      function() {
        //
      }
    );
  }

  _onUploadSuccess(image) {
    this._image.url = image.url;
    this._url = image.url;
    if (image.thumbUrl) {
      this._image.thumbUrl = image.thumbUrl;
      this.previewThumb = image.thumbUrl;
    }
    if (this._image.dataUrl) {
      this._image.dataUrl = null;
    }

    if (this._uploadNotification) {
      this._uploadNotification.update({
        type: 'success',
        label: text.media.imageUploadSuccess
      });
    }

    this._isLoaded = false;

    // Preload the image so that there is no flashing
    this.preload().then(this.load.bind(this));

    topic.publish('builder-media-update');

    if (!this._isAlternate) {
      this._node.find('.img-gallery-invite').removeClass('disabled');
    }
  }

  _onUploadFail() {
    if (this._uploadNotification) {
      this._uploadNotification.update({
        type: 'error',
        label: text.media.imageUploadFail
      });
    }

    if (this._placement == 'block') {
      this._onAction('remove');
    }
    else if (!this._isAlternate) {
      this._onAction(
        'swap',
        {
          type: 'empty',
          empty: 'empty'
        }
      );
    }
  }

  _onCreateImageGallery() {
    this._onAction('image-to-image-gallery');
  }

  _createManageTab() {
    return new BuilderConfigTabManageImage({
      hideRemove: this._placement == 'background',
      showErrors: this.scanResults.errors && this.scanResults.errors.length
    });
  }
}
