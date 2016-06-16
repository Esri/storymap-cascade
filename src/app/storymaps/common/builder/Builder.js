define([
  'lib-build/css!./Builder',
  'esri/arcgis/Portal',
  'storymaps-react/tpl/builder/panel/BuilderPanel',
  './SaveErrorPopupSocial',
  //'./settings/SettingsPopup',
  './BuilderHelper',
  //'./MyStoriesWrapper',
  '../utils/CommonHelper',
  //'../utils/WebMapHelper',
  'esri/IdentityManager',
  'dojo/Deferred',
  'dojo/_base/lang'
  //'lib-app/history.min'
], function(
  viewCss,
  esriPortal,
  BuilderPanel,
  SaveErrorPopupSocial,
  //SettingsPopup,
  BuilderHelper,
  //MyStoriesWrapper,
  CommonHelper,
  //WebMapHelper,
  IdentityManager,
  Deferred,
  lang
) {
  var _core = null,
      _builderView = null,
      _builderPanel = null, // eslint-disable-line no-unused-vars
      _settingsPopup = null,
      _saveErrorPopupSocial = null;

  this.isDirectCreation = false;
  this.isGalleryCreation = false;
  this.isDirectCreationFirstSave = false;

  function init(core, builderView) {
    _core = core;
    _builderView = builderView;
    //_settingsPopup = new SettingsPopup($('#settingsPopup'));

    console.log('common.builder.Builder - init');

    var urlParams = CommonHelper.getUrlParams();

    app.builder.isDirectCreation = urlParams.fromScratch != null || urlParams.fromscratch != null;
    app.builder.isGalleryCreation = urlParams.fromGallery != null;
    app.builder.isDirectCreationFirstSave = app.builder.isDirectCreation;

    // TODO
    if (false && ! CommonHelper.getAppID(_core.isProd()) && ! app.builder.isDirectCreation) { // eslint-disable-line
      console.error('common.builder.Builder - abort builder initialization, no appid supplied');
      return;
    }
    else if (app.builder.isDirectCreation) {
      console.log('common.builder.Builder - Builder start in direct creation mode');
    }
    else if (app.builder.isGalleryCreation) {
      console.log('common.builder.Builder - Builder start in gallery creation mode');
    }

    $('body').addClass('builder-mode');

    // Add the default StoryMaps theme
    //app.cfg.COLOR_SCHEMES.splice(0, 0, app.cfg.COLORS);

    _builderView.init(_settingsPopup);
    //_builderPanel.init(_builderView);

    _builderPanel = new BuilderPanel({
      container: $('.section-builder-panel'),
      saveApp: _builderView.saveApp,
      openSettings: function() { },
      shareApp: shareApp
    });

    app.builder.builderPanel = _builderPanel;

    _saveErrorPopupSocial = new SaveErrorPopupSocial($('#saveErrorPopupSocial'));

    // TODO
    //_settingsPopup.init(_builderView);
    //_settingsPopup.initLocalization();

    //topic.subscribe('BUILDER_INCREMENT_COUNTER', _builderPanel.incrementSaveCounter);

    // My Stories
    //topic.subscribe('BUILDER-MY-STORIES-CHECK', MyStoriesWrapper.scanStory);

    // Reload / close confirmation if there is unsaved change
    window.onbeforeunload = function(e) {
      e = e || window.event;

      if (! app.isInBuilder || ! app.builder.pendingChanges) {
        return;
      }

      if (e) {
        e.returnValue = i18n.commonCore.builderPanel.closeWithPendingChange;
      }

      return i18n.commonCore.builderPanel.closeWithPendingChange;
    };

    app.builder.cleanApp = BuilderHelper.cleanApp;
  }

  function appInitComplete() {
    var storyTitle = '',
        itemTitle = '';

    if (app.data.title) {
      storyTitle = app.data.title.trim();
    }

    if (app.data.appItem && app.data.appItem.item && app.data.appItem.item.title) {
      itemTitle = app.data.appItem.item.title.trim();
    }

    app.builder.titleMatchOnLoad = itemTitle == storyTitle;

    if (app.builder.isDirectCreation || app.builder.isGalleryCreation) {
      app.builder.titleMatchOnLoad = true;
    }

    //_builderPanel.updateSharingStatus();
    _builderView.appInitComplete();
  }

  function resize() {
    //
  }

  //
  // Save
  //

  function saveApp() {
    if (! app.portal) {
      console.error('Fatal error - not signed in');
      saveAppFailed('APP');
      return;
    }

    var storyTitle = '',
        itemTitle = '';

    if (app.data.title) {
      storyTitle = app.data.title.trim();
    }

    if (app.data.appItem && app.data.appItem.item && app.data.appItem.item.title) {
      itemTitle = app.data.appItem.item.title.trim();
    }

    if (! storyTitle) {
      saveAppFailed('NONAME');
      return;
    }

    // FromScratch
    if (app.builder.isDirectCreationFirstSave) {
      app.portal.getPortalUser().getItems().then(function(items) {
        var foundDuplicate = false;

        if (items) {
          $.each(items, function(i, item) {
            if (item.title && item.title.toLowerCase() == storyTitle.toLowerCase()) {
              foundDuplicate = true;
            }
          });
        }

        // TODO make that an option
        if (foundDuplicate) {
          saveAppFailed('DUPLICATE');
        }
        else {
          saveAppFromScratch(storyTitle);
        }
      });
    }
    // Save of an existing app
    else {
      // if item and story title don't match
      //  and user hasn't chose to not be warned about it
      //  and story is public
      if (! app.builder.titleMatchOnLoad
          && ! app.data.appItem.data.values.config.doNotWarnTitle
          && app.data.appItem.item.access == 'public'
          // Extra check that title actually differs - don't show the dialog it title where not matching but user fixed it
          && storyTitle != itemTitle
      ) {
        // If the warning dialog has already been displayed in the session, skip it and reuse the choice
        if (app.builder.titleMatchDialogDisplayed) {
          builderSave(app.builder.titleFromItem);
        }
        // Show the warning dialog
        else {
          app.builder.titleMatchDialogDisplayed = true;

          _saveErrorPopupSocial.present().then(
            function(p) {
              p = p || {};
              app.builder.titleFromItem = p.choice == 'item';
              builderSave(app.builder.titleFromItem);
            }
          );
        }
      }
      else {
        // Save the app
        var keepItemTitle = app.data.appItem.data.values.config.doNotWarnTitle
            || (app.data.appItem.item.access != 'public' && ! app.builder.titleMatchOnLoad);

        builderSave(keepItemTitle);
      }
    }
  }

  function builderSave(doNotOverwriteTitle) {
    BuilderHelper.saveApp(doNotOverwriteTitle).then(
      function() {
        saveAppSuccess();
      },
      function() {
        saveAppFailed('APP');
      }
    );
  }

  function saveAppFromScratch(title) {
    var uid = IdentityManager.findCredential(BuilderHelper.getPortalURL()).userId;

    lang.mixin(app.data.appItem.item, {
      title: title,
      snippet: '',
      uploaded: Date.now(),
      modified: Date.now(),
      owner: uid,
      access: 'private'
    });

		// Save the app
    BuilderHelper.saveApp(false).then(
      function(response) {
        var baseUrl = document.location.protocol + '//' + document.location.host + document.location.pathname;
        if (! baseUrl.match(/index\.html$/)) {
          baseUrl += 'index.html';
        }

        lang.mixin(app.data.appItem.item, {
          id: response.id,
          item: response.item,
          url: baseUrl + '?appid=' + response.id
        });

        BuilderHelper.saveApp(false).then(function() {
          console.log('common.builder.Builder - saveAppFromScratch - appid:', response.id);

          app.builder.isDirectCreationFirstSave = false;

          window.history.replaceState({}, '', 'index.html?appid=' + response.id + '&edit');

          saveAppSuccess();
        });
      },
      function() {
        saveAppFailed();
      }
    );
  }

  //
  // Sharing
  //

  function shareApp(params) {
    var resultDeferred = new Deferred(),
        item = app.data.appItem.item;

    if (! params || ! params.sharingLevel || ! item) {
      resultDeferred.reject();
      return resultDeferred;
    }

    var sharingLevel = params.sharingLevel;

    if (sharingLevel != 'public' && sharingLevel != 'account' && sharingLevel != 'private') {
      sharingLevel = 'private';
    }

    // Find items to share - only if they aren't already shared to the proper level
    var targetItems = [app.data.appItem.item.id];

    BuilderHelper.shareItems(targetItems.join(','), sharingLevel).then(function(response) {
      var success = response
        && response.results
        && response.results.length == targetItems.length;

      if (success) {
        $.each(response.results, function(i, result) {
          if (! result.success) {
            success = false;
          }
        });

        app.data.appItem.item.access = sharingLevel;
      }

      resultDeferred.resolve();
    });

    return resultDeferred;
  }

  //
  // Save callbacks
  //

  function saveAppSuccess() {
    app.mystories = app.mystories || { };
    app.mystories.isChecking = true;

    app.isWebMapCreation = false;

    app.builder.pendingChanges = 0;

    _builderPanel.saveSucceeded();
    //app.data.updateAfterSave();

    // Initialize My Stories
    if (app.builder.isGalleryCreation || app.builder.isDirectCreationFirstSave) {
      app.builder.isDirectCreationFirstSave = false;
      app.builder.isGalleryCreation = false;
      // Delay a little to be sure the share dialog will be open when the scan will be done
      //setTimeout(window.myStoriesInit, 200);
    }
    // else {
    //   MyStoriesWrapper.scanStory();
    // }

    //_builderPanel.updateSharingStatus();
  }

  function saveAppFailed(source, error) {
    _builderPanel.saveFailed(source, error);
    _builderView.saveFailed(source, error);
  }

  return {
    init: init,
    resize: resize,
    appInitComplete: appInitComplete,
    saveApp: saveApp
  };
});
