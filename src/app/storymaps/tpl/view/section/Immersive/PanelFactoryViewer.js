define([
  'storymaps-react/tpl/view/section/Immersive/Panel'
],
function(
  Panel
) {
  return {
    createInstance: function(panelJSON, transition) {
      return new Panel(panelJSON, transition);
    }
  };
});
