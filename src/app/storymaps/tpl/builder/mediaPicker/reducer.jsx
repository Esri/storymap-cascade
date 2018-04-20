import { combineReducers } from 'redux';

import browsePanel from './browsePanel/reducer';
import constants from './constants';
import * as actionTypes from './actionTypes';

var initialState = {
  browseSelectedProvider: constants.providers.ARCGIS,
  authorizedMedia: []
};

var ui = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BROWSE_SELECT_PROVIDER:      
      return Object.assign({}, state, { browseSelectedProvider: action.value });
    case actionTypes.UPDATE_AUTHORIZED_MEDIA:
      return Object.assign({}, state, { authorizedMedia: action.value });
    default: {
      return state;
    }
  }
};

export default combineReducers({
  ui,
  browsePanel
});
