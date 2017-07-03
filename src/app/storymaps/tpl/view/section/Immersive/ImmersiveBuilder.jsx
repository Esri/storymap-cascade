import Immersive from './Immersive';
import ImmersiveBuilderPanel from './ImmersiveBuilderPanel';
import ImmersiveTitleConfig from './ImmersiveTitleConfig';
import SectionCommon from 'storymaps/tpl/view/section/Common';
import UndoNotification from 'storymaps-react/tpl/builder/notification/Undo';
import AddMenu from '../builder/AddMenu';
import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

import {} from 'lib-build/less!./ImmersiveBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class ImmersiveBuilder extends Immersive {

  constructor(section, media) {
    super(section);

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['appearance', 'background', 'manage', 'alternate'];
    this.MEDIA_BUILDER_TABS_PANEL = ['appearance', 'manage', 'alternate'];

    this._latestOnScrollParams = null;
    this._currentScrollPosition = null;
    this._builderPanel = null;
    this._builderPanelNode = null;

    this._initialMedia = media;
    this._titleConfig = null;
    this.scanResults = {
      hasErrors: false,
      hasWarnings: false
    };

    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
  }

  render() {
    var views = this._section.views;
    var defaultTransition = 'fade-fast';

    // Creating a new section
    if (! views || ! views.length) {
      var media = this._initialMedia || { type: 'empty', empty: 'empty' };

      this._section.views = [{
        transition: defaultTransition,
        background: SectionCommon.initMedia({
          media: media
        }).serialize(false),
        foreground: {
          panels: [
            app.ui.ImmersivePanelFactory.createInstance(null, defaultTransition).serialize(false)
          ],
          title: {
            style: {
              shadow: false,
              text: 'dark',
              background: 'light'
            }
          }
        }
      }];
    }

    // if there's an existing view but without a title style
    if (!this._section.views[0].foreground.title.style) {
      this._section.views[0].foreground.title.style = {
        shadow: true,
        text: 'light',
        background: null
      };
    }

    this._titleConfig = new ImmersiveTitleConfig({
      applyConfigCallback: this._onTitleConfigChange.bind(this),
      style: this._section.views[0].foreground && this._section.views[0].foreground.title ? this._section.views[0].foreground.title.style : null
    });

    return super.render({
      titleConfigPanel: this._titleConfig.render()
    });
  }

  postCreate(node) {
    super.postCreate(node);

    //
    // Builder panel
    //

    this._builderPanelNode = this._node.find('.builder-panel');
    this._builderPanel = new ImmersiveBuilderPanel({
      container: this._builderPanelNode,
      selectView: this._selectView.bind(this),
      addView: this._addEmptyView.bind(this),
      deleteView: this._deleteView.bind(this),
      duplicateView: this._duplicateView.bind(this),
      updateTransition: this._updateTransition.bind(this),
      organize: this._organizeByIds.bind(this)
    });

    //
    // View title
    //

    this._node.find('.background-title h2')
      .attr('contenteditable', true)
      .attr('placeholder', i18n.builder.title.placeholder)
      .on('blur keyup', function() {
        this.serialize(false);
        this._onContentChange();
      }.bind(this))
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.background-title h2').html($('<div>' + this._node.find('.background-title h2').text()).text());
          this.serialize(false);
          this._onContentChange();
        }.bind(this), 0);
      }.bind(this))
      .keydown(function(e) {
        // Do not allow enter key
        if (e.keyCode === 13) {
          // If pressing enter insert <br> instead of default behavior that is div
          //document.execCommand('insertHTML', false, '<br><br>');
          return false;
        }

        // Prevent ctrl + B/I/U or ctrl + b/i/u
        if(e.ctrlKey || e.metaKey) {
          var key = e.keyCode;
          if (key == 66 || key == 98 || key == 73 || key == 105 || key == 85 || key == 117) {
            return false;
          }
        }
      });

    //
    // Add section menu
    //

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
    });

    this._titleConfig.postCreate({
      container: this._node.find('.background-title-wrapper .builder-config-panel-wrapper'),
      sectionOptions: this._section.views[0].foreground ? this._section.views[0].foreground.title : null
    });

    this._node.find('.background-title-wrapper .builder-config-panel-btn').on('click', event => {
      this._titleConfig.toggleBuilderPanel($(event.currentTarget));
    });

    this._updateBuilderPanel();
  }

  update() {
    // In the case user edit location on the second view of a consecutive map
    //  the transition will switch to None through super.update() but the swipe will hang
    //  so force a reset
    //  TODO: should call performAction?
    let activeMedia = this._medias[this._currentViewIndex - 1];
    if (activeMedia && activeMedia.type == 'webmap') {
      activeMedia.resetSwipe();
    }

    super.update();
    this._updateMapHomeButtons();
    this._updateBuilderPanel();
    this._onContentChange();
  }

  _onTitleConfigChange() {
    this._onContentChange();
    this.update();
  }

  onScroll(params) {
    this._latestOnScrollParams = params;
    this._currentScrollPosition = params.currentSectionScroll;

    var viewIndexBeforeUpdate = this._currentViewIndex;

    super.onScroll(params);

    if (viewIndexBeforeUpdate != this._currentViewIndex) {
      this._builderPanel.selectView(this._currentViewIndex - 1);

      const panel = this._panels && this._panels.length ? this._panels[viewIndexBeforeUpdate - 1] : null;
      panel && panel.closeConfigPanel();

      // Hide/show the panels depending on background configuration for that view
      if (app.isInBuilder) {
        let media = this._medias[this._currentViewIndex - 1];
        if (media) {
          this._node.toggleClass('hide-foreground', media.isConfigActive());
          this._node.find('.media-media').removeClass('appearance-invite');
        }
      }
    }
  }

  navigateToViewByIndex(params = {}) {
    super.navigateToViewByIndex(params);
    this._builderPanel.selectView(params.index);
  }

  getPreviewThumbnail() {
    if(this._medias.length) {
      return this._medias[0].getPreviewThumbnail();
    }

    return '';
  }

  getPreviewText() {
    var text = '';

    if (this._node.find('.background-title h2').text()) {
      return this._node.find('.background-title h2').text();
    }

    if (this._panels.length) {
      return this._panels[0].getPreviewText();
    }

    return text;
  }

  getPreviewIcon() {
    return 'glyphicon glyphicon-random';
  }

  onUpdatePanelLayout(layout) {
    this._node
      .removeClass('layout-scroll-full layout-scroll-partial')
      .addClass('layout-' + layout);

    this._node.find('.imm-panel').css({
      opacity: layout == 'scroll-full' ? 'inherit' : 0,
      transform: ''
    });

    if (layout === 'scroll-full') {
      this._node.find('.imm-panel').css('visibility', 'visible');
    }

    for(let i = 0; i < this._panels.length; i++) {
      let panel = this._panels[i];

      panel.layout = layout;

      if (i == this._currentViewIndex - 1) {
        panel.updatePosition({
          currentSectionScroll: this._currentScrollPosition,
          panelIndex: i
        });
      }

    }
  }

  focus() {
    setTimeout(function() {
      if (this._panels[0]) {
        this._panels[0].focus();
      }
    }.bind(this), 50);
  }

  serialize(includeInstanceID) {
    var views = [];

    for (var i=0; i < this._medias.length; i++) {
      var media = this._medias[i],
          panel = this._panels[i],
          transition = this._transitions[i];

      views.push({
        transition: transition,
        background: media.serialize(includeInstanceID),
        foreground: {
          panels: [
            panel.serialize(includeInstanceID)
          ]
        }
      });

      // Title
      if (i === 0) {
        views[0].foreground.title = {
          value: $('<div>' + this._node.find('.background-title h2').text() + '</div>').text(),
          global: true,
          style: this._titleConfig.getStyle()
        };
      }
    }

    this._section.views = views;

    return lang.clone(this._section);
  }

  addContextSpecificIssues(scannedMedia) {
    // loop thru and see if they have alts. if not, they're in trouble!
    // get all of the view backgrounds
    //
    for (let i = 0; i < this._medias.length; i++) {
      const viewMedia = this._medias[i];
      const panel = this._panels[i];

      panel.addContextSpecificIssues(scannedMedia);

      const instanceID = viewMedia._instanceID;

      const media = scannedMedia[instanceID];

      if (media) {
        if (!media.alternateMedia) {
          if (media.mediaType === 'video') {
            // add an issue here.
            media.scanResult.warnings.push('content/noAlternateMedia');
          }
          else if (media.mediaType === 'scene') {
            // add an issue here.
            media.scanResult.warnings.push('content/noAlternateMedia');
          }
          else if (media.mediaType === 'webpage') {
            // add an issue here.
            media.scanResult.warnings.push('content/noAlternateMedia');
          }
        }
      }
    }
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }

  _onContentChange() {
    this.serialize(false);
    topic.publish('builder-section-update');
  }

  //
  // Refresh builder panel
  //

  _updateBuilderPanel() {
    if (! this._builderPanel) {
      return;
    }

    var transitionsInfos = [];

    for (var i = 0; i < this._medias.length; i++) {
      transitionsInfos.push(this._getTransitionInfo(i));
    }

    this._builderPanel.update({
      medias: this._medias,
      panels: this._panels,
      transitions: this._transitions,
      transitionsInfos: transitionsInfos
    });
  }

  //
  // Background management
  //

  _onToggleMediaConfig() {
    this._node.toggleClass('hide-foreground');
  }

  _onMediaConfigAction(params = {}) {
    if (!params.action || (!params.media && params.action !== 'alternate-media-add')) {
      return;
    }

    if (params.action == 'swap' || params.action === 'alternate-media-swap' || params.action === 'alternate-media-add') {
      const mediaIsEmpty = params.action === 'alternate-media-add' || params.media.serialize(false).type == 'empty';
      const isAlternate = params.action.indexOf('alternate-') !== -1;
      const authorizedMedia = isAlternate ? ['image'] : ['image', 'video', 'webpage', 'webmap', 'webscene'];

      app.builder.mediaPicker.open({
        mode: mediaIsEmpty ? 'add' : 'edit',
        media: mediaIsEmpty ? null : params.media.serialize(false),
        authorizedMedia: authorizedMedia
      }).then(
        function(newMedia) {
          if (isAlternate) {
            // check media, then...
            SectionCommon.onEditMediaAlternate({
              mainMedia: params.mainMedia,
              newMediaJSON: newMedia,
              oldMedia: params.media,
              sectionType: 'immersive'
            });
            this.update();
          }
          else {
            if (params.media.type != 'empty') {
              this._onToggleMediaConfig();
            }

            this._onEditMedia(params.media, newMedia);
          }
        }.bind(this),
        function() {
          //
        }
      );
    }

    else if (params.action === 'alternate-media-remove') {
      SectionCommon.onRemoveMediaAlternate({
        mainMedia: params.mainMedia,
        media: params.media,
        sectionType: 'immersive'
      });
      this.update();
    }
  }

  _onMediaConfigChange() {
    this.update();
  }

  // TODO: deprecate for _onToggleMediaConfig ???
  _onEditMedia(media, newMediaJSON) {
    var mediaIndex = this._medias.indexOf(media),
        newMedia = SectionCommon.initMedia({
          media: newMediaJSON,
          mediaCache: this._mediaCache,
          isNewMedia: true
        });

    var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(newMediaJSON);
    if (! isMediaAlreadyLoaded) {
      media.getNode().after(SectionCommon.renderBackground({
        media: newMedia,
        transition: this._transitions[mediaIndex]
      }));
    }

    newMedia.postCreate({
      container: this._node,
      delayBuilderInit: false,
      onToggleMediaConfig: this._onToggleMediaConfig.bind(this),
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      // TODO: for video, need to goes away
      sectionType: 'immersive'
    });

    if (! isMediaAlreadyLoaded) {
      newMedia.load({
        isBuilderAdd: true,
        isUniqueInSection: true
      });
    }

    this._medias[mediaIndex] = newMedia;

    // see if the node is used by another media in this immersive... if so, don't destroy it.
    let firstMatchIndex = this._medias.findIndex(item => {
      return item.getNode().is(media.getNode());
    });

    // if there was no match found, remove the DOM node.
    if (firstMatchIndex === -1) {
      media.destroy();
    }

    // do an issue check -- do this before this.update()
    SectionCommon.checkMedia(newMediaJSON);

    this.update();
    // make the view active
    newMedia.getNode().addClass('active');
    // if the view is a reused one from earlier, make sure it's still shown (make any views after that un-active).
    newMedia.getNode().nextAll().removeClass('active');
  }

  //
  // Views management
  //

  _selectView(index) {
    if (index != this._currentViewIndex - 1) {
      this.navigateToViewByIndex({
        index: index,
        animate: false
      });
    }
  }

  _addEmptyView(index) {
    let defaultTransition = 'fade-fast';

    //
    // Media
    //

    var media = SectionCommon.initMedia({
      media: {
        type: 'empty',
        empty: 'empty'
      }
    });

    this._medias.splice(index + 1, 0, media);
    this._medias[index].getNode().after(SectionCommon.renderBackground({
      media: media,
      transition: defaultTransition
    }));
    media.postCreate({
      container: this._node,
      delayBuilderInit: true,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      // TODO: for video, need to goes away
      sectionType: 'immersive'
    });

    //
    // Panel
    //

    var panel = app.ui.ImmersivePanelFactory.duplicateWithoutContent(
      this._panels[index] ? this._panels[index].serialize(false) : null,
      defaultTransition,
      {
        onUpdateLayout: this.onUpdatePanelLayout.bind(this),
        onChange: this._onContentChange.bind(this)
      }
    );

    this._panels.splice(index + 1, 0, panel);
    this._node.find('.foreground .imm-panel').eq(index).after(panel.render());
    // TODO: should work like this (TODO: also do the same for media)
    //panel.postCreate(this._node.find('.foreground .imm-panel').eq(index + 1));
    panel.postCreate({
      container: this._node,
      mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
    });

    panel.focus();

    //
    // Transition
    //

    this._transitions.splice(index + 1, 0, defaultTransition);

    //
    // Navigate to the new view
    //

    this.update();

    let currentViewIndexBeforeReset = this._currentViewIndex;
    this._currentViewIndex = -1;

    this.navigateToViewByIndex({
      index: index + 1,
      animate: false
    });

    // If adding a view before active view this is necessary
    //  as the new view is at the same position than current view
    //  the onScroll event may never get to Immersive otherwise
    if (index + 1 == currentViewIndexBeforeReset - 1) {
      app.ui.update({
        forceUpdate: true
      });
    }
  }

  _addView(params = {}) {
    var index = params.index,
        media = params.media,
        panel = params.panel,
        transition = params.transition;

    if (index === undefined || ! media || ! panel || ! transition) {
      return;
    }

    //
    // Media
    //

    media = SectionCommon.initMedia({
      media: media,
      mediaCache: this._mediaCache
    });

    var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(media.serialize(false));
    if (! isMediaAlreadyLoaded) {
      if (index === 0) {
        this._medias[0].getNode().before(SectionCommon.renderBackground({
          media: media,
          transition: transition
        }));
      }
      else {
        this._medias[index - 1].getNode().after(SectionCommon.renderBackground({
          media: media,
          transition: transition
        }));
      }
    }

    this._medias.splice(index, 0, media);

    media.postCreate({
      container: this._node,
      delayBuilderInit: false,
      onToggleMediaConfig: this._onToggleMediaConfig.bind(this),
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      // TODO: for video, need to goes away
      sectionType: 'immersive'
    });

    if (!isMediaAlreadyLoaded) {
      this.loadMediaItem(media);
    }

    //
    // Panel
    //

    panel = app.ui.ImmersivePanelFactory.createInstance(
      panel,
      transition,
      {
        onUpdateLayout: this.onUpdatePanelLayout.bind(this),
        onChange: this._onContentChange.bind(this)
      }
    );
    this._panels.splice(index, 0, panel);

    if (index === 0) {
      this._node.find('.foreground .imm-panel').eq(0).before(panel.render());
    }
    else {
      this._node.find('.foreground .imm-panel').eq(index - 1).after(panel.render());
    }

    // TODO: should work like this (TODO: also do the same for media)
    //panel.postCreate(this._node.find('.foreground .imm-panel').eq(index + 1));
    panel.postCreate({
      container: this._node,
      mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
    });

    panel.load();

    //
    // Transition
    //

    this._transitions.splice(index, 0, transition);

    //
    // Navigate to the new view
    //

    // do an issue check
    SectionCommon.checkMedia(params.media);

    this.update();

    // if the first view, make the views after it un-active.
    if (index === 0) {
      this._medias[0].getNode().nextAll().removeClass('active');
    }

    this.navigateToViewByIndex({
      index: index,
      animate: false
    });
  }

  _deleteView(index) {
    if (this._medias.length === 1) {
      app.Controller.deleteActiveSection();
      return;
    }

    var undoData = {
      index: index,
      panel: this._panels[index].serialize(false),
      media: this._medias[index].serialize(false),
      transition: this._transitions[index]
    };

    if (this.isMediaUniqueInSection(this._medias[index].serialize(false))) {
      this._node.find('.background').eq(index).remove();
    }
    this._node.find('.imm-panel').eq(index).remove();

    this._panels.splice(index, 1);
    this._medias.splice(index, 1);
    this._transitions.splice(index, 1);

    // do an issue check
    topic.publish('builder-should-check-story');

    this.update();

    // Deleting current view
    if (index == this._currentViewIndex - 1) {
      if (index > 0) {
        this.navigateToViewByIndex({
          index: index - 1,
          animate: false
        });
      }
      else if (this._medias.length) {
        this.navigateToViewByIndex({
          index: index,
          animate: false
        });
      }
    }
    // Delete a view before the actual one, need to navigate to
    //  the actual section as the scroll position change
    else if (index < this._currentViewIndex - 1) {
      let currentViewIndexBeforeReset = this._currentViewIndex;

      this.navigateToViewByIndex({
        index: currentViewIndexBeforeReset - 2,
        animate: false
      });
    }

    // As the new view is at the same position than current view
    //  the onScroll event may never get to Immersive otherwise
    this._currentViewIndex = -1;
    app.ui.update({
      forceUpdate: true
    });

    //
    // Undo
    //

    var undoNotification = new UndoNotification({
      container: this._node,
      label: i18n.builder.controller.viewDelete,
      positionTop: 70
    });

    undoNotification.display().then(
      function() {
        this._addView(undoData);
      }.bind(this),
      function() {
        //
      }
    );
  }

  _duplicateView(index) {
    let transition = this._transitions[index];

    //
    // Media
    //

    var newMedia = app.ui.MediaFactory.createInstance({
      mediaJSON: this._medias[index].serialize(false),
      mediaCache: this._mediaCache
    });
    this._medias.splice(index + 1, 0, newMedia);

    var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(newMedia.serialize(false));
    if (! isMediaAlreadyLoaded) {
      if (newMedia.type == 'image') {
        transition = 'none';
      }

      this._medias[index].getNode().after(SectionCommon.renderBackground({
        media: newMedia,
        transition: transition
      }));
    }

    newMedia.postCreate({
      container: this._node,
      delayBuilderInit: false,
      onToggleMediaConfig: this._onToggleMediaConfig.bind(this),
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      // TODO: for video, need to goes away
      sectionType: 'immersive'
    });

    //
    // Panel
    //

    var newPanel = app.ui.ImmersivePanelFactory.duplicateWithoutContent(
      this._panels[index].serialize(false),
      transition,
      {
        onUpdateLayout: this.onUpdatePanelLayout.bind(this),
        onChange: this._onContentChange.bind(this)
      }
    );

    this._panels.splice(index + 1, 0, newPanel);
    this._node.find('.foreground .imm-panel').eq(index).after(newPanel.render());
    // TODO: should work like this (TODO: also do the same for media)
    //panel.postCreate(this._node.find('.foreground .imm-panel').eq(index + 1));
    newPanel.postCreate({
      container: this._node,
      mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
    });

    newPanel.focus();

    //
    // Transition
    //

    this._transitions.splice(index + 1, 0, transition);

    // do an issue check
    topic.publish('builder-should-check-story');

    //
    // Navigate to the new view
    //

    this.update();

    let currentViewIndexBeforeReset = this._currentViewIndex;
    this._currentViewIndex = -1;

    this.navigateToViewByIndex({
      index: index + 1,
      animate: false
    });

    // If duplicating a view before active view this is necessary
    //  as the new view is at the same position than current view
    //  the onScroll event may never get to Immersive otherwise
    if (index + 1 == currentViewIndexBeforeReset - 1) {
      app.ui.update({
        forceUpdate: true
      });
    }
  }

  _updateMapHomeButtons() {
    // we need to hide the home button if the map is reused in the section
    for (let media of this._medias) {
      if (media.type === 'webmap') {
        if (this.isMediaUniqueInSection(media.serialize(false))) {
          media.showHomeButton();
        }
        else {
          media.hideHomeButton();
        }
      }
    }
  }

  //
  // Transition
  //

  _updateTransition(index, transitionType) {
    // change the class name of the panel that correlates to the transition type
    if (this._transitions[index] && transitionType) {
      let panelClassPrefix = 'view-transition-';
      this._node.find('.imm-panel').eq(index).removeClass(panelClassPrefix + this._transitions[index])
        .addClass(panelClassPrefix + transitionType);
    }

    if (this._currentViewIndex - 1 == index) {
      this._applyViewTransition({
        media: this._medias[index],
        prevTransition: this._transitions[index],
        newTransition: transitionType
      });
    }

    this._transitions[index] = transitionType;

    this.update();
    this.onScroll(this._latestOnScrollParams);
  }

  _applyViewTransition(params = {}) {
    if (! params.media) {
      return;
    }

    let backgroundNode = params.media.getNode();

    if (params.prevTransition && params.newTransition) {
      backgroundNode
        .css('clip', '')
        .removeClass('transition-' + params.prevTransition);

      // The update is performed differently depending on the target transition
      //  to give user a preview feel
      if (params.newTransition == 'fade-slow' || params.newTransition == 'fade-fast') {
        this._node.addClass('disable-transition');

        backgroundNode
          .removeClass('active')
          .addClass('transition-' + params.newTransition);

        setTimeout(function() {
          this._node.removeClass('disable-transition');
          backgroundNode.addClass('active');
        }.bind(this), 10);
      }
      else {
        backgroundNode.addClass('transition-' + params.newTransition);
      }
    }
    else {
      console.error('TODO');
    }
  }

  //
  // Organize
  //

  _organizeByIds(viewIds) {
    var viewIndexes = this._getViewsIndexesByIds(viewIds);
    this._organizeByIndexes(viewIndexes, true);
  }

  _organizeByIndexes(viewIndexes, showUndo) {
    //
    // Check if the specified new order require a change
    //

    var newViewsAlreadySorted = true;

    for (let i = 0; i < viewIndexes.length - 1; i++) {
      if (viewIndexes[i] > viewIndexes[i + 1]) {
        newViewsAlreadySorted = false;
        break;
      }
    }

    if (newViewsAlreadySorted) {
      return;
    }

    var newMedias = [],
        newPanels = [],
        newTransitions = [],
        newCurrentViewIndex = -1;

    var backupMedias = [],
        backupPanels = [],
        backupTransitions = [],
        currentIndexBackup = this._currentViewIndex;

    for (let i=0; i < this._medias.length; i++) {
      backupMedias[i] = this._medias[i];
      backupPanels[i] = this._panels[i];
      backupTransitions[i] = this._transitions[i];
    }

    // Reorder the sections object
    for (let i = 0 ; i < viewIndexes.length ; i++) {
      let viewIndex = viewIndexes[i];

      newMedias.push(this._medias[viewIndex]);
      newPanels.push(this._panels[viewIndex]);
      newTransitions.push(this._transitions[viewIndex]);

      if (viewIndex == this._currentViewIndex - 1) {
        newCurrentViewIndex = i;
      }
    }

    // Persist
    this._medias = newMedias;
    this._panels = newPanels;
    this._transitions = newTransitions;

    // Reorder the DOM for panels
    for (let viewIndex = this._panels.length - 1; viewIndex >= 0; viewIndex--) {
      var panel = this._panels[viewIndex];
      this._node.find('.foreground').prepend(panel._node);
    }

    this.update();

    // Navigate to new position of current view
    if (newCurrentViewIndex != -1) {
      setTimeout(function() {
        this.navigateToViewByIndex({
          index: newCurrentViewIndex,
          animate: false
        });
      }.bind(this), 50);
    }

    //
    // Undo
    //

    if (showUndo) {
      var undoNotification = new UndoNotification({
        container: this._node,
        label: i18n.builder.controller.immersiveOrganize,
        positionTop: 70
      });

      undoNotification.display().then(
        function() {
          // Sett builder/Controller this is not working
          //this._organizeByIndexes(viewIndexes, false);

          this._medias = backupMedias;
          this._panels = backupPanels;
          this._transitions = backupTransitions;

          // Reorder the DOM for panels
          for (let viewIndex = this._panels.length - 1; viewIndex >= 0; viewIndex--) {
            var panel = this._panels[viewIndex];
            this._node.find('.foreground').prepend(panel._node);
          }

          this.update();

          // Navigate to new position of current view
          if (currentIndexBackup != this._currentViewIndex) {
            setTimeout(function() {
              this.navigateToViewByIndex({
                index: currentIndexBackup - 1,
                animate: false
              });
            }.bind(this), 50);
          }

        }.bind(this),
        function() {
          //
        }
      );
    }
  }

  _getViewsIndexesByIds(viewsIds) {
    var viewsIndexes = [];

    for (var viewId of viewsIds) {
      for (var viewIndex = 0; viewIndex < this._panels.length; viewIndex++) {
        var panel = this._panels[viewIndex];
        if (panel.id == viewId) {
          viewsIndexes.push(viewIndex);
        }
      }
    }

    return viewsIndexes;
  }

  getScanResults() {
    return this.scanResults;
  }

  setScanResults(hasErrors, hasWarnings) {
    Object.assign(this.scanResults, {hasErrors}, {hasWarnings});
  }
}
