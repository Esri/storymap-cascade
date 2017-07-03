define([
  'lib-build/tpl!./MediaPickerPopup',
  'lib-build/less!./MediaPickerPopup',
  'storymaps-react/common/builder/mediaPicker/MediaPicker',
  'dojo/Deferred'
], function(
  viewTpl,
  viewCss,
  MediaPicker,
  Deferred
) {
  var DEFAULT_AUTHORIZED_MEDIA = ['image', 'audio', 'video', 'webpage', 'webmap', 'webscene'];

  return function MediaPickerPopup(params) {
    var _mediaPicker = null,
        _container = params && params.container;

    if (! _container) {
      console.error('Could not initialize MediaPickerPopup');
      return;
    }

    _container.html(viewTpl({}));

    _mediaPicker = new MediaPicker('media-picker');

    this.open = function(params) {
      var resultDeferred = new Deferred(),
          selection = null;

      params.arcgisThisStory = app.Controller.getArcGISContent();
      params.appid = app.data.appItem.item.id;

      params.authorizedMedia = params.authorizedMedia || DEFAULT_AUTHORIZED_MEDIA;

      _mediaPicker.open(params).then(
        function(s) {
          selection = s;
          _container.modal('hide');
        },
        function() {
          //
        }
      );

      _container.modal({
        keyboard: true
      });

      _container.on('hide.bs.modal', function() {
        if (resultDeferred.isFulfilled()) {
          return;
        }

        if (selection) {
          resultDeferred.resolve(selection);
        }
        else {
          resultDeferred.reject('No media selected');
        }
      });

      return resultDeferred;
    };
  };
});
