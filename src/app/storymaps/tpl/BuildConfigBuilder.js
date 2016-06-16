require([
  'storymaps/common/Core',

  // Load some factory that are loaded dynamically and would not be included in build otherwise
  'storymaps-react/tpl/view/media/FactoryBuilder',
  'storymaps-react/tpl/view/section/FactoryBuilder',
  'storymaps/tpl/view/section/Immersive/PanelFactoryBuilder',

  'storymaps/tpl/core/MainView',
  'storymaps/common/builder/Builder',
  'storymaps/tpl/builder/BuilderView'
], function() {
    // Nothing here
});
