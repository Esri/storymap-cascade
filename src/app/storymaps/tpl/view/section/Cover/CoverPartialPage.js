define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlurCover() {
    this.dataViews = 0.7;
    this.layoutType = 'partial-page';

    this.displayCover = function() {
      //
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.blurBackground(params, true);
      CoverCommonEffects.darkenCover(params, true);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, false);
      CoverCommonEffects.fadeOutForeground(params, true);
    }
  };
});
