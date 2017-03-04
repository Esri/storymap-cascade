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

  'storymaps-react/tpl/builder/AppParser',
  'storymaps/common/utils/CommonHelper',
  'storymaps/common/builder/BuilderHelper',
  'issue-checker/helpers/NormalizeHelper',
  'issue-checker/IssueChecker',

  // Utils
  'dojo/Deferred',
  'dojo/topic',
  'dojo/_base/lang',
  'esri/IdentityManager',
  'lib/color-thief/dist/color-thief.min'
], function(
  viewTpl,
  viewCss,
  Controller,

  MediaPickerPopup,
  SettingsPopup,
  AppParser,

  CommonHelper,
  BuilderHelper,
  NormalizeHelper,
  IssueChecker,

  // Utils
  Deferred,
  topic,
  lang,
  IdentityManager
) {
  return function BuilderView(Core, Builder) {
    $('#builder-views').append(viewTpl({ }));

    var _settingsPopup = null; // eslint-disable-line no-unused-vars
    var _mediaPicker = null;
    var _issueChecker = null;

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

        var portalUrl = BuilderHelper.getPortalURL();
        var appItem = lang.clone(app.data.appItem.item);

        // init the issue checker here.
        // only send truthy appId and appUrl params if the app has been saved before.
        _issueChecker = new IssueChecker({
          owner: appItem.owner || IdentityManager.findCredential(portalUrl).userId,
          portal: app.portal,
          appId: app.builder.isDirectCreationFirstSave ? null : app.data.appItem.item.id,
          appUrl: app.builder.isDirectCreationFirstSave ? null : app.data.appItem.item.url
        });
        this.scanApp();

        topic.subscribe('builder-should-check-story', function() {
          this.scanApp();
        }.bind(this));
      }.bind(this));
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
          function() {
            //
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
      var storyData = Controller.serializeStory(false);
      app.data.title = app.Controller.getStoryTitle();
      app.data.appItem.data.values.sections = storyData;
      app.data.appItem.data.values.template.editedWith = app.version;

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

    this.shareApp = function(sharingLevel) {
      var data = this.getScanData();

      return _issueChecker.share({
        appID: app.data.appItem.item.id,
        sharingLevel: sharingLevel,
        media: data.mediaIDs
      });
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

    this.onFirstAppSave = function() {
      _issueChecker.onFirstAppSave({
        appId: app.data.appItem.item.id,
        appUrl: app.data.appItem.item.url
      });
    };

    this.scanApp = function() {
      topic.publish('check-app-started');

      var scanData = this.getScanData();

      return _issueChecker.check({
        media: scanData.mediaIDs,
        appAccess: app.data.appItem.item.access
      })
      .then(function(scanResults) {
        // add the story-specific context (for now, just the sections it's in) on each one.
        this.addAppContext(scanResults.media, scanData.media);
        // add the fix methods on, instead of just the strings.
        this.addFixMethods(scanResults);

        var issueSections = this.compileIssueSections(scanResults.media);

        app.Controller.reportScanResults(scanResults, issueSections);
      }.bind(this));
    };

    this.getScanData = function() {
      var serializedStory = Controller.serializeStory(true);
      var media = AppParser.getMedia(serializedStory);
      var mediaIDs = this.getMediaIDs(media);

      return {
        mediaIDs: mediaIDs,
        media: media
      };
    };

    this.getMediaIDs = function(media) {
      // for each one, put it in its right place.
      var mediaIDs = {
        mapIDs: media.maps.allItems,
        sceneIDs: media.scenes.allItems,
        imageIDs: media.images.allItems,
        videoIDs: media.videos.allItems
      };

      return mediaIDs;
    };

    this.addAppContext = function(resultsMedia, contextMedia) {
      // basically, for each media, do a lookup and add on the sections.
      // similar: for each... hasOwnProp... (if not layers)
      // loop it up.
      for (var mediaType in resultsMedia) {
        // if the media type exists on both the serialized and scanned results, we'll match it up (this excludes layers, which are scanned but not serialized).
        if (resultsMedia.hasOwnProperty(mediaType) && contextMedia.hasOwnProperty(mediaType)) {
          this.addAppContextByMedia(resultsMedia[mediaType], contextMedia[mediaType]);
        }
      }
    };

    this.addAppContextByMedia = function(media, contextMedia) {
      // but you have the ID, so you could swap it for that.
      var mediaItems = NormalizeHelper.getAllItems(media);
      // for each media item, get the context (for now, just sections) off of the contextMedia.
      for (var i = 0; i < mediaItems.length; i++) {
        var resultItem = mediaItems[i];
        var contextItem = contextMedia.byId[resultItem.id];

        resultItem.sections = [];
        // make sure the item is in the context media (it should be) and has the sections property
        if (contextItem && contextItem.sections) {
          resultItem.sections = contextItem.sections;
        }
      }
    };

    this.addFixMethods = function(results) {
      var errors = NormalizeHelper.getAllItems(results.errors);

      for (var i = 0; i < errors.length; i++) {
        this.addFixMethodsByIssue(errors[i]);
      }
    };

    this.addFixMethodsByIssue = function(issue) {
      var action = null;

      for (var j = 0; j < issue.actions.length; j++) {
        action = issue.actions[j];

        // the new action has the actual "fix" callback method
        var newAction = {
          id: action,
          fix: this.getFixFunction(action)
        };

        issue.actions[j] = newAction;
      }
    };

    /*
    Returns a generic "fix" function that performs a fix.
    */
    this.getFixFunction = function(actionType) {
      return function(options) {
        return _issueChecker.fix({
          action: actionType,
          items: options.items,
          details: options.details
        })
        .then(function(fixResults) {
          // call a scan, then after that's done, THEN return the results.
          return this.scanApp()
          .then(function() {
            return fixResults;
          });
        }.bind(this), function(unfixedResults) {
          // if the fix wasn't totally successful, scan and then return the resuls.
          return this.scanApp()
          .then(function() {
            return unfixedResults;
          });
        }.bind(this));
      }.bind(this);
    };

    this.compileIssueSections = function(resultsMedia) {
      var issueSections = {
        errorSections: []
      };

      for (var mediaItem in resultsMedia) {
        if (resultsMedia.hasOwnProperty(mediaItem)) {
          if (mediaItem === 'layers') {
            this.compileIssueSectionsByLayer(resultsMedia[mediaItem], resultsMedia, issueSections.errorSections, 'errors');
          }
          else {
            this.compileIssueSectionsByMedia(resultsMedia[mediaItem], issueSections.errorSections, 'errors');
          }
        }
      }

      return issueSections;
    };

    this.compileIssueSectionsByLayer = function(layers, media, sections, severity) {
      var layerItems = NormalizeHelper.getAllItems(layers);

      for (var i = 0; i < layerItems.length; i++) {
        var layer = layerItems[i];

        // see if there are issues with the layer.
        if (layer[severity].length) {
          // if so, get the maps and scenes that this layer is a part of, and (conditionally) add their sections on.
          // start with maps
          if (layer.maps && layer.maps.length) {
            for (var j = 0; j < layer.maps.length; j++) {
              var mapID = layer.maps[j];
              var map = media.maps.byId[mapID];

              this.addIssueSections(map.sections, sections);
            }
          }
        }
      }
    };

    this.compileIssueSectionsByMedia = function(media, sections, severity) {
      var mediaItems = NormalizeHelper.getAllItems(media);

      for (var i = 0; i < mediaItems.length; i++) {
        var item = mediaItems[i];

        if (item[severity].length) {
          // push onto sections if not there.
          this.addIssueSections(item.sections, sections);
        }
      }
    };

    this.addIssueSections = function(itemSections, issueSections) {
      // for the sections on the item, if it doesn't already exist on the issuesSections, add it to it.
      for (var j = 0; j < itemSections.length; j++) {
        var section = itemSections[j];

        if (issueSections.indexOf(section) === -1) {
          issueSections.push(section);
        }
      }
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
          header: app.Controller.SHARED_STYLE_HEADER_SETTINGS || {}
        },
        template: {
          name: app.cfg.TPL_NAME,
          createdWith: app.version,
          editedWith: app.version,
          dataVersion: '1.0.0'
        },
        sections: [ ]
      };

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
