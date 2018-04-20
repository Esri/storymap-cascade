import $ from 'jquery';

var GooglePhotosConnector = (function() {
  var getAlbums = function(userId) {
    return new Promise((resolve, reject) => {
      var rqStr = document.location.protocol + '//picasaweb.google.com/data/feed/base/user/' + userId + '?alt=json&access=public';

      if (!userId) {
        reject();
        return;
      }

      $.ajax({
        url: rqStr,
        dataType: 'jsonp',
        timeout: 4000 // handle 404 for user name not found
      }).then(data => {
        var albums = [];

        if (data && data.feed && data.feed.entry) {
          $.each(data.feed.entry, (i, album) => {
            albums.push({
              id: album.id['$t'],
              title: album.title['$t'] || '',
              thumbUrl: album['media$group']['media$thumbnail'][0].url
            });
          });
        }
        resolve(albums);
      },
      (error) => {
        reject(error);
      });
    });
  };

  var getAlbum = function(albumUrl, params) {
    return new Promise((resolve, reject) => {
      var rqStr = '';

      if (!albumUrl) {
        reject();
        return;
      }
      else {
        rqStr = albumUrl.replace('/data/entry/base/', '/data/feed/base/') + '&kind=photo&fields=title,subtitle,icon,entry(title,gphoto:numphotos,media:group(media:content,media:thumbnail,media:description),georss:where)';
      }

      rqStr += '&imgmax=1600';
      rqStr += params.maxPictures ? '&max-results=' + params.maxPictures : '';

      $.getJSON(rqStr, data => {
        var photos = [];

        $.each(data.feed.entry, (i, item) => {
          var picUrl = item['media$group']['media$content'][0].url || '';
          var thumbUrl = item['media$group']['media$thumbnail'][2].url || '';

          // If the builder is used in HTTPS, the picture will have an HTTPS url
          // Some browser won't load picture using HTTPS when the app is accessed over HTTP
          picUrl = picUrl.replace(/^https?:\/\//, '//');
          thumbUrl = thumbUrl.replace(/^https?:\/\//, '//');

          var photo = {
            name: item['media$group']['media$description']['$t'] || '',
            description: '',
            picUrl: picUrl,
            thumbUrl: thumbUrl,
            lat: '',
            lng: '',
            height: item['media$group']['media$content'][0].height,
            width: item['media$group']['media$content'][0].width,
            isVideo: false,
            id: picUrl,
            type: 'googlePhotos'
          };

          if (item['georss$where'] && item['georss$where']['gml$Point']
            && item['georss$where']['gml$Point']['gml$pos']
            && item['georss$where']['gml$Point']['gml$pos']['$t']
            && item['georss$where']['gml$Point']['gml$pos']['$t'].split(' ').length == 2) {

            photo.lat = item['georss$where']['gml$Point']['gml$pos']['$t'].split(' ')[0];
            photo.lng = item['georss$where']['gml$Point']['gml$pos']['$t'].split(' ')[1];
          }

          photos.push(photo);
        });
        resolve(photos);
      }).fail((error) => {
        reject(error);
      });
    });
  };

  return {
    getProviderAlbums: getAlbums,
    getItemsInAlbum: getAlbum
  };
}());

export { GooglePhotosConnector };
