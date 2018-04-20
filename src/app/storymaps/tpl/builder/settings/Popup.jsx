import Media from 'storymaps-react/tpl/view/media/Media';

import viewTpl from 'lib-build/hbars!./Popup';
import logoSharingTpl from 'lib-build/hbars!./LogoSharing';
import bookmarkTpl from 'lib-build/hbars!./Bookmark';
import themeTpl from 'lib-build/hbars!./Appearance';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./Popup';
import lang from 'dojo/_base/lang';

class SettingsPopup {
  constructor(options) {
    this.container = options.container;
    this.data = null;
    this.esriLogoUrl = 'resources/tpl/viewer/icons/esri-logo.png';
    this.esriLogoLink = 'https://www.esri.com';
    this.backupLogoUrl = this.esriLogoUrl; // by default the backup can be the default.
    this.backupLogoLink = this.esriLogoLink;

    this.reject = null;
    this.resolve = null;

    let dialogData = {
      dialog: i18n.builder.dialog,
      notification: i18n.builder.notification,
      toggles: i18n.builder.headerConfig.toggles
    };

    this.container.append(viewTpl(dialogData));

    this.attachModalEvents();
  }

  getColors(colorId) {
    const themeSettings = this.data.settings.themeData;
    // given what we're passing in here, appThemeId should always exist at this point
    var appThemeId = lang.getObject('currentTheme.colors.id', false, themeSettings);
    var colorArr = themeSettings.colorOptions;
    colorArr.forEach(colorObj => {
      colorObj.selected = (appThemeId === colorObj.id);
    });
    if (!colorId) {
      return colorArr;
    }

    if (colorId === 'current') {
      colorId = appThemeId;
    }

    var targetColor;
    colorArr.some((colorObj) => {
      if (colorObj.id === colorId) {
        targetColor = colorObj;
        return true;
      }
      return false;
    });
    return targetColor;
  }

  getFonts(fontId) {
    const themeSettings = this.data.settings.themeData;
    // given what we're passing in here, titleFont and bodyFont should always exist at this point
    var titleFont = lang.getObject('currentTheme.fonts.titleFont', false, themeSettings);
    var bodyFont = lang.getObject('currentTheme.fonts.bodyFont', false, themeSettings);
    var fontArr = themeSettings.fontOptions;
    if (!fontId) {
      return {fontArr, titleFont, bodyFont};
    }

    var targetFont;
    fontArr.some((fontObj) => {
      if (fontObj.label === fontId) {
        targetFont = fontObj;
        return true;
      }
      return false;
    });
    return targetFont;

  }

  attachModalEvents() {
    this.attachToggleEvents();
    this.attachApplyEvents();
  }

  attachApplyEvents() {
    this.container.find('.btn-close').on('click', () => {
      this.detachEvents();
    });

    this.container.find('.btn-close.btnCancel').on('click', () => {
      this.reject && this.reject();
    });

    this.container.find('.btn-close.apply').on('click', () => {
      if (this.container.find('.btn-close.apply').hasClass('disabled')) {
        return;
      }

      // apply all of the changes
      this.applyBookmarkChanges();
      this.applyLogoSharingChanges();
      this.applyThemeChanges();

      this.resolve && this.resolve(this.data.settings);

      this.container.modal('hide');
    });
  }

  detachEvents() {
    this.container.find('.hc-logo-button').off('click');
    this.container.find('.hc-action-icon.hc-remove').off('click');
    this.container.find('.hc-action-icon.hc-settings').off('click');
    this.container.find('.hc-checkbox.bookmark-checkbox').off('click');
  }

  applyBookmarkChanges() {
    // get the values and enabled/disabled.
    // how? Read through each one and apply what you see.
    let bookmarkNodes = this.container.find('.hc-row.bookmark-row');

    // these map 1-1 with the bookmarks so we're counting on the iterator to map up 1-1
    for(let i = 0; i < bookmarkNodes.length; i++) {
      let bookmarkNode = $(bookmarkNodes[i]);
      let bookmark = this.data.settings.bookmarks[i];

      if (!bookmark) {
        return;
      }

      let bookmarkValue = bookmarkNode.find('.hc-text-input.bookmark-text').val();
      let sanitizedBookmark = this.sanitizeValue(bookmarkValue);

      if (!sanitizedBookmark) {
        bookmarkNode.addClass('disabled');
      }

      if (bookmarkNode.hasClass('disabled')) {
        bookmark.status = 'disabled';
      }
      else {
        bookmark.status = 'visible';
      }

      bookmark.bookmark = sanitizedBookmark;
    }
  }

  sanitizeValue(text) {
    // Run the text through this to sanitize
    let sanitizedText = $('<div>' + text + '</div>').text();
    return sanitizedText;
  }

