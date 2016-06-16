import BookmarkTpl from 'lib-build/hbars!./Bookmark';
import BookmarksMoreTpl from 'lib-build/hbars!./BookmarksMore';

import {} from 'lib-build/less!./Bookmarks';

export default class Bookmarks {
  constructor(container) {
    this.container = container;
    this.bookmarkIndex = 0;
    this.bookmarkNavigationInProgress = false;
  }

  update(sectionIndex) {
    this.showBookmarkIndex(sectionIndex);
  }

  resize() {
    let availableWidthForTabs = this.container.width();
    // start by hiding the dropdown and its button
    this.container.children('li').addClass('visible');
    this.container.find('.dropdown').removeClass('visible');
    this.container.find('.dropdown-menu li').removeClass('visible');

    let widthCounter = 0;
    let index = 0;
    let displayMoreButton = false;
    let bookmarks = this.container.children('.bookmark');
    let moreButtonSize = this.container.find('li.dropdown').outerWidth(true);
    
    bookmarks.each((i, elem) => {
      let element = $(elem);

      index++;
      // find the width of the bookmark
      widthCounter += element.outerWidth(true);

      let tooWideWithBookmark = widthCounter > availableWidthForTabs;
      let tooWideWithBookmarkAndMoreButton = widthCounter + moreButtonSize > availableWidthForTabs;
      let notLastBookmark = index < bookmarks.length;

      // If adding the button would overflow
      //  or if adding the button and the more button would overflow and there is more bookmarks to come
      if (tooWideWithBookmark || (tooWideWithBookmarkAndMoreButton && notLastBookmark)) {
        // display the 'more' button, hide the bookmark from the horizontal list, and show the bookmark in the dropdown list
        displayMoreButton = true;
        element.removeClass('visible');
        this.container.find('.dropdown-menu li').eq(element.index()).addClass('visible');
      }
    });

    let activeBookmark = this.container.children('.bookmark.active');
    let activeBookmarkDropdown = this.container.find('.dropdown-menu li.active');

    // The active bookmark is not visible -> the active bookmark is now in the dropdown list
    if (activeBookmark.length && !activeBookmark.hasClass('visible')) {
      // remove the active class from the horizontal list (the item is already hidden in that list)
      // then add the active class to the dropdown item
      // then make the dropdown active.
      activeBookmark.removeClass('active');
      this.container.find('.nav-tabs .dropdown-menu li').eq(activeBookmark.index()).addClass('active');
      this.container.find('.nav-tabs > .dropdown').addClass('active');
    }
    // The active bookmark in the dropdown is not visible -> the active bookmark is now visible in the main list
    else if (activeBookmarkDropdown.length && ! activeBookmarkDropdown.hasClass('visible')) {
      // remove the active class from the dropdown bookmark (it's already hidden there)
      // then add the active class to the bookmark in the horizontal list
      // and then make the dropdown inactive.
      activeBookmarkDropdown.removeClass('active');
      this.container.find('.nav-tabs > .bookmark').eq(activeBookmarkDropdown.index()).addClass('active');
      this.container.find('.nav-tabs > .dropdown').removeClass('active');
    }

    if (displayMoreButton) {
      // show the dropdown
      this.container.find('.dropdown').addClass('visible');
    }
  }

  updateVisibleBookmark(index) {
    // take array of all the elements that are at or below the index.
    let possibleBookmarks = this.container.find('.bookmark.visible').filter((i, item) => {
      return $(item).data('index') <= index;
    });
    // take the last one (the one that either HAS this index or is the closest, but below, to it.)
    if (possibleBookmarks.length) {
      $(possibleBookmarks[possibleBookmarks.length - 1]).addClass('active');
    }
  }

  showBookmarkIndex(index) {
    if (!this.bookmarkNavigationInProgress) {

      if (!index && index !== 0) {
        index = this.bookmarkIndex;
      }

      this.container.find('li, .bookmark').removeClass('active');

      this.updateVisibleBookmark(index);

      // when you get to an index that is NOT in the visible list, show the dropdown selected.
      // active bookmark's parent is dropdown? No? then OK...
      let inDropdown = this.container.find('.bookmark.active').closest('.bookmark-dropdown').length > 0;
      // The bookmark is in the dropdown
      if (inDropdown) {
        this.container.find('.dropdown').addClass('active');

        if (!app.isLoading) {
          // Open the dropdown if not open
          if (!this.container.find('.dropdown').hasClass('open')) {
            this.container.find('.dropdown-toggle').click();
          }
        }
      }
      // The bookmark is visible
      else {
        if (!app.isLoading) {
          // Close the dropdown if open
          if (this.container.find('.dropdown').hasClass('open')) {
            this.container.find('.dropdown-toggle').click();
          }
        }
      }

      this.bookmarkIndex = index;
    }
  }

  render(bookmarks) {
    if (!bookmarks) {
      bookmarks = [];
    }

    let bookmarksHTML = '';

    for (let bookmark of bookmarks) {
      bookmarksHTML += BookmarkTpl(bookmark);
    }

    // populates the list AND the dropdown with the bookmarks
    this.container.html(
      bookmarksHTML
      + BookmarksMoreTpl({ bookmarks: bookmarksHTML })
    );

    this.addEvents();

    this.resize();
    this.showBookmarkIndex();
  }

  addEvents() {
    this.container.find('.bookmark').off('click').on('click', event => {
      this.onBookmarkNavigate($(event.currentTarget));
    });
  }

  onBookmarkNavigate(target) {
    let index = target.data('index');

    this.bookmarkNavigationInProgress = true;

    app.Controller.navigateToSection({
      index: index,
      animate: true
    }).then(() => {
      // but when all the way done, no more updates called on header... so have to tell it manually, which could be off... not a good idea.
      // unless look at app's selected section
      this.bookmarkNavigationInProgress = false;
      this.showBookmarkIndex(index);
    });
  }
}
