export default {
  providers: {
    GOOGLE_PHOTOS: 'googlePhotos',
    FLICKR: 'flickr',
    ARCGIS: 'arcgis',
    URL: 'urlContent'
  },
  contentType: {
    IMAGE: 'image',
    VIDEO: 'video',
    WEBPAGE: 'webpage',
    WEBMAP: 'webmap',
    WEBSCENE: 'webscene'
  },
  fetchStatus: {
    NOT_FETCHED: 'NOT_FETCHED',
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    NON_MATCHING_URL: 'NON_MATCHING_URL',
    NOT_AUTHORIZED: 'NOT_AUTHORIZED',
    NOT_FOUND: 'NOT_FOUND',
    BAD_FORMAT: 'BAD_FORMAT'
  },
  galleryContent: {
    ALBUMS: 'ALBUMS',
    IMAGES: 'IMAGES',
    AGOL: 'AGOL',
    IMG_HEIGHT: 100, // this also needs to be changed in GalleryItem.less
    ALBUM_HEIGHT: 150 // this also needs to be changed in GalleryItem.less
  },
  searchType: {
    USER: 'USER',
    TEXT: 'TEXT'
  },
  searchLocation: {
    STORY: 'STORY',
    AGOL: 'AGOL',
    ORG: 'ORG',
    MINE: 'MINE'
  },
  // these are from REST API, Managing your org > Concepts > Items and item types
  // decided not to do stored images because of token issues.
  agolContentType: {
    WEBMAP: 'Web Map',
    WEBSCENE: 'Web Scene',
    IMAGE: 'Image'
  },
  sortField: {
    DATE: 'modified',
    TITLE: 'title'
  },
  sortOrder: {
    ASC: 'asc',
    DESC: 'desc'
  },
  flickrLicenseStrings: {
    PUBLIC_DOMAIN: 'PUBLIC_DOMAIN',
    COMMERCIAL: 'COMMERCIAL',
    NON_COMMERCIAL: 'NON_COMMERCIAL',
    ALL_RIGHTS_RESERVED: 'ALL_RIGHTS_RESERVED',
    ANY: 'ANY'
  },
  flickrLicenseVals: {
    PUBLIC_DOMAIN: [8, 9, 10],
    COMMERCIAL: [4, 5, 8, 9, 10],
    NON_COMMERCIAL: [1, 2, 4, 5, 8, 9, 10],
    ANY: [0, 1, 2, 4, 5, 8, 9, 10]
  },
  userFetchError: {
    NO_USER: 'NO_USER',
    NO_PHOTOS: 'NO_PHOTOS',
    ERROR: 'ERROR'
  },
  // for agol photo attaching
  photoSettings: {
    maxWidth: 1500,
    maxHeight: 1000,
    maxFileSize: 10000000 // 10Mb in bytes.
  }
};

/* FLICKR LICENSES BELOW. For more info, including links to license text:
https://www.flickr.com/services/api/explore/flickr.photos.licenses.getInfo

appears you cannot just search for "All Rights Reserved" because
the search for 0 also returns 10. :\

[{ "id": 0, "name": "All Rights Reserved", "url": "" },
  { "id": 4, "name": "Attribution License"},
  { "id": 6, "name": "Attribution-NoDerivs License"},
  { "id": 3, "name": "Attribution-NonCommercial-NoDerivs License"}
  { "id": 2, "name": "Attribution-NonCommercial License"}
  { "id": 1, "name": "Attribution-NonCommercial-ShareAlike License"}
  { "id": 5, "name": "Attribution-ShareAlike License"}
  { "id": 7, "name": "No known copyright restrictions"}
  { "id": 8, "name": "United States Government Work"}
  { "id": 9, "name": "Public Domain Dedication (CC0)"}
  { "id": 10, "name": "Public Domain Mark"}
]
*/
