import ControllerCore from '../core/Controller';
import topic from 'dojo/topic';

import UndoNotification from './notification/Undo';

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

    super.renderStory(config, sections);
  }

  static onScroll(params) {
    super.onScroll(params);

    /*
    var currentSection = app.display.sections[this._currentSectionIndex],
        nextSection = app.display.sections[this._currentSectionIndex + 1];

    if (! currentSection) {
      return;
    }
    */

    // TODO
    /*
    $('.builder-section-add-menu').removeClass('active');

    if (currentSection.type != 'sequence') {
      if (! nextSection) {
        console.log('Need bottom of story menu');
      }
      else if (nextSection.type != 'sequence') {
        var nextSectionTop = nextSection.top,
            scrollTop = params.scrollTop,
            needAddMenu = scrollTop + (app.display.windowHeight * 0.9) > nextSectionTop;

        nextSection.node.find('.builder-section-add-menu').toggleClass('active', needAddMenu);
      }
    }
    */

    /*
    console.log(this._isNavigatingAway, this._currentViewScrollPosition, this._currentViewScrollPosition >= app.display.sectionHeight / 2)
    if (this._isNavigatingAway && this._currentViewScrollPosition >= app.display.sectionHeight / 2) {
      this._node.next().find('.builder-imm-after-menu')
        .addClass('active')
        .css('top', app.display.windowHeight - this._currentViewScrollPosition);
    }
    else {
      this._node.next().find('.builder-imm-after-menu').removeClass('active');
    }
    */
  }

  static openSettings() {
    var headerSettings = app.data.appItem.data.values.settings.header;

    if (! headerSettings || ! headerSettings.logo || ! headerSettings.link) {
      headerSettings = ControllerCore.DEFAULT_HEADER_SETTINGS;
    }

    var settingsPopupParams = {
      context: {
        headerBackground: '#000'
      },
      settings: Object.assign(
        {},
        headerSettings,
        { bookmarks: this.getBookmarksBuilder() }
      )
    };

    app.builder.settingsPopup.open(settingsPopupParams).then(
      function(settings) {

        // Persist header
        app.data.appItem.data.values.settings.header = {
          logo: settings.logo,
          link: settings.link,
          social: settings.social
        };

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
              bookmark.title = 'Sequential section (no text found)';
            }
            else if (section.type == 'immersive') {
              bookmark.title = 'Immersive section (no text found)';
            }
            else if (section.type == 'title') {
              bookmark.title = 'Title section (no text found)';
            }
            else if (section.type == 'cover') {
              bookmark.title = 'Cover section (no text found)';
            }
          }
          else {
            if (section.type == 'cover') {
              bookmark.title += ' (Cover)';
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

  static serializeStory() {
    var story = [];

    for (let section of this._sections) {
      var sectionJSON = section.serialize();

      if (sectionJSON) {
        story.push(sectionJSON);
      }
    }

    return story;
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
          label: 'Cover',
          hasDelete: false,
          hasHide: false,
          hasDuplicate: false,
          hasOrganize: false
        });
      }
      else if (type == 'credits') {
        overview.push({
          id: section.id,
          style: 'button',
          label: 'Credits',
          hasDelete: true,
          hasHide: true,
          hasDuplicate: false,
          hasOrganize: false
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
          hasOrganize: true
        });
      }
      else if (type == 'sequence') {
        overview.push({
          id: section.id,
          style: 'thumbnail',
          size: 'tall',
          thumbnail: section.getPreviewThumbnail(),
          text: section.getPreviewText(),
          hasDelete: ! onlyOneSectionInStory,
          hasHide: true,
          hasDuplicate: true,
          hasOrganize: true
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
          hasOrganize: true
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
    console.log('addSection:', p);

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

    window.requestAnimationFrame(function() {
      this.navigateToSection({
        index: p.index + 1,
        animate: true
      });

      newSection.focus();
    }.bind(this));

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

  static deleteActiveSection() {
    this.deleteSection({
      index: this._currentSectionIndex
    });
  }

  static deleteSection(p) {
    console.log('deleteSection:', p);

    if (! p || ! p.index) {
      return;
    }

    var undoData = {
      index: p.index - 1,
      section: this._sections[p.index].serialize()
    };

    // TODO destroy
    this._sections.splice(p.index, 1);
    this._container.find('.section').eq(p.index).remove();

    if (p.index == this._currentSectionIndex) {
      this.navigateToSection({
        index: p.index - 1,
        animate: true
      });
    }

    topic.publish('builder-section-update');

    //
    // Undo
    //

    var undoNotification = new UndoNotification({
      container: this._container.find('.section').eq(p.index + 1),
      label: 'You deleted a section' // TODO
    });

    undoNotification.display().then(
      function() {
        this.addSection(undoData);

        this.storyUndo();
      }.bind(this),
      function() {
        //
      }
    );
  }

  static duplicateSection(p) {
    console.log('duplicateSection:', p);

    if (! p || ! p.index) {
      return;
    }

    var oldSection = this._sections.slice(p.index, p.index + 1)[0],
        oldSectionJSON = oldSection.serialize();

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
    console.log('organizeSections:', sectionIndexes);

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
        label: 'You organized the sections' // TODO
      });

      undoNotification.display().then(
        function() {
          // TODO

          // not sure why this is not working... it only work in some case
          //this.organizeSections(sectionIndexes, true);

          // and the following only work in some other cases...
          /*
          var reverseSort = [];
          for (let i=0; i < sectionIndexes.length; i++) {
            reverseSort[i] = sectionIndexes[sectionIndexes[i]];
          }
          this.organizeSections(reverseSort, true);
          */

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

          topic.publish('builder-section-update');

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
        }.bind(this),
        function() {
          //
        }
      );
    }

    topic.publish('builder-section-update');
  }
}
