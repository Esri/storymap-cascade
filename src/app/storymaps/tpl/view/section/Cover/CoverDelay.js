define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function DelayCover() {
    this.dataViews = 1.5;
    this.layoutType = 'delay';

    this.displayCover = function(params) {
      CoverCommonEffects.fadeInBackground(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, false);
      CoverCommonEffects.darkenCover(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, false);
      CoverCommonEffects.fadeOutForeground(params, false);
    }
  };
});
