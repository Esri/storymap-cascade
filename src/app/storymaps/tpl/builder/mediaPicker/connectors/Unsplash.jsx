import $ from 'jquery';
import config from '../config';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import constants from '../constants';

var text = i18n.builder.mediaPicker.browsePanel.providers.unsplash;

var UnsplashConnector = (function() {

  const dynamicSizingParams = {
    ixlib: 'rb-0.3.5',
    q: '80',
    fm: 'jpg',
    crop: 'entropy',
    fit: 'max'
  };

  var photoSearch = function(params) {
    return new Promise((resolve, reject) => {

      request(params).done((response, status) => {
        if (!status || status !== 'success' || !response || !response.results) {
          reject();
          return;
        }

        if (response.results.length < response.total || response.total_pages > 1) {
          // lazy. doing requests sequentially to allow the first one to fail.
          request(Object.assign(params, {page: 2})).done((response2, status2) => {
            if (!status2 || status2 !== 'success' || !response2) {
              reject();
              return;
            }
            processResults(response.results.concat(response2.results), resolve);
          });
        }
        else {
          processResults(response.results, resolve);
        }
      });
    });
  };

  var processResults = function(resultsArr, resolve) {
    var formattedResults = [];
    var lookupObj = {};

    $.each(resultsArr, (i, photo) => {
      // in testing, unsplash was returning duplicates from page 1 on page 2.
      // need to weed those out.
      if (!lookupObj[photo.id]) {
        lookupObj[photo.id] = formatPhoto(photo);
        formattedResults.push(lookupObj[photo.id]);
      }
    });

    resolve(formattedResults);

  };

  var replaceUsername = function(str, username) {
    let returnStr = str.replace('${username}', username);
    return returnStr.replace(/\$\{(.*?)}/g, function(brand) {
      return brand.slice(2, -1);
    });

  };

  var formatPhoto = function(photo) {
    return Object.assign({
      name: replaceUsername(text.photoBy, photo.user.name),
      externalLink: {
        link: photo.user.links.html,
        background: photo.user.profile_image.medium,
        hoverText: replaceUsername(text.userLink, photo.user.name)
      },
      picUrl: photo.urls.regular,
      getPicUrl: getPhotoUrlOptions.bind(photo),
      height: photo.height,
      width: photo.width,
      isVideo: false,
      id: photo.id,
      modified: new Date(photo.created_at),
      type: 'unsplash'
    }, getThumbUrlOptions(photo));
  };

  var getThumbUrlOptions = function(photo) {
    var height = Math.max(constants.galleryContent.IMG_HEIGHT, constants.galleryContent.ALBUM_HEIGHT);
    return {
      thumbUrl: (photo.urls.thumb).replace(/\&w\=[0-9]*/, '&h=' + height)
    };
  };

  var getPhotoUrlOptions = function(photo) {
    // photo argument is formatted photo.
    // this context is original photo.
    return new Promise((resolve) => {
      const fallback = {
        url: photo.picUrl,
        width: photo.width,
        height: photo.height
      };
      if (!this.urls.raw) {
        return fallback;
      }
      const imgRatio = this.height / this.width;
      // might as well match flickr sizes of 800, 1024, 1600, and 2048.
      let sizes = [
        getDynamicSizeUrl(this.urls.raw, 800, imgRatio),
        getDynamicSizeUrl(this.urls.raw, 1024, imgRatio),
        getDynamicSizeUrl(this.urls.raw, 1600, imgRatio),
        getDynamicSizeUrl(this.urls.raw, 2048, imgRatio)
      ];

      resolve(Object.assign({}, fallback, {sizes}));
    });
  };

  var getDynamicSizeUrl = function(url, largest, ratio) {
    let width, height, urlParams = Object.assign({}, dynamicSizingParams);
    if (ratio < 1) {
      width = largest;
      height = Math.round(ratio * width);
      Object.assign(urlParams, {w: width});
    }
    else {
      height = largest;
      width = Math.round(height / ratio);
      Object.assign(urlParams, {h: height});
    }
    return {
      url: url + '?' + $.param(urlParams),
      height: height,
      width: width
    };
  };

  var request = function(params) {
    var url = 'https://'
      + 'api.unsplash.com/search/photos?'
      + 'client_id=' + config.UNSPLASH_API_KEY
      + (params ? '&' + $.param(params) : '');

    return $.getJSON(url);
  };

  return {photoSearch};
}());

export { UnsplashConnector };
