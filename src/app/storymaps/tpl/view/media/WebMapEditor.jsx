import {} from 'lib-build/less!./WebMapEditor';
import viewTpl from 'lib-build/hbars!./WebMapEditor';

import i18n from 'lib-build/i18n!commonResources/nls/webmap';

import MapViewerWrapper from 'storymaps/common/builder/mapEditor/MapViewerWrapper';
import MapViewerWrapperUtils from 'storymaps/common/builder/mapEditor/MapViewerWrapperUtils';

//import NewMapDialog from './NewMapDialog';

import Deferred from 'dojo/Deferred';
import topic from 'dojo/topic';
import has from 'dojo/has';

//import {} from 'lib/bootstrap-confirmation/bootstrap-confirmation';

export default class WebMapEditor {
  constructor(params = {}) {
    this._node = params.container;
    this._resultDeferred = null;
    this._newMapDialog = null;
    this._mapViewerWrapper = null;
    this._viewerMapIsLoaded = false;
    this._isCreatingMap = false;
    this._hasCreatedMap = false;
    this._hasSavedMap = false;
    this._newMapInfos = null;
    this._params = null;
    this._isSaving = false;

    this._node.append(viewTpl({
      loadingLabel: i18n.commonWebmap.editor.loading
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
    this._isCreatingMap = false;
    this._hasCreatedMap = false;
    this._hasSavedMap = false;
    this._newMapInfos = null;
    this._params = params;

    this.initUI();

    var viewerURL = '';
    try {
      viewerURL = this._mapViewerWrapper.load(params.newMap, params.id);
    }
    catch(e) {
      this.mapViewerFatalError(e);
      this._resultDeferred.reject(e);
      return this._resultDeferred;
    }

    if (params.newMap) {
      if (! this._newMapDialog) {
        //this._newMapDialog = new NewMapDialog($('#mapEditPopupNewMap'));
      }

      /*
      var tags = app.data.getWebAppItem().tags || [];
      tags.push('map');
      tags = $.grep(tags, function(tag, index) {
        return index == $.inArray(tag, tags);
      });
      tags = tags.join(', ');
      */

      var title = params.title || '';
      /*
      if ( title ) {
        title += ' - ' + 'Map';
      }
      */

      this._newMapDialog.present({
        title: title,
        tags: ['map'],
        folderId: app.data.getWebAppItem().ownerFolder
      }).then(
        this.onNewMapDialogSuccess,
        this.onNewMapDialogError
      );

      // Firefox don't let MV load properly if it's this._node.is not visible
      // So display but hide the dialog
      if (has('ff')) {
        this._node
          .addClass('firefox-hide-fix')
          .modal({ keyboard: false });
      }
    }
    else {
      this._node.modal({ keyboard: false });
    }

    this.mapViewerLoading();

    // Slightly delay loading so that modal animation aren't delayed
    setTimeout(() => {
      this._node.find('.webmap-builder').attr('src', viewerURL);
    }, 50);

    this._node.find('.btnSubmit').click(this.onSave.bind(this));
    this._node.on('hide.bs.modal', this.onClose.bind(this));

    return this._resultDeferred;
  }

  onNewMapDialogSuccess(result) {
    console.log('New map dialog saved', result);

    this._newMapInfos = result;

    var sendCreateMap = function() {
      this._isCreatingMap = true;

      this._mapViewerWrapper.send({
        type: 'saveNewMap',
        title: result.title,
        tags: result.tags,
        folderId: result.folderId
      });
    };

    if (this._viewerMapIsLoaded) {
      sendCreateMap();
    }
    else {
      var interval = setInterval(function() {
        console.log('MV - Waiting for the map viewer to load to create the map');

        if (this._viewerMapIsLoaded) {
          sendCreateMap();
          clearInterval(interval);
        }
      }, 500);
    }
  }

  onNewMapDialogError() {
    MapViewerWrapperUtils.cancelLoading();
    if (has('ff')) {
      this._node.modal('hide');
    }
  }

  //
  // UI
  //

  initUI() {
    this._node.removeClass('firefox-hide-fix');
    this._node.find('.modal-footer .error').hide();
    this._node.find('.modal-title').html(i18n.commonWebmap.editor.editTitle);
    this._node.find('.btnSubmit').addClass('disabled');
    this.createCancelButton();
    this._node.find('.btn-close').html(i18n.commonWebmap.editor.close);
  }

  mapViewerLoading() {
    this._node.find('.webmap-builder-container').addClass('hide');
    this._node.find('.loading-container').removeClass('hide');
    this._node.find('.btnSubmit')
      .removeClass('hide')
      .addClass('disabled')
      .html(i18n.commonWebmap.editor.save);

    this.createCancelButton();
  }

  mapViewerLoaded() {
    this._node.find('.webmap-builder-container').removeClass('hide');
    this._node.find('.loading-container').addClass('hide');

    this._viewerMapIsLoaded = true;
  }

  mapViewerFatalError(message) {
    console.error(message);

    this._node.find('.error-container').removeClass('hide');
    this._node.find('.error-msg').html(i18n.commonWebmap.editor.loadFail + '<br />' + message);
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
      .html(i18n.commonWebmap.editor.save);

    this.createCancelButton(true);
  }

  createCancelButton(enableConfirmation) {
    if (this._node.find('.btnCancel').hasClass('open')) {
      return;
    }

    if (enableConfirmation && this._node.find('.btnCancel').hasClass('has-confirmation')) {
      return;
    }

    this._node.find('.btnCancel')
      .off('click')
      .confirmation('destroy');

    if (enableConfirmation) {
      this._node.find('.btnCancel').confirmation({
        container: '.mapEditPopup .modal-dialog',
        placement: 'top',
        title: i18n.commonWebmap.editor.cancelTitle,
        btnOkLabel: i18n.commonWebmap.editor.yes,
        btnCancelLabel: i18n.commonWebmap.editor.no,
        onConfirm: () => {
          this.onClickClose(true);
        },
        btnCancelClass: 'btn btn-sm btn-default btn-cancel-popover'
      });

      this._node.find('.btnCancel').addClass('has-confirmation');
    }
    else {
      this._node.find('.btnCancel')
        .click(this.onClickClose)
        .removeClass('has-confirmation');
    }
  }

  onSave() {
    if (! this._viewerMapIsLoaded) {
      return;
    }

    if (this._node.find('.btnSubmit').hasClass('disabled')) {
      return;
    }

    this._isSaving = true;

    this._node.find('.btnSubmit')
      .addClass('disabled')
      .html('<span class="small-loader"></span>' + i18n.commonWebmap.editor.saving);

    this.createCancelButton();

    this._node.find('.modal-footer .error').html('').hide();

    this._mapViewerWrapper.send({
      type: 'saveMap'
    });
  }

  onClickClose(discardChanges) {
    this._node.modal('hide');

    // If closing from Close > Discard reset the frame so if user edit the map back
    //   his unsaved changes won't be there
    if (discardChanges === true) {
      this._node.find('.webmap-builder').attr('src', 'about:blank');
    }
  }

  onClose() {
    this._mapViewerWrapper.close();

    if (this._resultDeferred) {
      // TODO: this should happen in WebMapSelector
      if (this._hasSavedMap) {
        topic.publish('ADDEDIT_RELOAD_CURRENT_WEBMAP');
      }

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

  onSaveSucceed(id, title) {
    if (this._isCreatingMap) {
      this._newMapInfos.id = id;
      this._isCreatingMap = false;
      this._hasCreatedMap = true;

      this._newMapDialog.saveSuccess().then(function() {
        if (has('ff')) {
          this._node.removeClass('firefox-hide-fix');
        }
        else {
          this._node.modal({ keyboard: false });
        }
      });
    }
    // Save as
    else if (this._params.id && this._params.id != id) {
      this._params.id = id;
      this._newMapInfos = {
        id: id,
        title: title || ''
      };
      this._hasCreatedMap = true;

      this.onSaveSuccessStep2();
    }
    else {
      this._hasSavedMap = true;
      this.onSaveSuccessStep2();
      // Check the story
      topic.publish('BUILDER-MY-STORIES-CHECK');
    }
  }

  onSaveSuccessStep2() {
    this._node.find('.btnSubmit')
      .addClass('disabled')
      .html('<span class="glyphicon glyphicon-ok"></span> ' + i18n.commonWebmap.editor.success);

    setTimeout(function() {
      this._node.find('.btnSubmit').html(i18n.commonWebmap.editor.save);
      this._node.find('.btnSubmit').toggleClass('disabled', true);
      this._isSaving = false;
    }, 2000);
  }

  onSaveError(error) {
    if (this._isCreatingMap) {
      this._newMapDialog.saveError(error).then(
        this.onNewMapDialogSuccess,
        this.onNewMapDialogError
      );
    }
    else {
      this._node.find('.btnSubmit').removeClass('disabled').html(i18n.commonWebmap.editor.save);
      this._node.find('.modal-footer .error').html(i18n.commonWebmap.editor.errorSave).show();
    }
  }

  getFrameWindow() {
    return this._node.find('.webmap-builder')[0].contentWindow;
  }
}
