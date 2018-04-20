import {} from 'lib-build/less!./WebMapEditor';
import viewTpl from 'lib-build/hbars!./WebMapEditor';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import MapViewerWrapper from './MapViewerWrapper';
import {} from 'storymaps/tpl/utils/smConfirmPopover';
import {} from 'lib-build/less!storymaps/tpl/utils/smConfirmPopover';

import Deferred from 'dojo/Deferred';

export default class WebMapEditor {
  constructor(params = {}) {
    this._node = params.container;
    this._resultDeferred = null;
    this._mapViewerWrapper = null;
    this._viewerMapIsLoaded = false;
    this._hasCreatedMap = false;
    this._hasSavedMap = false;
    this._newMapInfos = null;
    this._params = null;
    this._isSaving = false;

    this._node.append(viewTpl({
      strings: i18n.builder.mapEditor
    }));

    this._mapViewerWrapper = new MapViewerWrapper({
      frameWindow: this.getFrameWindow(),
      onSaveSucceed: this.onSaveSucceed.bind(this),
      onSaveError: this.onSaveError.bind(this),
      onLoad: this.mapViewerLoaded.bind(this),
      onError: this.mapViewerFatalError.bind(this),
      onEnableSave: this.onEnableSave.bind(this)
    });
  }

  present(params) {
    this._resultDeferred = new Deferred();
    this._viewerMapIsLoaded = false;
    this._hasCreatedMap = false;
    this._hasSavedMap = false;
    this._newMapInfos = null;
    this._params = params;

    this.initUI();

    let viewerURL = '';
    try {
      viewerURL = this._mapViewerWrapper.load(params.newMap, params.id);
    }
    catch(e) {
      this.mapViewerFatalError(e);
      this._resultDeferred.reject(e);
      return this._resultDeferred;
    }

    this._node.modal({ keyboard: false });

    this.mapViewerLoading();

    // Slightly delay loading so that modal animation aren't delayed
    setTimeout(() => {
      this._node.find('.webmap-builder').attr('src', viewerURL);
    }, 50);

    this._node.find('.btnSubmit').click(this.onSave.bind(this));
    this._node.on('hide.bs.modal', this.onClose.bind(this));
    this._node.on('hidden.bs.modal', this.onModalHidden.bind(this));

    return this._resultDeferred;
  }

  //
  // UI
  //

  initUI() {
    this._node.removeClass('firefox-hide-fix');
    this._node.find('.modal-footer .error').hide();
    this._node.find('.btnSubmit').addClass('disabled');
    this.updateCloseButton();
  }

  mapViewerLoading() {
    this._node.find('.webmap-builder-container').addClass('hide');
    this._node.find('.loading-container').removeClass('hide');
    this._node.find('.btnSubmit')
      .removeClass('hide')
      .addClass('disabled')
      .html(i18n.builder.mapEditor.save);

    this.updateCloseButton();
  }

  mapViewerLoaded() {
    this._node.find('.webmap-builder-container').removeClass('hide');
    this._node.find('.loading-container').addClass('hide');

    this._viewerMapIsLoaded = true;
  }

  mapViewerFatalError(message) {
    console.error(message);

    this._node.find('.error-container').removeClass('hide');
    this._node.find('.error-msg').html(i18n.builder.mapEditor.loadFail + '<br />' + message);
    this._node.find('.loading-container').addClass('hide');
    this._node.find('.webmap-builder-container').addClass('hide');
  }

  onEnableSave() {
    // Avoid conflict if enabling save button while saved confirmation is displayed
    if (this._isSaving) {
      return;
    }

    this._node.find('.btnSubmit')
      .removeClass('disabled')
      .html(i18n.builder.mapEditor.save);

    this.updateCloseButton(true);
  }

  updateCloseButton(enableConfirmation) {
    if (this._node.find('.btnCancel').hasClass('open')) {
      return;
    }

    if (enableConfirmation && this._node.find('.btnCancel').hasClass('has-confirmation')) {
      return;
    }

    this._node.find('.btnCancel').off('click').smConfirmPopover('destroy');

    if (enableConfirmation) {
      this._node.find('.btnCancel').smConfirmPopover({
        container: '.mapEditPopup .modal-dialog',
        title: i18n.builder.mapEditor.cancelTitle,
        confirmButtonText: i18n.builder.mapEditor.confirm,
        denyButtonText: i18n.builder.mapEditor.deny,
        onConfirmButtonClick: () => {
          this.onClickClose(true);
        }
      });

      this._node.find('.btnCancel').addClass('has-confirmation');
    }
    else {
      this._node.find('.btnCancel')
        .click(this.onClickClose.bind(this))
        .removeClass('has-confirmation');
    }
  }

  onSave() {
    if (!this._viewerMapIsLoaded) {
      return;
    }

    if (this._node.find('.btnSubmit').hasClass('disabled')) {
      return;
    }

    this._isSaving = true;

    this._node.find('.btnSubmit')
      .addClass('disabled')
      .html('<span class="small-loader"></span>' + i18n.builder.mapEditor.saving);

    this.updateCloseButton(true);

    this._node.find('.modal-footer .error').html('').hide();

    this._mapViewerWrapper.saveExistingMap();
  }

  onClickClose(discardChanges) {
    this._node.modal('hide');

    // If closing from Close > Discard reset the frame so if user edit the map back
    //   his unsaved changes won't be there
    if (discardChanges) {
      this._node.find('.webmap-builder').attr('src', 'about:blank');
    }
  }

  onClose() {
    this._mapViewerWrapper.close();

    if (this._resultDeferred) {
      if (this._hasSavedMap || this._hasCreatedMap) {
        this._resultDeferred.resolve({
          newMap: this._hasCreatedMap,
          newMapInfos: this._newMapInfos
        });
      }
      else {
        this._resultDeferred.reject();
      }
    }
  }

  onModalHidden() {
    $('#mapEditPopup').empty();
  }

  onSaveSucceed(id) {
    // Save as or create new
    if (this._params.id !== id) {
      this._params.id = id;
      this._newMapInfos = {
        id
      };
      this._hasCreatedMap = true;
    }
    else {
      this._hasSavedMap = true;
    }

    this.updateSavedUI();
  }

  updateSavedUI() {
    this._node.find('.btnSubmit')
      .addClass('disabled')
      .html('<span class="glyphicon glyphicon-ok"></span> ' + i18n.builder.mapEditor.success);

    this.updateCloseButton();

    setTimeout(() => {
      this._node.find('.btnSubmit').html(i18n.builder.mapEditor.save);
      this._node.find('.btnSubmit').toggleClass('disabled', true);
      this._isSaving = false;
    }, 2000);
  }

  onSaveError() {
    this._node.find('.btnSubmit').removeClass('disabled').html(i18n.builder.mapEditor.save);
    this._node.find('.modal-footer .error').html(i18n.builder.mapEditor.errorSave).show();
  }

  getFrameWindow() {
    return this._node.find('.webmap-builder')[0].contentWindow;
  }
}
