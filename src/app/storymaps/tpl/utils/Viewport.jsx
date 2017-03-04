export default class Viewport {
  static isInViewport(itemNode) {
    let viewportTop = app.display.scrollTop;
    let viewportBottom = viewportTop + app.display.windowHeight;
    let itemTop = itemNode.offset().top;
    let itemBottom = itemTop + itemNode.outerHeight();

    let completelyAboveViewport = itemBottom < viewportTop;
    let completelyBelowViewport = viewportBottom < itemTop;
    /*
    if bottom of item is above top of viewport
    OR
    bottom of viewport is above top of item

    It is completely off-viewport.
    */
    if (completelyAboveViewport || completelyBelowViewport) {
      return false;
    }
    else {
      return true;
    }
  }

  /*
  Summary: Tells whether an item is at between:
  Top: not totally above the viewport
  Bottom: within x px close below the viewport
  In other words, if an item is near the bottom of the viewport, or is partially on-screen, will be true.
  */
  static isNearViewportBottom(itemNode, pixelTolerance) {
    let viewportTop = app.display.scrollTop;
    let viewportBottom = viewportTop + app.display.windowHeight;
    let itemTop = itemNode.offset().top;
    let itemBottom = itemTop + itemNode.outerHeight();

    // if the top of the item is within x pixels of the bottom of the viewport, it's true.
    // also true if the item is on screen
    let nearViewportBottom = itemTop - viewportBottom <= pixelTolerance;
    let notAboveViewport = itemBottom >= viewportTop;
    if (nearViewportBottom && notAboveViewport) {
      return true;
    }
    else {
      return false;
    }
  }

  /*
  Summary: Tells whether an item is at between:
  Top: within x px close above the viewport
  Bottom: not totally below the viewport
  In other words, if an item is near the top of the viewport, or is partially on-screen, will be true.
  */
  static isNearViewportTop(itemNode, pixelTolerance) {
    let viewportTop = app.display.scrollTop;
    let viewportBottom = viewportTop + app.display.windowHeight;
    let itemTop = itemNode.offset().top;
    let itemBottom = itemTop + itemNode.outerHeight();

    // if bottom of item is within x pixels of the top of the viewport, it's true.
    let nearViewportTop = viewportTop - itemBottom <= pixelTolerance;
    // also true if the item is on screen
    let notBelowViewport = itemTop <= viewportBottom;
    if (nearViewportTop && notBelowViewport) {
      return true;
    }
    else {
      return false;
    }
  }
}
