export default class WebSceneCache {
  constructor() {
    this._items = [];
    this._IDEAL_MAX_ITEMS = 2;
  }

  add(item, addIfFull) {
    // if the cache hasn't reached capacity
    if (this._items.length < this._IDEAL_MAX_ITEMS) {
      // see if any are the same as this one.
      let sameInstanceIndex = this._findInstanceIndex(item);
      // if so, see if they are the same instance (in that case, do nothing)
      if (sameInstanceIndex !== -1) {
        this._replaceItem(item, sameInstanceIndex);
      }
      // else add the item to the cache.
      else {
        this._addItem(item);
      }
    }
    // if capacity has been reached, we'll add this one but try to remove an item as well.
    else if (addIfFull) {
      // see if an item exists with the same ID
      let sameInstanceIndex = this._findInstanceIndex(item);

      if (sameInstanceIndex !== -1) {
        this._replaceItem(item, sameInstanceIndex);
      }
      // if doesn't exist
      else {
        // add this item, and (conditionally) remove another
        this._bumpOnItem(item);
      }
    }
  }

  _bumpOnItem(item) {
    // add this item
    this._addItem(item);

    let addedItemIndex = this._findInstanceIndex(item);
    let firstItem = this._items[0];
    let lastItem = this._items[this._items.length - 1];

    // if added at the beginning, remove the item on the other end.
    if (addedItemIndex === 0) {
      // remove item if it can be removed (not visible on-screen)
      if (lastItem.canRemove()) {
        this._removeItem(lastItem);
      }
    }
    // if added item on an end, find the item at the beginning and remove it.
    else if (addedItemIndex === this._items.length - 1) {
      if (firstItem.canRemove()) {
        this._removeItem(firstItem);
      }
    }
    // if added somewhere in the middle, find the first item and remove it.
    else {
      if (firstItem.canRemove()) {
        this._removeItem(firstItem);
      }
      // if the first one is on-screen, try removing the last one.
      else if (lastItem.canRemove()) {
        this._removeItem(lastItem);
      }
    }
  }

  _addSameID(item, sameIDIndex) {
    let itemWithSameID = this._items[sameIDIndex];
    // if they are different instances (different DOM nodes),
    if (itemWithSameID.item._domID !== item.item._domID) {
      // replace the existing item with this one
      this._replaceItem(item, sameIDIndex);
    }
    // if they're the same instance, do nothing.
  }

  _removeItem(item) {
    // take off of array
    let itemIndex = this._findInstanceIndex(item);

    this._items.splice(itemIndex, 1);

    // unload the scene
    item.item.unload();
  }

  _replaceItem(item, indexToReplace) {
    // replace the existing item -- no loading/unloading of the item.
    this._items[indexToReplace] = item;

    // to prevent trying to load this item again, set it to "loaded".
    item.item.setLoaded(true);
  }

  _addItem(item) {
    // load the item.
    item.item.load();
    // add item to the cache.
    this._items.push(item);

    // sort array (may be out of order now)
    this._sort();
  }

  _sort() {
    this._items.sort((firstItem, secondItem) => {

      // order by top-most (in story) scene first.
      // best to calculate offset here each time we sort since device orientation or builder changes (add/remove/duplicate/etc) can change items' locations

      // two-level sort algorithm from raina77ow: http://stackoverflow.com/questions/13211709/javascript-sort-array-by-multiple-number-fields

      let offsetDifference = firstItem.item._node.offset().top - secondItem.item._node.offset().top;

      // if the offsets are the same (two immersive views in the same section), sort by the view index
      if (offsetDifference === 0 && firstItem.hasOwnProperty('viewIndex') && secondItem.hasOwnProperty('viewIndex')) {
        return firstItem.viewIndex - secondItem.viewIndex;
      }
      else {
        return offsetDifference;
      }
    });
  }

  _findInstanceIndex(item) {
    // returns the index if 1) both use the same AGOL scene and 2) if they are the same DOM instance
    return this._items.findIndex(cachedItem => {
      return cachedItem.item.id === item.item.id && cachedItem.item._node.is(item.item._node);
    });
  }
}
