/*
| Copyright 2016 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/

import lang from 'dojo/_base/lang';
import topic from 'dojo/topic';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import Media from 'storymaps-react/tpl/view/media/Media';
import WebSceneCache from 'storymaps-react/tpl/core/WebSceneCache';

import UIUtils from 'storymaps/tpl/utils/UI';
import CommonHelper from 'storymaps/common/utils/CommonHelper';

let storyMap = 'Story Map';

export default class Controller {

  static getStoryTitle() {
    var coverSection = this._sections && this._sections[0];

    if (coverSection) {
      return coverSection.getPreviewText();
    }

    return '';
  }

  // TODO: deprecate method in SocialSharing
  static getStoryURL(params = {}) {
    let url = params.url || document.location.href;

    // If sharing in builder mode the link will always open the viewer
    // TODO clean, should get all url parameters, filter edit and rebuild URL
    url = url.replace(/\?edit(=.*)*&/, '?');
    url = url.replace(/\&edit(=.*)*/, '');
    url = url.replace(/\?edit/, '');

    // Filter out locale URL
    url = url.replace(/\?locale(=[a-zA-Z\-]+)+&/, '?');
    url = url.replace(/\&locale(=[a-zA-Z\-]+)+/, '');

    return params.urlEncoding ? encodeURIComponent(url) : url;
  }

  static isStoryBlank() {
    if (! app.data.appItem || ! app.data.appItem.data || ! app.data.appItem.data.values
        || ! app.data.appItem.data.values.config
        || ! app.data.appItem.data.values.settings
        || ! app.data.appItem.data.values.sections
        || ! app.data.appItem.data.values.template
    ) {
      return true;
    }

    return false;
  }

  static get DEFAULT_HEADER_SETTINGS() {
    const DEFAULT_HEADER_SETTINGS = {
      logo: {
        enabled: true,
        url: 'resources/tpl/viewer/icons/esri-logo.png',
        link: 'https://www.esri.com'
      },
      link: {
        url: 'https://storymaps.arcgis.com',
        title: i18n.viewer.headerFromCommon.defaultTagline.replace(/\${STORY_MAP}/g, storyMap)
      },
      social: {
        enabled: true
      }
    };

    return DEFAULT_HEADER_SETTINGS;
  }

  static get SHARED_STYLE_HEADER_SETTINGS() {
    if (!app.portal.isOrganization) {
      return null;
    }

    let orgLogo = lang.getObject('portal.portalProperties.sharedTheme.logo.small', false, app);
    let orgClickThruLink = lang.getObject('portal.portalProperties.sharedTheme.logo.link', false, app);

    if (!orgLogo) {
      return null;
    }

    const SHARED_STYLE_HEADER_SETTINGS = {
      logo: {
        enabled: true,
        url: orgLogo,
        link: orgClickThruLink
      },
      link: {
        url: 'https://storymaps.arcgis.com',
        title: i18n.viewer.headerFromCommon.defaultTagline.replace(/\${STORY_MAP}/g, storyMap)
      },
      social: {
        enabled: true
      }
    };

    return SHARED_STYLE_HEADER_SETTINGS;
  }

  static renderHeader() {
    let appItem = app.data.appItem;
    let headerSettings = appItem ? appItem.data.values.settings.header : null;

    if (! headerSettings || ! headerSettings.logo || ! headerSettings.link) {
      headerSettings = Controller.DEFAULT_HEADER_SETTINGS;
    }

    app.ui.header.render({
      logo: headerSettings.logo,
      link: headerSettings.link,
      social: headerSettings.social,
      bookmarks: this.getBookmarks(),
      title: this.getStoryTitle()
    });
  }

  static get THEME_COLOR_OPTIONS() {
    const colors = [{
      id: 'black-on-white-1',
      label: i18n.viewer.theme.lightLabel,
      themeMajor: 'light',
      themeContrast: 'dark',
      bgMain: 'white',
      textMain: '#4c4c4c'
    }, {
      id: 'white-on-black-1',
      label: i18n.viewer.theme.darkLabel,
      themeMajor: 'dark',
      themeContrast: 'light',
      bgMain: '#0E0E0E',
      textMain: '#DDD'
    }];
    const appColors = lang.getObject('app.data.appItem.data.values.settings.theme.colors');
    if (appColors) {
      const found = colors.some(color => {
        return color.id === appColors.id;
      });
      if (!found) {
        colors.push(lang.clone(appColors));
      }
    }
    return colors;
  }

  static get THEME_DEFAULT_COLORS() {
    const themeId = 'black-on-white-1';
    const colors = this.THEME_COLOR_OPTIONS;
    let found;
    colors.some(colorObj => {
      if (colorObj.id === themeId) {
        found = colorObj;
        return true;
      }
      return false;
    });
    return found || {};
  }

  static get THEME_FONT_OPTIONS() {
    const fonts = [{
      label: 'Open Sans',
      fontFamily: '\'open_sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif'
    }, {
      label: 'Noto Serif',
      fontFamily: '\'noto_serif\', \'Georgia\', \'Hoefler Text\', \'Palatino\', cursive'
    }, {
      label: 'Georgia',
      fontFamily: '\'Georgia\', \'Hoefler Text\', \'Palatino\', serif'
    }, {
      label: 'Arial',
      fontFamily: '\'Arial\', \'Helvetica Neue\', \'Helvetica\', sans-serif'
    }];

    const appFonts = lang.getObject('app.data.appItem.data.values.settings.theme.fonts');
    if (appFonts) {
      let found;
      if (appFonts.titleFont) {
        found = fonts.some(font => {
          return font.label === appFonts.titleFont.label;
        });
        if (!found) {
          fonts.push(lang.clone(appFonts.titleFont));
        }
      }
      if (appFonts.bodyFont) {
        found = fonts.some(font => {
          return font.label === appFonts.bodyFont.label;
        });
        if (!found) {
          fonts.push(lang.clone(appFonts.bodyFont));
        }
      }
    }
    return fonts;
  }

  static get THEME_DEFAULT_FONTS() {
    const bodyFontLabel = 'Noto Serif';
    const titleFontLabel = 'Open Sans';
    const fonts = this.THEME_FONT_OPTIONS;
    let bodyFont, titleFont;
    fonts.forEach(fontObj => {
      if (fontObj.label === bodyFontLabel) {
        bodyFont = lang.clone(fontObj);
      }
      if (fontObj.label === titleFontLabel) {
        titleFont = lang.clone(fontObj);
      }
    });
    return {bodyFont, titleFont};
  }

  // body gets theme major and contrast classes, narrative text gets <style> tag with id
  static changeTheme() {

    var currentTheme = lang.getObject('app.data.appItem.data.values.settings.theme');

    if (!currentTheme) {
      return;
    }

    var colors = currentTheme.colors;
    if (colors) {
      // get rid of existing body classes
      $('body').removeClass('theme-major-dark theme-major-light theme-contrast-dark theme-contrast-light');

      // body gets either theme-major-dark or theme-major-light class.
      if (colors.themeMajor) {
        $('body').addClass(`theme-major-${colors.themeMajor}`);
      }

      // body also gets theme-contrast-dark or theme-contrast-light class.
      // These are the viewer-specific changes based on bgMain.
      // Other builder-targeted changes can be found in builder Controller.js
      if (colors.bgMain || colors.themeContrast) {
        // this class changes the colors of the links in narrative sections
        var contrast = colors.themeContrast || CommonHelper.getLightOrDarkText(colors.bgMain);
        $('body').addClass(`theme-contrast-${contrast}`);
      }

      // narrative paragraphs get text color <style> with id.
      var textColorStr = colors.textMain ? `.section-layout-sequence {color: ${colors.textMain};}` : '';
      UIUtils.addCSSRule(textColorStr, 'text-color');
    }

    var fonts = currentTheme.fonts;
    if (fonts) {
      var titleFontStr = fonts.titleFont ? `.sections h1, .sections h2, .sections h3, .sections h4, .sections h5, .sections h6 { font-family: ${fonts.titleFont.fontFamily};}` : '';
      UIUtils.addCSSRule(titleFontStr, 'title-font');
      var bodyFontStr = fonts.bodyFont ? `.sections { font-family: ${fonts.bodyFont.fontFamily};}` : '';
      UIUtils.addCSSRule(bodyFontStr, 'body-font');
    }

  }

  static renderStory(config, sections) {
    this._sections = [];
    this._webSceneCache = new WebSceneCache();
    this._currentSection = null;
    this._$currentSection = null;
    this._currentSectionIndex = null;
    this._container = $('.sections');

    var errorInPreviousSection = false,
        sectionsLength = sections.length;

    app.data.errorWebGL = false;
    app.data.errorVideoMobile = false;

    // Merge consecutive sequence sections
    // This always run in viewer and builder before the story is parsed
    // It's a V1 legacy, it was too easy to create that kind of situation
    // As this is an extra loop, could consider merging that with next loop
    // Or performing this only if the story has not been edited since V1 (see version tracked in item data)
    let prevSectionType = '';
    for (let i = sections.length - 1; i >= 0 ; i--) {
      let section = sections[i];

      if (section.type == 'sequence' && prevSectionType == 'sequence') {
        section.foreground.blocks = section.foreground.blocks.concat(sections[i + 1].foreground.blocks);
        sections.splice(i + 1, 1);
      }

      prevSectionType = section.type;
    }

    //
    // Add the story to the dom
    // TODO: need to check if the story has at least cover and another section
    // TODO: benchmark lazy load creation with fake scrollbar
    //

    $.each(sections, function(index, section) {
      var error = false,
          newSection = app.ui.SectionFactory.createInstance(section);

      if (newSection) {
        // If it's an alternate section but there hasn't been any error
        //  in previous section, we can ignore
        if (section.alternate === true && ! errorInPreviousSection) {
          return;
        }

        try {
          this._container.append(newSection.render(index));
        }
        catch (e) {
          console.error(e);

          error = true;
          errorInPreviousSection = true;

          // A WEBGL error can either reject the whole section
          //  like if the author has defined an alternate section
          //  in that case the section is not rendered at all
          // Or the section might be displayed and the media will show an error
          //  it's the section that decide what it wants
          // RUNTIME-NO-WEBGL is throwned only if the whole section is ignored
          if (e == 'RUNTIME-NO-WEBGL') {
            app.data.errorWebGL = true;
          }
        }

        if (! error) {
          this._sections.push(newSection);
        }
      }

      // If there has been and error with WebGL
      // If rendering the section before credits
      // Or the last section if no credits
      if (app.data.errorWebGL || app.data.errorVideoMobile) {
        if (
              (app.isInBuilder && (
                index == sectionsLength - 3 && sections[index + 1].type == 'credits-placeholder'
                || index == sectionsLength - 2 && sections[index + 1].type == 'credits-placeholder'
              ))
            || (! app.isInBuilder && (
                index == sectionsLength - 2 && sections[index + 1].type == 'credits'
                || index == sectionsLength - 1 && section.type != 'credits'
            ))
        ) {
          let errorType = '';

          if (app.data.errorWebGL) {
            errorType = 'WEBGL';
          }
          else if (app.data.errorVideoMobile) {
            errorType = 'VIDEO_MOBILE';
          }

          var errorSection = this.getErrorSection({
            type: errorType
          });

          if (errorSection) {
            this._sections.push(errorSection);
            this._container.append(errorSection.render(index));
          }
        }
      }
    }.bind(this));

    app.data.sections = this._sections;
    app.data.sectionsJSON = sections;

    app.data.title = app.Controller.getStoryTitle();
    document.title = app.data.title;

    //
    // Now that everything is in the DOM, call postCreate on every section
    //  which will call similar method on every view and media
    // Primary goal is for everyone to have a reference to it's DOM container
    //

    let asyncResults = [];

    $('.section').each(function(i, node) {
      let sectionResults = this._sections[i].postCreate($(node));

      if (Array.isArray(sectionResults)) {
        asyncResults = asyncResults.concat(sectionResults);
      }
    }.bind(this));

    return Promise.all(asyncResults);
  }

  static getBookmarks() {
    var bookmarks = [];

    $.each(this._sections, function(i, section) {
      if (section.getBookmark) {
        var bookmark = section.getBookmark();

        if (bookmark && bookmark.status == 'visible') {
          bookmarks.push({
            index: i,
            title: bookmark.bookmark
          });
        }
      }
    });

    return bookmarks;
  }

  static preloadSectionByIndex(index) {
    this.preloadSection(this._sections[index], {});
  }

  static preloadSection(section, params) {
    if (! section) {
      return;
    }

    window.requestAnimationFrame(function() {
      section.onScroll(lang.mixin(params, {
        status: 'preload'
      }));
    });
  }

  static toggleScrollEvents(enable) {
    this._disableScrollEvents = ! enable;
  }

  static onScroll(params) {
    var newSection = this._sections[params.currentSectionIndex];

    // tried different things to remove jank
    //  - delay action on prev section
    //  - have bg be taller calc(100vh + 10px)
    // ...

    if (! newSection || this._disableScrollEvents) {
      return;
    }

    var sectionTop = app.display.sections[params.currentSectionIndex].top;

    newSection.onScroll(lang.mixin(params, {
      status: 'current',
      viewportTop: params.scrollTop - sectionTop,
      viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop,
      webSceneCache: this._webSceneCache
    }));

    // If changing section
    if (params.currentSectionIndex != this._currentSectionIndex) {
      // Activate new section
      params.$currentSection.addClass('active');

      // Dev event
      topic.publish('story-navigated-section', {
        index: params.currentSectionIndex,
        data: this._currentSection
      });

      //
      // Preload next section
      //

      var nextSection = this._sections[params.currentSectionIndex + 1];

      if (nextSection) {
        if (params.currentSectionIndex != this._currentSectionIndex) {
          this.preloadSection(nextSection, params);
        }
      }

      //
      // Unload previous section
      //

      var currentSection = this._currentSection;
      var currentSectionEl = this._$currentSection;

      if (currentSectionEl) {
        window.requestAnimationFrame(function() {
          currentSectionEl.removeClass('active');
          currentSection.onScroll({ status: 'unload' });
        });
      }
    }

    //
    // Refresh visible sections
    //

    $.each(params.visibleSections, function(i, sectionIndex) {
      var section = this._sections[sectionIndex],
          sectionTop = app.display.sections[sectionIndex].top;

      // Skip current section that already got one event sent
      if (sectionIndex == params.currentSectionIndex) {
        return;
      }

      section.onScroll(lang.mixin(params, {
        status: 'visible',
        viewportTop: params.scrollTop - sectionTop,
        viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop,
        webSceneCache: this._webSceneCache
      }));
    }.bind(this));

    //
    // Save references
    //

    this._$currentSection = params.$currentSection;
    this._currentSectionIndex = params.currentSectionIndex;
    this._currentSection = newSection;

    if (!app.isInBuilder && !params.initialUpdate) {
      this._showSections();
    }
  }

  static _showSections() {
    const FADE_TOLERANCE = 100;
    const GPU_TOLERANCE = 1000;

    for (let index = 0; index < app.display.sections.length; index++) {
      let section = app.display.sections[index];
      const sectionNode = section.node;

      if (sectionNode) {
        // don't do for narrative section or credits
        if (section.type === 'title' || section.type === 'immersive') {
          const viewportTop = app.display.scrollTop;
          const viewportBottom = viewportTop + app.display.windowHeight;

          if (!sectionNode.hasClass('bring-in')) {
            if (section.top < viewportBottom + FADE_TOLERANCE) {
              sectionNode.addClass('bring-in');
            }
          }
          else {
            if (section.top > viewportBottom) {
              sectionNode.removeClass('bring-in');
            }
          }

          const nextSection = app.display.sections[index + 1];
          // if you're the last section, the bottom is the bottom of the story.
          const sectionBottom = nextSection ? nextSection.top : app.display.storyHeight;
          const topWithinRange = section.top < viewportBottom + GPU_TOLERANCE;
          const bottomWithinRange = sectionBottom > viewportTop - GPU_TOLERANCE;
          if (topWithinRange && bottomWithinRange) {
            sectionNode.addClass('section-on-screen');
          }
          else {
            sectionNode.removeClass('section-on-screen');
          }
        }
      }
    }
  }

  static onResize(params) {
    for (let section of this._sections) {
      section.resize(lang.mixin(params, {
        webSceneCache: this._webSceneCache
      }));
    }
  }

  static navigateToSection(params = {}) {
    return new Promise(resolve => {
      if (params.index == undefined || params.animate == undefined) {
        return;
      }

      if (params.index > app.display.sections.length - 1) {
        return;
      }

      const HEADER_HEIGHT = 50;

      var sectionType = this._sections[params.index].type,
          sectionTop = app.display.sections[params.index].top,
          sectionOffset = 1,
          newScrollPos = 0;

      // So that the panel get displayed
      if (sectionType == 'immersive') {
        // TODO should be given by Immersive
        sectionOffset = app.display.windowHeight - 250 + HEADER_HEIGHT;
        if (app.isInBuilder) {
          // Builder view panel
          sectionOffset += 125;
        }
      }

      newScrollPos = Math.floor(sectionTop - HEADER_HEIGHT + sectionOffset);

      if (params.animate) {
        //if (params.disableEvents) {
        this.toggleScrollEvents(false);
        //}

        $('html,body').animate(
          {
            scrollTop: newScrollPos
          },
          {
            duration: params.animateSpeed || 400
          }
        ).promise().then(function() {
          //if (params.disableEvents) {
          this.toggleScrollEvents(true);
          // So that stuff get updated once at destination
          // Just updating the position doesn't work for the last section if it's not tall enough to fill the height
          // That update method should be integrated into the Controller and keep MainView for catching Scroll Events
          // TODO
          app.ui.update({
            forceUpdate: true
          });
          resolve(params.index);
          //}
        }.bind(this));
      }
      else {
        document.body.scrollTop = newScrollPos;
        // Firefox
        document.documentElement.scrollTop = newScrollPos;

        resolve(params.index);
      }
    });
  }

  static getSectionById(sectionId) {
    for (var sectionIndex in this._sections) {
      var section = this._sections[sectionIndex];

      if (section.id == sectionId) {
        return parseInt(sectionIndex, 10);
      }
    }

    return -1;
  }

  static getSectionIndexById(sectionIndex) {
    return this._sections[sectionIndex].id;
  }

  static getErrorSection(params) {
    params = params || {};

    var errorSection = null;

    if (params.type === 'WEBGL' || params.type === 'VIDEO_MOBILE') {
      var storyWarningBtn = 'mailto:?to=&subject=Check%20out%20this%20story&body=' + document.location.href;

      errorSection = app.ui.SectionFactory.createInstance({
        type: 'sequence',
        layout: 'sequence-2',
        background: {
          type: 'color',
          color: {
            value: '#FFF'
          }
        },
        foreground: {
          blocks: [
            {
              type: 'text',
              text: {
                value: '<div class="block bring-in"><table><tr>'
                + '<td style="padding-bottom: 10px;">'
                + ' <img src="resources/tpl/viewer/icons/warning-mobile-smartphone.png" /></td>'
                + '<td style="padding-bottom: 10px; padding-left: 13px;">'
                + i18n.viewer.mobileWarning.message1
                + '</td></tr><tr>'
                + '<td colspan="2" style="font-family: open_sans, sans-serif; padding-top: 10px; border-top: 1px solid white; text-align: center;"><a class="btn btn-warning-email" style="background-color: white; color: rgb(171, 60, 22);white-space: normal;" href="' + storyWarningBtn + '"><i class="fa fa-envelope-o" style="margin-right: 5px;color: rgb(171, 60, 22);"></i>'
                + i18n.viewer.mobileWarning.email
                + '</a></td></tr></table></div>'
              }
            }
          ]
        }
      });
    }

    return errorSection;
  }

  static getArcGISContent() {
    let arcgisContent = [];

    var appData = app.data.appItem && app.data.appItem.data && app.data.appItem.data.values,
        headerLogo = appData && appData.settings && appData.settings.header && appData.settings.header.logo;

    if (headerLogo && headerLogo.enabled && headerLogo.url) {
      var headerArcGISLogo = Media.getArcGISItemResourceURL(headerLogo.url);
      if (headerArcGISLogo) {
        arcgisContent.push({
          type: 'item-resource',
          mediaType: 'image',
          url: headerArcGISLogo.url,
          file: headerArcGISLogo.file
        });
      }
    }

    for (let section of this._sections) {
      arcgisContent.push(... section.getArcGISContent());
    }

    return arcgisContent;
  }
}
