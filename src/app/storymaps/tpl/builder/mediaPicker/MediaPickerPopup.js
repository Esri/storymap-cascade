define([
  'lib-build/tpl!./MediaPickerPopup',
  'lib-build/less!./MediaPickerPopup',
  'storymaps-react/tpl/builder/mediaPicker/MediaPicker',
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
      var resultDeferred = new Deferred();
      var selection = null;
      var swapMapEditor = false;

      params.arcgisThisStory = app.Controller.getArcGISContent();
      params.appid = app.data.appItem.item.id;

      params.authorizedMedia = params.authorizedMedia || DEFAULT_AUTHORIZED_MEDIA;

      _mediaPicker.open(params).then(
        function(s) {
          selection = s;
          _container.modal('hide');
        },
        function(reason) {
          if (reason === 'swap-map-editor') {
            swapMapEditor = true;
            _container.modal('hide');
          }
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
          var message = 'No media selected';
          if (swapMapEditor) {
            message = 'swap-map-editor';
          }
          resultDeferred.reject(message);
        }
      });

      return resultDeferred;
    };

    this.getContainerNode = function() {
      return _container;
    };
  };
});
