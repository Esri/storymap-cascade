import Title from './Title';
import {} from 'lib-build/less!./TitleBuilder';

import SectionCommon from 'storymaps/tpl/view/section/Common';
import AddMenu from './builder/AddMenu';

import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

export default class TitleBuilder extends Title {

  constructor(section, media) {
    super(section);

    this._initialMedia = media;
    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['manage'];
  }

  render() {
    if (! this._section.layout) {
      this._section.layout = 'title-regular';
    }

    // Creating a new section
    if (! this._section.background) {
      this._section.background = this._initialMedia || { type: 'empty', empty: 'empty' };
      this._section.foreground = { title: '', credits: ''};
    }

    return super.render();
  }

  postCreate(params) {
    super.postCreate(params);

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
    });

    this._node.find('.fg-title')
      .attr('contenteditable', true)
      .attr('placeholder', 'Enter a title...')
      .on('blur keyup', function() {
        this.serialize();
        this._onContentChange();
      }.bind(this))
      .on('paste', function() {
        setTimeout(function() {
          this._node.find('.fg-title').html(this._node.find('.fg-title').text());
          this.serialize();
          this._onContentChange();
        }.bind(this), 0);
      }.bind(this))
      .keydown(function(e) {
        // Do not allow enter key
        if (e.keyCode === 13) {
          // If pressing enter insert <br> instead of default behavior that is div
          //document.execCommand('insertHTML', false, '<br><br>');
          return false;
        }
      });
  }

  focus() {
    setTimeout(function() {
      this._node.find('.fg-title').focus();
    }.bind(this), 50);
  }

  serialize() {
    this._section.background = this._backgroundMedia.serialize();
    this._section.foreground.title = this._node.find('.fg-title').text();

    return lang.clone(this._section);
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }

  _onContentChange() {
    topic.publish('builder-section-update');
  }

  _onToggleMediaConfig() {
    this._node.toggleClass('hide-foreground');
  }

  _onMediaConfigAction(params = {}) {
    if (! params.action || ! params.media) {
      return;
    }

    if (params.action == 'swap') {
      app.builder.mediaPicker.open({
        mode: 'add',
        authorizedMedia: ['image']
      }).then(
        function(newMedia) {
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
    this._node.prepend(SectionCommon.renderBackground({
      media: newMedia
    }));

    newMedia.postCreate({
      container: this._node,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load();

    if (media.type != 'empty') {
      this._onToggleMediaConfig();
    }

    media.destroy();

    this._backgroundMedia = newMedia;
    this._onContentChange();
  }
}
