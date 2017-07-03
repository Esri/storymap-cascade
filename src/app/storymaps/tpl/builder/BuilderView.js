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
  'storymaps/tpl/utils/UI',

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
  UIUtils,

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
      var storyData = Controller.serializeStory(false, false);
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
        // broaden minimal results to each media instance
        this.addAppContext(scanResults, scanData);

        // Hand controller map of sections with data for each...
        var mediaBySections = this.getMediaBySections(scanData.media);

        // get context-specific issues.
        app.Controller.addContextSpecificIssues(mediaBySections);

        // aggregate context-specific issues here
        this.aggregateContextIssues(scanData.media, scanData.warnings);

        // add the fix methods on, instead of just the strings.
        this.addFixMethods(scanData.errors);

        var issueSections = this.compileIssueSections(scanData.media);

        app.Controller.reportScanResults(scanData, issueSections);
      }.bind(this));
    };

    this.aggregateContextIssues = function(media, warnings) {
      for (var mediaType in media) {
        if (media.hasOwnProperty(mediaType) && mediaType !== 'layers') {
          this.aggregateContextIssuesByMediaType(media[mediaType], warnings);
        }
      }
    };

    this.aggregateContextIssuesByMediaType = function(media, mediaWarnings) {
      var allMedia = NormalizeHelper.getAllItems(media);
      var ALT_MEDIA_ISSUE = 'content/noAlternateMedia';
      // loop throuh all the media items
      for (var i = 0; i < allMedia.length; i++) {
        var item = allMedia[i];
        // add the warning if there is one -- both allItems and the entry to byId
        var warnings = lang.getObject('scanResult.warnings', false, item);

        if (warnings && warnings.length && warnings.indexOf(ALT_MEDIA_ISSUE) !== -1) {
          // see if the warning exists at the top level. If not, add it !
          if (mediaWarnings.allItems.indexOf(ALT_MEDIA_ISSUE) === -1) {
            NormalizeHelper.addEntry(mediaWarnings, ALT_MEDIA_ISSUE, {
              actions: [],
              id: ALT_MEDIA_ISSUE,
              media: [],
              mediaType: 'content'
            });
          }
          // add the item to the warning's list of miscreants
          mediaWarnings.byId[ALT_MEDIA_ISSUE].media.push(item.instanceID);
        }
      }
    };

    this.getMediaBySections = function(media) {
      var sections = {};

      for (var mediaType in media) {
        if (media.hasOwnProperty(mediaType) && mediaType !== 'layers') {
          this.getSectionMediaByMediaType(sections, media[mediaType]);
        }
      }

      return sections;
    };

    this.getSectionMediaByMediaType = function(sections, media) {
      var mediaItems = NormalizeHelper.getAllItems(media);

      // loop through each scanned item
      for (var i = 0; i < mediaItems.length; i++) {
        var item = mediaItems[i];
        var sectionID = item.section;

        // add an entry into the sections obj if it doesn't exist yet
        if (!(sectionID in sections)) {
          sections[sectionID] = {};

        }
        // add the scanned item to the sections map.
        sections[sectionID][item.instanceID] = item;
      }
    };

    this.getScanData = function() {
      var serializedStory = Controller.serializeStory(true, true);
      var media = AppParser.getMedia(serializedStory);
      var mediaIDs = this.getMediaIDs(media);

      return {
        mediaIDs: mediaIDs,
        media: media
      };
    };

    this.getMediaIDs = function(media) {
      // test:
      // same media 2 diff sections -- same after this
      // same media same sections -- same after this
      var mediaIDs = {
        mapIDs: this.flattenMediaById(media.maps),
        sceneIDs: this.flattenMediaById(media.scenes),
        imageIDs: this.flattenMediaById(media.images),
        videoIDs: this.flattenMediaById(media.videos),
        audioIDs: this.flattenMediaById(media.audio),
        webpageIDs: this.flattenMediaById(media.webpages)
      };

      return mediaIDs;
    };

    /*
    Fill an array of unique IDs, when input is an object with possible duplicates.
    This is because we only want to scan media once, even if that media is in the story 4 different places.
     */
    this.flattenMediaById = function(media) {
      var ids = [];

      for (var i = 0; i < media.allItems.length; i++) {
        var instanceID = media.allItems[i];
        var entry = media.byId[instanceID];

        // put the ID in the list if it doesn't exist in there
        if (ids.indexOf(entry.id) === -1) {
          ids.push(entry.id);
        }
      }

      return ids;
    };

    this.addAppContext = function(results, contextResults) {
      // basically, for each media, do a lookup and add on the sections.
      // similar: for each... hasOwnProp... (if not layers)
      // loop it up.
      for (var mediaType in results.media) {
        // if the media type exists on both the serialized and scanned results, we'll match it up (this excludes layers, which are scanned but not serialized).
        if (results.media.hasOwnProperty(mediaType) && contextResults.media.hasOwnProperty(mediaType)) {
          this.addAppContextByMedia(results.media[mediaType], contextResults.media[mediaType]);
        }
      }
      contextResults.media.layers = this.addLayerContext(results.media.layers, contextResults.media);

      // make errors and warnings point to the instanceIDs of the offending media, not the media's ID.
      contextResults.errors = this.assignIssuesToInstances(results.errors, contextResults.media);
      contextResults.warnings = this.assignIssuesToInstances(results.warnings, contextResults.media);
    };

    this.assignIssuesToInstances = function(issues, media) {
      // make errors and warnings point to the instanceIDs of the offending media, not the media's ID.
      // this is so that we know which specific instance of, say, a video has a problem, instead of
      // only knowing that that video has an issue (same video can be reused across the story)
      var allIssues = NormalizeHelper.getAllItems(issues);

      // for each error
      for (var i = 0; i < allIssues.length; i++) {
        var newMedia = [];
        var issue = allIssues[i];
        // for each media item with the error,
        for (var j = 0; j < issue.media.length; j++) {
          var offendingMedia = issue.media[j];
          // find all instances of it
          var allInstances = this.findInstancesById(offendingMedia, media, issue.mediaType);
          // point to all of those.
          newMedia = newMedia.concat(allInstances);
        }

        issue.media = newMedia;
      }

      return issues;
    };

    this.findInstancesById = function(itemID, media, type) {
      var instanceIDs = [];
      // loop through the media (only a subset if type is not "content") and find all instances of the media with that given ID.
      var items = [];
      switch (type) {
        case 'maps':
          items = NormalizeHelper.getAllItems(media.maps);
          break;
        case 'images':
          items = NormalizeHelper.getAllItems(media.images);
          break;
        case 'audio':
          items = NormalizeHelper.getAllItems(media.audio);
          break;
        case 'scenes':
          items = NormalizeHelper.getAllItems(media.scenes);
          break;
        case 'videos':
          items = NormalizeHelper.getAllItems(media.videos);
          break;
        case 'webpages':
          items = NormalizeHelper.getAllItems(media.webpages);
          break;
        case 'layers':
          items = NormalizeHelper.getAllItems(media.layers);
          break;
        default:
          break;
      }

      // loop thru each one, if ID is the same, add the instance ID
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.id === itemID) {
          instanceIDs.push(item.instanceID);
        }
      }

      return instanceIDs;
    };

    this.addAppContextByMedia = function(media, contextMedia) {
      // but you have the ID, so you could swap it for that.
      var mediaItems = NormalizeHelper.getAllItems(contextMedia);
      // for each media item, get the context (for now, just sections) off of the contextMedia.
      for (var i = 0; i < mediaItems.length; i++) {
        var resultItem = mediaItems[i];
        var scanItem = media.byId[resultItem.id];
        // make a deep copy of the scan result, since one scan result can be reused in many instances
        resultItem.scanResult = $.extend(true, {}, scanItem);
      }
    };

    this.addLayerContext = function(resultLayers, contextMedia) {
      var newLayersResult = NormalizeHelper.createObject();

      this.addLayerContextByMedia(contextMedia.maps, resultLayers, newLayersResult, 'map');
      this.addLayerContextByMedia(contextMedia.scenes, resultLayers, newLayersResult, 'scene');

      return newLayersResult;
    };

    this.addLayerContextByMedia = function(media, resultLayers, newLayersResult, mediaType) {
      var allItems = NormalizeHelper.getAllItems(media);
      for (var i = 0; i < allItems.length; i++) {
        var item = allItems[i];
        var itemLayers = [];
        // for each layer
        for (var j = 0; j < item.scanResult.layers.length; j++) {
          // make a new instanceID and object from the layer.
          // it will point to item, item will point to it.
          var layerID = item.scanResult.layers[j];
          var layerReference = resultLayers.byId[layerID];
          var newLayer = {
            id: layerReference.id,
            instanceID: UIUtils.getUID(),
            mediaType: 'layer',
            section: item.section,
            scanResult: $.extend(true, {}, layerReference)
          };
          // point the layer to the item
          delete newLayer.scanResult.maps;
          delete newLayer.scanResult.scenes;
          newLayer.scanResult[mediaType] = item.instanceID;

          itemLayers.push(newLayer.instanceID);
          // add the layer to the list of layers
          NormalizeHelper.addEntry(newLayersResult, newLayer.instanceID, newLayer);
        }
        // replace item's layers with this list
        item.scanResult.layers = itemLayers;
      }
    };

    this.addFixMethods = function(errors) {
      var allErrors = NormalizeHelper.getAllItems(errors);

      for (var i = 0; i < allErrors.length; i++) {
        this.addFixMethodsByIssue(allErrors[i]);
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
        errorSections: [],
        warningSections: []
      };

      for (var mediaItem in resultsMedia) {
        if (resultsMedia.hasOwnProperty(mediaItem)) {
          this.compileIssueSectionsByMedia(resultsMedia[mediaItem], issueSections.errorSections, 'errors');
          this.compileIssueSectionsByMedia(resultsMedia[mediaItem], issueSections.warningSections, 'warnings');
        }
      }

      return issueSections;
    };

    this.compileIssueSectionsByMedia = function(media, sections, severity) {
      var mediaItems = NormalizeHelper.getAllItems(media);

      for (var i = 0; i < mediaItems.length; i++) {
        var item = mediaItems[i];

        if (item.scanResult[severity] && item.scanResult[severity].length) {
          // push onto sections if not there.
          this.addIssueSections(item.section, sections);
        }
      }
    };

    this.addIssueSections = function(section, issueSections) {
      if (issueSections.indexOf(section) === -1) {
        issueSections.push(section);
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
          theme: {
            colors: app.Controller.THEME_DEFAULT_COLORS
          },
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
            mediaJSON: {
              type: 'webmap',
              webmap: {
                id: params.webmapId
              }
            }
          }).serialize(false)
        ];
      }
      else if (params.websceneId) {
        firstSectionBlocks = [
          /* todo webscene title? */
          app.ui.MediaFactory.createInstance({
            mediaJSON: {
              type: 'webscene',
              webscene: {
                id: params.websceneId
              }
            }
          }).serialize(false)
        ];
      }

      var bgColor = lang.getObject('story.settings.theme.colors.bgMain') || '#fff';

      story.sections = [
        app.ui.SectionFactory.createInstance({
          type: 'cover',
          foreground: {
            title: params.title,
            subtitle: params.subtitle
          }
        }).serialize(false),
        app.ui.SectionFactory.createInstance({
          type: 'sequence',
          background: app.ui.MediaFactory.createInstance({
            mediaJSON: {
              type: 'color',
              color: {
                value: bgColor
              }
            }
          }).serialize(false),
          foreground: {
            blocks: firstSectionBlocks
          }
        }).serialize(false)
      ];

      return story;
    }
  };
});
