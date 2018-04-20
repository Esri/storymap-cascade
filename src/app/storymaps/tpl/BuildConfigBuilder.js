require([
  'lib-build/css!lib/calcite-bootstrap/css/calcite-bootstrap-open.min',
  'lib-build/less!storymaps/tpl/view/ui/bootstrap-override',
  'storymaps/tpl/core/Core',

  'storymaps/tpl/core/MainView',
  'storymaps/tpl/builder/Builder',
  'storymaps/tpl/builder/BuilderView',

  // Load some factory that are loaded dynamically and would not be included in build otherwise
  'storymaps-react/tpl/view/media/FactoryBuilder',
  'storymaps-react/tpl/view/section/FactoryBuilder',
  'storymaps/tpl/view/section/Immersive/PanelFactoryBuilder'

], function() {
    // Nothing here
});