  applyLogoSharingChanges() {
    // that value is
    let checkbox = this.container.find('.hc-checkbox.social-checkbox');
    this.data.settings.social.enabled = checkbox.is(':checked');

    let isLogoEnabled = !(this.container.find('.hc-logo').hasClass('hidden'));
    this.data.settings.logo.enabled = isLogoEnabled;

    let logoLinkValue = this.container.find('.hc-text-input.logo-link').val();

    let sanitizedLogoLinkValue = this.sanitizeValue(logoLinkValue);
    // make sure it's a URL
    let logoLinkURL = CommonHelper.prependURLHTTP(sanitizedLogoLinkValue);
    this.data.settings.logo.link = logoLinkURL;

    // Logo is persisted when modified, it's more simple for dealing with the token for ArcGIS upload
    //let logoUrlValue = this.container.find('.hc-logo').attr('src');
    //this.data.settings.logo.url = logoUrlValue;

    let titleValue = this.container.find('.hc-text-input.link-title').val();
    let sanitizedTitleValue = this.sanitizeValue(titleValue);
    this.data.settings.link.title = sanitizedTitleValue;

    let linkValue = this.container.find('.hc-text-input.link-url').val();

    let sanitizedLinkValue = this.sanitizeValue(linkValue);
    // make sure it's a URL
    let linkURL = CommonHelper.prependURLHTTP(sanitizedLinkValue);
    this.data.settings.link.url = linkURL;
  }

  applyThemeChanges() {
    this.data.settings.themeData.currentTheme.colors = this.tempThemeSettings.colors;
    this.data.settings.themeData.currentTheme.fonts = {
      titleFont: this.tempThemeSettings.titleFont,
      bodyFont: this.tempThemeSettings.bodyFont
    };
  }

  attachToggleEvents() {
    let toggles = this.container.find('.toggle');
    let selectedClass = 'selected';

    toggles.on('click', event => {
      let target = $(event.currentTarget);
      let tabType = target.data('tab');

      toggles.removeClass(selectedClass);
      target.addClass(selectedClass);

      this.container.find('.modal-tab').removeClass(selectedClass);
      this.container.find(`.modal-tab[data-tab="${tabType}"]`).addClass(selectedClass);
    });
  }

  attachBookmarkEvents() {
    this.attachEnableBookmarkEvent();
  }

  attachThemeEvents() {
    var self = this;
    var colorConfigs = this.container.find('.color-list .config-item');
    colorConfigs.on('click', function(/*evt*/) {
      colorConfigs.removeClass('selected');
      $(this).addClass('selected');
      var selectedColors = self.getColors($(this).data('colorid'));
      self.updateTempTheme({colors: selectedColors});
      self.updatePreview();
    });

    this.container.find('.font-list .dropdown-menu a').on('click', function() {
      var newFontLabel = $(this).data('fontid');
      var newFont = self.getFonts(newFontLabel);
      var ddParent = $(this).parents('.dropdown');
      // idk why jq.css() wasn't working here, but it wasn't, so using attr style.
      ddParent.find('.font-label').text(newFontLabel)
        .attr('style', `font-family: ${newFont.fontFamily}`);
      var ddMenu = ddParent.find('.dropdown-menu').data('selected-font', newFontLabel);
      var targetKey = ddMenu.hasClass('title-font-list') ? 'titleFont' : 'bodyFont';
      self.updateTempTheme({[targetKey]: newFont});
      self.updatePreview();
    });

  }

  updateTempTheme(params) {
    Object.assign(this.tempThemeSettings, params);
  }

  updatePreview() {
    var preview = this.container.find('.appearance-preview');
    var settings = this.tempThemeSettings;
    if (settings.colors) {
      var colorStyle = `color: ${settings.colors.textMain}; background-color: ${settings.colors.bgMain};`;
      preview.find('.font-sample').attr('style', colorStyle);
    }

    if (settings.titleFont) {
      preview.find('.title-sample').attr('style', `font-family: ${settings.titleFont.fontFamily};`);
    }

    if (settings.bodyFont) {
      preview.find('.body-sample').attr('style', `font-family: ${settings.bodyFont.fontFamily};`);
    }
  }

  attachLogoSharingEvents() {
    this.attachRemoveLogoEvents();
    this.attachUseEsriLogoEvents();
    this.attachSelectLogoEvents();
    this.attachToggleTaglineLinkEvents();
    this.attachUseOrgLogoEvents();

    this.container.find('.org-logo-tooltip').tooltip();

    this.container.find('.hc-logo-upload-msg')
      .removeClass('alert-success alert-warning alert-danger');
  }

