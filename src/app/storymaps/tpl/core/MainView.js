/*
| Copyright 2016 Esri
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

  'storymaps-react/tpl/core/Controller',
  'storymaps/common/Core',
  'storymaps/common/utils/CommonHelper',
  'storymaps/tpl/utils/UI',

  'storymaps-react/tpl/view/ui/Header',
  'storymaps-react/tpl/view/ui/Autoplay',

  'lib/calcite-bootstrap/js/bootstrap.min',
  'lib-build/css!storymaps/common/utils/SocialSharing',

  'esri/arcgis/utils',
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

  Controller,
  Core,
  CommonHelper,
  UIUtils,

  Header,
  Autoplay,

  bootstrapJS,
  socialSharingCss,

  arcgisUtils,
  lang,
  on,
  has,
  topic
) {

  // Story header
  var _header = new Header();
  // Save scroll position when a modal opens
  var _modalOpenScrollPosition = null;
  // Save the current scroll position to ignore duplicate events
  var _currentScrollTop = null;

  // Core
  var _core = null;

  // Hold reference to UI component for customization
  app.ui = {
    header: _header,
    update: updateUI
  };

  //
  // The section and media factory are accessed through window object as we can't import module dynamically with es6
  //  and Controller that is es6 needs them
  //

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/view/section/FactoryBuilder' : 'storymaps-react/tpl/view/section/FactoryViewer'],
    function(SectionFactory) {
      app.ui.SectionFactory = SectionFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps/tpl/view/section/Immersive/PanelFactoryBuilder' : 'storymaps/tpl/view/section/Immersive/PanelFactoryViewer'],
    function(ImmersivePanelFactory) {
      app.ui.ImmersivePanelFactory = ImmersivePanelFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/view/media/FactoryBuilder' : 'storymaps-react/tpl/view/media/FactoryViewer'],
    function(MediaFactory) {
      app.ui.MediaFactory = MediaFactory;
    }
  );

  require(
    [app.isInBuilder ? 'storymaps-react/tpl/builder/Controller' : 'storymaps-react/tpl/core/Controller'],
    function(Controller) {
      app.Controller = Controller;
    }
  );

  function init(core) {
    _core = core;
    return true;
  }

  function initStory(config, settings, sections) {
    // Need some minimal info like window size before rendering the story
    computeDisplayInfos();

    if (app.display.browserWidth < 768) {
      $('body').addClass('mobile-view');
      app.isMobileView = true;
    }

    if (has('touch')) {
      $('body').addClass('touch');
    }

    app.Controller.renderStory(config, sections)
    .then(function() {
      app.Controller.renderHeader();

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
      visibleSections: sectionsDisplayInfos.visibleSections
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
  function getCurrentSectionDisplayInfos(scrollTop) {
    var sections = app.display.sections,
        nbSections = sections.length;

    for (var i = 0; i < nbSections; i++) {
      if (sections[i].top > scrollTop) {
        var index = i - 1;

        return {
          index: index,
          top: sections[index].top,
          node: sections[index].node
        };
      }
    }

    return null;
  }
  */

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

    /*
    // Video autoplay
    $('.block .video').each(function() {
      var node = $(this),
          nodeBlock = node.parents('.block').eq(0);

      inlineVideos.push({
        id: node.attr('id'),
        top: nodeBlock.position().top,
        bottom: nodeBlock.position().top + node.height(),
        sectionIndex: node.parents('.section').index(),
        // TODO: KO with after-block like image caption!
        blockIndex: nodeBlock.index()
      });
    });
    */

    //var hasTouch = app.display ? app.display.hasTouch : has('touch');
    //var isMobile = app.display ? app.display.isMobile : UIUtils.isMobileBrowser();
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
      /*,
      hasTouch: hasTouch,
      isMobile: isMobile*/
    };
  }

  /*
  function positionSnapSections()
  {
    $.each(app.data.sections, function(i, section) {
      if (section instanceof Immersive) {
        var sectionDisplay = app.display.sections[i];

        SectionCommon.resizeSnapSection2(i, sectionDisplay.top);
      }
    });
  }
  */

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

    /*
    function autoSizeText() {
      var el,
          elements,
          _i,
          _len,
          _results = [];

      elements = $('.fg-title');

      if (elements.length < 0) {
        return;
      }

      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        _results.push((function(el) {
          var resizeText, _results1;
          resizeText = function() {
            var elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
            return $(el).css('font-size', elNewFontSize);
          };

          _results1 = [];
          while (el.scrollHeight > el.offsetHeight) {
            _results1.push(resizeText());
          }
          return _results1;
        })(el));
      }
      return _results;
    }

    autoSizeText();
    */

    //$('.cover-title').fitText();
    //$('.cover-subtitle').fitText();
    //$('.section-layout-title .fg-title').fitText();

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

    updateUI();
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
});
