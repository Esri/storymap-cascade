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
  'storymaps/tpl/core/Core',
  'dojo/i18n!./resources/tpl/viewer/nls/app.js?v=' + app.version,
  'esri/urlUtils',
  'dojo/ready'
], function(
  jQuery,
  Core,
  i18nViewer
) {
  window.i18n = i18nViewer;

  if (app.isPrint) {
    require([
      'storymaps-react/tpl/print/PrintViewWrapper',
      'storymaps-react/tpl/core/Controller'],
    function(PrintView, Controller) {
      app.Controller = Controller;
      Core.init(new PrintView());
    });
    return;
  }

  require(['storymaps/tpl/core/MainView'], function(MainView) {
    var mainViewInstance = new MainView();

    if (app.isInBuilder) {
      // TODO: check if that step is still required
      require([
        'dojo/i18n!./resources/tpl/builder/nls/app.js?v=' + app.version,
        'dojo/_base/lang'
      ], function(i18nBuilder, lang) {

        lang.mixin(i18n, i18nBuilder);

        require([
          'storymaps/tpl/builder/Builder',
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
});
