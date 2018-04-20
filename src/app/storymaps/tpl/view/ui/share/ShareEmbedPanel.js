define([
  'lib-build/tpl!./ShareEmbedPanel',
  'lib-build/css!./ShareEmbedPanel',
  'dojo/has',
  'lib/clipboard/dist/clipboard'
], function(
  viewTpl,
  viewCss,
  has,
  Clipboard
) {
  return function ShareEmbedPanel(container) {
    var EMBED_TPL  = '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="yes"></iframe>',
        EMBED_SIZE = [
          {
            width: '100%',
            height: '800px'
          },
          {
            width: '100%',
            height: '640px'
          },
          {
            width: '800px',
            height: '600px'
          },
          {
            width: '640px',
            height: '480px'
          }
        ],
        _url = null,
        _urlBackup = null;

    container.append(viewTpl({ }));

    buildEmbedSizeList();

    initEvents();

    this.present = function(url) {
      _url = url;
      _urlBackup = url;

      container.find('.embed-explain').html(i18n.viewer.shareFromCommon.embedExplain);
      container.find('.embed-lbl-size').html(i18n.viewer.shareFromCommon.size);

      container.find('.embed-sizes a').eq(0).click();

      // Touch device don't likely have flash...
      container.find('.share-embed-wrapper').toggleClass('touch', !! has('touch'));
      container.find('.share-clipboard').attr('title', i18n.viewer.shareFromCommon.copy);
      container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
    };

    this.setAutoplay = function(isAutoplay) {
      var url = _urlBackup;

      if (isAutoplay) {
        url += url.match(/\?/) ? '&' : '?';
        url += 'autoplay';
      }

      _url = url;

      container.find('.embed-sizes a').eq(0).click();
    };

    function buildEmbedSizeList() {
      $.each(EMBED_SIZE, function(i, size) {
        container.find('.embed-sizes').append('<li><a data-width="' + size.width + '" data-height="' + size.height + '">' + size.width + ' / ' + size.height + '</a></li>');
      });

      container.find('.embed-sizes a').click(function() {
        var $this = $(this);

        $this.parents('.btn-group').find('.embed-sizes-btn').text($this.text());
        setEmbed($this.data('width'), $this.data('height'));
      });
    }

    function setEmbed(width, height) {
      var embedTextArea = container.find('.embedTextarea');
      embedTextArea.val(
        EMBED_TPL
          .replace('%URL%', _url)
          .replace('%WIDTH%', width)
          .replace('%HEIGHT%', height)
      );
      container.find('.share-btn').data('clipboardText', embedTextArea.val());

      //
      // Copy button
      //

      var clipboard = new Clipboard(container.find('.share-btn')[0], {
        text: function(trigger) {
          return $(trigger).data('clipboardText');
        }
      });

      // add "enter" as a way to trigger copy
      container.find('.share-btn').off('keypress')
        .on('keypress', function(evt) {
          if (evt.keyCode === 13) {
            $(this).trigger('click');
          }
        });

      clipboard.on('success', function() {
        container.find('.share-btn').removeClass('glyphicon-copy').addClass('glyphicon-ok');
        container.find('.share-status').show();
        container.find('.embedTextarea')[0].selectionStart = container.find('.embedTextarea')[0].selectionEnd = -1;

        container.find('.bitlylink').focus();

        setTimeout(function() {
          container.find('.share-btn').addClass('glyphicon-copy').removeClass('glyphicon-ok');
          container.find('.share-status').hide();
        }, 2000);
      });
    }

    function initEvents() {
      container.find('.embedTextarea').click(function() {
        this.setSelectionRange(0, this.value.length);
      });
    }
  };
});
