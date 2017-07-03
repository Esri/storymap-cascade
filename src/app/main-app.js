window.i18n = null;

define.amd.jQuery = true;

if (!app.isProduction) {
  require(['Handlebars'], function() {
    //
  });
}

require([
  // Also include it here so it get loaded before MainView to avoid conflict with Bootstrap
  'lib/jquery/dist/jquery.min',
  'storymaps/common/Core',
  'storymaps/tpl/core/MainView',
  'dojo/i18n!./resources/tpl/viewer/nls/app.js?v=' + app.version,
  'esri/urlUtils',
  'dojo/ready'
], function(
  jQuery,
  Core,
  MainView,
  i18nViewer
) {
  window.i18n = i18nViewer;
  var mainViewInstance = new MainView();

  if (app.isInBuilder) {
    // TODO: check if that step is still required
    require([
      'dojo/i18n!./resources/tpl/builder/nls/app.js?v=' + app.version,
      'dojo/i18n!commonResources/nls/core.js?v=' + app.version,
      'dojo/i18n!commonResources/nls/media.js?v=' + app.version,
      'dojo/_base/lang'
    ], function(
       i18nBuilder,
       i18nCommonBuilder,
       i18nCommonMedia,
       lang
    ) {

      lang.mixin(i18n, i18nBuilder);
      lang.mixin(i18n, i18nCommonBuilder);
      lang.mixin(i18n, i18nCommonMedia);

      require([
        'storymaps/common/builder/Builder',
        'storymaps/tpl/builder/BuilderView'
      ], function(
        Builder,
        BuilderView
      ) {
        var builderView = new BuilderView(Core, Builder);

        Core.init(mainViewInstance, Builder);
        Builder.init(Core, builderView);
      });
    });
  }
  else {
    Core.init(mainViewInstance);
  }
});
