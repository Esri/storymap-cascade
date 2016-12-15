/*
  This module abstracts away some of the data fetching used with a normalized app.
  See http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html for more on normalized data structure and the inspiration behind this in Cascade.
  It works with data with this structure:

  table: {
    byId: {
      item1: {
        id: 'item1',
        // any more properties
      }
    },
    allItems: ['item1']
  }
 */
export default class NormalizeHelper {
  static getAllItems(table) {
    var allItems = [];
    // get all of the items from a normalized data structure "table"
    // loop through allItems
    for (var i = 0; i < table.allItems.length; i++) {
      var id = table.allItems[i];
      // get the item byId
      var item = table.byId[id];
      // add that item in
      allItems.push(item);
    }

    return allItems;
  }

  // returns an empty, normalized object.
  static createObject() {
    return {
      byId: {},
      allItems: []
    };
  }

  // adds the entry to the table, by adding the item's ID to the allItems array,
  // and also by adding the item to the byId object -- key is the ID, value is the data.
  static addEntry(table, id, data) {
    table.allItems.push(id);
    table.byId[id] = data;
  }
}
