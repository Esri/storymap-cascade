define([
  'lib/progress.js/minified/progress.min',
  'lib-build/css!lib/progress.js/minified/progressjs.min',
  'lib-build/less!./ProgressBar'
], function(
  ProgressJs
) {
  return function ProgressBar(/*container, isInBuilder*/) {

    var _progressBar = new ProgressJs();

    this.start = function() {
      _progressBar.start();
    };

    this.update = function(progress) {
      _progressBar.set(progress);
    };
  };
});
