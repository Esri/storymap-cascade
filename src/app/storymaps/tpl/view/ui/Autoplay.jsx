import viewTpl from 'lib-build/hbars!./Autoplay';
import {} from 'lib-build/less!./Autoplay';

import {} from 'lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min';
import {} from 'lib-build/css!lib/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min';

import has from 'dojo/has';

const SCROLL_DURATION = 200;
const SCROLL_AMOUNT_BASE_UNIT = 12;
const BTN_FADE_DELAY = 3000;

const END_STORY_DELAY_BOTTOM = 2000;
const STORY_DELAY_TOP = 3000;

export default class Autoplay {

  constructor() {
    this._node = null;
    this._autoplayBtn = null;

    this._inProgress = false;
    this._scrollAmount = null;

    this._slider = null;
    this._isHoverContainer = false;
    this._mouseMoveTime = Date.now();

    this._init();
  }

  start() {
    this._scrollAmount = this._slider.slider('getValue') * SCROLL_AMOUNT_BASE_UNIT;

    if (this._inProgress) {
      return;
    }

    this._inProgress = true;

    if ($(document).scrollTop() === 0) {
      setTimeout(() => {
        this._next();
      }, STORY_DELAY_TOP);
    }
    else {
      this._next();
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
    const currentSectionIndex = app.Controller._currentSectionIndex;
    const currentSection = app.display.sections[currentSectionIndex];
    let step = this._scrollAmount;
    const scrollTop = $(document).scrollTop();

    if (currentSection.type === 'immersive') {
      // we check if the immersive is all that's seen. If we're almost at the end of an immersive section,
      // we'll want to scroll slowly again to accommodate the non-immersive content coming up next.
      let remainingScroll = (currentSection.top + currentSection.node.height()) - scrollTop;

      if (remainingScroll > app.display.windowHeight) {
        // go faster
        step = this._scrollAmount * 1.5;
      }
    }

    if (! this._inProgress) {
      return;
    }

    $('html,body').animate(
      {
        scrollTop: scrollTop + step
      },
      {
        duration: SCROLL_DURATION,
        easing: 'linear'
      }
    ).promise().then(function() {
      if ($(document).scrollTop() + app.display.windowHeight >= $('body').height()) {
        setTimeout(function() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;

          app.ui.update({
            forceUpdate: true
          });

          setTimeout(this._next.bind(this), STORY_DELAY_TOP);
        }.bind(this), END_STORY_DELAY_BOTTOM);
      }
      else {
        this._next();
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

    const speedLabels = {
      '1': 'Slow',
      '2': 'Medium',
      '3': 'Fast'
    };

    // Slider
    this._slider = this._node.find('.slider-container input').slider({
      min: 1,
      max: 3,
      value: 2,
      formatter: function(value) {
        return speedLabels[value];
      }
    });

    // Slider change
    this._node.find('.slider-container input').on('slideStop', () => {
      if (this.isPlaying()) {
        this.start();
      }
    });

    this._autoplayBtn.click(() => {
      var nowPlaying = this._autoplayBtn.hasClass('fa-play');

      if (nowPlaying) {
        this.start();
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
