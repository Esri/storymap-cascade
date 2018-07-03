import $ from 'jquery';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import constants from '../constants';

var text = i18n.builder.mediaPicker.browsePanel.providers.flickr;

var FlickrConnector = (function() {
  var _userId = null;
  var _photostreamId = null;
  var defaultOptions = {
    per_page: 500
  };

  var loadAlbums = function(userName) {
    return new Promise((resolve, reject) => {
      var nIndex = userName.indexOf('@N');
      if (nIndex > 0 && nIndex === userName.length - 4) {
        _userId = userName;
        getSetsFromNSID(resolve, reject);
        return;
      }

      // make a simple connect example first...
      request('flickr.people.findByUsername', {username: userName}).done((result) => {
        if (result && result.stat === 'ok') {
          _userId = result.user.id;
          getSetsFromNSID(resolve, reject, userName, result.user);
        }
        else {
          getUserByUrl(userName).then(response => tryUserAgain(constants.userFetchError.NO_USER, reject, response))
            .fail(error => {
              console.warn(error);
              reject({reason: constants.userFetchError.ERROR});
            });
        }
      });
    });
  };

  var getSetsFromNSID = function(resolve, reject, userName, user) {
    getSets().then((setResponse, streamResponse) => {
      var photosets = setResponse[0].photosets.photoset;
      addPhotostream(photosets, streamResponse[0].photos.photo[0]);
      if (photosets && photosets.length) {
        resolve({
          sets: enrichSet(photosets),
          username: (user && user.username && user.username._content) ? user.username._content : null
        });
      }
      else if (userName) {
        getUserByUrl(userName).then(response => tryUserAgain(constants.userFetchError.NO_PHOTOS, reject, response))
          .fail(error => {
            console.warn(error);
            reject({reason: constants.userFetchError.NO_PHOTOS});
          });
      }
      else {
        reject({reason: constants.userFetchError.NO_PHOTOS});
      }
    });
  };

  var tryUserAgain = function(reason, reject, response) {
    if (response && response.stat === 'ok') {
      var altUsername = response.user.username._content;
      request('flickr.people.findByUsername', {username: altUsername}).then(results => {
        if (results && results.stat === 'ok') {
          reject({
            reason: reason || constants.userFetchError.ERROR,
            alternate: altUsername
          });
        }
        else {
          reject({
            reason: reason || constants.userFetchError.ERROR,
            alternate: altUsername,
            nsid: response.user.id
          });
        }

      });
    }
    else {
      reject({reason: reason || constants.userFetchError.ERROR});
    }
  };

  var addPhotostream = function(photosets, firstStreamPhoto) {
    if (firstStreamPhoto) {
      _photostreamId = firstStreamPhoto.id;
      photosets.unshift(firstStreamPhoto);
    }
    return photosets;
  };

  var getPicturesInSet = function(setId, options) {
    if (setId === _photostreamId) {
      return getPhotostream(options);
    }
    return getPictures(
      'flickr.photosets.getPhotos',
      Object.assign({ photoset_id: setId }, options
    ));
  };

  var getPhotostream = function(options) {
    return getPictures('flickr.people.getPhotos',
      Object.assign({ user_id: _userId }, options
    ));
  };

  var searchPhotos = function(options) {
    if (options.user) {
      Object.assign(options, {user_id: _userId});
    }
    return getPictures('flickr.photos.search', options);
  };

  var getPictures = function(method, params) {
    return new Promise((resolve, reject) => {

      var searchParams = Object.assign({
        extras: 'geo,description,license,url_s,url_n,url_m,url_l'
      }, defaultOptions, params);

      request(method, searchParams).done((result) => {
        if (!result || result.stat !== 'ok') {
          reject();
        }

        var response = [],
            photos = [];

        if (result.photos) {
          photos = result.photos.photo;
        }
        else if (result.photoset) {
          photos = result.photoset.photo;
        }

        $.each(photos, (i, photo) => {

          var thumbUrlOptions = getThumbUrlOptions(photo);

          response.push(Object.assign({
            name: photo.title || '',
            description: photo.description ? (photo.description._content || '') : '',
            getPicUrl: getPhotoUrlOptions, // this allows us to get larger photos than _b (1024px longest side)
            picUrl: getPhotoURLFromSearchResults(photo), // this is a fallback now
            lat: photo.latitude || '',
            lng: photo.longitude || '',
            height: photo.height_l || photo.height_m,
            width: photo.width_l || photo.width_m,
            isVideo: false,
            id: photo.id,
            license: photo.license,
            type: 'flickr'
          }, thumbUrlOptions));
        });

        resolve(response);
      });
    });
  };

  var checkPhotoByUrl = function(url) {
    return new Promise((resolve, reject) => {
      var photo_id = getPhotoIdFromUrl(url);

      request('flickr.photos.getSizes', {photo_id})
        .done(result => {
          if (!checkSizesResponse(result)) {
            reject({reason: 'no photo or no sizes', result});
            return;
          }
          if (!findUrlInSizes(url, result.sizes.size)) {
            reject({reason: 'matching url not found in flickr.getSizes result'});
            return;
          }
          resolve(result);
        })
        .fail((xhr, status, err) => {
          console.debug('fail', xhr, status, err);
          reject({reason: 'getSizes call failed', status, err});
        });
    });
  };

  var getPhotoIdFromUrl = function(url) {
    var lastSlash = url.lastIndexOf('/');
    var firstUnderscore = url.indexOf('_', lastSlash);
    return url.slice(lastSlash + 1, firstUnderscore);
  };

  var findUrlInSizes = function(url, sizesArr) {
    var noProtocolUrl = url.replace(/^https?:/, '').replace(/^\/\//, '');
    return sizesArr.some(function(sizeObj) {
      return sizeObj.source && sizeObj.source.indexOf(noProtocolUrl) >= 0;
    });
  };

  var checkSizesResponse = function(response) {
    return response.stat === 'ok' && response.sizes && response.sizes.size && response.sizes.size.length;
  };

  var getPhotoUrlOptions = function(photo) {
    return new Promise((resolve) => {
      const fallback = {
        url: photo.picUrl,
        width: photo.width,
        height: photo.height
      };
      request('flickr.photos.getSizes', {photo_id: photo.id})
        .done(result => {
          if (!checkSizesResponse(result)) {
            resolve(fallback);
            return;
          }
          resolve(parsePhotoUrlOptions(result.sizes.size, fallback));
        })
        .fail((xhr, status, err) => {
          console.warn('failed to get sizes from flickr', err);
          resolve(fallback);
        });
    });
  };

  // flickr url choices, found here: https://www.flickr.com/services/api/misc.urls.html
  // getSizes choices, found here: https://www.flickr.com/services/api/flickr.photos.getSizes.html
  // just return all sizes, as formatted arr of {width, height, url}
  var parsePhotoUrlOptions = function(sizesArr, fallback) {
    let formattedSizes = sizesArr.map(sizeObj => {
      return {
        width: parseInt(sizeObj.width),
        height: parseInt(sizeObj.height),
        url: sizeObj.source
      };
    });
    return Object.assign({}, fallback, {
      sizes: formattedSizes
    });
  };

  var getPhotoURLFromSearchResults = function(photo) {
    return photo.url_l || photo.url_m || getPhotoURLFromSize(photo, 'b');
  };

  var getPhotoURLFromSize = function(photo, size) {
    return 'http://farm' + photo.farm + '.static.flickr.com/'
      + photo.server + '/' + photo.id + '_' + photo.secret
      + '_' + size + '.jpg';
  };

  var getThumbUrlOptions = function(photo) {
    var suffix;
    // find the best thumbnail url for the height of the photo.
    // the gallery photo height is defined by constants.galleryContent.IMG_HEIGHT,
    // so we compare photo heights to 80% of that
    // (ok to scale up a little, but too much makes it look fuzzy)
    var heightCompare = constants.galleryContent.IMG_HEIGHT * 0.8;
    if (photo.url_s && photo.height_s >= heightCompare) {
      suffix = 's';
    }
    else if (photo.url_n && photo.height_n >= heightCompare) {
      suffix = 'n';
    }
    else if (photo.url_m && photo.height_m >= heightCompare) {
      suffix = 'm';
    }
    else if (photo.url_l) {
      suffix = 'l';
    }
    else {
      return {thumbUrl: getPhotoURLFromSize(photo, 'm')};
    }
    return {
      thumbUrl: photo['url_' + suffix],
      thumbWidth: photo['width_' + suffix],
      thumbHeight: photo['height_' + suffix]
    };
  };

  var getSets = function() {
    return $.when(
      request('flickr.photosets.getList', Object.assign({}, defaultOptions, {user_id: _userId, primary_photo_extras: 'url_q'})),
      request('flickr.people.getPhotos', Object.assign({}, defaultOptions, {user_id: _userId, per_page: 1, extras: 'url_q'}))
    );
  };

  var enrichSet = function(sets) {
    $.each(sets, (i, set) => {
      set._thumbnail = set.url_q || (set.primary_photo_extras ? set.primary_photo_extras.url_q : false) ||
      'http://farm2.static.flickr.com/'
        + set.server
        + '/'
        + (set.primary || set.id)
        + '_'
        + set.secret
        + '_q'
        + '.jpg';
    });

    return sets;
  };

  var request = function(method, params) {
    var url = 'https://'
      + 'api.flickr.com/services/rest/?method='
      + method
      + '&format=json'
      + '&api_key=' + app.cfg.MEDIA_KEYS.FLICKR_API
      + (! params ? '' : '&' + $.param(params))
      + '&jsoncallback=?';

    return $.getJSON(url);
  };

  var getProviderAlbums = function(userName) {
    return new Promise((resolve, reject) => {
      loadAlbums(userName).then(results => {
        var albumInfos = [];

        results.sets.forEach(set => {
          var albumInfo = {
            id: set.id,
            thumbUrl: set._thumbnail,
            title: (set.id === _photostreamId) ? text.photostream : set.title._content,
            details: {
              photos: set.photos
            }
          };
          albumInfos.push(albumInfo);
        });

        resolve({albums: albumInfos, username: results.username});
      }).catch(error => {
        reject(error);
      });
    });
  };

  var getUserByUrl = function(userName) {
    return request('flickr.urls.lookupUser', {url: 'http://www.flickr.com/photos/' + userName});
  };

  return {
    getProviderAlbums: getProviderAlbums,
    getItemsInAlbum: getPicturesInSet,
    photoSearch: searchPhotos,
    checkPhotoByUrl: checkPhotoByUrl
  };
}());

export { FlickrConnector };
