import SectionCommon from 'storymaps-react/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';
import Viewport from 'storymaps-react/tpl/utils/Viewport';

import viewTpl from 'lib-build/hbars!./Immersive';
import {} from 'lib-build/less!./Immersive';

/*
var CONFIG = {
  backgroundMedia: ['image', 'video', 'color', 'webscene', 'webpage']
};
*/

const BUILDER_PANEL_HEIGHT = 125;

export default class Immersive {
  constructor(section) {
    this.type = 'immersive';
    this.id = UIUtils.getUID();

    this._section = section;
    this._section.options = this._section.options || {};

    this._nbViews = 0;
    this._isLoaded = false;
    this._isActive = false;
    this._currentViewIndex = -1;
    this._isNavigatingAway = false;
    this._currentViewScrollPosition = -1;
    this._currentViewNode = null;
    this._swipeTransitionExtrasNode = null;
    this._previousMedia = null;

    // An immersive section is a series of view
    // There is no specific view object, instead we have
    //  - an array of media => background of each view
    //  - an array of panel => foreground of each view
    //  - an array of transitions
    // When a media is reused accross multiple views, different object are created
    //   and hold configuration specific to each view ;
    //   the media is only rendered once and that's decided here
    // TODO: Should there be a view object? Sounds like it would make part of builder easier
    //  But it won't be as convenient to know if a media is used across multiple views
    this._medias = [];
    this._panels = [];
    this._transitions = [];

    // Media cache - a media only get loaded once per section
    this._mediaCache = {};
  }

  render(params) {
    var views = this._section.views,
        options = this._section.options;

    views = views || [];
    options = options || {};

    this._nbViews = views.length;

    var config = [],
        title = '',
        credits = '',
        background = '',
        foreground = '';

    /*
     * Options
     */

    if (options.style) {
      config.push(options.style);
    }

    /* from now we can't mix scrolling type in a section */
    if (views.length && views[0].foreground.panels && views[0].foreground.panels[0]) {
      config.push('layout-' + views[0].foreground.panels[0].layout);
    }

    if (options.events) {
      config.push('events-' + options.events);
    }

    if (options['events-btn']) {
      config.push('events-' + options['events-btn']);
    }

    /* hack for alternate content */
    if (UIUtils.isMobileBrowser() && options['events-btn']) {
      this._nbViews = 1.2;
    }

    //
    // Title and credits
    //

    if (views.length && views[0].foreground.title && views[0].foreground.title.value) {
      title = views[0].foreground.title.value;
    }

    if (options.credits) {
      credits = options.credits;
    }

    for (let view of views) {
      //
      // Background
      //

      var isMediaAlreadyLoaded = this.isMediaAlreadyLoaded(view.background);

      // A new media is created for every view even if the media is used multiple times
      // This allow builder to modify it's option easily
      var media = SectionCommon.initMedia({
        media: view.background,
        mediaCache: this._mediaCache
      });

      // But a media is rendered only once per section
      if (! isMediaAlreadyLoaded) {
        background += SectionCommon.renderBackground({
          media: media,
          transition: view.transition,
          sectionType: 'immersive'
        });
      }

      this._medias.push(media);

      //
      // Foreground
      //

      var panelJSON = view.foreground.panels ? view.foreground.panels[0] : null;

      if (panelJSON) {
        var panel = app.ui.ImmersivePanelFactory.createInstance(
          panelJSON,
          view.transition,
          {
            onUpdateLayout: app.isInBuilder ? this.onUpdatePanelLayout.bind(this) : null,
            onChange: app.isInBuilder ? this._onContentChange.bind(this) : null
          }
        );
        this._panels.push(panel);
        foreground += panel.render();
      }

      //
      // Transition
      //

      this._transitions.push(view.transition);
    }

    return viewTpl({
      classes: ['section', 'section-immersive'].concat(config).join(' '),
      viewsCount: this._nbViews + 1,
      title: title,
      showTitle: app.isInBuilder || title,
      credits: credits,
      background: background,
      foreground: foreground,
      titleConfigPanel: app.isInBuilder && params ? params.titleConfigPanel : null
    });
  }

