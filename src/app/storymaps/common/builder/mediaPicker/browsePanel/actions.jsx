import * as types from './actionTypes';

export function updateAlbums(albumObj) {
  return {
    type: types.UPDATE_ALBUMS,
    value: albumObj
  };
}

export function updateAlbumFetchStatus(statusObj) {
  return {
    type: types.UPDATE_ALBUM_FETCH_STATUS,
    value: statusObj
  };
}

export function updateImageFetchStatus(statusObj) {
  return {
    type: types.UPDATE_IMAGE_FETCH_STATUS,
    value: statusObj
  };
}

export function updateUsername(usernameObj) {
  return {
    type: types.UPDATE_USERNAME,
    value: usernameObj
  };
}

export function updateDisplayedContent(displayedContentObj) {
  return {
    type: types.UPDATE_DISPLAYED_CONTENT,
    value: displayedContentObj
  };
}

export function updateImages(imagesObj) {
  return {
    type: types.UPDATE_IMAGES,
    value: imagesObj
  };
}

export function updateSelectedAlbum(selectedAlbumObj) {
  return {
    type: types.UPDATE_SELECTED_ALBUM,
    value: selectedAlbumObj
  };
}

export function updateSearchType(searchType) {
  return {
    type: types.UPDATE_SEARCH_TYPE,
    value: searchType
  };
}

export function updateUserSearchTerm(searchTerm) {
  return {
    type: types.UPDATE_USER_SEARCH_TERM,
    value: searchTerm
  };
}

export function updatePhotoSearchTerm(searchTerm) {
  return {
    type: types.UPDATE_PHOTO_SEARCH_TERM,
    value: searchTerm
  };
}

export function updateUserLicense(license) {
  return {
    type: types.UPDATE_USER_LICENSE,
    value: license
  };
}

export function updatePhotoLicense(license) {
  return {
    type: types.UPDATE_PHOTO_LICENSE,
    value: license
  };
}

export function updateSearchLocation(location) {
  return {
    type: types.UPDATE_SEARCH_LOCATION,
    value: location
  };
}

export function updateSearchTerm(term) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    value: term
  };
}

export function updateSortField(field) {
  return {
    type: types.UPDATE_SORT_FIELD,
    value: field
  };
}

export function updateSortOrder(order) {
  return {
    type: types.UPDATE_SORT_ORDER,
    value: order
  };
}