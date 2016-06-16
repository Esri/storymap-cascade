import Cover from './Cover';
import {} from 'lib-build/less!./CoverBuilder';

import SectionCommon from 'storymaps/tpl/view/section/Common';
import topic from 'dojo/topic';

import lang from 'dojo/_base/lang';

export default class CoverBuilder extends Cover {

  constructor(section) {
    super(section);

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['appearance', 'manage'];
  }

  render() {
    // Creating a new section
    if (! this._section.background) {
      this._section.layout = 'cover-1';
      this._section.background = {
        type: 'image',
        image: {
          url: this._getCoverPlaceholderImage(),
          isPlaceholder: true
        }
      };
    }

    return super.render();
  }

  postCreate(params) {
    super.postCreate(params);

    //
    // Title/subtitle inline editing
    //

    var userName = app.portal.getPortalUser().firstName || '';

    this._node.find('.cover-title')
      .attr('contenteditable', true)
      .attr('placeholder-line1', 'Welcome ' + userName)
      .attr('placeholder-line2', 'Enter your story title...')
      .on('blur keyup', function(e) {
        var newTitle = $(e.target).text();

        if (newTitle != app.Controller.getStoryTitle()) {
          this._section.foreground.title = newTitle;
          topic.publish('builder-story-title-update', newTitle);
          this._onContentChange();
        }
      }.bind(this))
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.cover-title').html(this._node.find('.cover-title').text());
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
        this._node.find('.cover-title').removeClass('title-error');
        this._node.find('.title-error-container').addClass('hidden');
      });

    this._node.find('.cover-subtitle')
      .attr('contenteditable', true)
      .attr('placeholder', 'Scroll down to get started or enter an optional subtitle')
      .keydown(function(e) {
        // Do not allow enter key
        if (e.keyCode === 13) {
          return false;
        }
      })
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.cover-subtitle').html(this._node.find('.cover-subtitle').text());
        }.bind(this), 0);
      }.bind(this))
      .keydown(function(e) {
        // Do not allow enter key
        if (e.keyCode === 13) {
          return false;
        }
      });

    if (this._backgroundMedia.isPlaceholder()) {
      this._node.find('.cover-media-placeholder').addClass('active');
      this._node.find('.cover-media-placeholder-wrapper').click(this._onEditPlaceholderMedia.bind(this));
    }

    /*
    if (! this._section.foreground.title) {
      setTimeout(function() {
        this._node.find('.cover-title').focus().focus();
      }.bind(this), 100);
    }
    */
  }

  serialize() {
    if (this._node) {
      this._section.foreground.title = this._node.find('.cover-title').text();
      this._section.foreground.subtitle = this._node.find('.cover-subtitle').text();
      this._section.background = this._backgroundMedia.serialize();
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
    if (! params.action || ! params.media) {
      return;
    }

    if (params.action == 'swap') {
      app.builder.mediaPicker.open({
        mode: 'add',
        authorizedMedia: ['image', 'video']
      }).then(
        function(newMedia) {
          this._onToggleMediaConfig();
          this._onEditMedia(params.media, newMedia);
        }.bind(this),
        function() {
          //
        }
      );
    }

    this._onContentChange();
  }

  _onEditMedia(media, newMediaJSON) {
    let newMedia = SectionCommon.initMedia(newMediaJSON);

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
      // TODO: for video, need to goes away
      sectionType: 'cover'
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load({
      isBuilderAdd: true
    });

    media.destroy();

    this._backgroundMedia = newMedia;
  }

  _getCoverPlaceholderImage() {
    var images = [
      'AngelaBenito.jpg',
      'EandNPhotographies.jpg',
      'ErolAhmed.jpg',
      'FrancesGunn.jpg',
      'JeremyThomas.jpg',
      'JonathanBean.jpg',
      'LukasBudimaier.jpg',
      'NASA.jpg',
      'PatrickFore.jpg',
      'PatrickTomasso.jpg',
      'PhilippeWuyts.jpg',
      'SamuelScrimshaw.jpg',
      'SujanSundareswaran.jpg',
      'SusanneFeldt.jpg',
      'VladimirKudinov.jpg',
      'WilsonLau.jpg'
    ];

    var image = images[Math.floor(Math.random() * images.length)];

    return 'resources/tpl/viewer/cover-placeholder/' + image;
  }
}
