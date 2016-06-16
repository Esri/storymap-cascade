define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function CurtainCover() {
    this.dataViews = 1;
    this.layoutType = 'curtain';

    this.displayCover = function(params) {
      CoverCommonEffects.fadeInBackground(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.darkenCover(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForegroundDown(params);
    }
  };
});
