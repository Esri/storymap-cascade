import Immersive from './Immersive';
import ImmersiveBuilderPanel from './ImmersiveBuilderPanel';
import SectionCommon from 'storymaps/tpl/view/section/Common';
import UndoNotification from 'storymaps-react/tpl/builder/notification/Undo';
import AddMenu from '../builder/AddMenu';
import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

import {} from 'lib-build/less!./ImmersiveBuilder';

export default class ImmersiveBuilder extends Immersive {

  constructor(section, media) {
    super(section);

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['appearance', 'manage'];
    this.MEDIA_BUILDER_TABS_PANEL = ['appearance', 'manage'];

    this._latestOnScrollParams = null;
    this._currentScrollPosition = null;
    this._builderPanel = null;
    this._builderPanelNode = null;

    this._initialMedia = media;

    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
  }

  render() {
    var views = this._section.views;

    // Creating a new section
    if (! views || ! views.length) {
      var media = this._initialMedia || { type: 'empty', empty: 'empty' };

      this._section.views = [{
        transition: 'fade-fast',
        background: SectionCommon.initMedia(media).serialize(),
        foreground: {
          panels: [
            app.ui.ImmersivePanelFactory.createInstance().serialize()
          ]
        }
      }];
    }

    return super.render();
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
      .attr('placeholder', 'Enter a title...')
      .on('blur keyup', function() {
        this.serialize();
        this._onContentChange();
      }.bind(this))
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.background-title h2').html(this._node.find('.background-title h2').text());
          this.serialize();
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
      });

    //
    // Add section menu
    //

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
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
    this._updateBuilderPanel();
    this._onContentChange();
  }

  onScroll(params) {
    this._latestOnScrollParams = params;
    this._currentScrollPosition = params.currentSectionScroll;

    var viewIndexBeforeUpdate = this._currentViewIndex;

    super.onScroll(params);

    if (viewIndexBeforeUpdate != this._currentViewIndex) {
      this._builderPanel.selectView(this._currentViewIndex - 1);

      // Hide/show the panels depending on background configuration for that view
      if (app.isInBuilder) {
        let media = this._medias[this._currentViewIndex - 1];
        if (media) {
          this._node.toggleClass('hide-foreground', media.isConfigActive());
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

    for(let i = 0; i < this._panels.length; i++) {
      let panel = this._panels[i];

      panel.layout = layout;

      if (i == this._currentViewIndex - 1) {
        panel.updatePosition({
          currentSectionScroll: this._currentScrollPosition
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

  serialize() {
    var views = [];

    for (var i=0; i < this._medias.length; i++) {
      var media = this._medias[i],
          panel = this._panels[i],
          transition = this._transitions[i];

      views.push({
        transition: transition,
        background: media.serialize(),
        foreground: {
          panels: [
            panel.serialize()
          ]
        }
      });

      // Title
      if (i === 0) {
        views[0].foreground.title = {
          value: this._node.find('.background-title h2').text(),
          global: true
        };
      }
    }

    this._section.views = views;

    return lang.clone(this._section);
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }

  _onContentChange() {
    this.serialize();
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
    if (! params.action || ! params.media) {
      return;
    }

    if (params.action == 'swap') {
      app.builder.mediaPicker.open({
        mode: 'add'
      }).then(
        function(newMedia) {
          if (params.media.type != 'empty') {
            this._onToggleMediaConfig();
          }

          this._onEditMedia(params.media, newMedia);
        }.bind(this),
        function() {
          //
        }
      );
    }
  }

  _onMediaConfigChange() {
    this.update();
  }

  // TODO: deprecate for _onToggleMediaConfig ???
  _onEditMedia(media, newMediaJSON) {
    console.log(media, newMediaJSON);

    var mediaIndex = this._medias.indexOf(media),
        newMedia = SectionCommon.initMedia(newMediaJSON, this._mediaCache);

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
        isBuilderAdd: true
      });
    }

    media.destroy();

    this._medias[mediaIndex] = newMedia;

    this.update();
    newMedia.getNode().addClass('active');
  }

  //
  // Views management
  //

  _selectView(index) {
    console.log('selectView:', index);

    if (index != this._currentViewIndex - 1) {
      this.navigateToViewByIndex({
        index: index,
        animate: false
      });
    }
  }

  _addEmptyView(index) {
    console.log('addEmptyView:', index);

    let defaultTransition = 'fade-fast';

    //
    // Media
    //

    var media = SectionCommon.initMedia({
      type: 'empty',
      empty: 'empty'
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
      this._panels[index] ? this._panels[index].serialize() : null,
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
    console.log('addView:', params);

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

    media = SectionCommon.initMedia(media, this._mediaCache);
    this._medias.splice(index, 0, media);

    var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(media.serialize());
    if (! isMediaAlreadyLoaded) {
      this._medias[index - 1].getNode().after(SectionCommon.renderBackground({
        media: media,
        transition: transition
      }));
    }

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

    //
    // Panel
    //

    panel = app.ui.ImmersivePanelFactory.createInstance(
      panel,
      {
        onUpdateLayout: this.onUpdatePanelLayout.bind(this),
        onChange: this._onContentChange.bind(this)
      }
    );
    this._panels.splice(index, 0, panel);
    this._node.find('.foreground .imm-panel').eq(index - 1).after(panel.render());
    // TODO: should work like this (TODO: also do the same for media)
    //panel.postCreate(this._node.find('.foreground .imm-panel').eq(index + 1));
    panel.postCreate({
      container: this._node,
      mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
    });

    //
    // Transition
    //

    this._transitions.splice(index + 1, 0, transition);

    //
    // Navigate to the new view
    //

    this.update();
    this.navigateToViewByIndex({
      index: index + 1,
      animate: false
    });
  }

  _deleteView(index) {
    console.log('deleteView:', index);

    if (this._medias.length === 1) {
      app.Controller.deleteActiveSection();
      return;
    }

    var undoData = {
      index: index,
      panel: this._panels[index].serialize(),
      media: this._medias[index].serialize(),
      transition: this._transitions[index]
    };

    if (this.isMediaUniqueInSection(this._medias[index].serialize())) {
      this._node.find('.background').eq(index).remove();
    }
    this._node.find('.imm-panel').eq(index).remove();

    this._panels.splice(index, 1);
    this._medias.splice(index, 1);
    this._transitions.splice(index, 1);

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
      label: 'You deleted a view', // TODO
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
    console.log('duplicateView:', index);

    //
    // Media
    //

    var newMedia = app.ui.MediaFactory.createInstance(
      this._medias[index].serialize(),
      this._mediaCache
    );
    this._medias.splice(index + 1, 0, newMedia);

    var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(newMedia.serialize());
    if (! isMediaAlreadyLoaded) {
      this._medias[index].getNode().after(SectionCommon.renderBackground({
        media: newMedia,
        transition: this._transitions[index]
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
      this._panels[index].serialize(),
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

    this._transitions.splice(index + 1, 0, this._transitions[index]);

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

  //
  // Transition
  //

  _updateTransition(index, transitionType) {
    console.log('updateTransition:', index, transitionType);

    this._applyViewTransition({
      media: this._medias[index],
      prevTransition: this._transitions[index],
      newTransition: transitionType
    });

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
    console.log('Organize:', viewIndexes);

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
        label: 'You organized the views', // TODO
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
}
