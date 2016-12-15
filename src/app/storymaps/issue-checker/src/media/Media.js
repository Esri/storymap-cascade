export default class Media {
  static check(items, mediaType) {
    let allPromises = [];

    // check each item.
    for (let item of items) {
      let itemPromise = this._checkItem(item);
      allPromises.push(itemPromise);
    }

    return Promise.all(allPromises)
    .then(results => {
      return {
        mediaType: mediaType,
        items: results
      };
    });
  }

  _checkItem() {

  }
}