  postCreate(sectionContainer) {
    this._node = sectionContainer;
    this._swipeTransitionExtrasNode = this._node.find('.background-swipe-trans-extras');

    for (let media of this._medias) {
      media.postCreate({
        container: sectionContainer,
        delayBuilderInit: true,
        onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
        onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
        onConfigChange: app.isInBuilder ? this._onMediaConfigChange.bind(this) : null,
        builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
        // TODO: for video, need to goes away
        sectionType: 'immersive'
      });
    }

    for (let panel of this._panels) {
      panel.postCreate({
        container: sectionContainer,
        mediaConfigurationTabs: this.MEDIA_BUILDER_TABS_PANEL
      });
    }

    this._node.find('.background').first().addClass('first-view');

    this._update();
  }

  update() {
    this._update();
  }

  // Calling update() in postCreate creates an issue as there is stuff in builder that can't be called
  _update() {
    this._nbViews = this._medias.length;

    var numberOfViews = this._nbViews + 1;

    if (numberOfViews == 1 && this._node.find('.background').hasClass('background-type-image')) {
      numberOfViews *= 1.1;
    }

    // Will affect the transition by checking the rules
    // TODO: in builder only?
    this._applyTransitionRules();

    // Update the webmap so they know if they have layers to swipe
    this._computeWebMapsSwipeLayers();

    this._applyTitleConfig();
  }

  _applyTitleConfig() {
    // read the value and apply that.
    if (this._section.views.length && this._section.views[0].foreground && this._section.views[0].foreground.title) {
      let style = this._section.views[0].foreground.title.style;
      let textNode = this._node.find('.background-title-wrapper h2');
      let backgroundNode = this._node.find('.background-title-wrapper');

      SectionCommon.applyTitleStyle(style, textNode, backgroundNode);
    }
  }

