import viewTpl from 'lib-build/hbars!./BuilderPanel';
import {} from 'lib-build/less!./BuilderPanel';

import commonCoreI18n from 'lib-build/i18n!commonResources/nls/core';
import builderI18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import viewerI18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import OverviewPanel from '../overviewPanel/OverviewPanel';
import BuilderHelper from 'storymaps/common/builder/BuilderHelper';
import topic from 'dojo/topic';

export default class BuilderPanel {
  constructor(params = {}) {
    this._node = params.container;
    this._saveApp = params.saveApp;
    this._shareApp = params.shareApp;
    this._saveFailed = false;

    if (! this._node || ! this._saveApp || ! this._shareApp) {
      console.error('Could not initialize Builder Panel');
      return;
    }

    let publicWarning = builderI18n.builder.builderPanel.publicWarning;
    let organizationWarning = builderI18n.builder.builderPanel.organizationWarning;

    this._node.html(viewTpl({
      btnSave: viewerI18n.viewer.common.save,
      commonStrings: commonCoreI18n.commonCore.builderPanel,
      sharingLevelStrings: commonCoreI18n.commonCore.share,
      strings: builderI18n.builder.builderPanel,
      publicWarning: publicWarning,
      organizationWarning: organizationWarning
    }));

    this._overviewPanel = null;

    // Initialize the inner share button tooltip before the outer. Then manually show and hide the outer tooltip when the inner one shows and hides.
    // That way both show at first
    this._node.find('.btn-share-container .btn-share-wrapper').tooltip({
      container: '.section-builder-panel',
      placement: 'top'
    });

    this._node.find('.btn-share-container .btn-share-wrapper').on('inserted.bs.tooltip', function() {
      // this class is so we don't have the min-width of 200px for these buttons...
      $(this).data('bs.tooltip').$tip.addClass('share-tooltip');
    });

    this._node.find('.btn-share-container .btn-share-wrapper').on('show.bs.tooltip', function() {
      $(this).closest('.btn-share-outer-tooltip.tooltip-enabled').tooltip('show');
    });

    this._node.find('.btn-share-container .btn-share-wrapper').on('hide.bs.tooltip', function() {
      $(this).closest('.btn-share-outer-tooltip.tooltip-enabled').tooltip('hide');
    });

    this._node.find('.btn-share-outer-tooltip.tooltip-enabled').tooltip({
      placement: 'bottom',
      container: '.section-builder-panel',
      trigger: 'manual'
    });

    this._node.find('.btn-share-outer-tooltip.tooltip-enabled').on('inserted.bs.tooltip', function() {
      // this class is so we don't have the min-width of 200px for these buttons...
      $(this).data('bs.tooltip').$tip.addClass('custom-warning tooltip-bright');
    });

    this._initEvents();
  }

  _initEvents() {
    topic.subscribe('tpl-ready', this._onStoryReady.bind(this));
    topic.subscribe('builder-section-update', this._updateOverview.bind(this));
    topic.subscribe('story-navigated-section', this._onSectionNavigate.bind(this));
    topic.subscribe('builder-story-title-update', this._updateStoryTitle.bind(this));
    topic.subscribe('builder-story-update', this._updateSaveButtonStatus.bind(this));
    topic.subscribe('check-app-started', this._onStoryCheckStarted.bind(this));
    topic.subscribe('check-app-complete', this._onStoryCheckComplete.bind(this));

    this._node.find('.btn-settings').click(this._onSettings.bind(this));
    this._node.find('.btn-preview').click(this._onPreview.bind(this));
    this._node.find('.my-stories-link').click(this._onCheck.bind(this));
    this._node.find('.btn-save').click(this._onSave.bind(this));

    let appName = 'Story Map Cascade';
    let betaNoteString = builderI18n.builder.builderPanel.betaNote.replace(/\${APP_NAME}/g, appName);

    this._node.find('.beta-tooltip').tooltip({
      title: betaNoteString,
      placement: 'bottom',
      container: '.section-builder-panel'
    });

    this._node.find('.check-tooltip').tooltip({
      title: i18n.builder.builderPanel.mystoriestooltip,
      placement: 'right',
      container: '.section-builder-panel'
    });

    this._node.find('.my-stories-link').tooltip({
      container: '.btn-check'
    });
  }

  _onStoryReady() {
    this._initShareButtons();
    this._updateShareButtons();
    this._updatePreviewButton();
    this._updateCheckButton();
    this._updateOverview();
  }

  _onStoryCheckStarted() {
    //
    this._updateIssueStatusButton(null, false);
  }

  _onStoryCheckComplete(results) {
    this._updateIssueStatusButton(results, true);
    this._updateOverview();
  }

  //
  // Reflect story title
  //