  attachUseOrgLogoEvents() {
    let checkbox = this.container.find('.hc-checkbox.org-logo-checkbox');

    checkbox.on('click', event => {
      let target = $(event.currentTarget);
      let logoLinkNode = this.container.find('.hc-text-input.logo-link');
      let logoValue = '';

      if (target.is(':checked')) {
        // set the backup logo URL to whatever was set before you checked to use the org
        this.backupLogoUrl = this.data.settings.logo.url;
        this.backupLogoLink = this.data.settings.logo.link;

        logoValue = this.data.settings.orgLogoSettings.orgLogo;
        this.container.find('.hc-logo').attr('src', logoValue);
        this.container.find('.hc-text-input.logo-link').val(this.backupLogoLink);
        this.enableLogo();

        if (CommonHelper.isDefaultLogoLink(logoLinkNode.val())) {
          logoLinkNode.val('');
        }
      }
      else {
        // restore whatever value you had before checking the box
        logoValue = Media.addToken(this.backupLogoUrl);

        this.container.find('.hc-logo').attr('src', logoValue);

        if (logoValue === this.esriLogoUrl) {
          logoLinkNode.val(this.esriLogoLink);
        }
      }

      this.data.settings.logo.url = logoValue;
    });
  }

  attachToggleTaglineLinkEvents() {
    let taglineTitle = this.container.find('.hc-text-input.link-title');

    taglineTitle.on('keyup', event => {
      let target = event.currentTarget;

      if (target.value.trim().length) {
        this.enableTaglineLink();
      }
      else {
        this.disableTaglineLink();
      }
    });
  }

  enableTaglineLink() {
    let taglineLink = this.container.find('.hc-text-input.link-url');

    taglineLink.removeAttr('disabled');
    this.container.find('[data-toggle="tooltip"]').tooltip('disable');
  }

  disableTaglineLink() {
    let taglineLink = this.container.find('.hc-text-input.link-url');

    taglineLink.attr('disabled', '');
    this.container.find('[data-toggle="tooltip"]').tooltip('enable');
  }

  enableLogo() {
    let hiddenClass = 'hidden';

    this.container.find('.hc-logo-button').addClass(hiddenClass);
    this.container.find('.hc-logo').removeClass(hiddenClass);
    this.container.find('.hc-action-icon.hc-remove').removeClass(hiddenClass);
    this.container.find('.hc-text-input.logo-link').removeAttr('disabled');
  }

  attachUseEsriLogoEvents() {
    this.container.find('.hc-logo-button').on('click', () => {
      // set to esri logo, and in the logo link as well
      this.container.find('.hc-logo').attr('src', this.esriLogoUrl);
      this.container.find('.hc-text-input.logo-link').val(this.esriLogoLink);

      this.data.settings.logo.url = this.esriLogoUrl;

      this.enableLogo();
    });
  }

  attachRemoveLogoEvents() {
    this.container.find('.hc-action-icon.hc-remove').on('click', event => {
      let hiddenClass = 'hidden';
      let target = $(event.currentTarget);

      this.container.find('.hc-logo').addClass(hiddenClass);
      this.container.find('.hc-logo-button').removeClass(hiddenClass);
      this.container.find('.hc-text-input.logo-link').attr('disabled', '');

      this.container.find('.hc-logo').attr('src', '');

      // if the "use org logo" checkbox was filled, disable it as well.
      this.container.find('.hc-checkbox.org-logo-checkbox').prop('checked', false);

      target.addClass(hiddenClass);
    });
  }

  attachSelectLogoEvents() {
    this.container.find('.hc-action-icon.hc-settings').on('click', () => {

      //var existingCustomConfig = this.data.settings.logo.url && this.data.settings.logo.url != this.esriLogoUrl;
      // TODO: how store the source so that if user pick an image from Flickr the URL is not displayed in webpage?

      app.builder.mediaPicker.open({
        mode: 'add',
        authorizedMedia: ['image']
      }).then(selection => {
        if (selection.type === 'image') {
          let url = selection.image.url;

          if (selection.image.dataUrl && selection.image.uploadDeferred) {
            url = selection.image.dataUrl;

            this.data.settings.logo.url = '';

            this.container.find('.btn.apply').addClass('disabled');
            this.container.find('.hc-logo-upload-msg')
              .html(i18n.builder.headerConfig.logoSharing.logoUploadProgress)
              .addClass('alert-warning');

            selection.image.uploadDeferred.then(
              function(image) {
                this.container.find('.hc-logo').attr('src', Media.addToken(image.url));
                this.container.find('.btn.apply').removeClass('disabled');

                this.container.find('.hc-logo-upload-msg')
                  .html(i18n.builder.headerConfig.logoSharing.logoUploadSuccess)
                  .removeClass('alert-warning')
                  .addClass('alert-success');

                this.data.settings.logo.url = image.url;

                setTimeout(function() {
                  this.container.find('.hc-logo-upload-msg').removeClass('alert-success');
                }.bind(this), 2000);
              }.bind(this),
              function() {
                let esriName = 'Esri';
                // Remove the logo
                this.container.find('.hc-action-icon.hc-remove').click();
                this.container.find('.btn.apply').removeClass('disabled');

                this.container.find('.hc-logo-upload-msg')
                  .removeClass('alert-warning')
                  .addClass('alert-danger')
                  .html(i18n.builder.headerConfig.logoSharing.logoUploadError.replace(/\${ESRI}/g, esriName));

                setTimeout(function() {
                  this.container.find('.hc-logo-upload-msg').removeClass('alert-danger');
                }.bind(this), 2000);
              }.bind(this)
            );
          }
          else {
            this.data.settings.logo.url = url;
          }

          this.container.find('.hc-logo').attr('src', Media.addToken(url));
          this.enableLogo();
          // uncheck the "use org logo" checkbox.
          this.container.find('.hc-checkbox.org-logo-checkbox').prop('checked', false);
        }
      }, () => {
        //
      });
    });
  }

