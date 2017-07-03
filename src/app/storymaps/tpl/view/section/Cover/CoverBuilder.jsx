import Cover from './Cover';
import {} from 'lib-build/less!./CoverBuilder';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import SectionCommon from 'storymaps/tpl/view/section/Common';
import topic from 'dojo/topic';

import lang from 'dojo/_base/lang';

export default class CoverBuilder extends Cover {

  constructor(section) {
    super(section);

    this.scanResults = {
      hasErrors: false,
      hasWarnings: false
    };

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['section-appearance', 'background', 'manage', 'alternate'];
  }

  render() {
    // Building the cover for the first time...
    if (! this._section.background) {
      this._section.layout = 'cover-1';
      this._section.background = {
        type: 'image',
        image: {
          url: this._getCoverPlaceholderImage(),
          isPlaceholder: true
        }
      };

      // building the cover for the first time
      this._section.foreground.options = {
        titleStyle: {
          shadow: false,
          text: 'dark',
          background: 'light'
        }
      };
    }

    // if built before we had foreground options, make it an object
    if (!this._section.foreground.options) {
      this._section.foreground.options = {};
    }

    // if the all has been saved, but title style wasn't specified prior
    if (!this._section.foreground.options.titleStyle) {
      this._section.foreground.options.titleStyle = {
        shadow: true,
        text: 'light',
        background: null
      };
    }

    return super.render();
  }