  onScroll(params) {
    let viewIndex = 0;

    // for any other situation besides "current", the first view showing will be fine
    // (if the immersive section is scrolling up into view, it's good, and if we're below it, it's not on screen so it doesn't matter which view we show)
    // the active view is whichever panel's top is on the screen, if not the first.
    this._currentViewNode = this._node.find('.imm-panel').eq(0);
    if (params.status === 'current') {
      this._node.find('.imm-panel').each((index, element) => {
        // if the panel's top is above the bottom of the page, it's selected.
        // since you're going through in down order, last one where this is true is correct.
        if (params.currentSectionScroll + params.windowHeight > $(element).position().top) {
          viewIndex = index;
          this._currentViewNode = $(element);
        }
      });
    }

    // index starts at 1, not 0
    viewIndex += 1;

    // if the section is still active, but the bottom of the section is in the viewport (meaning it's undocked and we're scrolling down from it)
    // viewport range is important
    // section height is important
    const sectionBottomOffset = this._node.position().top + this._node.outerHeight();
    const sectionBottomInViewport = sectionBottomOffset > params.scrollTop && sectionBottomOffset < params.scrollTop + params.windowHeight;

    this._isNavigatingAway = params.status === 'current' && sectionBottomInViewport;

    // if we're not fully in the section, this value should be 0 since you're not scrolling through a view.
    if (params.status !== 'current' || this._isNavigatingAway) {
      this._currentViewScrollPosition = 0;
    }
    else {
      // how far "through the view" you've scrolled. Is 0 when panel is at bottom of screen, and the panel's height value when panel is done
      this._currentViewScrollPosition = (params.currentSectionScroll + params.windowHeight) - this._currentViewNode.position().top;

      // don't allow the value to be negative (happens briefly when immersive section jumps into place when docked)
      if (this._currentViewScrollPosition < 0) {
        this._currentViewScrollPosition = 0;
      }
    }

    if (params.status == 'unload') {
      this._isActive = false;

      for (let media of this._medias) {
        media.performAction({
          isActive: false,
          animate: false
        });
      }

      if (this._medias[0]) {
        // only make all the views non-active if we're scrolling up and away from section, not down and away.
        if (this._currentViewIndex === 1) {
          this._medias[0].getNode().nextAll().removeClass('active');
        }

        this._medias[0].getNode().addClass('active');

        this._medias[0].performAction({
          isActive: false,
          transition: this._transitions[0],
          isNewView: true,
          viewIndex: 0,
          visibilityProgress: 0,
          scrollPositionSection: 0,
          scrollPositionView: 0,
          performBuilderInit: false,
          animate: false
        });
      }

      this._node.toggleClass('hide-title hide-credits', true);

      this._currentViewIndex = -1;
      this._previousMedia = null;
      return;
    }

    var currentMedia = this._medias[viewIndex - 1];

    // Sometimes when moving away status is current and viewIndex == _nbViews + 1
    if (! currentMedia) {
      return;
    }

    if (! this._isLoaded) {
      this._isLoaded = true;

      this.loadMedias();
      this._loadWebScenes({
        cache: params.webSceneCache,
        currentMedia: currentMedia,
        viewIndex: viewIndex,
        isPreload: true,
        scrollDifference: params.scrollDifference
      });

      for (let panel of this._panels) {
        panel.load();
      }

      this._node.find('.background').eq(0).addClass('active');
    }

    let oldViewIndex = this._currentViewIndex;

    if (params.status === 'visible' || params.status === 'current') {
      this._currentViewIndex = viewIndex;

      this._loadWebScenes({
        cache: params.webSceneCache,
        currentMedia: currentMedia,
        viewIndex: viewIndex,
        isPreload: false,
        scrollDifference: params.scrollDifference
      });
    }

    // visible was creation a conflict with video when navigating away
    // visible was fired right before current for some reason...
    if (/*params.status != 'visible' &&*/ params.status != 'current') {
      return;
    }

    var mediaUpdate = {
      isActive: params.status == 'current',
      transition: this._transitions[viewIndex - 1],
      // If switching views OR if the immersive section is now the active section but wasn't before
      // The latter check is important for 1st view -- otherwise the viewIndex will say "1" and the old view index is "1" so it won't consider it new.
      isNewView: oldViewIndex != viewIndex || !this._isActive && params.status === 'current',
      viewIndex: viewIndex,
      visibilityProgress: 1,
      scrollPositionSection: params.currentSectionScroll,
      scrollPositionView: this._currentViewScrollPosition,
      performBuilderInit: oldViewIndex != viewIndex || !this._isActive && params.status === 'current'
    };

    this._isActive = true;

    // Compute if the media performing the transition to next view himself
    var mediaPerformTransition = false;
    if (params.status == 'current') {
      var transition = this._transitions[viewIndex - 1],
          previousMedia = this._medias[viewIndex - 2];

      mediaPerformTransition = this._isTransitionDoneByMedia(transition, currentMedia, previousMedia);
    }

    // Media usually only need update when changing view
    var mediaNeedUpdate = mediaUpdate.isNewView;
    // Except if it's a webmap that has a swipe transition managed by the map
    if (! mediaNeedUpdate && currentMedia.type == 'webmap' && ! this._isNavigatingAway) {
      mediaNeedUpdate = mediaPerformTransition;
    }

    // Refresh media only when needed
    if (mediaNeedUpdate) {
      currentMedia.performAction(mediaUpdate);
    }

    if (params.status == 'current') {
      /*
       * Title/credits
       */

      this._node.toggleClass('hide-title hide-credits', false);

      /*
       * Background
       */

      if (mediaUpdate.isNewView) {
        //this._node.find('.background').removeClass('active');
        currentMedia.getNode().nextAll().removeClass('active');

        currentMedia.getNode().addClass('active');

        // TODO: for all media type
        // this._previousMedia is the previously visited view background (can be backward or fwd)
        if (this._previousMedia && this._previousMedia.type == 'video' && ! this._previousMedia.isSameMedia(currentMedia)) {
          this._previousMedia.performAction({
            isActive: false
          });
        }

        this._previousMedia = currentMedia;
      }

      /*
       * Transition
       */

      if (! this._isNavigatingAway) {
        if (transition == 'swipe-vertical' || transition == 'swipe-horizontal') {
          // we want to see the full, swiped-on media before the next one is swiped on.
          // We need then to make the swipe reach the edge of the screen before the view is 100% scrolled-through.
          // This makes the swipe finish sooner so we see the whole media for a bit before the next view comes.
          const SWIPE_ACCELERATION_FACTOR = 1.3;

          if (! mediaPerformTransition) {
            let swipePosition = null;
            const mediaWidth = app.display.windowWidth;
            let swipeWindowHeight = params.windowHeight;

            if (app.isInBuilder) {
              swipeWindowHeight -= BUILDER_PANEL_HEIGHT;
            }

            if (transition == 'swipe-vertical') {
              swipePosition = swipeWindowHeight - (this._currentViewScrollPosition * SWIPE_ACCELERATION_FACTOR);

              currentMedia.getNode().css(
                'clip',
                'rect(' + swipePosition + 'px,' + mediaWidth + 'px,' + app.display.windowHeight + 'px,0px)'
              );

              // Swipe shadow
              this._swipeTransitionExtrasNode
                .css({
                  top: swipePosition,
                  left: ''
                })
                .toggleClass('trans-vertical', true)
                .toggleClass('trans-horizontal', false)
                .addClass('active');
            }
            else if (transition == 'swipe-horizontal') {
              // amt to swipe is based on how far up the viewport the current view is, and NOT on how far through the view.
              // this way, the swipe speed is the same regardless of how tall the view is (all views are minimum 100vh).
              let swipeRatio = (this._currentViewScrollPosition * SWIPE_ACCELERATION_FACTOR) / swipeWindowHeight;

              swipePosition = mediaWidth - swipeRatio * mediaWidth;

              currentMedia.getNode().css(
                'clip',
                'rect(0px,' + mediaWidth + 'px,' + app.display.windowHeight + 'px,' + swipePosition + 'px)'
              );

              // Swipe shadow
              this._swipeTransitionExtrasNode
                .css({
                  top: '',
                  left: swipePosition
                })
                .toggleClass('trans-vertical', false)
                .toggleClass('trans-horizontal', true)
                .addClass('active');
            }
          }
          else {
            this._swipeTransitionExtrasNode.removeClass('active');
          }
        }
        else {
          this._swipeTransitionExtrasNode.removeClass('active');
        }
      }

      /*
       * Panel
       */

      if (this._panels && this._panels.length) {
        // all panels in immersive section have the same layout
        const panelLayout = this._panels[0].layout;

        if (panelLayout === 'scroll-partial') {
          // update the opacity for the current panel and 1 before and 1 after
          // this way we're not having to compute all this on scroll for every view in the immersive section
          const selectedPanels = this._getNearbyPanels();

          for (let panel of selectedPanels) {
            panel.updatePosition({windowHeight: params.windowHeight});
          }
        }
        else {
          let currentPanel = this._panels[viewIndex - 1];
          currentPanel.updatePosition({
            viewScroll: this._currentViewScrollPosition,
            isNavigatingAway: this._isNavigatingAway,
            windowHeight: params.windowHeight
          });
        }
      }

      /*
       * Title and credits
       */
      if (viewIndex == this._nbViews) {
        this._node.toggleClass('hide-title hide-credits', this._isNavigatingAway);
      }
    }
  }

