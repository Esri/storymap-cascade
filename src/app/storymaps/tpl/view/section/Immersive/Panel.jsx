import SectionCommon from 'storymaps-react/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';

import {} from 'lib-build/less!./Panel';

import viewTpl from 'lib-build/hbars!./Panel';

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

  _getPanelViewportDistance(clientRect, panelHeight, windowHeight) {
    const distanceFromTop = clientRect.top;
    return {
      top: (distanceFromTop - windowHeight) * -1,
      bottom: (distanceFromTop + panelHeight - windowHeight) * -1
    };
  }

  _determinePartialOpacity(ratio, upperBound, lowerBound, isTop) {
    // how much distance between opaque and transparent
    const totalFadeableDistance = upperBound - lowerBound;
    // how far the panel's edge is from the opaque boundary
    const distanceFromFullyOpaque = isTop ? upperBound - ratio : ratio - lowerBound;

    // determine opacity level -- how far from opaque (ratio-wise) the panel's edge is.
    const fadingOpacity = 1 - (distanceFromFullyOpaque / totalFadeableDistance);

    return fadingOpacity;
  }

  _determineOpacity(topRatio, bottomRatio) {
    // panels are fully opaque as long as any part of panel is in the "opaque zone" (.45 - .55).
    // top fades in from .05 to .45, botom fades out from .55 to .95
    const UPPER_HIDDEN_BOUND = 0.95;
    const UPPER_OPAQUE_BOUND = 0.55;
    const LOWER_OPAQUE_BOUND = 0.45;
    const LOWER_HIDDEN_BOUND = 0.05;

    let opacity = 0;

    // hidden -- bottom is above hidden boundary
    if (bottomRatio >= UPPER_HIDDEN_BOUND) {
      opacity = 0;
    }
    // fading out -- bottom is between opaque boundary and hidden boundary
    else if (bottomRatio > UPPER_OPAQUE_BOUND && bottomRatio < UPPER_HIDDEN_BOUND) {
      opacity = this._determinePartialOpacity(bottomRatio, UPPER_HIDDEN_BOUND, UPPER_OPAQUE_BOUND, false);
    }
    // fully opaque (any part of panel is in the "opaque zone")
    else if (topRatio >= LOWER_OPAQUE_BOUND && bottomRatio <= UPPER_OPAQUE_BOUND) {
      opacity = 1;
    }
    // fading in -- top is between hidden boundary and opaque boundary
    else if (topRatio > LOWER_HIDDEN_BOUND && topRatio < LOWER_OPAQUE_BOUND) {
      opacity = this._determinePartialOpacity(topRatio, LOWER_OPAQUE_BOUND, LOWER_HIDDEN_BOUND, true);
    }
    // hidden -- top is below hidden boundary
    else {
      opacity = 0;
    }

    return opacity;
  }

  _updateScrollPartialPosition(params) {
    if (!this._node) {
      return;
    }

    const panelNode = this._node.find('.blocks')[0];

    if (!panelNode) {
      return;
    }

    // get the height of the panel
    const clientRect = panelNode.getBoundingClientRect();
    const panelHeight = clientRect.height;
    // find how far from the bottom of the viewport the top and bottom of the panel are.
    const panelDistances = this._getPanelViewportDistance(clientRect, panelHeight, params.windowHeight);

    // how far up the viewport the top of the panel is (0 at bottom, 1 at top)
    const topRatio = panelDistances.top / params.windowHeight;

    // how far up the viewport the bottom of the panel is (0 at bottom, 1 at top)
    const bottomRatio = panelDistances.bottom / params.windowHeight;

    // figure out the opacity for the panel based on the distance.
    const opacity = this._determineOpacity(topRatio, bottomRatio);

    panelNode.style.opacity = opacity;
  }

  _updateScrollFullPosition(params) {
    // if viewScroll is falsey but NOT 0 (0 is allowed)
    if (!params.viewScroll && params.viewScroll !== 0) {
      return;
    }

    if (!app.isInBuilder && this._node) {
      // how far up the viewport the top of the panel is
      const scrollProgress = params.viewScroll / params.windowHeight;
      const FADE_IN_LINE = 0.05;

      // fade it in if it's more than that amount up the panel
      if (!this._node.hasClass('bring-in') && scrollProgress > FADE_IN_LINE) {
        this._node.addClass('bring-in');
      }
      // fade out if it goes back down below the fade in line
      // for some reason, the last view's panel can have the scrollProgress of 0 again... after it's scrolled all the way through
      // and you're leaving the section.
      // We don't want to remove the bring-in class in that case
      else if (scrollProgress < FADE_IN_LINE && !params.isNavigatingAway) {
        this._node.removeClass('bring-in');
      }
    }
  }

  updatePosition(params) {
    if (this.layout === 'scroll-partial') {
      this._updateScrollPartialPosition(params);
    }
    else {
      this._updateScrollFullPosition(params);
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
