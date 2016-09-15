import { combineReducers } from 'redux';

import constants from '../constants';
import * as types from './actionTypes';

var commonMembers = {
  albums: [],
  selectedAlbum: {},
  images: [],
  displayedContent: constants.galleryContent.ALBUMS,
  albumFetchStatus: constants.fetchStatus.NOT_FETCHED,
  imageFetchStatus: constants.fetchStatus.NOT_FETCHED,
  userName: ''
};

var flickrMembers = {
  selectedTab: constants.searchType.TEXT,
  selectedUser: '',
  userSearchTerm: '',
  userLicense: constants.flickrLicenseStrings.ANY, // possibly in google photos as well
  photoSearchTerm: '',
  photoLicense: constants.flickrLicenseStrings.COMMERCIAL
};

var googlePhotosMembers = {};

var agolMembers = {
  displayedContent: constants.galleryContent.AGOL,
  searchLocation: constants.searchLocation.MINE,
  searchStr: '',
  sortField: constants.sortField.DATE,
  sortOrder: constants.sortOrder.DESC
};

var unsplashMembers = {
  photoSearchTerm: ''
};

var urlMembers = {

};

var flickrState = Object.assign({}, commonMembers, flickrMembers);
var googlePhotosState = Object.assign({}, commonMembers, googlePhotosMembers);
var agolState = Object.assign({}, commonMembers, agolMembers);
var unsplashState = Object.assign({}, commonMembers, unsplashMembers);
var urlState = Object.assign({}, commonMembers, urlMembers);

function flickr(state = flickrState, action) {
  if (!checkProvider(action, constants.providers.FLICKR)) {
    return state;
  }
  var stateProp, actionProp;
  switch (action.type) {
    case types.UPDATE_USER_SEARCH_TERM:
      stateProp = 'userSearchTerm', actionProp = 'term';
      break;
    case types.UPDATE_PHOTO_SEARCH_TERM:
      stateProp = 'photoSearchTerm', actionProp = 'term';
      break;
    case types.UPDATE_SEARCH_TYPE:
      stateProp = 'selectedTab', actionProp = 'type';
      break;
    case types.UPDATE_USER_LICENSE:
      stateProp = 'userLicense', actionProp = 'license';
      break;
    case types.UPDATE_PHOTO_LICENSE:
      stateProp = 'photoLicense', actionProp = 'license';
      break;
    default:
      return generic(state, action);
  }
  return Object.assign({}, state, {[stateProp]: action.value[actionProp]});
}

function googlePhotos(state = googlePhotosState, action) {
  if (!checkProvider(action, constants.providers.GOOGLE_PHOTOS)) {
    return state;
  }
  return generic(state, action);
}

function unsplash(state = unsplashState, action) {
  if (!checkProvider(action, constants.providers.UNSPLASH)) {
    return state;
  }
  var stateProp, actionProp;
  switch (action.type) {
    case types.UPDATE_PHOTO_SEARCH_TERM:
      stateProp = 'photoSearchTerm', actionProp = 'term';
      break;
    default:
      return generic(state, action);
  }
  return Object.assign({}, state, {[stateProp]: action.value[actionProp]});
}

function agol(state = agolState, action) {
  if (!checkProvider(action, constants.providers.ARCGIS)) {
    return state;
  }
  var stateProp, actionProp;
  switch (action.type) {
    case types.UPDATE_SEARCH_LOCATION:
      stateProp = 'searchLocation', actionProp = 'type';
      break;
    case types.UPDATE_SEARCH_TERM:
      stateProp = 'searchStr', actionProp = 'term';
      break;
    case types.UPDATE_SORT_FIELD:
      stateProp = 'sortField', actionProp = 'field';
      break;
    case types.UPDATE_SORT_ORDER:
      stateProp = 'sortOrder', actionProp = 'order';
      break;
    default:
      return generic(state, action);
  }
  return Object.assign({}, state, {[stateProp]: action.value[actionProp]});
}

function urlContent(state = urlState, action) {
  if (!checkProvider(action, constants.providers.URL)) {
    return state;
  }
  return generic(state, action);
}

function checkProvider(action, thisProvider) {
  if (action && action.value && action.value.providerType === thisProvider) {
    return true;
  }
  return false;
}

function generic(state, action) {
  var stateProp, actionProp;
  switch (action.type) {
    case types.UPDATE_ALBUMS:
      stateProp = 'albums', actionProp = 'albums';
      break;
    case types.UPDATE_ALBUM_FETCH_STATUS:
      stateProp = 'albumFetchStatus', actionProp = 'fetchStatus';
      break;
    case types.UPDATE_IMAGE_FETCH_STATUS:
      stateProp = 'imageFetchStatus', actionProp = 'fetchStatus';
      break;
    case types.UPDATE_USERNAME:
      stateProp = 'userName', actionProp = 'userName';
      break;
    case types.UPDATE_DISPLAYED_CONTENT:
      stateProp = 'displayedContent', actionProp = 'displayedContent';
      break;
    case types.UPDATE_IMAGES:
      stateProp = 'images', actionProp = 'images';
      break;
    case types.UPDATE_SELECTED_ALBUM:
      stateProp = 'selectedAlbum', actionProp = 'selectedAlbum';
      break;
    default: {
      return state;
    }
  }
  return Object.assign({}, state, {[stateProp]: action.value[actionProp]});
}

export default combineReducers({
  flickr,
  googlePhotos,
  agol,
  unsplash,
  urlContent
});