  _getNearbyPanels() {
    const nearbyPanels = [];

    // get the previous, current, and next panels, but only if they exist (i.e. first panel has no previous panel, last panel has no next panel)
    const previousPanel = this._panels[this._currentViewIndex - 2];
    previousPanel && nearbyPanels.push(previousPanel);

    const currentPanel = this._panels[this._currentViewIndex - 1];
    currentPanel && nearbyPanels.push(currentPanel);

    const nextPanel = this._panels[this._currentViewIndex];
    nextPanel && nearbyPanels.push(nextPanel);

    return nearbyPanels;
  }

  _loadWebScenes(params) {
    if (app.data.errorWebGL) {
      return;
    }

    let addIfFull = !params.isPreload;
    let sceneViews = this._medias.filter(item => {
      return item.type === 'webscene';
    });

    for (let sceneView of sceneViews) {
      // if not already loaded, and if it's the currently-"active" view, add it to the cache.
      if (!sceneView._isLoaded) {
        let beforeCurrentMedia = this._medias[params.viewIndex - 2];
        let afterCurrentMedia = this._medias[params.viewIndex];
        let PIXEL_TOLERANCE = 750;

        let addParams = {
          item: sceneView,
          sectionType: 'immersive',
          canRemove: () => {
            return this._canRemoveWebScene(sceneView);
          },
          viewIndex: params.viewIndex - 1
        };

        if (params.isPreload) {
          let itemIndex = this._medias.findIndex(item => {
            // could have 2 items with the same ID, but there are no duplicate DOM instances
            return item.id === sceneView.id && item._node === sceneView._node;
          });

          addParams.viewIndex = itemIndex;
          params.cache.add(addParams, addIfFull);
        }

        else if (params.currentMedia === sceneView) {
          params.cache.add(addParams, addIfFull);
        }
        // if it's before the currently-active view, load it as well (necessary for swipes b/c view before active view is also visible)
        else if (beforeCurrentMedia === sceneView) {
          addParams.viewIndex = params.viewIndex - 2;
          params.cache.add(addParams, addIfFull);
        }

        else if (params.scrollDifference >= 0 && afterCurrentMedia === sceneView) {
          // if the scene is within 750px of the next (upcoming) view and going down/resizing -- difference between view height and view scroll position.
          let distanceFromNextView = this._currentViewNode.outerHeight() - this._currentViewScrollPosition;

          if (distanceFromNextView <= PIXEL_TOLERANCE) {
            addParams.viewIndex = params.viewIndex;
            params.cache.add(addParams, addIfFull);
          }
        }
      }
    }
  }

