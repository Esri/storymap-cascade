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

define([
  'lib-build/tpl!./BuilderView',
  'lib-build/less!./BuilderView',
  'storymaps-react/tpl/builder/Controller',

  'storymaps/common/builder/mediaPicker/MediaPickerPopup',
  'storymaps-react/tpl/builder/settings/Popup',

  'storymaps/common/utils/CommonHelper',
  'storymaps/common/builder/BuilderHelper',

  // Utils
  'dojo/Deferred',
  'dojo/topic',
  'dojo/_base/lang',
  'lib/color-thief/dist/color-thief.min'
], function(
  viewTpl,
  viewCss,
  Controller,

  MediaPickerPopup,
  SettingsPopup,

  CommonHelper,
  BuilderHelper,

  // Utils
  Deferred,
  topic,
  lang
) {
  var STORY_SHELL = {
    config: {
      author: {
        name: ''
      }
    },
    settings: {
      /*
      theme: {
        colors: {
          id: 'black-over-white-1',
          'text-main': '#000',
          'background-main': '#FFF'
        }
      },*/
      header: { }
    },
    template: {
      name: app.cfg.TPL_ID,
      createdWith: app.version,
      editedWith: app.version,
      dataVersion: '1.0.0'
    },
    sections: [ ]
  };

  return function BuilderView(Core, Builder) {
    $('#builder-views').append(viewTpl({ }));

    var _settingsPopup = null, // eslint-disable-line no-unused-vars
        _mediaPicker = null;

    this.init = function() {
      app.builder.pendingChanges = 0;

      // Media picker
      _mediaPicker = new MediaPickerPopup({
        container: $('.media-picker-popup')
      });
      app.builder.mediaPicker = _mediaPicker;

      _settingsPopup = new SettingsPopup({
        container: $('#settings-popup')
      });
      app.builder.settingsPopup = _settingsPopup;

      //
      // My Stories
      //

      //topic.subscribe('MY-STORIES-EDIT-MEDIA', myStoriesEditMedia);
      //topic.subscribe('MY-STORIES-EDIT-MAP', myStoriesEditMap);

      topic.subscribe('builder-section-update', onSectionUpdate);

      // Mhh
      topic.subscribe('tpl-ready', function() {
        updateCreditsPlaceholderVisibility();
        topic.publish('builder-story-title-update', app.Controller.getStoryTitle());
      });
    };

    this.appInitComplete = function() {
      var newStory = null;

      //
      // Start in fromScratch mode
      //
      if (! app.data.appItem &&
          (CommonHelper.getUrlParams().fromScratch !== undefined
          || CommonHelper.getUrlParams().fromscratch !== undefined)) {
        newStory = getBlankAppDataJSON({
          //title: 'Cascade created on ' + new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString(),
          //subtitle: 'Builder placeholder'
          title: '',
          subtitle: ''
        });

        app.data.appItem = {
          item: BuilderHelper.getBlankAppJSON(),
          data: {
            values: null
          }
        };

        // TODO: tmp - force a different item title
        app.data.title = app.data.appItem.item.title;
      }
      //
      // Start from a webmap or an empty item
      //
      else if (app.data.appItem && app.Controller.isStoryBlank()) {
        var webmapId = null,
            websceneId = null;

        if (app.data.appItem.data && app.data.appItem.data.values) {
          webmapId = app.data.appItem.data.values.webmap;
          websceneId = app.data.appItem.data.values.webscene;
        }

        newStory = getBlankAppDataJSON({
          webmapId: webmapId,
          websceneId: websceneId,
          title: app.data.appItem.item.title || '',
          subtitle: app.data.appItem.item.snippet || ''
        });
      }

      if (newStory) {
        app.data.appItem.data.values = newStory;
      }

      topic.subscribe('builder-story-title-update', function(title) {
        document.title = title;
      });

      //
      // Update some components that need to know if the story has a title yet
      //
      topic.publish('builder-story-title-update', app.Controller.getStoryTitle());

      if (! app.isProduction && CommonHelper.getUrlParams().debug == 'media-picker') {
        app.builder.mediaPicker.open({
          mode: 'add'
        }).then(
          function(selection) {
            console.log('selected media:', selection);
          },
          function() {
            //
          }
        );
      }
    };

    this.updateUI = function() {
      //
    };

    this.saveApp = function() {
      var storyData = Controller.serializeStory();

      app.data.title = app.Controller.getStoryTitle();
      app.data.appItem.data.values.sections = storyData;

      Builder.saveApp();
    };

    this.saveFailed = function(source) {
      if (source === 'DUPLICATE') {
        app.data.sections[0].showTitleError();
        app.Controller.navigateToSection({
          index: 0,
          animate: false
        });
      }
    };

    /*jshint -W098 */
    this.resize = function() {
      // On Firefox and share dialog is displayed
      /*
      if (has('ff') && $('#sharePopup').hasClass('in')) {
        _sharePopup.updateMyStoriesPosition();
      }
      */
    };

    function onSectionUpdate() {
      var sections = app.data.sections;

      if (! sections || ! sections.length) {
        return;
      }

      app.Controller.renderHeader();
      updateCreditsPlaceholderVisibility();
    }

    function updateCreditsPlaceholderVisibility() {
      var sections = app.data.sections;

      if (! sections || ! sections.length) {
        return;
      }

      //
      // Update the visibility of credits-placeholder section
      // - not visible if there is a credits section
      // - visible if no credits and
      //    - there is more than 2 sections (excluding credits-placeholder)
      //    - 2 sections and the second section is
      //      - an immersive
      //      - a sequence with 2 or more complete blocks
      //

      var lastSection = sections[sections.length - 1];

      if (lastSection && lastSection.type == 'credits') {
        sections[sections.length - 2].setVisibility(false);
      }
      else {
        var isVisible = sections.length > 3;

        if (! isVisible) {
          if (sections[1].type == 'immersive') {
            isVisible = true;
          }
          else if (sections[1].type == 'sequence') {
            if (sections[1].getNumberOfBlocks() >= 3) {
              isVisible = true;
            }
          }
        }

        sections[sections.length - 1].setVisibility(isVisible);
      }
    }

    function getBlankAppDataJSON(params) {
      var story = lang.clone(STORY_SHELL);

      //story.config.author.name = app.portal.getPortalUser().fullName;

      var firstSectionBlocks = [
        {
          type: 'text',
          text: {
            value: '<p class="block block-placeholder"></p>'
          }
        }
      ];

      if (params.webmapId) {
        firstSectionBlocks = [
          /* todo webmap title? */
          app.ui.MediaFactory.createInstance({
            type: 'webmap',
            webmap: {
              id: params.webmapId
            }
          }).serialize()
        ];
      }
      else if (params.websceneId) {
        firstSectionBlocks = [
          /* todo webscene title? */
          app.ui.MediaFactory.createInstance({
            type: 'webscene',
            webscene: {
              id: params.websceneId
            }
          }).serialize()
        ];
      }

      story.sections = [
        app.ui.SectionFactory.createInstance({
          type: 'cover',
          foreground: {
            title: params.title,
            subtitle: params.subtitle
          }
        }).serialize(),
        app.ui.SectionFactory.createInstance({
          type: 'sequence',
          background: app.ui.MediaFactory.createInstance({
            type: 'color',
            color: {
              value: '#FFF'
            }
          }).serialize(),
          foreground: {
            blocks: firstSectionBlocks
          }
        }).serialize()
      ];

      return story;
    }
  };
});
