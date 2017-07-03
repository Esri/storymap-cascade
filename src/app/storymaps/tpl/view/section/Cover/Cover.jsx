import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';

import i18nBuilder from 'lib-build/i18n!resources/tpl/builder/nls/app';
import i18nViewer from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import CoverStyleFactory from 'storymaps/tpl/view/section/Cover/CoverStyleFactory';

import viewTpl from 'lib-build/hbars!./Cover';
import {} from 'lib-build/less!./Cover';

export default class Cover {
  constructor(section) {
    this.type = 'cover';
    this.id = UIUtils.getUID();

    this._section = section;
    this._section.options = this._section.options || {};

    this._node = null;
    this._isLoaded = false;
    this._backgroundMedia = null;

    this._cover = CoverStyleFactory.createInstance(this._section.layout);
  }

  render() {
    this._backgroundMedia = SectionCommon.initMedia({
      media: this._section.background
    });

    return viewTpl({
      classes: ['section', 'section-layout-cover', this._section.layout, this._cover.layoutType].join(' '),
      nbViews: this._cover.dataViews,
      background: SectionCommon.renderBackground({
        media: this._backgroundMedia
      }),
      title: this._section.foreground.title,
      subtitle: this._section.foreground.subtitle,
      showSubtitle: this._section.foreground.subtitle || app.isInBuilder,
      creditsLeft: this._section.foreground['credits-left'],
      creditsRight: this._section.foreground['credits-right'],
      strings: Object.assign({},i18nBuilder.builder.cover,i18nViewer.viewer.cover)
    });
  }

  postCreate(sectionContainer) {
    this._node = sectionContainer;

    this._backgroundMedia.postCreate({
      container: sectionContainer,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      foregroundOptions: this._section.foreground.options,
      applySectionConfig: app.isInBuilder ? this._applySectionConfig.bind(this) : null,
      // TODO: for video, need to goes away
      sectionType: 'cover'
    });

    $('.scroll-invite').click(function() {
      app.Controller.navigateToSection({
        index: 1,
        animate: true
      });
    });

    this._applyConfig();
  }

  _applyConfig() {
    let textNode = this._node.find('.foreground .title-text');
    let backgroundNode = this._node.find('.foreground .text-background');
    let style = null;

    if (this._section.foreground && this._section.foreground.options) {
      style = this._section.foreground.options.titleStyle;
    }

    SectionCommon.applyTitleStyle(style, textNode, backgroundNode);
  }

  onScroll(params) {
    if (params.status == 'unload') {
      this._backgroundMedia.performAction({
        visible: false
      });
    }
    else if (params.status == 'preload') {
      return;
    }
    else if (params.status == 'current') {
      if (! this._isLoaded) {
        this._isLoaded = true;
        this._backgroundMedia.load().then(function() {
          this._backgroundMedia.performAction({
            isActive: true
          });
        }.bind(this));
      }
      else {
        this._backgroundMedia.performAction({
          isActive: true
        });
      }

      this._cover.displayCover(params);
      this.updateContent(params, true);
    }
    else if (! this._isLoaded) {
      return;
    }
    else {
      this.updateContent(params, false);
    }
  }

  getBookmark() {
    var bookmark = this._section.bookmark || {};

    return {
      status: bookmark.enabled ? 'visible' : 'disabled',
      title: this.getPreviewText ? this.getPreviewText() : '',
      bookmark: bookmark.title || ('')
    };
  }

  getPreviewText() {
    return this._section.foreground.title;
  }

  updateContent(params, initial) {
    if (params.currentSectionIndex == 0) {
      if (params.currentSectionScroll > app.display.sectionHeight / 2) {
        $('.story-header').css('background-color', 'rgba(0,0,0,' + params.currentSectionScroll / app.display.sectionHeight + ')');
      }
      else {
        $('.story-header').css('background-color', 'rgba(0,0,0,0)');
      }
    }

    if (!initial && params.status === 'current') {
      this._cover.onScroll(params);
    }
  }

  resize(params) {
    this._backgroundMedia.resize(params);
  }

  getArcGISContent() {
    return this._backgroundMedia.getArcGISContent();
  }
}
