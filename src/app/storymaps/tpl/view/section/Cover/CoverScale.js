define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function ScaleCover() {
    this.dataViews = 1.25;
    this.layoutType = 'scale';

    this.displayCover = function(params) {
      CoverCommonEffects.scaleFadeInCover(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, false);
      CoverCommonEffects.fadeOutCover(params);
    }

    function updateForeground(params) {
      CoverCommonEffects.translateForeground(params, true);
      CoverCommonEffects.fadeOutForeground(params);
    }
  };
});
