/*
| Copyright 2016-2018 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/

define([
  'lib/babel-polyfill/browser-polyfill',
  'lib/jquery/dist/jquery.min',

  'lib-build/less!./MainView',
  'lib-build/css!../view/media/Common',

  'lib-build/i18n!resources/tpl/viewer/nls/app',
  'lib-build/i18n!resources/tpl/builder/nls/app',

  'storymaps-react/tpl/core/Controller',
  'storymaps/tpl/core/Core',
  'storymaps/tpl/utils/CommonHelper',
  'storymaps/tpl/utils/UI',
  'storymaps/tpl/utils/EmbedBar',
  'storymaps-react/tpl/utils/IOSEmbedFix',

  'storymaps-react/tpl/view/ui/Header',
  'storymaps-react/tpl/view/ui/Autoplay',

  'lib/calcite-bootstrap/js/bootstrap.min',
  'lib-build/css!storymaps/tpl/utils/SocialSharing',

  'esri/arcgis/utils',
  'esri/urlUtils',
  'dojo/_base/Color',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/has',
  'dojo/topic'

  //'lib/FitText.js/jquery.fittext.js'
], function(
  babelPolyfill,
  jQuery,

  viewCss,
  mediasCss,

  i18n,
  i18nBuilder,

  Controller,
  Core,
  CommonHelper,
  UIUtils,
  EmbedBar,
  IOSEmbedFix,

  Header,
  Autoplay,

  bootstrapJS,
  socialSharingCss,

  arcgisUtils,
  urlUtils,
  Color,
  lang,
  on,
  has,
  topic
) {

  // this is a function so that it won't self-execute and try to require modules that aren't there yet...
  // on Portal for some reason (when the JSAPI is in the same domain as this code), it self-executes when it gets here.
  // This way, we force execution to only happen when we call new MainView() in main-app.js
  return function() {
    lang.mixin(i18n, i18nBuilder);

    // Story header
    var _header = new Header();
    // Save scroll position when a modal opens
    var _modalOpenScrollPosition = null;
    // Save the current scroll position to ignore duplicate events
    var _currentScrollTop = null;

    // Core
    var _core = null;

    // Hold reference to UI component for customization
    app.ui.header = _header;
    app.ui.update = updateUI;

    function init(core) {
      _core = core;
      return true;
    }

    function initStory(config, settings, sections) {
      IOSEmbedFix.setStyles();

      // Need some minimal info like window size before rendering the story
      computeDisplayInfos();

      if (app.display.browserWidth < 768) {
        $('body').addClass('mobile-view');
        app.isMobileView = true;
      }
      else if (app.display.browserWidth < 1025) {
        $('body').addClass('tablet-view');
        app.isMobileView = true;
      }

      if (has('touch')) {
        $('body').addClass('touch');
      }

      app.Controller.renderStory(config, sections)
      .then(function() {
        app.Controller.renderHeader();
        app.Controller.changeTheme();

        // embed bar goes here... DOM in place, but before any important calculations
        var strings = i18n.viewer.embedBar;
        lang.mixin(strings, {
          open: i18n.viewer.shareFromCommon.open,
          close: i18n.viewer.common.close,
          // these strings don't exist yet
          shareFacebook: i18n.viewer.embedBar.facebook,
          shareTwitter: i18n.viewer.embedBar.twitter
        });

        var urlParams = urlUtils.urlToObject(window.location.search).query || {};
        // true if there's any value for classicEmbedMode, or no value but the key, or classicembedmode
        var isClassicEmbedMode = urlParams.classicEmbedMode ? true : urlParams.classicEmbedMode === '' ? true : urlParams.classicembedmode ? true : urlParams.classicembedmode === '' ? true : false;
        var logoObject = lang.getObject('data.appItem.data.values.settings.header.logo', true, app);

        // it's esri logo if (url and enabled properties are falsey (empty object, logo hasn't been configured)) OR (the logo object is enabled and the URL is esri-logo)
        var hasEsriLogo = (!logoObject.enabled && !logoObject.url) || (logoObject.enabled && logoObject.url === 'resources/tpl/viewer/icons/esri-logo.png');

        var embedBar = new EmbedBar({
          classicEmbedMode: isClassicEmbedMode,
          strings: strings,
          disableFullscreen: true,
          appCreationDate: app.data.appItem.item.created,
          june2018ReleaseDate: app.cfg.JUNE_CREATED_DATE,
          isBuilder: app.isInBuilder,
          isEsriLogo: hasEsriLogo,
          logoPath: 'resources/tpl/viewer/icons/esri-logo-black.png',
          logoElements: [$('.story-header .logoImg')],
          taglineElements: [$('.story-header .linkContainer .link')],
          shareElements: [$('.story-header .share-btn-container')],
          appTitle: app.data.title,
          bitlyCreds: [app.cfg.HEADER_SOCIAL.bitly.key, app.cfg.HEADER_SOCIAL.bitly.login]
        });

        var embedBarExists = embedBar.initiated;

        // add a class to the body if we're using the embed bar, so that styles can all be based on that.
        if (embedBarExists) {
          $('body').addClass('embed-mode-bar');
        }

        displayApp();

        // Update display infos
        setTimeout(function() {
          computeDisplayInfos();
        }, 100);

        // To makes safari happy
        setTimeout(function() {
          computeDisplayInfos();
        }, 300);

        setTimeout(function() {
          computeDisplayInfos();
        }, 500);
      });
    }

    /*
     * Update UI - mostly triggered on Scroll
     */
    function updateUI(p) {
      p = p || {};

      var scrollTop = app.display.scrollTop;

      // In builder, always recompute display infos for editing
      if (app.isInBuilder) {
        computeDisplayInfos();
      }

      app.display.scrollTop = scrollTop;

      // Ignore event without actual scroll
      if (_currentScrollTop == scrollTop && ! p.forceUpdate) {
        return;
      }

      // scrolling up or down, and how much? Positive value is scrolling down, negative is scrolling up.
      var scrollDifference = scrollTop - _currentScrollTop;

      _currentScrollTop = scrollTop;

      var sectionsDisplayInfos = getActiveAndVisibleSections(scrollTop, scrollTop + app.display.windowHeight),
          currentSectionDisplayInfos = sectionsDisplayInfos.activeSection;

      if (! currentSectionDisplayInfos) {
        return;
      }

      var currentSectionIndex = currentSectionDisplayInfos.index,
          $currentSection = currentSectionDisplayInfos.node,
          currentSectionScroll = scrollTop - currentSectionDisplayInfos.top;
          //nextSection = app.display.sections[currentSectionIndex + 1]

      //
      // Story
      //

      app.Controller.onScroll({
        currentSectionIndex: currentSectionIndex,
        scrollTop: scrollTop,
        scrollDifference: scrollDifference,
        windowWidth: app.display.windowWidth,
        windowHeight: app.display.windowHeight,
        $currentSection: $currentSection,
        sectionHeight: app.display.sectionHeight,
        currentSectionScroll: currentSectionScroll,
        visibleSections: sectionsDisplayInfos.visibleSections,
        initialUpdate: p && p.initialUpdate
      });

      //
      // Header
      //

      var headerCompact = false;

      if (scrollTop <= app.display.windowHeight) {
        var newPos = app.display.windowHeight - scrollTop - 50;

        if (newPos < 40) {
          newPos = 0;
        }

        headerCompact = newPos !== 0;
      }

      _header.update({
        headerCompact: headerCompact,
        storyProgress: (scrollTop + app.display.windowHeight) / app.display.storyHeight * 100,
        sectionIndex: currentSectionIndex
      });
    }

    /*
     * Compute the active and visible sections at every scroll
     */
    function getActiveAndVisibleSections(viewportTop, viewportBottom) {
      var sections = app.display.sections,
          nbSections = sections.length,
          activeSection = null,
          visibleSections = [],
          sectionTop = 0,
          sectionIndex = 0,
          sectionBottom = null,
          visibleViewportTop = viewportTop + 50;

      for (var i = 0; i < nbSections; i++) {
        sectionTop = sections[i].top;
        sectionIndex = i - 1;
        sectionBottom = sections[i + 1] ? sections[i + 1].top : -1;

        // The active section is the section that is before the section not visible
        if (sectionTop > visibleViewportTop) {
          if (! activeSection) {
            // safari sometimes lets the sectionIndex be -1 (depending on scroll-up
            // speed and force), which breaks things. reset to 0.
            if (sectionIndex < 0) {
              sectionIndex = 0;
            }
            activeSection = {
              index: sectionIndex,
              top: sections[sectionIndex].top,
              node: sections[sectionIndex].node
            };
          }
        }

        // Except in the case it's last section of the story and there is no credits
        if (i == nbSections - 1 && ! activeSection && sections[i].type != 'credits') {
          activeSection = {
            index: i,
            top: sections[i].top,
            node: sections[i].node
          };
        }

        // if section starts above the screen, but ends in the screen
        if (visibleViewportTop >= sectionTop && visibleViewportTop < sectionBottom) {
          visibleSections.push(sectionIndex + 1);
        }
        // else if section starts in the screen
        else if (viewportBottom > sectionTop && visibleViewportTop < sectionTop) {
          visibleSections.push(sectionIndex + 1);
        }
      }

      return {
        activeSection: activeSection,
        visibleSections: visibleSections
      };
    }

    /*
     * Compute some display informations about sections and medias
     *  - elect the active section
     *  - find the sections partially visible
     */
    function computeDisplayInfos() {
      // Sections display info
      var sections = [];

      $('.section').each(function(index) {
        var node = $(this);

        sections.push({
          top: node.hasClass('hidden') ? Number.MAX_VALUE : node.position().top,
          node: node,
          type: app.data.sections[index].type
        });
      });

      // Videos in Sequence
      var inlineVideos = [];

      var $window = $(window),
          windowWidth = $window.width(),
          windowHeight = $window.height(),
          headerHeight = _header.getHeight();

      app.display = {
        browserWidth: windowWidth,
        windowWidth: windowWidth - (app.isInBuilder ? $('.section-builder-panel').width() : 0),
        windowHeight: windowHeight,
        headerHeight: headerHeight,
        sectionHeight: windowHeight - headerHeight,
        storyHeight: $('body').height(),
        scrollTop: app.display ? app.display.scrollTop : 0,
        sections: sections,
        inlineVideos: inlineVideos
      };
    }

    function displayApp() {

      //
      // Page init
      //

      // By default do not keep scrolling position when reloading the story
      var forceScrollTop = true;

      var urlParams = CommonHelper.getUrlParams();
      if (urlParams.forceScrollTop === 'false') {
        forceScrollTop = false;
      }

      if (forceScrollTop) {
        $(window).on('beforeunload', function() {
          $(window).scrollTop(0);
        });
      }

      //
      // Resize event
      //

      var optimizedResize = CommonHelper.throttle(function() {
        onResize();
      }, 50);

      $(window)
        .resize(optimizedResize)
        .trigger('resize');

      topic.subscribe('media-dynamic-resize', onResize);

      //
      // Scroll event
      //

      // Using RAF in a recursive loop is convenient for builder as this is executed periodically
      //  the builder don't need to manually fire event when text/media/section change
      //  to recompute the display
      // But this can make debugging hard, if turned false. Scroll will only be fired on real scroll
      var useRequestAnimationFrameLoop = true;
      var doc = $(document);

      if (urlParams.useRafLoop === 'false') {
        useRequestAnimationFrameLoop = false;
      }

      if (useRequestAnimationFrameLoop) {
        window.requestAnimationFrame(function rafloop() {
          // To not pass scroll event to UI components when the modal is open
          // This does not prevent the event, it just make sure the component
          // don't render with invalid scroll values (especially the header)
          var preventScroll = false;
          if ($('body').hasClass('modal-open')) {
            preventScroll = true;
          }

          if (! preventScroll) {
            app.display.scrollTop = doc.scrollTop();
            updateUI();
          }

          window.requestAnimationFrame(rafloop);
        });
      }
      else {
        var working = false;

        var scrollAction = function() {
          updateUI();

          working = false;
        };

        $(window).scroll(function() {
          // To not pass scroll event to UI components when the modal is open
          // This does not prevent the event, it just make sure the component
          // don't render with invalid scroll values (especially the header)
          if (app.isInBuilder && $('body').hasClass('modal-open')) {
            return;
          }

          app.display.scrollTop = doc.scrollTop();

          if (! working) {
            window.requestAnimationFrame(scrollAction);
            working = true;
          }
        });
      }

      //
      // Prevent scroll when a modal is open
      //

      // When a modal opens, set the body to fixed position with proper scrolling
      // This seems to be the only effective way to allow scroll in modal but avoid
      //   the scroll to affect the whole page
      // Other ideas:
      //  - set body to overflow: hidden and add a replacement for the scrollbar
      //  - can't seem to preventDefault from jQuery handler but can be done from
      //    browser event as shown above but target does not reflect is event is
      //    bubbling, is there a way to know?
      $('.modal').on('show.bs.modal', function() {
        //_modalOpen = true;

        _modalOpenScrollPosition = app.display.scrollTop;

        $('body').css({
          position: 'fixed',
          top: - app.display.scrollTop
        });

        $('.sections').css({
          position: 'fixed'
        });
      });

      $('.modal').on('hide.bs.modal', function() {
        //_modalOpen = false;

        $('body').css({
          position: '',
          top: ''
        });

        $('.sections').css({
          position: ''
        });

        $('html,body').scrollTop(_modalOpenScrollPosition);
      });

      //
      // Story builder button
      //

      if (_core.hasSwitchBuilderButton()) {
        app.ui.header.showEditButton();
      }

      //
      // Autoplay
      //

      // Autoplay in viewer mode
      if (! app.isInBuilder && CommonHelper.getUrlParams().autoplay !== undefined && CommonHelper.getUrlParams().autoplay !== 'false') {
        app.ui.autoplay = new Autoplay();

        // Start when app is ready
        topic.subscribe('tpl-ready', function() {
          if (! $('body').hasClass('mobile-view')) {
            $('.section-layout-cover .scroll-invite').hide();
            app.ui.header.disableShareButtonAutoplay();

            app.ui.autoplay.start();
          }
        });
      }

      //
      // Display the app
      //

      updateUI({
        initialUpdate: true
      });
      topic.publish('tpl-ready');
      hideLoadingOverlay();
    }

    function onResize() {
      // This does not dictate much as the switch between mobile view
      //   is only done when story is initializing
      var isSmall = app.display.browserWidth < 768;

      computeDisplayInfos();

      _header.resize();

      app.Controller.onResize({
        windowWidth: app.display.windowWidth,
        windowHeight: app.display.windowHeight,
        sectionHeight: app.display.sectionHeight
      });

      // Disable builder on small screens
      if (app.isInBuilder) {
        $('body').toggleClass('error modal-open', isSmall);
        $('#loadingOverlay').toggleClass('error', isSmall);
        $('#fatalError').toggle(isSmall);
        $('.progressjs-container').toggle(! isSmall);
      }

      // Stop autoplay in mobile view
      if (app.ui.autoplay && isSmall) {
        app.ui.autoplay.stop();
      }
    }

    function isStoryBlank() {
      return app.Controller.isStoryBlank();
    }

    function appInitComplete() {
      if (! app.data.appItem || ! app.data.appItem.data) {
        return;
      }

      var itemData = app.data.appItem.data.values;

      initStory(
        itemData.config,
        itemData.settings,
        itemData.sections
      );
    }

    //
    // Loading Overlay
    //

    function hideLoadingOverlay() {
      setTimeout(function() {
        $('#loadingIndicator, #loadingMessage').addClass('fadeOut').fadeOut(300);
        $('#loadingOverlay').fadeOut(600);
      }, 0); // TODO may need extra wait for Cover video to load
    }

    /*
     * TODO prototype - load static config from JSON file
     */
    function getConfig(configName) {
      if (! configName) {
        alert(i18n.viewer.errors.noConfigName);
      }

      $.ajax({
        type: 'GET',
        url: 'stories/' + configName + '.json',
        dataType: 'json'
      }).then(
        function(data) {
          if (data && data.config && data.sections && data.sections.length) {
            initStory(data.config, data.settings, data.sections);
          }
          else {
            alert(i18n.viewer.errors.configFormatError);
          }
        },
        function() {
          alert(i18n.viewer.errors.configNotFound);
        }
      );
    }

    return {
      init: init,
      isStoryBlank: isStoryBlank,
      getConfig: getConfig,
      appInitComplete: appInitComplete,
      updateUI: updateUI
    };
  };
});
