require([
  'storymaps/common/Core',

  // Load some factory that are loaded dynamically and would not be included in build otherwise
  'storymaps-react/tpl/view/media/FactoryViewer',
  'storymaps-react/tpl/view/section/FactoryViewer',
  'storymaps/tpl/view/section/Immersive/PanelFactoryViewer',

  'storymaps/tpl/core/MainView'
], function() {
    // Nothing here
});
