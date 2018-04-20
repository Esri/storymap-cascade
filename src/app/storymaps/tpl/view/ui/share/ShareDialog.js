define([
  'lib-build/tpl!./ShareDialog',
  'lib-build/css!./ShareDialog',
  'lib-build/less!./ShareDialog',
  './ShareURLPanel',
  './ShareEmbedPanel',
  'storymaps/tpl/utils/SocialSharing'
], function(
  viewTpl,
  viewCss,
  viewLess,
  ShareURLPanel,
  ShareEmbedPanel,
  SocialSharing
) {
  return function ShareDialog(container) {
    container.append(viewTpl({ }));

    var _shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
        _shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));

    container.on('shown.bs.modal', function() {
      _shareURLPanel.focus();
    });

    container.find('.autoplay-checkbox').change(function() {
      _shareURLPanel.setAutoplay(!! this.checked);
      _shareEmbedPanel.setAutoplay(!! this.checked);

      container.find('.autoplay-notification')
        .html(i18n.viewer.shareFromCommon.linksupdated)
        .fadeIn();

      setTimeout(function() {
        container.find('.autoplay-notification').fadeOut();
      }, 1000);
    });

    this.present = function(url, socialOptions) {
      socialOptions = socialOptions || {
        facebook: false,
        twitter: false
      };

      container.find('.social-container').toggle(socialOptions.facebook || socialOptions.twitter);
      createSocialbuttons(socialOptions);

      /*
      SocialSharing.shareFacebook(
        '',
        '',
        null,
        $(this).data('url')
      );

      var tweet = app.data.title;

      if ($('meta[name="twitter:description"]').length) {
        tweet += ' - ' + $('meta[name="twitter:description"]').attr('content');
      }
      else {
        tweet += ' - ' + app.data.subtitle;
      }

      var title = $('<div>' + tweet + '</div>').text();

      SocialSharing.shareTwitter(
        title,
        $(this).data('url')
      );
      */

      _shareURLPanel.present(url);
      _shareEmbedPanel.present(url);

      container.find('.modal-title').html(i18n.viewer.headerFromCommon.share);
      container.find('.embed-title').html(i18n.viewer.shareFromCommon.embed);
      container.find('.btn-close').html(i18n.viewer.common.close);

      container.find('.autoplay-label').html(i18n.viewer.shareFromCommon.autoplayLabel);
      container.find('.autoplay-help').tooltip({
        title: i18n.viewer.shareFromCommon.autoplayExplain1
          + '<br /><br />'
          + i18n.viewer.shareFromCommon.autoplayExplain2,
        html: true
      });
      container.find('.autoplay-checkbox').prop('checked', false);

      container.modal({ keyboard: true });
    };

    function createSocialbuttons(socialOptions) {

      container.find('.share_facebook').toggle(socialOptions.facebook);
      if (socialOptions.facebook) {
        container.find('.share_facebook').off('click')
          .click(function() {
            shareFacebook($(this).data('url'));
          })
          .on('keypress', function(evt) {
            if (evt.keyCode === 13) {
              shareFacebook($(this).data('url'));
            }
          });
      }

      container.find('.share_twitter').toggle(socialOptions.twitter);
      if (socialOptions.twitter) {
        container.find('.share_twitter').off('click')
          .click(function() {
            shareTwitter($(this).data('url'));
          })
          .on('keypress', function(evt) {
            if (evt.keyCode === 13) {
              shareTwitter($(this).data('url'));
            }
          });
      }
      container.find('.share_print').off('click')
        .on('click keypress', function(e) {
          if (e.type === 'keypress' && e.charCode !== 32 && e.charCode !== 13) {
            return;
          }
          var printUrl = window.location.href;
          if (window.location.search) {
            printUrl = printUrl.replace(/[\&|\?]edit(=true)?/, '');
            printUrl += '&print';
          }
          else {
            printUrl += '?print';
          }
          window.open(printUrl, '_blank');
        });
    }

    function shareFacebook(url) {
      SocialSharing.shareFacebook('', '', null, url);
    }

    function shareTwitter(url) {
      var appTitle = $('<div>' + app.data.title + '</div>').text();
      SocialSharing.shareTwitter(appTitle, url);
    }
  };
});
