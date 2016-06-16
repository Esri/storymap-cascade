define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlurCover() {
    this.dataViews = 1.5;
    this.layoutType = 'blur';

    this.displayCover = function(params) {
      CoverCommonEffects.scaleFadeInCover(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
      updateForeground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.blurBackground(params, false);
    }

    function updateForeground(params) {
      CoverCommonEffects.fadeOutForeground(params);
    }
  };
});
