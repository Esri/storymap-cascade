define([], function() {

  var TEMP_OFFSET = 900;

  function scaleFadeInCover(params) {
    var foregroundNode = params.$currentSection.find('.foreground'),
        background = params.$currentSection.find('.background');

    setTimeout(function() {
      background.addClass('scale-out');
    }, TEMP_OFFSET);

    setTimeout(function() {
      background.css('transform', 'scale(1)');
      background.css('opacity', 1);
      background.removeClass('scale-out');
    }, TEMP_OFFSET + 1500);

    setTimeout(function() {
      foregroundNode.addClass('slide-text');
    }, TEMP_OFFSET + 200);

    setTimeout(function() {
      foregroundNode.css('transform', 'translateY(0)');
      foregroundNode.css('opacity', 1);
      foregroundNode.removeClass('slide-text');
    }, TEMP_OFFSET + 1700);
  }

  function fadeInBackground(params) {
    var background = params.$currentSection.find('.background');

    setTimeout(function() {
      background.addClass('fade-in-background');
    }, TEMP_OFFSET);

    setTimeout(function() {
      params.$currentSection.find('.cover-title').addClass('fade-in-cover-title');
    }, TEMP_OFFSET + 500);

    setTimeout(function() {
      params.$currentSection.find('.cover-subtitle').addClass('fade-in-cover-subtitle');
    }, TEMP_OFFSET + 1200);

    setTimeout(function() {
      params.$currentSection.find('.cover-title').css('opacity', 1);
    }, TEMP_OFFSET + 2500);

    setTimeout(function() {
      params.$currentSection.find('.cover-subtitle').css('opacity', 1);
    }, TEMP_OFFSET + 3000);

  }

  function fadeOutForeground(params, smallSection) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        scrollRatio = params.currentSectionScroll / sectionHeight,
        exponent = smallSection ? 1.5 : 2.5,
        // we want to fade the foreground out faster than the background so the title/subtitle/etc don't visually conflict with the upcoming section
        opacity = Math.pow(1 - scrollRatio, exponent);

    params.$currentSection.find('.foreground, .scroll-invite').css('opacity', opacity);
  }

  function translateForeground(params, slow) {
    var translateFactor = slow ? -1 : -5,
        foregroundNode = params.$currentSection.find('.foreground'),
        amtToScroll = (params.currentSectionScroll / 100) * translateFactor;

    amtToScroll = parseInt(amtToScroll, 10);

    foregroundNode.css('transform', 'translateY(' + amtToScroll + 'px)');
  }

  function translateForegroundDown(params) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        // how far down the cover we have scrolled
        scrollCoverRatio = params.currentSectionScroll / sectionHeight,
        translateFactor = 1 - scrollCoverRatio,
        amtToScroll = params.currentSectionScroll * translateFactor,
        scrollSubtitle = (params.currentSectionScroll - 100) / sectionHeight,
        translateSubtitle = (1 - scrollSubtitle) * params.currentSectionScroll;

    amtToScroll = parseInt(amtToScroll, 10);
    translateSubtitle = parseInt(translateSubtitle, 10);

    params.$currentSection.find('.cover-title').css('transform', 'translateY(' + amtToScroll + 'px)');
    params.$currentSection.find('.cover-subtitle').css('transform', 'translateY(' + translateSubtitle + 'px)');
  }

  function blurBackground(params, shortSection) {
    var background = params.$currentSection.find('.background'),
        numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        amtToBlur = 0,
        blurFactor = shortSection ? 6 : 10;

    // make a ratio of how much to blur, based on how far the section is scrolled compared to how tall it is.
    if (sectionHeight > 0) {
      amtToBlur = (params.currentSectionScroll / sectionHeight) * blurFactor;
    }

    // blur the image.
    background.css({
      webkitFilter: 'blur(' + amtToBlur + 'px)',
      filter: 'blur(' + amtToBlur + 'px)'
    });
  }

  function scaleBackground(params, scaleMore, foregroundAlso) {
    var background = params.$currentSection.find('.background'),
        amtToScale = 1,
        topRatio = 0,
        scaleDividend = scaleMore ? 4 : 20,
        foreground = params.$currentSection.find('.foreground');

    if (params.currentSectionScroll > 0) {
      // how far down the page the cover has been scrolled
      topRatio = params.currentSectionScroll / app.display.windowHeight;
      // take this ratio and normalize it so we're not scaling too far in.
      amtToScale = 1 + (topRatio / scaleDividend);
    }
    background.css('transform', 'scale(' + amtToScale + ')');

    // if we want everything to scale, we can scale the foreground as well.
    if (foregroundAlso) {
      foreground.css('transform', 'scale(' + amtToScale + ')');
    }
  }

  function blendCoverWithHeader(params) {
    var wrapper = params.$currentSection.find('.wrapper'),
        opacity = 1;

    if (params.currentSectionScroll > 0) {
      // the opacity is how far down the cover has scrolled. If it's scrolled 9/10 of the way down the page, it'll only be 1/10 opaque.
      opacity = 1 - params.currentSectionScroll / app.display.windowHeight;
    }

    wrapper.css('opacity', opacity);
  }

  function darkenCover(params, partialPage) {
    var numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        wrapper = params.$currentSection.find('.wrapper'),
        maxBrightnessValue = 100,
        brightness = maxBrightnessValue,
        cssValue = '';

    if (params.currentSectionScroll > 0) {
      if (partialPage) {
        // if the page isn't the full height
        // make it a percentage of how far the person has scrolled through the section
        brightness = (1 - params.currentSectionScroll / sectionHeight) * 100;
      }
      else {
        // brightness is a percentage of how much of the viewport is showing the cover. If most of the window shows the cover it will be lighter, if less is showing, darker.
        brightness = ((sectionHeight - params.currentSectionScroll) / app.display.windowHeight) * 100;
      }

      if (brightness > maxBrightnessValue) {
        brightness = maxBrightnessValue;
      }
    }

    cssValue = 'brightness(' + brightness.toFixed(1) + '%)';
    wrapper.css({
      webkitFilter: cssValue,
      filter: cssValue
    });
  }

  function fadeOutCover(params) {
    var background = params.$currentSection.find('.background'),
        numViewports = params.$currentSection.data('views'),
        sectionHeight = numViewports * app.display.windowHeight,
        // the point at which to start fading -- when .1 of the section has scrolled, start fading. This allows us to show the cover as unfaded for a bit before starting.
        fadePoint = 0.1,
        // when the next section takes up 7/10 of the viewport, we'll want the cover to be completely faded.
        coverFadedCompletelyPoint = 0.7,
        readyToFade = params.currentSectionScroll >= sectionHeight * fadePoint,
        opacityValue = 1;

    if (readyToFade) {
      // is a differential between the amount scorlled and the ratio.
      opacityValue = 1 - (params.currentSectionScroll - sectionHeight * fadePoint) / (sectionHeight * (1 - fadePoint) * coverFadedCompletelyPoint);
    }

    background.css('opacity', opacityValue);
  }

  return {
    scaleFadeInCover: scaleFadeInCover,
    fadeInBackground: fadeInBackground,
    fadeOutForeground: fadeOutForeground,
    translateForeground: translateForeground,
    translateForegroundDown: translateForegroundDown,
    blurBackground: blurBackground,
    scaleBackground: scaleBackground,
    blendCoverWithHeader: blendCoverWithHeader,
    darkenCover: darkenCover,
    fadeOutCover: fadeOutCover
  };
});
