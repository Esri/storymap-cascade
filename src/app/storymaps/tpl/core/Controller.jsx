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

let storyMap = 'Story Map';

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
    return DEFAULT_HEADER_SETTINGS;
  }

  static renderHeader() {
    var appItem = app.data.appItem,
        headerSettings = appItem ? appItem.data.values.settings.header : null;

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

  static renderStory(config, sections) {
    this._sections = [];
    this._currentSection = null;
    this._$currentSection = null;
    this._currentSectionIndex = null;
    this._container = $('.sections');

    var errorInPreviousSection = false,
        sectionsLength = sections.length;

    app.data.errorWebGL = false;

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
      if (app.data.errorWebGL) {
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
          var errorSection = this.getErrorSection({
            type: app.data.errorWebGL ? 'WEBGL' : ''
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

    $('.section').each(function(i, node) {
      this._sections[i].postCreate($(node));
    }.bind(this));
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
      viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop
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
        viewportBottom: params.scrollTop + app.display.sectionHeight - sectionTop
      }));
    }.bind(this));

    //
    // Save references
    //

    this._$currentSection = params.$currentSection;
    this._currentSectionIndex = params.currentSectionIndex;
    this._currentSection = newSection;
  }

  static onResize(params) {
    for (let section of this._sections) {
      section.resize(params);
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

    if (params.type == 'WEBGL') {
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
                value: '<div class="block"><table><tr>'
                + '<td style="padding-bottom: 10px;">'
                + ' <img src="resources/tpl/viewer/icons/warning-mobile-smartphone.png" /></td>'
                + '<td style="padding-bottom: 10px; padding-left: 13px;">'
                + i18n.viewer.mobileWarning.message1
                + '</td></tr><tr>'
                + '<td colspan="2" style="padding-top: 10px; border-top: 1px solid white; text-align: center;"><a class="btn btn-warning-email" style="background-color: white; color: rgba(255, 0, 0, 0.7);" href="' + storyWarningBtn + '"><img src="resources/tpl/viewer/icons/warning-mobile-laptop.png" style="margin-right: 5px;"/>'
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
