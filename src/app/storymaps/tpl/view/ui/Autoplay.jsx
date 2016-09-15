import viewTpl from 'lib-build/hbars!./Autoplay';
import {} from 'lib-build/less!./Autoplay';

import {} from 'lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min';
import {} from 'lib-build/css!lib/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min';

import has from 'dojo/has';

var SCROLL_DURATION = 1000,
    DEFAULT_DELAY = 10,
    BTN_FADE_DELAY = 3000;

var END_STORY_DELAY_BOTTOM = 2000,
    END_STORY_DELAY_TOP = 2000;

var HEADER_HEIGHT = 50,
    IMMERSIVE_PANEL_PADDING = 180;

/*
 * Autoplay require specific knowledge of each section type behavior,
 *   it would be best to offload that to each section class
 * Then it could use a similar model than other story maps apps to allow
 *   for a Kiosk app to control the autoplay
 */

export default class Autoplay {

  constructor() {
    this._node = null;
    this._autoplayBtn = null;

    this._inProgress = false;
    this._delay = null;

    this._slider = null;
    this._isHoverContainer = false;
    this._mouseMoveTime = Date.now();

    this._init();
  }

  start(p = {}) {
    this._delay = this._slider.slider('getValue') * 1000;

    if (this._inProgress) {
      return;
    }

    this._inProgress = true;

    if (p.immediate) {
      this._next();
    }
    else {
      setTimeout(this._next.bind(this), this._delay);
    }

    this._updatePlayPauseButton(true);
  }

  stop() {
    this._inProgress = false;
    this._updatePlayPauseButton(false);
  }

  isPlaying() {
    return this._inProgress;
  }

  //
  // Internals
  //

  _next() {
    var currentSectionIndex = app.Controller._currentSectionIndex,
        currentSection = app.display.sections[currentSectionIndex],
        currentSectionType = currentSection.type,
        currentSectionHeight = currentSection.node.height(),
        browserHeight = app.display.windowHeight,
        scrollTop = $(document).scrollTop(),
        step = 0;

    if (! this._inProgress) {
      return;
    }

    if (currentSectionType == 'cover') {
      // +1 to trigger the proper active section
      step = browserHeight - HEADER_HEIGHT + 1;
    }
    else if (currentSectionType == 'immersive') {
      let remainingScroll = Math.ceil(currentSection.top + currentSectionHeight - scrollTop);

      if (remainingScroll >= currentSectionHeight - 1) {
        step = browserHeight + (remainingScroll - currentSectionHeight) - IMMERSIVE_PANEL_PADDING;
      }
      else if (remainingScroll == currentSectionHeight - browserHeight + IMMERSIVE_PANEL_PADDING) {
        step = browserHeight + IMMERSIVE_PANEL_PADDING;
      }
      else if (remainingScroll == browserHeight) {
        step = browserHeight - HEADER_HEIGHT;
      }
      else {
        step = browserHeight;
      }
    }
    else if (currentSectionType == 'title') {
      step = browserHeight;
    }
    else {
      //let remainingScroll = currentSection.top + currentSectionHeight - scrollTop;
      //step = Math.min(currentSectionHeight, browserHeight);
      //step = Math.min(step, remainingScroll);

      step = browserHeight;
    }

    console.log('scrolling', step + 'px on a ', currentSectionType, 'section');

    /*
    if (app.display.sections[currentSectionIndex + 1]) {
      var nextSectionTop = Math.floor(app.display.sections[currentSectionIndex + 1].top);

      // Make sure never scroll past the top of next section
      // TODO: should not be necessary...
      if (scrollTop + step > nextSectionTop + 1) {
        step = nextSectionTop - scrollTop - HEADER_HEIGHT + 1;
      }
      // If the next section is less than 200px away, scroll to it to avoid doing a small scroll next
      else if (scrollTop + step >= nextSectionTop - 200) {
        step = nextSectionTop - scrollTop + 1;
      }
    }
    */

    // Make sure never scroll past the top of next Immersive section
    var targetSectionIndex = -1;

    for (let i = app.display.sections.length - 1; i > 0; i--) {
      let section = app.display.sections[i];
      if (scrollTop + step > section.top) {
        targetSectionIndex = i;
        break;
      }
    }

    if (targetSectionIndex != currentSectionIndex) {
      let nextSection = app.display.sections[targetSectionIndex];
      if (nextSection && nextSection.type == 'immersive') {
        var nextSectionTop = nextSection.top;

        if (scrollTop + step > nextSectionTop) {
          step = nextSectionTop - scrollTop - HEADER_HEIGHT + 1;
        }
      }
    }
    else {
      let nextSection = app.display.sections[currentSectionIndex + 1];
      if (nextSection) {
        // Allow to scroll 200px more to avoid next scroll being small
        if (nextSection.top - (scrollTop + step) < 200) {
          step += nextSection.top - (scrollTop + step) - HEADER_HEIGHT;
        }
      }
    }

    $('html,body').animate(
      {
        scrollTop: scrollTop + step
      },
      {
        duration: SCROLL_DURATION
        //easing: 'linear'
      }
    ).promise().then(function() {
      if ($(document).scrollTop() + browserHeight >= $('body').height()) {
        setTimeout(function() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;

          app.ui.update({
            forceUpdate: true
          });

          setTimeout(this._next.bind(this), END_STORY_DELAY_TOP);
        }.bind(this), END_STORY_DELAY_BOTTOM);
      }
      else {
        setTimeout(this._next.bind(this), this._delay);
      }
    }.bind(this));
  }

  _showContainer() {
    var now = Date.now();

    // Debounce container show
    if (this._mouseMoveTime > now - 150) {
      this._node.removeClass('fade');
    }

    this._mouseMoveTime = now;
  }

  _hideContainer() {
    if (! this._isHoverContainer && Date.now() > this._mouseMoveTime + BTN_FADE_DELAY) {
      this._node.addClass('fade');
    }
  }

  _updatePlayPauseButton(isPlaying) {
    if (isPlaying) {
      this._autoplayBtn
        .removeClass('fa-play')
        .addClass('fa-pause');
    }
    else {
      this._autoplayBtn
        .removeClass('fa-pause')
        .addClass('fa-play');
    }
  }

  _init() {
    $('body').append(viewTpl);

    this._node = $('.autoplay-controls');
    this._autoplayBtn = this._node.find('.autoplay-btn');

    //
    // Container show/hide
    //

    if (! has('ios')) {
      $('.sections').mousemove(this._showContainer.bind(this));
      setInterval(this._hideContainer.bind(this), 1000);

      this._node.hover(
        () => {
          this._isHoverContainer = true;
        },
        () => {
          this._isHoverContainer = false;
          this._hideContainer();
        }
      );
    }

    // Slider
    this._slider = this._node.find('.slider-container input').slider({
      min: 5,
      max: 60,
      value: DEFAULT_DELAY,
      formatter: function(value) {
        return value + 's';
      }
    });

    // Slider change
    this._node.find('.slider-container input').on('slideStop', () => {
      if (this.isPlaying()) {
        this.start({ immediate: false });
      }
    });

    this._autoplayBtn.click(() => {
      var nowPlaying = this._autoplayBtn.hasClass('fa-play');

      if (nowPlaying) {
        this.start({ immediate: true });
      }
      else {
        this.stop();
      }
    });

    $(window).bind('mousewheel DOMMouseScroll', () => {
      if (this._inProgress) {
        this.stop();

        this._mouseMoveTime = Date.now();

        this._autoplayBtn
          .removeClass('fa-pause')
          .addClass('fa-play');

        this._node.removeClass('fade');
      }
    });
  }
}
