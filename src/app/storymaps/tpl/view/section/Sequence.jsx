import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';

import {} from 'lib-build/less!./Sequence';

var CONFIG = {
  backgroundMedia: ['color', 'image'],
  foregroundLayout: ['sequence-1'],
  foregroundMedia: ['image', 'video', 'webscene', 'webpage']
};

export default class Sequence {
  constructor(section) {
    this.type = 'sequence';
    this.id = UIUtils.getUID();

    this._section = section;

    this._node = null;
    this._isLoaded = false;
    this._blocks = null;
    this._backgroundMedia = null;
    this._isActive = false;
    this._sectionIndex = null;
  }

  render(index) {

    var output = '',
        foreground = this._section.foreground;

    if (SectionCommon.checkErrors(CONFIG, this._section, index)) {
      return output;
    }

    this._sectionIndex = index;

    output += '<div class="section section-layout-sequence ' + this._section.layout + '">';

    //
    // Background
    //

    this._backgroundMedia = SectionCommon.initMedia(this._section.background);
    output += SectionCommon.renderBackground({
      media: this._backgroundMedia
    });

    //
    // Foreground
    //

    output += '<div class="foreground">';
    if (foreground.blocks) {
      var blocksRenderer = SectionCommon.renderBlocks(
        foreground.blocks
      );

      this._blocks = blocksRenderer.blocks;

      output += blocksRenderer.output;
    }
    output += '</div>';

    output += '</div>';

    return output;
  }

  postCreate(node) {
    this._node = node;

    for (var block of this._blocks) {
      if (block.postCreate) {
        block.postCreate({
          container: node,
          onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
          onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
          builderConfigurationTabs: this.MEDIA_BUILDER_TABS
        });
      }
    }
  }

  getBookmark() {
    let bookmark = this._section.bookmark || {};

    return {
      status: bookmark.enabled ? 'visible' : 'disabled',
      title: this.getPreviewText ? this.getPreviewText() : '',
      bookmark: bookmark.title || (this.getPreviewText && this.getPreviewText())
    };
  }

  getNumberOfBlocks() {
    return this._section.foreground && this._section.foreground.blocks ? this._section.foreground.blocks.length : 0;
  }

  onScroll(params) {
    if (params.status == 'unload') {
      this._isActive = false;

      $.each(this._blocks, function(i, block) {
        block.performAction({
          isActive: false
        });
      });
    }
    else if (params.status == 'preload') {
      if (this._isLoaded) {
        return;
      }

      this._isLoaded = true;

      this._backgroundMedia.load();
      $.each(this._blocks, function(i, block) {
        block.load();
      });
    }
    else if (params.status == 'visible' || params.status == 'current') {
      //_backgroundMedia.load();
      //if (_isActive) {
      /*$.each(_blocks, function(i, block) {

        if (block.type != 'video') {
          block.load();
          block.performAction({
            visible: true
          });
        }
      });*/

      if (! this._isLoaded) {
        $.each(this._blocks, function(i, block) {
          block.load();
        });
      }

      this._isLoaded = true;

      /*
      // Video autoplay
      $.each(app.display.inlineVideos, function(i, video) {
        if (video.sectionIndex == this._sectionIndex) {
          if (video.bottom <= params.viewportBottom && video.top > params.viewportTop) {
            this._blocks[video.blockIndex].performAction({
              isActive: true
            });
          }
          else {
            this._blocks[video.blockIndex].performAction({
              isActive: false
            });
          }
        }
      });
      */
      //}
    }
    /*
    else if (! this._isLoaded) {
      this._isActive = true;
      this._isLoaded = true;

      this._backgroundMedia.load();
      $.each(this._blocks, function(i, block) {
        block.load();
      });

      this._isLoaded = true;
    }
    else {
      this._isActive = true;
    }
    */
  }

  resize(/*params*/) {
    // TODO: how to resize foreground blocks?
    //_backgroundMedia.resize(params);
  }

  getArcGISContent() {
    let arcgisContent = [];

    for (let block of this._blocks) {
      arcgisContent.push(... block.getArcGISContent());
    }

    return arcgisContent;
  }
}
