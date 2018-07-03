import $ from 'jquery';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import urlUtils from 'esri/urlUtils';

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
    let returnStr = str.replace(/\${username}/i, username);
    return returnStr.replace(/\$\{(.*?)}/g, function(brand) {
      return brand.slice(2, -1);
    });
  };

  var replaceUsernameAndLink = function(str, photo) {
    const userLink = '<a href="' + photo.links.html + '?utm_source=Story%20Maps%20Cascade&utm_medium=referral" target="_blank">' + photo.user.name + '</a>';
    const unsplashLink = '<a href="https://unsplash.com?utm_source=Story%20Maps%20Cascade&utm_medium=referral" target="_blank">Unsplash</a>';
    let returnStr = str.replace(/\${username}/i, userLink);
    return returnStr.replace(/\$\{(.*?)}/g, unsplashLink);

  };

  var formatPhoto = function(photo) {
    return Object.assign({
      name: replaceUsername(text.photoBy, photo.user.name),
      externalLink: {
        link: photo.user.links.html + '?utm_source=Story%20Maps%20Cascade&utm_medium=referral',
        background: photo.user.profile_image.small,
        hoverText: replaceUsername(text.userLink, photo.user.name)
      },
      picUrl: photo.urls.regular,
      getPicUrl: getPhotoUrlOptions.bind(photo),
      height: photo.height,
      width: photo.width,
      isVideo: false,
      id: photo.id,
      modified: new Date(photo.created_at),
      type: 'unsplash',
      thumbUrl: photo.urls.thumb,
      onSelected: requiredUnsplashViewRequest.bind(photo),
      caption: replaceUsernameAndLink(text.captionStarter, photo)
    });
  };

  var getPhotoUrlOptions = function(photo) {
    // photo argument is formatted photo.
    // this context is original photo.
    return new Promise((resolve) => {
      const fallback = {
        url: photo.picUrl,
        width: photo.width,
        height: photo.height,
        caption: photo.caption
      };
      const rawUrl = this.urls.raw;
      if (!rawUrl) {
        return fallback;
      }
      const imgRatio = this.height / this.width;
      // might as well match flickr sizes of 800, 1024, 1600, and 2048.
      let sizes = [
        getDynamicSizeUrl(rawUrl, 800, imgRatio),
        getDynamicSizeUrl(rawUrl, 1024, imgRatio),
        getDynamicSizeUrl(rawUrl, 1600, imgRatio),
        getDynamicSizeUrl(rawUrl, 2048, imgRatio)
      ];

      resolve(Object.assign({}, fallback, {sizes}));
    });
  };

  var getDynamicSizeUrl = function(rawUrl, largest, ratio) {
    const rawUrlSplit = urlUtils.urlToObject(rawUrl);
    let width, height, urlParams = Object.assign({}, dynamicSizingParams, rawUrlSplit.query || {});
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
      url: rawUrlSplit.path + '?' + $.param(urlParams),
      height: height,
      width: width
    };
  };

  var request = function(params) {
    var url = 'https://'
      + 'api.unsplash.com/search/photos?'
      + 'client_id=' + app.cfg.MEDIA_KEYS.UNSPLASH_API
      + '&per_page=30'
      + (params ? '&' + $.param(params) : '');

    return $.getJSON(url);
  };

  // `this` === photo object returned from unsplash. bound above.
  var requiredUnsplashViewRequest = function() {
    if (this && this.links && this.links.download_location) {
      var connector = this.links.download_location.match(/\?/) ? '&' : '?';
      var urlWithParams = this.links.download_location + connector + 'client_id=' + app.cfg.MEDIA_KEYS.UNSPLASH_API;
      $.getJSON(urlWithParams).done(function() {
        // console.debug('%c triggered download. 🎉', 'color: blue; font-size: 14px;');
      });
    }
    else {
      console.warn('failed to hit required Unsplash download endpoint. 😨', this);
    }
  };

  return {photoSearch};
}());

export { UnsplashConnector };
