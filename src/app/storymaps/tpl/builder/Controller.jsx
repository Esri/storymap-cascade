/*
| Copyright 2016-2018 Esri
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

import ControllerCore from '../core/Controller';
import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import NormalizeHelper from 'issue-checker/helpers/NormalizeHelper';
import UndoNotification from './notification/Undo';

import Issues from 'issue-checker/IssueTypes';
import Actions from './Actions';

import UIUtils from 'storymaps/tpl/utils/UI';
import CommonHelper from 'storymaps/tpl/utils/CommonHelper';

topic.subscribe('builder-section-update', function() {
  ControllerBuilder.storyChange();
});

topic.subscribe('builder-media-update', function() {
  ControllerBuilder.storyChange();
});

export default class ControllerBuilder extends ControllerCore {
  static storyChange() {
    app.builder.pendingChanges++;

    topic.publish('builder-story-update');
  }

  static storyUndo() {
    app.builder.pendingChanges--;

    topic.publish('builder-story-update');
  }

  static renderStory(config, sections) {
    //
    // Insert a credits placeholder section to allow user to add content at the bottom of the story
    // That section visibility is updated depending on story content
    // See BuilderView.js > onSectionUpdate
    //

    var lastSection = sections[sections.length - 1],
        creditsPlaceholderPos = sections.length;

    if (lastSection && lastSection.type == 'credits') {
      creditsPlaceholderPos = creditsPlaceholderPos - 1;
    }

    sections.splice(creditsPlaceholderPos, 0, app.ui.SectionFactory.createInstance({
      type: 'credits-placeholder'
    }));

    return super.renderStory(config, sections);
  }

  static onScroll(params) {
    super.onScroll(params);
  }

  static openSettings() {
    let headerSettings = app.data.appItem.data.values.settings.header;

    if (! headerSettings || ! headerSettings.logo || ! headerSettings.link) {
      headerSettings = ControllerCore.DEFAULT_HEADER_SETTINGS;
    }

    const currentTheme = app.data.appItem.data.values.settings.theme || {};
    if (!currentTheme.colors) {
      currentTheme.colors = ControllerCore.THEME_DEFAULT_COLORS;
    }
    var defaultFonts = ControllerCore.THEME_DEFAULT_FONTS;
    if (!currentTheme.fonts) {
      currentTheme.fonts = defaultFonts;
    }
    // do this separately, as some older apps may only have one of these set.
    currentTheme.fonts = {
      titleFont: currentTheme.fonts.titleFont || defaultFonts.titleFont,
      bodyFont: currentTheme.fonts.bodyFont || defaultFonts.bodyFont
    };

    let themeSettings = {
      colorOptions: ControllerCore.THEME_COLOR_OPTIONS,
      fontOptions: ControllerCore.THEME_FONT_OPTIONS,
      currentTheme
    };

    let orgLogo = app.portal.isOrganization && lang.getObject('portal.portalProperties.sharedTheme.logo.small', false, app);
    let useOrgLogo = orgLogo === headerSettings.logo.url;

    let settingsPopupParams = {
      context: {
        headerBackground: '#000'
      },
      settings: Object.assign(
        {},
        headerSettings,
        {
          bookmarks: this.getBookmarksBuilder()
        },
        {
          orgLogoSettings: {
            hasOrgLogo: orgLogo ? true : false,
            useOrgLogo: useOrgLogo,
            orgLogo: orgLogo
          }
        },
        {
          themeData: themeSettings
        }
      )
    };

    app.builder.settingsPopup.open({
      settings: settingsPopupParams
    }).then(
      function(settings) {

        // Persist header
        app.data.appItem.data.values.settings.header = {
          logo: settings.logo,
          link: settings.link,
          social: settings.social
        };

        // Persist theme
        app.data.appItem.data.values.settings.theme = settings.themeData.currentTheme;
        this.changeTheme(settings.themeData);

        // Persist bookmarks
        this._setBookmarksBuilder(settings.bookmarks);

        // Update header
        this.renderHeader();

        this.storyChange();
      }.bind(this),
      function() {
        //
      }
    );
  }

  static getBookmarksBuilder() {
    let bookmarks = [];

    for (let section of this._sections) {
      if (section.getBookmark) {
        let bookmark = section.getBookmark();
        if (bookmark) {
          if (! bookmark.title) {
            if (section.type == 'sequence') {
              bookmark.title = i18n.builder.headerConfig.bookmarks.sequentialDefault;
            }
            else if (section.type == 'immersive') {
              bookmark.title = i18n.builder.headerConfig.bookmarks.immersiveDefault;
            }
            else if (section.type == 'title') {
              bookmark.title = i18n.builder.headerConfig.bookmarks.titleDefault;
            }
          }
          else {
            if (section.type == 'cover') {
              bookmark.title = i18n.builder.headerConfig.bookmarks.coverAppendage;
            }
          }
          bookmarks.push(bookmark);
        }
      }
    }

    return bookmarks;
  }

  static _setBookmarksBuilder(bookmarks) {
    let bookmarkIndex = 0;

    for (let section of this._sections) {
      if (section.getBookmark) {
        section.setBookmark(bookmarks[bookmarkIndex++]);
      }
    }
  }

  static serializeStory(includeSectionID, includeInstanceID) {
    var story = [];

    for (let section of this._sections) {
      var sectionJSON = section.serialize(includeInstanceID);

      if (sectionJSON) {
        if (includeSectionID) {
          // add the section's ID on to the JSON.
          sectionJSON.id = section.id;
        }
        story.push(sectionJSON);
      }
    }

    return story;
  }

  static addContextSpecificIssues(mediaBySections) {
    // loop thru each section
    for (const section of this._sections) {
      // send off the media to each one to get added to.
      const sectionMedia = mediaBySections[section.id];
      if (sectionMedia) {
        section.addContextSpecificIssues(sectionMedia);
      }
    }
  }

  static reportScanResults(results, issueSections) {
    // update each section's scanresults, then broadcast all the results.
    for (let section of this._sections) {
      let hasWarnings = false;
      let hasErrors = false;

      if (issueSections.errorSections.indexOf(section.id) !== -1) {
        hasErrors = true;
      }
      if (issueSections.warningSections.indexOf(section.id) !== -1) {
        hasWarnings = true;
      }
      section.setScanResults(hasErrors, hasWarnings);
    }

    this._broadcastScanResults(results);
  }

  static _broadcastScanResults(results) {
    topic.publish('check-app-complete', results);

    // scan each media type
    for (let mediaType in results.media) {
      if (results.media.hasOwnProperty(mediaType) && mediaType !== 'layers') {
        this._broadcastMediaResults(results, mediaType);
      }
    }
  }

  static _broadcastMediaResults(results, mediaType) {
    let items = NormalizeHelper.getAllItems(results.media[mediaType]);

    for (let item of items) {
      if (!item) {
        return;
      }

      // find the issues
      let itemResult = null;

      if (mediaType === 'maps' || mediaType === 'scenes') {
        itemResult = {
          layers: this._extractLayerInfo(item.scanResult.layers, results.media.layers),
          details: item.scanResult.details,
          errors: this._findMapSceneIssues(item.scanResult, results, 'errors', item.alternateMedia),
          warnings: this._findMapSceneIssues(item.scanResult, results, 'warnings', item.alternateMedia)
        };
      }
      else if (mediaType === 'images' || mediaType === 'videos' || mediaType === 'webpages' || mediaType === 'audio') {
        itemResult = {
          errors: this._findMediaIssues(item.scanResult.errors, results.errors, item.alternateMedia, results.media.images, 'errors'),
          warnings: this._findMediaIssues(item.scanResult.warnings, results.warnings, item.alternateMedia, results.media.images, 'warnings')
        };
      }
      // audio isn't scanned, so skip that.
      else {
        return;
      }

      // publish the result!
      topic.publish(`scan/${mediaType}/${item.instanceID}`, itemResult);
    }
  }

  static _extractLayerInfo(layerIDs, resultLayers) {
    let finalLayers = [];
    // loop thru these.
    for (let layerID of layerIDs) {
      // Get the layer
      let layer = resultLayers.byId[layerID];
      // If layer exists,
      if (layer) {
        // add its id and details to that panel.
        finalLayers.push({
          id: layer.id,
          details: layer.scanResult.details
        });
      }
    }

    return finalLayers;
  }

  static _findMediaIssues(itemIssues, appIssues, alternateMediaID, imageResults, severity) {
    // add the issues from the media
    let issues = this._findIssues(itemIssues, appIssues, false);

    const alternateMediaIssues = this._findAlternateMediaIssues(appIssues, alternateMediaID, imageResults, severity);
    issues = issues.concat(alternateMediaIssues);

    return issues;
  }

  static _findIssues(itemIssues, appIssues, isAlternateMedia) {
    const issues = [];

    for (let issueID of itemIssues) {
      let issue = appIssues.byId[issueID];

      issues.push({
        id: issue.id,
        actions: issue.actions,
        isAlternate: isAlternateMedia
      });
    }

    return issues;
  }

  static _findAlternateMediaIssues(appIssues, alternateMediaID, imageResults, severity) {
    let issues = [];
    if (alternateMediaID) {
      // get alternate media issues and add them as well.
      const alternateMedia = imageResults.byId[alternateMediaID];

      if (alternateMedia && alternateMedia.scanResult && alternateMedia.scanResult[severity]) {
        issues = this._findIssues(alternateMedia.scanResult[severity], appIssues, true);
      }
    }
    return issues;
  }

  static _findMapSceneIssues(item, results, severity, alternateMedia) {
    let issues = [];

    for (let issueID of item[severity]) {
      let issue = results[severity].byId[issueID];

      issues.push({
        id: issue.id,
        actions: issue.actions,
        mediaType: item.mediaType,
        layers: []
      });
    }
    // we'll report layer issues with their containing map/scene, so find them
    let layerIssues = this._findLayerIssues(item.layers, results[severity], results.media.layers, severity);
    // and add them on as well
    issues = issues.concat(layerIssues);

    const alternateMediaIssues = this._findAlternateMediaIssues(results[severity], alternateMedia, results.media.images, severity);

    issues = issues.concat(alternateMediaIssues);
    // finally, if maps/scenes and layers both have sharing level issues, we'll combine them
    this._combineSharingIssues(issues);

    return issues;
  }

  static _findLayerIssues(layerIDs, appIssues, appLayers, severity) {
    let issues = [];
    // loop over the layers, adding the issues for each layer.
    for (let layerID of layerIDs) {
      let layer = appLayers.byId[layerID];

      if (layer.scanResult[severity]) {
        for (let issueID of layer.scanResult[severity]) {
          let issue = appIssues.byId[issueID];
          // see if this layer issue already exists (the scope amongst layers within the map/scene)
          let existingIssue = issues.find(issueItem => issueItem.id === issue.id);

          if (existingIssue) {
            // if it's an existing issue, we'll just add this layer to it (we already have the issue ID, the actions, and the media type).
            existingIssue.layers.push({
              id: layer.scanResult.id,
              details: layer.scanResult.details
            });
          }
          // otherwise we'll make a new issue.
          else {
            issues.push({
              id: issue.id,
              actions: issue.actions,
              mediaType: layer.scanResult.mediaType,
              layers: [
                {
                  id: layer.scanResult.id,
                  details: layer.scanResult.details
                }
              ]
            });
          }
        }
      }
    }

    return issues;
  }

  static _combineSharingIssues(issues) {
    // see if both map and layer sharing issues exist...
    let layerUnsharedIndex = issues.findIndex(issueItem => issueItem.id === Issues.layers.unshared);
    let mapUnsharedIndex = issues.findIndex(issueItem => issueItem.id === Issues.maps.unshared);

    if (layerUnsharedIndex !== -1 && mapUnsharedIndex !== -1) {
      // if so, take the details from both, and create a new, "combined" one.
      let layerIssue = issues[layerUnsharedIndex];
      let combinedIssue = {
        // since it deals with both maps and layers, we'll call the id 'content/*'
        id: Issues.content.unshared,
        // update the ID on the actions as well (if the action is to share).
        actions: layerIssue.actions.map(action => {
          return {
            fix: action.fix,
            id: Actions.content.share
          };
        }),
        // and the media type will signify both maps/scenes and layers are involved
        mediaType: 'content',
        layers: layerIssue.layers
      };

      // stick the combined issue before the map issue (so it shows up in the same position as the map one did)
      issues.splice(mapUnsharedIndex, 0, combinedIssue);

      // and remove the map and layer issues.
      let newMapUnsharedIndex = issues.findIndex(issueItem => issueItem.id === Issues.maps.unshared);
      issues.splice(newMapUnsharedIndex, 1);

      let newLayerUnsharedIndex = issues.findIndex(issueItem => issueItem.id === Issues.layers.unshared);
      issues.splice(newLayerUnsharedIndex, 1);
    }
  }

  static getStoryOverview() {
    var overview = [];

    if (! this._sections) {
      return overview;
    }

    var onlyOneSectionInStory = false;
    if (this._sections.length == 3 || (this._sections.length == 4 && this._sections[3].type == 'credits')) {
      onlyOneSectionInStory = true;
    }

    for (var section of this._sections) {
      var type = section.type;

      if (type == 'credits-placeholder') {
        continue;
      }

      if (type == 'cover') {
        overview.push({
          id: section.id,
          style: 'button',
          label: i18n.builder.builderPanel.coverLabel,
          hasDelete: false,
          hasHide: false,
          hasDuplicate: false,
          hasOrganize: false,
          scanResults: section.getScanResults()
        });
      }
      else if (type == 'credits') {
        overview.push({
          id: section.id,
          style: 'button',
          label: i18n.builder.builderPanel.creditsLabel,
          hasDelete: true,
          hasHide: true,
          hasDuplicate: false,
          hasOrganize: false,
          scanResults: section.getScanResults()
        });
      }
      else if (type == 'title') {
        overview.push({
          id: section.id,
          style: 'thumbnail',
          size: 'short',
          thumbnail: section.getPreviewThumbnail(),
          label: section.getPreviewText(),
          icon: section.getPreviewIcon(),
          hasDelete: ! onlyOneSectionInStory,
          hasHide: true,
          hasDuplicate: true,
          hasOrganize: true,
          scanResults: section.getScanResults()
        });
      }
      else if (type == 'sequence') {
        var storyIsEmpty = false;

        if (this._sections.length == 3 && ! section.getPreviewText() && ! section.getPreviewThumbnail()) {
          storyIsEmpty = true;
        }

        overview.push({
          id: section.id,
          style: storyIsEmpty ? 'simple-text' : 'thumbnail',
          size: 'tall',
          thumbnail: section.getPreviewThumbnail(),
          text: storyIsEmpty ? i18n.builder.builderPanel.invite : section.getPreviewText(),
          hasDelete: ! onlyOneSectionInStory,
          hasHide: true,
          hasDuplicate: ! storyIsEmpty,
          hasOrganize: ! onlyOneSectionInStory,
          scanResults: section.getScanResults()
        });
      }
      else {
        overview.push({
          id: section.id,
          style: 'thumbnail',
          size: 'tall',
          showTitleBar: true,
          thumbnail: section.getPreviewThumbnail(),
          title: section.getPreviewText(),
          icon: section.getPreviewIcon(),
          hasDelete: ! onlyOneSectionInStory,
          hasHide: true,
          hasDuplicate: true,
          hasOrganize: true,
          scanResults: section.getScanResults()
        });
      }
    }

    return overview;
  }

  /*
   * Add a new section at p.index
   *  - add a new empty section of type p.type if specified
   *  - add the section defined by p.section if specified (JSON)
   */
  static addSection(p) {
    if (! p || ! (p.type || p.section)) {
      return;
    }

    if (p.index === undefined || p.index < 0 || p.index > this._sections.length) {
      return;
    }

    var newSectionJSON = p.section || {
      type: p.type
    };

    var newSection = app.ui.SectionFactory.createInstance(newSectionJSON);

    this._sections.splice(p.index + 1, 0, newSection);
    this._container.find('.section').eq(p.index).after(newSection.render());
    newSection.postCreate(this._container.find('.section').eq(p.index + 1));

    if (p.navigation !== false) {
      window.requestAnimationFrame(function() {
        this.navigateToSection({
          index: p.index + 1,
          animate: true,
          animateSpeed: p.animateSpeed
        });

        newSection.focus();
      }.bind(this));
    }

    if (p.ensureFullyVisible) {
      this._ensureSectionFullyVisible(newSection);
    }

    //
    // Undo
    //

    /*
    if (! p.section) {
      var undoNotification = new UndoNotification({
        container: this._container.find('.section').eq(p.index + 1),
        label: 'You created a section' // TODO
      });

      undoNotification.display().then(
        function() {
          this.deleteSection({
            index: p.index + 1
          });

          this.storyUndo();
        }.bind(this),
        function() {
          //
        }
      );
    }
    */

    topic.publish('builder-section-update');
  }

  static _splitSection(p) {
    var sectionSplit1 = this._sections[p.section].serializePartially(0, p.split + 1);
    var sectionSplit2 = this._sections[p.section].serializePartially(p.split + 1);

    this.deleteSection({
      index: p.section,
      navigation: false,
      undo: false
    });

    this.addSection({
      index: p.section - 1,
      section: sectionSplit1,
      navigation: false
    });

    this.addSection({
      index: p.section,
      section: sectionSplit2,
      navigation: false
    });
  }

  static splitAndAddSection(p) {
    if (! p || ! p.type) {
      return;
    }

    if (p.section === undefined || p.section < 0 || p.section > this._sections.length) {
      return;
    }

    if (p.split === undefined || p.split < 0) {
      return;
    }

    // If splitting after the last block, will just add a section
    if (! this._sections[p.section].requireSplitAt(p.split)) {
      this.addSection({
        navigation: p.type != 'title',
        index: p.section,
        type: p.type,
        animateSpeed: 800,
        ensureFullyVisible: p.type == 'title'
      });

      return;
    }

    var scrollTop = $(window).scrollTop();

    this._splitSection(p);

    this.addSection({
      index: p.section,
      type: p.type,
      navigation: p.type != 'title',
      animate: true,
      animateSpeed: 800
    });

    if (p.type == 'title') {
      $(window).scrollTop(scrollTop);

      app.ui.update({
        forceUpdate: true
      });

      this._ensureSectionFullyVisible(this._sections[p.section + 1]);
    }
  }

  static _ensureSectionFullyVisible(section) {
    //
    // If the section isn't fully visible, scroll the page minimaly
    //
    let sectionBBOX = section._node[0].getBoundingClientRect(),
        scrollOffset = 0;

    if (sectionBBOX.bottom > app.display.windowHeight) {
      scrollOffset = app.display.windowHeight - sectionBBOX.bottom;
    }

    if (scrollOffset) {
      var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

      $('html,body').animate({
        scrollTop: currentScroll - scrollOffset + 50
      }, 150);
    }
  }

  static deleteActiveSection() {
    this.deleteSection({
      index: this._currentSectionIndex
    });
  }

  static deleteSection(p) {
    if (! p || ! p.index) {
      return;
    }

    var sectionsBackup = [],
        currentIndexBackup = this._currentSectionIndex;

    for (let i=0; i < this._sections.length; i++) {
      sectionsBackup[i] = this._sections[i];
    }

    // TODO destroy
    this._sections.splice(p.index, 1);
    // using jQuery to remove the node create issues with undo as it would remove all events
    this._container[0].removeChild(this._container.find('.section').eq(p.index)[0]);

    var postDeleteCurrentSection = this._sections[this._currentSectionIndex];

    // If deleting active section, will move to previous one
    if (p.index == this._currentSectionIndex) {
      postDeleteCurrentSection = this._sections[this._currentSectionIndex - 1];
    }

    // Merge eventual consecutive sequence section that would be created by deleting
    //   a section in between two sequences
    // skipMerge: because the merge function is also using delete for internal reason
    var mergeData = {
      hasMerged: false
    };

    if (! p.skipMerge) {
      mergeData = this._mergeConsecutiveSequenceSections(postDeleteCurrentSection);
    }

    topic.publish('builder-section-update');
    // do an issue check
    topic.publish('builder-should-check-story');

    if (p.navigation !== false || mergeData.hasMerged) {
      window.requestAnimationFrame(function() {
        // Some clean up of references to the current section to make sure
        //  the section will be activated properly at it's new location
        //  especially an issue with Immersive
        this._currentSectionIndex = -1;
        this._currentSection = null;
        this._$currentSection = null;

        this.navigateToSection({
          index: mergeData.newCurrentSectionIndex,
          animate: true,
          animateSpeed: 800
        });
      }.bind(this));
    }

    //
    // Undo
    //
    if (p.undo !== false) {
      var undoNotification = new UndoNotification({
        container: this._container.find('.section').eq(p.index + 1),
        label: i18n.builder.controller.sectionDelete,
        clearFollowingsAfterUndo: true
      });

      undoNotification.display().then(
        function() {
          this._restoreSectionBackup(sectionsBackup, currentIndexBackup);
        }.bind(this),
        function() {
          //
        }
      );
    }
  }

  static duplicateSection(p) {
    if (! p || ! p.index) {
      return;
    }

    var oldSection = this._sections.slice(p.index, p.index + 1)[0],
        oldSectionJSON = oldSection.serialize(false);

    if (oldSectionJSON.bookmark) {
      oldSectionJSON.bookmark.enabled = false;
    }

    var newSection = app.ui.SectionFactory.createInstance(oldSectionJSON);

    this._sections.splice(p.index + 1, 0, newSection);
    this._container.find('.section').eq(p.index).after(newSection.render());
    newSection.postCreate(this._container.find('.section').eq(p.index + 1));

    this.navigateToSection({
      index: p.index + 1,
      animate: false
    });

    topic.publish('builder-section-update');
    // do an issue check
    topic.publish('builder-should-check-story');
  }

  static getSectionsIndexesByIds(sectionsIds) {
    var sectionsIndexes = [];

    for (var sectionId of sectionsIds) {
      for (var sectionIndex = 0; sectionIndex < this._sections.length; sectionIndex++) {
        var section = this._sections[sectionIndex];
        if (section.id == sectionId) {
          sectionsIndexes.push(sectionIndex);
        }
      }
    }

    return sectionsIndexes;
  }

  /*
   * Organize sections, takes an array that represent the new position of sections
   *  by their actual position in the story
   * i.e: [0, 2, 1] means that the third section has moved before the second one
   *
   */
  static organizeSections(sectionIndexes, isUndo) {
    //
    // Check if the specified new order require a change
    //

    var newSectionsAlreadySorted = true;

    for (let i = 0; i < sectionIndexes.length - 1; i++) {
      if (sectionIndexes[i] > sectionIndexes[i + 1]) {
        newSectionsAlreadySorted = false;
        break;
      }
    }

    if (newSectionsAlreadySorted) {
      return;
    }

    var sectionsBackup = [],
        currentIndexBackup = this._currentSectionIndex;

    for (let i=0; i < this._sections.length; i++) {
      sectionsBackup[i] = this._sections[i];
    }

    var newSections = [],
        newCurrentSectionIndex = -1,
        sectionIndex = null;

    // Reorder the sections object
    for (var i=0 ; i < sectionIndexes.length ; i++) {
      sectionIndex = sectionIndexes[i];
      newSections.push(this._sections[sectionIndex]);

      if (sectionIndex == this._currentSectionIndex) {
        newCurrentSectionIndex = i;
      }
    }

    // Add back credits placeholder that is not passed to the overview panel
    // TODO: shall it?
    var lastSection = this._sections[this._sections.length - 1];
    // If the last section is credits, the placeholder is before
    if (lastSection.type == 'credits') {
      newSections.splice(newSections.length - 1, 0, this._sections[this._sections.length - 2]);
    }
    else {
      newSections.push(lastSection);
    }

    // Persist
    this._sections = newSections;
    // Persit in viewer controller - not sure why it's needed TODO
    this.prototype.__proto__.constructor._sections = this._sections;
    app.data.sections = newSections;

    // Reorder the DOM
    for (sectionIndex = this._sections.length - 1; sectionIndex >= 0; sectionIndex--) {
      var section = this._sections[sectionIndex];
      this._container.prepend(section._node);
    }

    var newCurrentSection = this._sections[newCurrentSectionIndex];

    // Merge eventual consecutive sequence sections
    let mergeData = this._mergeConsecutiveSequenceSections(newCurrentSection);

    let undoLabel = i18n.builder.controller.sectionOrganize;
    if (mergeData.hasMerged) {
      newCurrentSectionIndex = mergeData.newCurrentSectionIndex;

      //undoLabel += '.<br />Some consecutive sequential sections have been joined.<br />';
    }

    // Navigate to new position of current section
    if (newCurrentSectionIndex != -1) {
      window.requestAnimationFrame(function() {
        // Some clean up of references to the current section to make sure
        //  the section will be activated properly at it's new location
        //  especially an issue with Immersive
        this._currentSectionIndex = -1;
        this._currentSection = null;
        this._$currentSection = null;

        this.navigateToSection({
          index: newCurrentSectionIndex,
          animate: false
        });
      }.bind(this));
    }

    //
    // Undo
    //

    if (! isUndo) {
      var undoNotification = new UndoNotification({
        container: this._node,
        label: undoLabel
      });

      undoNotification.display({
        clearPreviousUndo: true
      }).then(
        function() {
          // Not sure why the following is not working... it only work in some case
          //this.organizeSections(sectionIndexes, true);

          // and the following only work in some other cases...
          /*
          var reverseSort = [];
          for (let i=0; i < sectionIndexes.length; i++) {
            reverseSort[i] = sectionIndexes[sectionIndexes[i]];
          }
          this.organizeSections(reverseSort, true);
          */

          this._restoreSectionBackup(sectionsBackup, currentIndexBackup);
        }.bind(this),
        function() {
          //
        }
      );
    }

    topic.publish('builder-section-update');
  }

  /*
   * Restore the sections after an undo following an organize or delete
   */
  static _restoreSectionBackup(sectionsBackup, currentIndexBackup) {
    // Persist
    this._sections = sectionsBackup;
    // Persit in viewer controller - not sure why it's needed TODO
    this.prototype.__proto__.constructor._sections = sectionsBackup;
    app.data.sections = sectionsBackup;

    // Reorder the DOM
    for (let sectionIndex = this._sections.length - 1; sectionIndex >= 0; sectionIndex--) {
      var section = this._sections[sectionIndex];
      this._container.prepend(section._node);
    }

    $.each(this._container.children(), function(i, sectionNode) {
      var foundNode = false;

      for (let section of this._sections) {
        if ($(section._node).is(sectionNode)) {
          foundNode = true;
        }
      }

      if (! foundNode) {
        sectionNode.remove();
      }
    }.bind(this));

    topic.publish('builder-section-update');
    // do an issue check
    topic.publish('builder-should-check-story');

    if (this._currentSectionIndex != currentIndexBackup) {
      window.requestAnimationFrame(function() {
        // Some clean up of references to the current section to make sure
        //  the section will be activated properly at it's new location
        //  especially an issue with Immersive
        this._currentSectionIndex = -1;
        this._currentSection = null;
        this._$currentSection = null;

        this.navigateToSection({
          index: currentIndexBackup,
          animate: false
        });
      }.bind(this));
    }
  }

  /*
   * Merge all consecutive sequential sections
   * Take the currentSection and return a flag indicating if one or more merge
   *   happened and the index of currentSection that may have changed
   */
  static _mergeConsecutiveSequenceSections(currentSection) {
    let hasMerged = false;

    // Will work on consecutive section only two by two
    // Goes bottom up in the story to avoid array manipulation side effect
    // Create a new section and delete the two that are merged
    //   to allow undo that has kept a reference to those sections
    // A more sophisticated algorithm seems unessary as this should be used
    //   rarely after V1 stories are cleaned

    let prevSectionType = '';

    for (let i = this._sections.length - 1; i >= 0 ; i--) {
      let section = this._sections[i];

      if (section.type == 'sequence' && prevSectionType == 'sequence') {
        var newSection = section.mergeAndSerialize(this._sections[i + 1]);

        // If the current section is one of the section getting merged
        //  it will be updated to the new section (after the merge to get a valid reference)
        let updateCurrentSection = false;
        if (currentSection == section || currentSection == this._sections[i + 1]) {
          updateCurrentSection = true;
        }

        this.deleteSection({
          index: i + 1,
          navigation: false,
          undo: false,
          skipMerge: true
        });

        this.deleteSection({
          index: i,
          navigation: false,
          undo: false,
          skipMerge: true
        });

        this.addSection({
          index: i - 1,
          section: newSection,
          navigation: false
        });

        if (updateCurrentSection) {
          currentSection = this._sections[i];
        }

        hasMerged = true;
      }

      prevSectionType = section.type;
    }

    // Compute the index of the currentSection
    let newCurrentSectionIndex = -1;
    for (let sectionIndex = this._sections.length - 1; sectionIndex >= 0; sectionIndex--) {
      let section = this._sections[sectionIndex];
      if (section == currentSection) {
        newCurrentSectionIndex = sectionIndex;
      }
    }

    return {
      hasMerged: hasMerged,
      newCurrentSectionIndex: newCurrentSectionIndex
    };
  }

  static changeTheme() {
    // add css for paragraph and link text

    var colors = lang.getObject('app.data.appItem.data.values.settings.theme.colors');
    if (!colors) {
      return;
    }

    // These are the builder-specific changes based on bgMain.
    // Other viewer-targeted changes can be found in viewer Controller.js
    if (colors.bgMain) {
      // change the colors of the + dividers for adding new sections
      let plusStyleArr;
      if (CommonHelper.getLightOrDarkText(colors.bgMain) === 'light') {
        const plusColor = '#f8f8f8';
        plusStyleArr = [
          // horizontal line and background to + on hover in sequential section
          '.block::before {color:' + colors.bgMain + '; border-bottom-color: ' + plusColor + ';}',
          // + in sequential section (has some transparency except on hover)
          '.block::after {color: ' + plusColor + ';}',
          // + in sequential section image gallery (on the right of all the pics)
          '.image-gallery .ig-add.builder-ui .ig-action-icon {color: ' + plusColor + ';}',
          // circle around plus above
          '.image-gallery .ig-add.builder-ui {border-color: ' + plusColor + ';}'
        ];
      }
      else {
        plusStyleArr = [
          // background to + on hover in sequential section
          '.block::before {color:' + colors.bgMain + ';}'
        ];
      }
      UIUtils.addCSSRule(plusStyleArr.join(' '), 'plus-color');

      this._sections.forEach((section) => {
        if (section.changeTheme) {
          section.changeTheme();
        }

      });
      // change the bg of the side panels?
      // UIUtils.addCSSRule('.op-item-main.builder-overview {background-color: ' + y + ';}', 'overview-bg');

    }
    super.changeTheme();

  }
}
