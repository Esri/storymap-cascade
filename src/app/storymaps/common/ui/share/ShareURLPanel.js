define([
  'lib-build/tpl!./ShareURLPanel',
  'lib-build/css!./ShareURLPanel',
  '../../utils/SocialSharing',
  'dojo/has',
  'lib/zero-clipboard/dist/ZeroClipboard'
], function(
  viewTpl,
  viewCss,
  SocialSharing,
  has,
  ZeroClipboard
) {
  return function ShareURLPanel(container) {
    container.append(viewTpl({ }));

    var _linkField = container.find('.bitlylink');

    initEvents();

    this.present = function(url) {
      buildShortLink(url);

      container.find('.btn-bitlylink-open').html(i18n.viewer.shareFromCommon.open);

      // Touch device don't likely have flash...
      container.find('.share-url-container').toggleClass('touch', !! has('touch'));
      container.find('.share-btn').attr('title', i18n.viewer.shareFromCommon.copy);
      container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
    };

    this.focus = function() {
      _linkField.select();
    };

    function buildShortLink(url) {
      _linkField.val(url);
      container.find('.btn-bitlylink-open').attr('href', url);

      SocialSharing.requestBitly(url).then(function(shortURL) {
        _linkField.val(shortURL).select();
      });

      //
      // Copy button
      //

      ZeroClipboard.config({ swfPath: (app.isProduction ? 'resources/lib/' : 'lib/') + '/zero-clipboard/ZeroClipboard.swf'  });
      var bitLyCopy = new ZeroClipboard(container.find('.share-btn'));

      bitLyCopy.on('copy', function(event) {
        var clipboard = event.clipboardData;
        clipboard.setData('text/plain', container.find('.bitlylink').val());
        container.find('.share-btn').removeClass('glyphicon-copy').addClass('glyphicon-ok');
        container.find('.share-status').show();
        container.find('.bitlylink')[0].selectionStart = container.find('.bitlylink')[0].selectionEnd = -1;

        container.find('.bitlylink').focus();

        setTimeout(function() {
          container.find('.share-btn').addClass('glyphicon-copy').removeClass('glyphicon-ok');
          container.find('.share-status').hide();
        }, 2000);
      });
    }

    function initEvents() {
      container.find('.bitlylink').click(function() {
        this.setSelectionRange(0, this.value.length);
      });
    }
  };
});
