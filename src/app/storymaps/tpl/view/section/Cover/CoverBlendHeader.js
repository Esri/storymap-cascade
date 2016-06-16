define([
  './CoverCommonEffects'
], function(
  CoverCommonEffects
) {
  return function BlendHeaderCover() {
    this.dataViews = 1;
    this.layoutType = 'blend-header';

    this.displayCover = function(params) {
      setCoverBackgroundColor(params);
    };

    this.onScroll = function(params) {
      updateBackground(params);
    };

    function updateBackground(params) {
      CoverCommonEffects.scaleBackground(params, true, true);
      CoverCommonEffects.blendCoverWithHeader(params);
    }

    function setCoverBackgroundColor(params) {
      params.$currentSection.css('background-color', 'rgba(0,0,0,1)');
    }
  };
});
