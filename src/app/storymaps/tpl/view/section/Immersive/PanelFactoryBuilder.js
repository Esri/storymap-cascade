define([
  'storymaps-react/tpl/view/section/Immersive/PanelBuilder'
],
function(
  Panel
) {

  var DEFAULT_LAYOUT = 'scroll-full';
  var DEFAULT_SETTINGS = {
    'position-x': 'left',
    size: 'medium',
    style: 'background',
    theme: 'white-over-black'
  };
  var DEFAULT_BLOCKS = [
    {
      type: 'text',
      text: {
        value: '<p class="block"></p>'
      }
    }
  ];

  return {
    createInstance: function(panelJSON, transition, callbacks) {

      if (! panelJSON) {
        var newPanelJSON = {
          'layout': DEFAULT_LAYOUT,
          'settings': DEFAULT_SETTINGS,
          'blocks': DEFAULT_BLOCKS
        };

        return new Panel(newPanelJSON, transition, callbacks);
      }
      else {
        return new Panel(panelJSON, transition, callbacks);
      }
    },
    duplicateWithoutContent: function(panelJSON, transition, callbacks) {
      var newPanelJSON = {};

      if (panelJSON) {
        newPanelJSON = JSON.parse(JSON.stringify(panelJSON));
        newPanelJSON.blocks = DEFAULT_BLOCKS;
      }
      else {
        newPanelJSON = {
          'layout': DEFAULT_LAYOUT,
          'settings': DEFAULT_SETTINGS,
          'blocks': DEFAULT_BLOCKS
        };
      }

      return new Panel(newPanelJSON, transition, callbacks);
    }
  };
});
