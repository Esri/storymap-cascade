define([
  'storymaps-react/tpl/view/section/Immersive/Panel'
],
function(
  Panel
) {
  return {
    createInstance: function(panelJSON, transition) {
      return new Panel(panelJSON, transition);

      /*
      var layout = panelJSON.layout,
          panel = null;

      if (layout == 'scroll-full') {
        panel = new PanelScrollFull(panelJSON);
      }
      else if (layout == 'scroll-partial') {
        panel = new PanelScrollPartial(panelJSON);
      }
      else {
        console.error('Could not find corresponding layout for: ', panelJSON);
      }

      return panel;
      */
    }
  };
});
