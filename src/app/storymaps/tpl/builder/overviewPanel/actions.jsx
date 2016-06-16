import * as types from './actionTypes';

export function toggleOrganize() {
  return {
    type: types.TOGGLE_ORGANIZE,
    value: null
  };
}

export function changeSelectedItem(itemID) {
  return {
    type: types.CHANGE_SELECTED_ITEM,
    value: itemID
  };
}

export function updateItems(items) {
  return {
    type: types.UPDATE_ITEMS,
    value: items
  };
}

export function updateOrder(order) {
  return {
    type: types.UPDATE_ORDER,
    value: order
  };
}
