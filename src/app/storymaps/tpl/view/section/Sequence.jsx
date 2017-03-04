import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';
import Viewport from 'storymaps-react/tpl/utils/Viewport';

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

    let promises = [];

    for (let block of this._blocks) {
      if (block.postCreate) {
        let createResult = block.postCreate({
          container: node,
          onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
          onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
          builderConfigurationTabs: this.MEDIA_BUILDER_TABS
        });

        if (createResult && createResult.isAsync) {
          promises.push(createResult.promise);
        }
      }
    }

    return promises;
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
        if (block.type !== 'webscene') {
          block.load();
        }
      });

      this._loadWebScenes(params.webSceneCache, true, params.scrollDifference);
    }
    else if (params.status == 'visible' || params.status == 'current') {

      if (! this._isLoaded) {
        $.each(this._blocks, function(i, block) {
          if (block.type !== 'webscene') {
            block.load();
          }
        });
      }

      this._loadWebScenes(params.webSceneCache, false, params.scrollDifference);

      this._isLoaded = true;
    }
  }

  _loadWebScenes(cache, isPreload, scrollDifference) {
    if (app.data.errorWebGL) {
      return;
    }

    let addIfFull = !isPreload;
    let sceneBlocks = this._blocks.filter(item => {
      return item.type === 'webscene';
    });
    const PIXEL_TOLERANCE = 750;

    for (let sceneBlock of sceneBlocks) {
      // load the scene if it's not already loaded and either if it's in the viewport OR it's being preloaded (try to load it in that case).
      if (!sceneBlock._isLoaded) {
        let nearViewport = false;
        // if scrolling down/static, load if within x pixels of the viewport bottom
        if (scrollDifference >= 0) {
          nearViewport = Viewport.isNearViewportBottom(sceneBlock._node, PIXEL_TOLERANCE);
        }
        // if scrolling up, load if within x pixels of the viewport top
        else {
          nearViewport = Viewport.isNearViewportTop(sceneBlock._node, PIXEL_TOLERANCE);
        }

        if (isPreload || nearViewport) {
          // check if it's in view... if it's not loaded.
          let addParams = {
            item: sceneBlock,
            sectionType: 'sequential',
            canRemove: () => {
              return !Viewport.isInViewport(sceneBlock._node);
            }
          };

          cache.add(addParams, addIfFull);
        }
      }
    }
  }

  resize(params) {
    for (let block of this._blocks) {
      block.resize && block.resize();
    }

    this._loadWebScenes(params.webSceneCache, false, 0);
  }

  getArcGISContent() {
    let arcgisContent = [];

    for (let block of this._blocks) {
      arcgisContent.push(... block.getArcGISContent());
    }

    return arcgisContent;
  }
}
