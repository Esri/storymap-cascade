import * as types from './actionTypes';

function overviewPanel(state = {}, action) {
  switch (action.type) {
    case types.CHANGE_SELECTED_ITEM:
      return Object.assign({}, state, { selectedItem: action.value });
    case types.TOGGLE_ORGANIZE:
      return Object.assign({}, state, { organize: !state.organize });
    case types.UPDATE_ITEMS:
      return Object.assign({}, state, { items: action.value });
    case types.UPDATE_ORDER:      
      return Object.assign({}, state, { order: action.value });
    default:
      return state;
  }
}

export default overviewPanel;