  postCreate(params) {
    super.postCreate(params);

    //
    // Title/subtitle inline editing
    //

    this._node.find('.cover-title')
      .attr('contenteditable', true)
      .attr('placeholder', i18n.builder.cover.titlePrompt)
      .on('blur keyup', function(e) {
        var newTitle = $('<div>' + $(e.target).text() + '</div>').text();

        if (newTitle != app.Controller.getStoryTitle()) {
          this._section.foreground.title = newTitle;
          topic.publish('builder-story-title-update', newTitle);
          this._onContentChange();
        }
      }.bind(this))
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.cover-title').html($('<div>' + this._node.find('.cover-title').text() + '</div>').text());
          let newTitle = this._node.find('.cover-title').text();
          this._section.foreground.title = newTitle;
          topic.publish('builder-story-title-update', newTitle);
          this._onContentChange();
        }.bind(this), 0);
      }.bind(this))
      .keydown(e => {
        // Do not allow enter key
        if (e.keyCode === 13) {
          return false;
        }

        // Prevent ctrl + B/I/U or ctrl + b/i/u
        if(e.ctrlKey || e.metaKey) {
          var key = e.keyCode;
          if (key == 66 || key == 98 || key == 73 || key == 105 || key == 85 || key == 117) {
            return false;
          }
        }

        this._node.find('.cover-title').removeClass('title-error');
        this._node.find('.title-error-container').addClass('hidden');
      });

    this._node.find('.cover-subtitle')
      .attr('contenteditable', true)
      .attr('placeholder', i18n.builder.cover.subtitlePrompt)
      .on('blur keyup', function(e) {
        var newValue = $('<div>' + $(e.target).text() + '</div>').text();

        if (newValue != this._section.foreground.subtitle) {
          this._section.foreground.subtitle = newValue;
          this._onContentChange();
        }
      }.bind(this))
      .keydown(function(e) {
        // Do not allow enter key
        if (e.keyCode === 13) {
          return false;
        }

        // Prevent ctrl + B/I/U or ctrl + b/i/u
        if(e.ctrlKey || e.metaKey) {
          var key = e.keyCode;
          if (key == 66 || key == 98 || key == 73 || key == 105 || key == 85 || key == 117) {
            return false;
          }
        }
      })
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.cover-subtitle').html($('<div>' + this._node.find('.cover-subtitle').text() + '</div>').text());
        }.bind(this), 0);
      }.bind(this));

    if (this._backgroundMedia.isPlaceholder()) {
      this._node.find('.cover-media-placeholder').addClass('active');
      this._node.find('.cover-media-placeholder-wrapper').click(this._onEditPlaceholderMedia.bind(this));
    }
  }

  serialize(includeInstanceID) {
    if (this._node) {
      this._section.foreground.title = $('<div>' + this._node.find('.cover-title').text() + '</div>').text();
      this._section.foreground.subtitle = $('<div>' + this._node.find('.cover-subtitle').text() + '</div>').text();
      this._section.background = this._backgroundMedia.serialize(includeInstanceID);
    }

    return lang.clone(this._section);
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }

  showTitleError() {
    this._node.find('.cover-title').addClass('title-error');
    this._node.find('.title-error-container').removeClass('hidden');
  }

  getScanResults() {
    return this.scanResults;
  }

  setScanResults(hasErrors, hasWarnings) {
    Object.assign(this.scanResults, {hasErrors}, {hasWarnings});
  }

  addContextSpecificIssues(scannedMedia) {
    // loop thru and see if they have alts. if not, they're in trouble!
    const instanceID = this._backgroundMedia._instanceID;

    const media = scannedMedia[instanceID];

    if (media && media.mediaType === 'video') {
      if (!media.alternateMedia) {
        // add an issue here.
        media.scanResult.warnings.push('content/noAlternateMedia');
      }
    }
  }

  //
  // Private
  //

  _onContentChange() {
    topic.publish('builder-section-update');
  }

  _onToggleMediaConfig() {
    this._node.toggleClass('hide-scroll-invite');
  }

  _onEditPlaceholderMedia() {
    app.builder.mediaPicker.open({
      mode: 'add',
      authorizedMedia: ['image', 'video']
    }).then(
      function(newMedia) {
        this._onEditMedia(this._backgroundMedia, newMedia);
        this._node.find('.cover-media-placeholder').removeClass('active');

        this._onContentChange();
      }.bind(this),
      function() {
        //
      }
    );
  }

  _onMediaConfigAction(params = {}) {
    // if there's no action OR (there's no media AND the action isn't alt media add)
    // in other words, we need an action, and we need a media unless action is alt media add.
    if (!params.action || (!params.media && params.action !== 'alternate-media-add')) {
      return;
    }

    if (params.action === 'swap' || params.action === 'alternate-media-swap' || params.action === 'alternate-media-add') {
      const isAlternate = params.action.indexOf('alternate-') !== -1;
      const mediaIsEmpty = params.action === 'alternate-media-add';
      const authorizedMedia = isAlternate ? ['image'] : ['image', 'video'];

      app.builder.mediaPicker.open({
        mode: mediaIsEmpty ? 'add' : 'edit',
        media: mediaIsEmpty ? null : params.media.serialize(false),
        authorizedMedia: authorizedMedia
      }).then(
        function(newMedia) {
          if (isAlternate) {
            // only part of the recipe will apply to this
            SectionCommon.onEditMediaAlternate({
              mainMedia: params.mainMedia,
              newMediaJSON: newMedia,
              oldMedia: params.media,
              sectionType: 'cover'
            });
            this._onContentChange();
          }
          else {
            this._onToggleMediaConfig();
            this._onEditMedia(params.media, newMedia);
          }
        }.bind(this),
        function() {
          //
        }
      );
    }

    else if (params.action === 'alternate-media-remove') {
      SectionCommon.onRemoveMediaAlternate({
        mainMedia: params.mainMedia,
        media: params.media,
        sectionType: 'cover'
      });
    }

    this._onContentChange();
  }

  _applySectionConfig() {
    this._applyConfig();
    this._onContentChange();
  }

  _onEditMedia(media, newMediaJSON) {
    let newMedia = SectionCommon.initMedia({
      media: newMediaJSON,
      isNewMedia: true
    });

    // Delete actual background
    this._node.find('.background').remove();

    // TODO: only if media not already rendered
    this._node.find('.wrapper').prepend(SectionCommon.renderBackground({
      media: newMedia
    }));

    newMedia.postCreate({
      container: this._node,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      foregroundOptions: this._section.foreground.options,
      applySectionConfig: app.isInBuilder ? this._applySectionConfig.bind(this) : null,
      // TODO: for video, need to goes away
      sectionType: 'cover'
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load({
      isBuilderAdd: true
    });

    media.destroy();

    this._backgroundMedia = newMedia;

    SectionCommon.checkMedia(newMediaJSON);
    this._applySectionConfig();
  }

  _getCoverPlaceholderImage() {
    var images = [
      'AndrewNeel.jpg',
      'AustinD.jpg',
      'BlakeRichardVerdoorn.jpg',
      'ChristianNielsen.jpg',
      'DariuszSankowski.jpg',
      'JamieHagan.jpg',
      'JarrenSimmons.jpg',
      'JOHNTOWNER.jpg',
      'KamalJ.jpg',
      'KoushikC.jpg',
      'KristoferSelbekk.jpg',
      'SteveRichey.jpg',
      'YuxXiang.jpg',
      'ZbysiuRodak.jpg',
      '14828.jpg',
      '24241.jpg',
      '24963.jpg',
      '57688.jpg',
      '93092.jpg',
      '123972.jpg',
      '124325.jpg',
      '134977.jpg',
      '136526.jpg',
      '152227.jpg',
      '154060.jpg',
      '162286.jpg',
      '173199.jpg',
      '182304.jpg',
      '183942.jpg',
      '196539.jpg',
      '198863.jpg',
      '207956.jpg'
    ];

    var image = images[Math.floor(Math.random() * images.length)];

    return 'resources/tpl/viewer/cover-placeholder/' + image;
  }
}
