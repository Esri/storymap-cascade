require([
  'lib-build/css!lib/calcite-bootstrap/css/calcite-bootstrap-open.min',
  'lib-build/less!storymaps/tpl/view/ui/bootstrap-override',
  'storymaps/tpl/core/Core',

  'storymaps/tpl/core/MainView',

  // Load some factory that are loaded dynamically and would not be included in build otherwise
  'storymaps-react/tpl/view/media/FactoryViewer',
  'storymaps-react/tpl/view/section/FactoryViewer',
  'storymaps/tpl/view/section/Immersive/PanelFactoryViewer'

], function() {
    // Nothing here
});
