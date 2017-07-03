import {} from 'lib-build/less!./Header';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import CommonHelper from 'storymaps/common/utils/CommonHelper';

import Media from 'storymaps-react/tpl/view/media/Media';
import ProgressBar from 'storymaps/tpl/view/ui/ProgressBar';
import Bookmarks from './Bookmarks';

import ShareDialog from 'storymaps/common/ui/share/ShareDialog';
import SocialSharing from 'storymaps/common/utils/SocialSharing';

import has from 'dojo/has';

const HEADER_HEIGHT = 50;

export default class Header {

  constructor() {
    this._node = $('.story-header');
    this._bookmarksNode = this._node.find('.bookmarks');

    this._shareDialog = new ShareDialog($('#shareDialog'));
    this._progressBar = new ProgressBar();
    this._bookmarks = new Bookmarks(this._node.find('.bookmarks'));

    this._isCompact = null;
    this._currentSection = null;

    this.initShareTooltip();
  }

  render(params = {}) {
    var {logo, link, social, title} = params;
    var socialCfg = {
      logoEnabled: logo.enabled,
      logoURL: Media.addToken(logo.url),
      logoTarget: logo.link,
      linkURL: link.url,
      linkText: link.title
    };

    this.setLogo(this._node, socialCfg).then(() => {
      this._bookmarks.render(params.bookmarks);
    }, () => {
      this._bookmarks.render(params.bookmarks);
    });
    this.setLink(this._node, socialCfg);

    this._node.find('.title').html(title);

    this._node.find('.title').off('click').on('click', function() {
      app.Controller.navigateToSection({
        index: 0,
        animate: false
      });
    });

    this._node.find('.share-btn')
      .off('click')
      .click(this._onShareBtnClick.bind(this))
      .toggleClass('active', !! social.enabled)
      .off('keypress')
      .on('keypress', function(evt) {
        if (evt.keyCode === 13 && !!social.enabled) {
          this._onShareBtnClick();
        }
      }.bind(this));

    this._progressBar.start();
    this._bookmarks.render(params.bookmarks);

    this.toggleShareButton();
  }

  initShareTooltip() {
    let shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

    shareContainer.tooltip({
      title: i18n.builder.header.sharingNotAvailable,
      placement: 'auto left'
    });

    shareContainer.on('inserted.bs.tooltip', function() {
      $(this).data('bs.tooltip').$tip.addClass('custom-share-tooltip');
    });

    shareContainer.tooltip('disable');
  }

  toggleShareButton() {
    let isPrivate = true;

    if (window.app.data.appItem && window.app.data.appItem.item && window.app.data.appItem.item.access) {
      if (app.data.appItem.item.access !== 'private' && app.data.appItem.item.access !== 'shared') {
        isPrivate = false;
      }
    }

    let socialShareButton = this._node.find('.share-btn');
    let shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

    // if the story's private or the app has not yet been saved, disable the share button.
    if (isPrivate || (app.builder && app.builder.isDirectCreationFirstSave)) {
      socialShareButton.addClass('share-disabled');
      shareContainer.tooltip('enable');
    }
    else {
      socialShareButton.removeClass('share-disabled');
      shareContainer.tooltip('disable');
    }
  }

  disableShareButtonAutoplay() {
    let socialShareButton = this._node.find('.share-btn');
    let shareContainer = this._node.find('.share-btn-container[data-toggle="tooltip"]');

    socialShareButton.addClass('share-disabled');
    shareContainer
      .tooltip('destroy')
      .tooltip({
        title: window.i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
        trigger: 'hover',
        placement: 'left'
      });
  }

  setLogo(container, headerCfg) {
    return new Promise((resolve, reject) => {
      if (! headerCfg.logoEnabled || ! headerCfg.logoURL || headerCfg.logoURL == 'NO_LOGO') {
        container.find('.logoImg').hide();
        //resizeLinkContainer(container);
        reject();
      }
      else {
        // fix uploaded images
        if (CommonHelper.uploadedImageNeedsFixing(headerCfg.logoURL)) {
          // fix current cfg object
          headerCfg.logoURL = CommonHelper.fixUploadedImageUrl(headerCfg.logoURL);
          // also fix data in appItem
          let logoShortcut = app.data.appItem.data.values.settings.header.logo;
          logoShortcut.url = CommonHelper.fixUploadedImageUrl(logoShortcut.url);
        }

        container.find('.logoLink').css('cursor', headerCfg.logoTarget ? 'pointer' : 'default');

        // if there's no logo link, we shouldn't allow clicking on the logo to link out to something (in this case, the same page we're on).
        if (headerCfg.logoTarget) {
          container.find('.logoLink').attr('href', headerCfg.logoTarget);
          container.find('.logoLink').removeClass('logoLink-disabled');
        }
        else {
          container.find('.logoLink').addClass('logoLink-disabled');
        }

        let imageNode = container.find('.logoImg');

        imageNode.on('error', () => {
          imageNode.hide();
          reject();
        });

        imageNode.on('load', () => {
          resolve();
        });

        imageNode.attr('src', headerCfg.logoURL).show();
      }
    });
  }

  setLink(container, headerCfg) {
    if (headerCfg.linkURL && headerCfg.linkText) {
      container.find('.linkContainer').html('<a href="' + headerCfg.linkURL + '" class="link" target="_blank">' + headerCfg.linkText + '</a>');
    }
    else {
      container.find('.linkContainer').html(headerCfg.linkText);
    }
  }

  update(params) {
    //
    // Story progress
    //
    this._progressBar.update(params.storyProgress);

    //
    // Header mode
    //

    if (this._isCompact !== params.headerCompact) {
      this._isCompact = params.headerCompact;

      this._node.toggleClass('compact', this._isCompact);
      this._bookmarksNode.toggleClass('bookmarks-hidden', this._isCompact);
      if (! this._isCompact) {
        this._node.css('background-color', 'rgba(0,0,0,1)');
      }
    }
    //
    // Bookmarks
    // only update when the section number has changed (not on each scroll)
    if (this._currentSection !== params.sectionIndex) {
      this._currentSection = params.sectionIndex;
      this._bookmarks.update(params.sectionIndex);
    }
  }

  resize() {
    this._bookmarks.resize();
  }

  getHeight() {
    return HEADER_HEIGHT;
  }

  _onShareBtnClick() {
    this._shareDialog.present(SocialSharing.cleanURL(document.location.href, true), {
      facebook: true,
      twitter: true
    });
  }

  showEditButton() {
    this._node.find('.header-edit-button')
      .html('<i class="header-edit-icon fa fa-pencil"></i>' + i18n.builder.header.edit + '<span aria-hidden="true" class="header-edit-close">×</span>')
      .show()
      .off('click')
      .click(CommonHelper.switchToBuilder);

    if (has('ff') || has('ie') || has('trident') == 7) {
      this._node.find('.header-edit-close').hide();
    }
    else {
      this._node.find('.header-edit-close').click(function() {
        this._node.find('.header-edit-button').hide();
        $(window).resize();
        return false;
      }.bind(this));
    }
  }
}
