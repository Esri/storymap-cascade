import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';

import viewTpl from 'lib-build/hbars!./Credits';
import {} from 'lib-build/less!./Credits';
import {} from 'lib-build/css!../ui/AuthorInfo';

const CONFIG = {
  backgroundMedia: ['color'],
  foregroundLayout: ['credits-1']
};

export default class Credits {
  constructor(section) {
    this.type = 'credits';
    this.id = UIUtils.getUID();

    this._section = section;

    this._node = null;
    this._backgroundMedia = null;
    this._panels = [];
  }

  render(index) {
    let background = this._section.background;
    let foreground = this._section.foreground;
    let creditsOutput = '';

    if (SectionCommon.checkErrors(CONFIG, this._section, index)) {
      return '';
    }

    this._backgroundMedia = SectionCommon.initMedia({
      media: background
    });

    for (let panel of foreground.panels) {
      if (panel.type === 'blocks') {
        let blockRenderer = SectionCommon.renderBlocks(panel.blocks);

        this._panels.push({
          type: 'blocks',
          blocks: blockRenderer.blocks,
          editor: null
        });

        let blockOutput = '<div class="blocks">' + blockRenderer.output + '</div>';
        creditsOutput += blockOutput;
      }
      else if (panel.type === 'credits') {
        let credits = SectionCommon.initMedia({
          media: panel,
          mediaCache: null
        });

        this._panels.push({
          type: 'credits',
          credits: credits,
          editor: null
        });

        creditsOutput += credits.render({
          placement: 'block'
        });
      }
    }

    return viewTpl({
      background: SectionCommon.renderBackground({
        media: this._backgroundMedia
      }),
      credits: creditsOutput
    });
  }

  postCreate(sectionContainer) {
    this._node = sectionContainer;

    if (this._backgroundMedia.postCreate) {
      this._backgroundMedia.postCreate({container: this._node});
    }

    for (let panel of this._panels) {
      if (panel.type === 'blocks') {
        for(let block of panel.blocks) {
          block.postCreate({
            container: sectionContainer
          });
        }
      }
      else if (panel.type === 'credits') {
        panel.credits.postCreate({
          container: sectionContainer,
          onContentChange: app.isInBuilder ? this._onContentChange.bind(this) : null
        });
      }
    }
  }

  getPreviewThumbnail() {
    return '';
  }

  getPreviewText() {
    return '';
  }

  getPreviewIcon() {
    return '';
  }

  getArcGISContent() {
    return [];
  }

  onScroll() {
    //
  }

  resize() {
    //
  }
}