  _canRemoveWebScene(scene) {
    // if not the active section (if not in viewport and not the active section, or the one right before it)
    let inViewport = Viewport.isInViewport(this._node);
    if (inViewport && (this._medias[this._currentViewIndex - 1] === scene || this._medias[this._currentViewIndex - 2] === scene)) {
      return false;
    }
    else {
      return true;
    }
  }

  loadMedias() {
    var arcgisContent = [];

    for (let media of this._medias) {
      let alreadyLoaded = false;

      // TODO should use getIndexes like others...
      if (media.type == 'webmap') {
        if (arcgisContent.indexOf(media.id) > -1) {
          alreadyLoaded = true;
        }
        else {
          arcgisContent.push(media.id);
        }
      }

      if (! alreadyLoaded && media.type !== 'webscene') {
        this.loadMediaItem(media);
      }
    }
  }

  loadMediaItem(media) {
    let loadDeferred = null;

    if (media.type === 'webmap') {
      loadDeferred = media.load({
        isUniqueInSection: this.isMediaUniqueInSection(media.serialize(false))
      });
    }
    else {
      loadDeferred = media.load();
    }

    if (loadDeferred) {
      // TODO: is that necessary or can use media.id?
      loadDeferred.then(function(id) {
        for (let media of this._medias) {
          if (media.id == id) {
            media.postLoad();
          }
        }
      }.bind(this));
    }
  }

  navigateToViewByIndex(params = {}) {
    if (params.index == undefined || params.animate == undefined) {
      return;
    }

    const view = this._node.find('.imm-panel').eq(params.index);
    // how far down the document the view is
    const viewOffset = view.offset().top;
    // how far down the view to scroll, so the view isn't stuck at its very top
    const DISTANCE_DOWN_VIEW = 125;

    // scroll position == how far down the section is, plus how far down this view is, plus any offset
    const scrollPos = Math.floor(viewOffset - DISTANCE_DOWN_VIEW);

    // TODO: animate will fire intermediate view navigation event which the view panel doesn't like
    if (params.animate) {
      $('html,body').animate({
        scrollTop: scrollPos
      });
    }
    else {
      document.body.scrollTop = scrollPos;
      // Firefox
      document.documentElement.scrollTop = scrollPos;
    }
  }

  isMediaAlreadyLoaded(media) {
    return SectionCommon.getMediaIndexes(this._medias, media).length > 0;
  }

  isMediaUniqueInSection(media) {
    return SectionCommon.getMediaIndexes(this._medias, media).length == 1;
  }

  resize(params) {
    for (let media of this._medias) {
      media.resize(params);
    }

    this._loadWebScenes({
      cache: params.webSceneCache,
      currentMedia: this._medias[this._currentViewIndex - 1],
      viewIndex: this._currentViewIndex,
      isPreload: false,
      scrollDifference: 0
    });
  }

