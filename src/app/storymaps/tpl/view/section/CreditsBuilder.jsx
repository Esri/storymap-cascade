import Credits from './Credits';
import AddMenu from './builder/AddMenu';

import i18n from 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./CreditsBuilder';
import MediumEditorWrapper from 'storymaps-react/common/builder/textEditor/MediumEditorWrapper';
import lang from 'dojo/_base/lang';

const DEFAULT_BACKGROUND_COLOR = '#000';

export default class CreditsBuilder extends Credits {

  constructor(section) {
    super(section);

    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
  }

  render() {
    if (!this._section.background) {

      this._section = {
        type: 'credits',
        layout: 'credits-1',
        background: {
          type: 'color',
          color: {
            value: DEFAULT_BACKGROUND_COLOR
          }
        },
        foreground: {
          panels: [
            {
              type: 'blocks',
              blocks: [
                {
                  type: 'text',
                  text: {
                    value: '<p class="block" style="text-align: center;"></p>'
                  }
                }
              ]
            },
            {
              type: 'credits',
              credits: []
            }/*,
            {
              type: 'discover',
              discover: {
                title: '',
                items: [
                  {
                    title: 'foo',
                    thumbnail: 'http:// ... .jpg',
                    link: 'http://myotherstory'
                  }
                ]
              }
            }*/
          ]
        }
      };
    }

    return super.render();
  }

  postCreate(params) {
    super.postCreate(params);

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
    });

    // find children of .credits that are class blocks.
    // whichever index they are of the parent is whichever index of this._panels you need to instantiate an editor on.
    let blocks = this._node.find('.credits > .blocks');

    for (let block of blocks) {
      // get the index
      let index = $(block).index();

      this._panels[index].editor = new MediumEditorWrapper({
        node: $(block),
        addMedia: function() { },
        style: 'compact',
        addButtons: null,
        authorizedMedia: [],
        placeholder: i18n.builder.credits.introductionPlaceholder
      });
    }
  }

  focus() {
    setTimeout(function() {
      if (this._panels[0] && this._panels[0].editor) {
        this._panels[0].editor.focus();
      }
    }.bind(this), 50);
  }

  serialize() {
    let panels = [];

    // loop through each panel, serializing each one and writing the results to the panels object.
    for (let i = 0; i < this._panels.length; i++) {
      let panel = this._panels[i];
      if (panel.type === 'credits') {
        // have to get the serialize method from somewhere...
        panels.push(panel.credits.serialize());
      }
      else if (panel.type === 'blocks') {
        panels.push(this.serializeBlocks(panel));
      }
    }

    // write the panels to the section (via the foreground)
    this._section.foreground.panels = panels;

    return lang.clone(this._section);
  }

  serializeBlocks(panel) {
    let blocks = [];

    if (panel.editor) {
      blocks = panel.editor.serialize();

      for (let i = 0; i < blocks.length; i++) {
        let editorBlock = blocks[i];
        // if it's media, it's at a "deeper level" of serialization.
        if (editorBlock.type === 'media') {
          let block = this.findBlock(panel, editorBlock.id);
          if (block) {
            blocks[i] = block.serialize();
          }
        }
      }

      panel.blocks = blocks;
    }

    return {
      type: 'blocks',
      blocks: blocks
    };
  }

  findBlock(panel, id) {
    if (!id) {
      return null;
    }

    for (let block of panel.blocks) {
      if (block._domID === id) {
        return block;
      }
    }
  }
}