  _updateStoryTitle() {
    var buttons = this._node.find('.builder-panel-tools .btn-save'),
        buttonsExceptSave = this._node.find('.builder-panel-tools .btn:not(.btn-save)'),
        storyTitle = app.Controller.getStoryTitle();

    buttons.toggleClass('disabled', ! storyTitle);

    if (! storyTitle) {
      buttons.tooltip({
        title: builderI18n.builder.builderPanel.addTitleNote,
        placement: 'right',
        container: '.section-builder-panel'
      });
    }
    else {
      // if we're in a "save failed" mode, we don't want to blow away the tooltip that says that on the save button... otherwise we blow away its tooltip
      if (this._saveFailed) {
        buttonsExceptSave.tooltip('destroy');
      }
      else {
        buttons.tooltip('destroy');
      }
    }

    this._updateShareButtons();
    this._updatePreviewButton();
    this._updateCheckButton();
  }

  //
  // Settings
  //

  _onSettings(e) {
    if ($(e.currentTarget).hasClass('disabled')) {
      return;
    }

    app.Controller.openSettings();
  }

  //
  // Share
  //

  _initShareButtons() {
    //
    // Find which share buttons to active
    //
    var isOrg = app.portal.isOrganization !== false,
        privileges = app.portal.getPortalUser().privileges || [],
        sharingLevel = app.data.appItem.item.access,
        itemControl = app.data.appItem.item.itemControl,
        enableOrg = isOrg && privileges.indexOf('portal:user:shareToOrg') > -1,
        enablePub = ! isOrg ||  privileges.indexOf('portal:user:shareToPublic') > -1,
        storyIsPrivate = sharingLevel == 'private' || sharingLevel == 'shared',
        storyIsOrg = sharingLevel == 'account',
        userIsOwner = app.data.appItem.item.owner == app.portal.getPortalUser().username;

    // TODO: to review with 4.2
    // Group with shared ownership and custom role with admin:update
    if (itemControl == 'update') {
      enableOrg = false;
      enablePub = false;
    }
    // TODO checking if the privilege is here directly would be enough if builder was not opening if user don't have proper update priv (only admin view all)
    else if (itemControl == 'admin' && ! userIsOwner) {
      enableOrg = privileges.indexOf('portal:admin:shareToOrg') > -1;
      enablePub = privileges.indexOf('portal:admin:shareToPublic') > -1;
    }

    // TODO: in some case the button may need to be disabled
    if (storyIsOrg) {
      enableOrg = true;
    }
    else if (! storyIsPrivate) {
      enablePub = true;
    }

    // TODO: tooltip when org has disabled sharing
    this._node.find('.btn-share-outer-tooltip[data-level="account"]').toggle(enableOrg);
    this._node.find('.btn-share-outer-tooltip[data-level="public"]').toggle(enablePub);

    this._node.find('.btn-share-wrapper').click(this._onChangeSharing.bind(this));
  }

  _onChangeSharing(e) {
    var sharingBtn = $(e.currentTarget);

    this._node.find('.btn-share-this._node').addClass('disabled');
    this._node.find('.btn-share-wrapper').removeClass('active');

    sharingBtn.addClass('sharing');

    this._shareApp({
      sharingLevel: sharingBtn.data('level')
    }).then(
      function() {
        this._updateShareButtons();
        this._updatePreviewButton();

        // Update status of Share dialog > sharing buttons
        app.Controller.renderHeader();
      }.bind(this),
      function() {
        this._updateShareButtons();
        this._updatePreviewButton();

        // Update status of Share dialog > sharing buttons
        app.Controller.renderHeader();
      }.bind(this)
    );
  }

  _updateShareButtons() {
    var sharingLevel = 'private';
    var isCreated = !! app.data.appItem.item.id;
    var shareBtn = this._node.find('.btn-share');

    shareBtn.toggleClass('disabled', ! isCreated);

    this._node.find('.btn-share-wrapper').removeClass('sharing');

    if (app.data.appItem.item && app.data.appItem.item.access && app.Controller.getStoryTitle()) {
      sharingLevel = app.data.appItem.item.access;

      // if a story is shared privately and in a group, we'll consider it shared privately.
      if (sharingLevel === 'shared') {
        sharingLevel = 'private';
      }

      this._node.find('.btn-share-container').removeClass('disabled');
      this._node.find('.btn-share-wrapper[data-level=' + sharingLevel + ']').addClass('active');
    }
    else {
      this._node.find('.btn-share-container').addClass('disabled');
    }
  }

  //
  // Preview
  //

  _updatePreviewButton() {
    var sharingLevel = app.data.appItem.item.access,
        isCreated = !! app.data.appItem.item.id,
        isShared = sharingLevel == 'account' || sharingLevel == 'public',
        previewBtn = this._node.find('.btn-preview');

    previewBtn.toggleClass('disabled', ! isCreated);

    if (isCreated && ! isShared) {
      previewBtn.tooltip({
        title: builderI18n.builder.builderPanel.notSharedNote,
        placement: 'right',
        container: '.section-builder-panel'
      });
    }
    else {
      previewBtn.tooltip('destroy');
    }
  }

  _onPreview(e) {
    if ($(e.currentTarget).hasClass('disabled')) {
      return;
    }

    window.open(
      app.Controller.getStoryURL() + '&preview',
      '_blank'
    );

    var oldFocus = window.onfocus || function() {};

    window.onfocus = function() {
      oldFocus();
      // not sure why, but it wouldn't do this without a settimeout
      setTimeout(function() {
        $(e.currentTarget).blur();
      }, 500);
      window.onfocus = oldFocus();
    };
  }

