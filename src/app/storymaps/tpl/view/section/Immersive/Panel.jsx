import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';

import {} from 'lib-build/less!./Panel';

import viewTpl from 'lib-build/hbars!./Panel';

const BUILDER_PANEL_HEIGHT = 125;

export default class Panel {
  constructor(panel, transition) {
    this.id = UIUtils.getUID();
    this.layout = panel.layout;

    this._viewTransition = transition;
    this._settings = panel.settings;
    this._blocksJSON = panel.blocks;
    this._blocks = null;

    this._node = null;
  }

  render() {
    var blocksRender = SectionCommon.renderBlocks(this._blocksJSON, {});

    this._blocks = blocksRender.blocks;

    return viewTpl({
      id: this.id,
      classes: this.getClasses(),
      blocks: blocksRender.output
    });
  }

  load() {
    for (let block of this._blocks) {
      block.load();
    }
  }

  postCreate(params = {}) {
    if (! params.container) {
      return;
    }

    this._node = params.container.find('#' + this.id);
    this._node.parent().find('.imm-panel').attr('role', 'complementary');

    for (let block of this._blocks) {
      block.postCreate({
        container: this._node,
        onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
        onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
        builderConfigurationTabs: this._mediaConfigurationTabs,
        sectionType: 'immersive'
      });

      if (!app.isInBuilder) {
        block._node && block._node.addClass('bring-in');
      }
    }

    // In builder - hide the panel if panel has only one empty text block
    if (! app.isInBuilder && this._blocks.length == 1
        && this._blocks[0].type == 'text' && ! this._blocks[0].getPreviewText()) {
      this._node.find('.blocksWrapper').hide();
    }
  }

  getClasses() {
    var classes = ['imm-panel'];

    if (this._settings) {
      classes.push('style-' + this._settings.style);
      classes.push('theme-' + this._settings.theme);
      classes.push('placement-' + this._settings['position-x']);
      classes.push('size-' + this._settings.size);
    }

    classes.push('view-transition-' + this._viewTransition);

    return classes.join(' ');
  }

  updatePosition(params) {
    if (! params.currentSectionScroll) {
      return;
    }

    // windowHeight as this is in Immersive and scroll beneath the header and builder panel
    const sectionHeight = app.display.windowHeight;
    const scrollTop = params.currentSectionScroll % sectionHeight;
    const scrollingViewIndex = Math.floor(params.currentSectionScroll / sectionHeight);
    const scrollProgress = scrollTop / sectionHeight;
    let panelPos = null;
    let panelOpa = 1;

    /*
     * Scroll full is a simple postion:relative element that scroll along with the page
     */

    if (this.layout == 'scroll-partial') {
      // Move the panel around the middle of the viewPort
      // Goal is that the panel is fully opaque at the middle of the screen
      // The panel only scroll over sectionHeight / 4
      // 100px is 1/2 of panel height, it should be replaced a real measurement TODO

      // Keep the header on purpose
      let visibleArea = app.display.windowHeight;
      if (app.isInBuilder) {
        visibleArea -= BUILDER_PANEL_HEIGHT;
      }

      let middlePositionY = (visibleArea / 2),
          panelHalfHeight = 75;

      panelPos = middlePositionY + panelHalfHeight - (scrollProgress * (sectionHeight / 4));

      // Should use GSOP or some other lib to compute this
      if (scrollProgress <= 0.5) {
        panelOpa = scrollProgress * 2 * 1.5; // 1.5 acceleration factor
      }
      else {
        panelOpa = 1 - (scrollProgress - 0.5) * 2 / 1.5;
      }

      if (panelOpa > 1) {
        panelOpa = 1;
      }
      else if (panelOpa < 0) {
        panelOpa = 0;
      }

      if (panelOpa > 0.9) {
        panelOpa = 1;
      }

      this._node.parent().find('.imm-panel').css({
        transform: 'inherit',
        opacity: 0,
        visibility: 'hidden'
      });
      this._node.css({
        transform: 'translateY(' + parseInt(panelPos) + 'px)',
        opacity: panelOpa,
        visibility: 'visible'
      });
    }
    else {
      if (!app.isInBuilder && this._node) {
        if (!this._node.hasClass('bring-in') && scrollProgress > 0.05) {
          this._node.addClass('bring-in');
        }
        // for some reason, the last view's panel can have the scrollProgress of 0 again... after it's scrolled all teh way up.
        // We don't want to remove the bring-in class in that case... so ew make sure it only happens
        // when the scrollProgress 0 is "when the element is below screen".
        // we use the panelIndex and compare that with how far the immersive section has been scrolled -- i.e.
        // how many "views-worth" of immersive has been scrolled. If it's more than the index,
        // we know we've scrolled THROUGH the last view, and so we don't want to remove the class.
        else if (scrollProgress < 0.05 && scrollingViewIndex === params.panelIndex) {
          this._node.removeClass('bring-in');
        }
      }
    }
  }

  getArcGISContent() {
    let arcgisContent = [];

    for (let block of this._blocks) {
      arcgisContent.push(... block.getArcGISContent());
    }

    return arcgisContent;
  }
}
