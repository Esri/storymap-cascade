import MediumEditor from 'lib/medium-editor/dist/js/medium-editor';

/*
 * Based on Medium Insert Plugin 3.0 development branch on 04/14
 * https://github.com/orthes/medium-editor-insert-plugin
 */

import Core from './Core';

const BlockToolbar = MediumEditor.Extension.extend({
  name: 'blockToolbar',

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

  getQueryStateMethods: function() {
    return this.queryStateMethods;
  },

  hide: function() {
    this.core.hideToolbarAndButton();
  },

  updateToolbar() {
    this.core.updateToolbarForElement(this.base.getSelectedParentElement());
  }
});

export default BlockToolbar;