  //
  // Check
  //

  _updateCheckButton() {
    var isCreated = !! app.data.appItem.item.id,
        checkBtn = this._node.find('.btn-check');

    checkBtn.toggleClass('disabled', ! isCreated);
  }

  _onCheck(e) {
    if ($(e.currentTarget).hasClass('disabled')) {
      return;
    }

    window.open(
      BuilderHelper.getMyStoriesURL(),
      '_blank'
    );
  }

  //
  // Save
  //

  _updateSaveButtonStatus() {
    var saveBtn = this._node.find('.btn-save'),
        title = app.Controller.getStoryTitle();

    saveBtn.toggleClass('btn-bright', !! (title && app.builder.pendingChanges));
  }

  _onSave(e) {
    var btn = $(e.currentTarget);

    if (btn.hasClass('disabled')) {
      return;
    }

    btn
      .removeClass('saved')
      .addClass('saving disabled');

    btn.find('.btn-save-label').html(commonCoreI18n.commonCore.builderPanel.buttonSaving);

    this._saveApp();
  }

  saveSucceeded() {
    this._saveFailed = false;

    this._node.find('.btn-save')
      .removeClass('saving disabled')
      .addClass('saved');
    this._node.find('.btn-save-label').html(commonCoreI18n.commonCore.builderPanel.buttonSaved);

    this._node.find('.btn-save[data-toggle="tooltip"]').tooltip('destroy');

    setTimeout(() => {
      this._node.find('.btn-save')
        .removeClass('saved')
        .find('.btn-save-label').html(viewerI18n.viewer.common.save);
    }, 3500);

    this._updateSaveButtonStatus();
    this._updateShareButtons();
    this._updatePreviewButton();
    this._updateCheckButton();
  }

  saveFailed() {
    this._saveFailed = true;

    this._node.find('.btn-save')
      .removeClass('saving')
      .addClass('error');
    this._node.find('.btn-save-label').html(commonCoreI18n.commonCore.builderPanel.buttonError);

    this._node.find('.btn-save[data-toggle="tooltip"]').tooltip({
      trigger: 'manual',
      placement: 'right',
      container: '.section-builder-panel'
    });

    this._node.find('.btn-save[data-toggle="tooltip"]').on('inserted.bs.tooltip', function() {
      // selectively style only this tooltip by giving it a class
      $(this).data('bs.tooltip').$tip.addClass('tooltip-danger');
    });
    this._node.find('.btn-save[data-toggle="tooltip"]').tooltip('show');

    setTimeout(() => {
      this._node.find('.btn-save')
        .removeClass('error disabled')
        .find('.btn-save-label').html(viewerI18n.viewer.common.save);
    }, 3500);
  }

  //
  // Issue status button
  //
  _updateIssueStatusButton(status, checkComplete) {
    let btn = this._node.find('.btn-check');
    btn.removeClass('checking no-issues errors warnings');

    if (checkComplete) {
      // if there are errors, EVEN IF there are errors AND warnings, just show errors.
      if (status.errors.allItems.length) {
        btn.addClass('errors');
        let errorCount = 0;
        Object.keys(status.errors.byId).forEach(function(errorId) {
          let media = status.errors.byId[errorId].media;
          if (media && media.length) {
            errorCount += media.length;
          }
        });
        this._node.find('.issue-count').text(errorCount);
      }
      // if there are ONLY warnings, show warnings
      else if (status.warnings.allItems.length) {
        btn.addClass('warnings');
      }
      else {
        btn.addClass('no-issues');
      }
    }
    else {
      btn.addClass('checking');
    }
  }

  //
  // Overview
  //

  _updateOverview() {
    var storyOverview = app.Controller.getStoryOverview();

    if (! this._overviewPanel) {
      this._initOverviewPanel(storyOverview);
    }
    else {
      this._overviewPanel.updateItems(storyOverview);
    }
  }

  _onSectionNavigate(data) {
    if (this._overviewPanel) {
      this._overviewPanel.navigateTo(
        app.Controller.getSectionIndexById(data.index)
      );
    }
  }

  _initOverviewPanel(storyOverview) {
    this._overviewPanel = new OverviewPanel(this._node.find('.overview')[0], 'vertical', storyOverview, {
      selectItem: function(sectionId) {
        var sectionIndex = app.Controller.getSectionById(sectionId);
        app.Controller.navigateToSection({
          index: sectionIndex,
          animate: false
        });
      },

      duplicateItem: function(sectionId) {
        var sectionIndex = app.Controller.getSectionById(sectionId);

        app.Controller.duplicateSection({
          index: sectionIndex
        });
      },
      toggleHidden: function() {
        //
      },
      deleteItem: function(sectionId) {
        var sectionIndex = app.Controller.getSectionById(sectionId);
        app.Controller.deleteSection({
          index: sectionIndex
        });
      },

      organize: function(sectionsIds) {
        var sectionsIndexes = app.Controller.getSectionsIndexesByIds(sectionsIds);

        app.Controller.organizeSections(sectionsIndexes);
      }
    });
  }
}