  getBookmark() {
    let bookmark = this._section.bookmark || {};

    return {
      status: bookmark.enabled ? 'visible' : 'disabled',
      title: this.getPreviewText ? this.getPreviewText() : '',
      bookmark: bookmark.title || (this.getPreviewText && this.getPreviewText())
    };
  }

  //
  // WebMap swipe
  //

  // TODO: merge with _applyTransitionRules ???
  _computeWebMapsSwipeLayers() {
    for (var i = 0; i < this._medias.length; i++) {
      var transitionInfo = this._getTransitionInfo(i),
          media = this._medias[i];

      // First view of a section is limited to fade
      if (i == 0) {
        continue;
      }

      if (media.type != 'webmap') {
        continue;
      }

      if (transitionInfo.isDuplicateConsecutive) {
        this._medias[i].computeSwipeLayers(this._medias[i - 1].getLayersConfiguration());
      }
    }
  }

  //
  // Transition
  //

  _isTransitionDoneByMedia(transition, currentMedia, previousMedia) {
    return transition && currentMedia && previousMedia
      && (transition == 'swipe-vertical' || transition == 'swipe-horizontal')
      && currentMedia.type == 'webmap' && previousMedia.type == 'webmap'
      && currentMedia.id == previousMedia.id;
  }

  // Apply transition rules
  // Can find similar logic in ImmersiveBuilderPanel > _getTransition() for defining the transition menu
  _applyTransitionRules() {
    for (var i = 0; i < this._medias.length; i++) {
      var transitionInfo = this._getTransitionInfo(i);

      // First view of a section is limited to fade
      if (i == 0) {
        this._transitions[i] = 'fade-fast';
        continue;
      }

      // Two views using the same media consecutivly
      // Authorized transitions are None and those listed in config.duplicateConsecutiveTransitions
      if (transitionInfo.isDuplicateConsecutive) {
        if (transitionInfo.duplicateConsecutiveTransitions.indexOf(this._transitions[i]) == -1) {
          this._transitions[i] = 'none';
        }
      }
      // Duplicate and non consecutive section
      // Only the transition from the first occurence of the media is authorized
      // Except for image where all transition are authorized (images are always duplicated)
      else if (transitionInfo.isDuplicate && transitionInfo.firstOccurenceTransition && this._medias[i].type != 'image') {
        //this._transitions[i] = transitionInfo.firstOccurenceTransition;
        // Temporary workaround
        this._transitions[i] = 'none';
      }
    }
  }

  _getTransitionInfo(index) {
    let media = this._medias[index],
        // The indexes of the occurence of that media in the section
        mediaIndexes = SectionCommon.getMediaIndexes(this._medias, media, true),
        // If the media is not the first occurence in the section
        isDuplicate = false,
        // The transition chosen for the first occurence of the media in the section
        firstOccurenceTransition = null,
        // If the media is not the first occurence and a duplicate of previous media
        // i.e: the previous view use the same media
        isDuplicateConsecutive = false,
        // Transitions that may be authorized for consecutive medias
        duplicateConsecutiveTransitions = [];

    if (mediaIndexes.length > 1) {
      if (mediaIndexes[0] < index) {
        isDuplicate = true;

        firstOccurenceTransition = this._transitions[mediaIndexes[0]];

        if(mediaIndexes[mediaIndexes.indexOf(index) - 1] == index - 1) {
          isDuplicateConsecutive = true;

          duplicateConsecutiveTransitions = media.getAuthorizedTransitionsWith(this._medias[index - 1]);
        }
      }
    }

    return {
      isDuplicate: isDuplicate,
      isDuplicateConsecutive: isDuplicateConsecutive,
      firstOccurenceTransition: firstOccurenceTransition,
      duplicateConsecutiveTransitions: duplicateConsecutiveTransitions
    };
  }

  getArcGISContent() {
    let arcgisContent = [];

    for (let media of this._medias) {
      arcgisContent.push(... media.getArcGISContent());
    }

    for (let panel of this._panels) {
      arcgisContent.push(... panel.getArcGISContent());
    }

    return arcgisContent;
  }
}
