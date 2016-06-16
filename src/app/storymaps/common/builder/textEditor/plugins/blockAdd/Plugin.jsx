import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

/*
 * Based on Medium Insert Plugin 3.0 development branch on 04/14
 * https://github.com/orthes/medium-editor-insert-plugin
 */

import Core from './Core';

const BlockAdd = MediumEditor.Extension.extend({
  name: 'blockAdd',

  _initializedAddons: {},

  init: function() {
    MediumEditor.Extension.prototype.init.apply(this, arguments);

    this.core = new Core(this);
  },

  destroy: function() {
    this.core.destroy();
  },

  getCore: function() {
    return this.core;
  },

  getButtons: function() {
    return this.buttons;
  },

  getBlocksSelector: function() {
    return this.blocksSelector;
  },

  update: function() {
    this.core.update();
  },

  hide: function() {
    this.core.hideMenuAndInvite();
  },

  setPlacementRules(rules) {
    this.core.setPlacementRules(rules);
  }
});

export default BlockAdd;