  attachEnableBookmarkEvent() {
    // clicking on the label will fire the checkbox click event
    this.container.find('.hc-checkbox.bookmark-checkbox').on('click', event => {
      let target = $(event.currentTarget);
      let disabledClass = 'disabled';
      let row = target.closest('.hc-row.bookmark-row');

      // enable/disable the row and input box
      if (row.hasClass(disabledClass)) {
        row.removeClass(disabledClass);
        row.find('.hc-text-input.bookmark-text').removeAttr('disabled');
      }
      else {
        row.addClass(disabledClass);
        row.find('.hc-text-input.bookmark-text').attr('disabled', '');
      }
    });
  }

  open(options) {
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;

      const BOOKMARK_MAX_CHARACTERS = 20;
      const TAGLINE_MAX_CHARACTERS = 50;

      this.data = $.extend(true, {}, options.settings);

      this.data.settings.bookmarks = this.data.settings.bookmarks.map(item => {
        // truncate the bookmark value as well
        item.bookmark = item.bookmark.substr(0, BOOKMARK_MAX_CHARACTERS);
        return item;
      });

      // add "disabled" member for the UI -- but NOT to the original array!
      let bookmarkUI = this.data.settings.bookmarks.map(item => {
        return Object.assign({}, item, { disabled: item.status === 'disabled' });
      });

      let esriName = 'Esri';

      if (this.data.settings.orgLogoSettings.useOrgLogo && CommonHelper.isDefaultLogoLink(this.data.settings.logo.link)) {
        this.data.settings.logo.link = '';
      }

      let logoSharingData = lang.clone({
        settings: this.data.settings,
        background: this.data.context.headerBackground,
        maxCharacters: TAGLINE_MAX_CHARACTERS,
        strings: i18n.builder.headerConfig.logoSharing,
        useEsriLogoString: i18n.builder.headerConfig.logoSharing.logoButton.replace(/\${ESRI}/g, esriName),
        emptyTagline: !this.data.settings.link.title
      });

      logoSharingData.settings.logo.url = Media.addToken(logoSharingData.settings.logo.url);

      let bookmarkData = {
        bookmarks: bookmarkUI,
        maxCharacters: BOOKMARK_MAX_CHARACTERS,
        strings: i18n.builder.headerConfig.bookmarks
      };

      const themeData = {
        strings: i18n.builder.headerConfig.appearance,
        colors: this.getColors(),
        fonts: this.getFonts()
      };

      this.container.find('.modal-tab[data-tab="logo-sharing"]').html(logoSharingTpl(logoSharingData));

      this.container.find('.modal-tab[data-tab="bookmarks"]').html(bookmarkTpl(bookmarkData));

      this.container.find('.modal-tab[data-tab="theme"]').html(themeTpl(themeData));

      this.tempThemeSettings = {
        colors: this.getColors('current'),
        titleFont: themeData.fonts.titleFont,
        bodyFont: themeData.fonts.bodyFont
      };
      this.updatePreview();

      this.attachBookmarkEvents();
      this.attachLogoSharingEvents();
      this.attachThemeEvents();

      this.container.modal();

      this.container.on('shown.bs.modal', () => {
        this.container.find('[data-toggle="tooltip"]').tooltip({
          container: 'body'
        });
        // disable the tooltip if there's a tagline.
        let linkTitle = this.container.find('.hc-text-input.link-title')[0];
        if (linkTitle && linkTitle.value.trim().length) {
          this.container.find('[data-toggle="tooltip"]').tooltip('disable');
        }
      });
    });
  }
}

export default SettingsPopup;
