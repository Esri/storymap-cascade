import Sequence from './Sequence';
import {} from 'lib-build/less!./SequenceBuilder';

import SectionCommon from 'storymaps/tpl/view/section/Common';
import MediumEditorWrapper from 'storymaps-react/common/builder/textEditor/MediumEditorWrapper';
import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

export default class SequenceBuilder extends Sequence {

  constructor(section) {
    super(section);
    this._editor = null;

    this.MEDIA_BUILDER_TABS = ['size', 'appearance', 'manage'];
  }

  render() {
    if (! this._section.background || ! this._section.foreground
        || ! this._section.foreground.blocks || ! this._section.foreground.blocks.length) {
      this._section = {
        type: 'sequence',
        layout: 'sequence-1',
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
                value: '<p class="block"></p>'
              }
            }

          ]
        }
      };
    }

    return super.render();
  }

  postCreate(node) {
    super.postCreate(node);

    this._editor = new MediumEditorWrapper({
      node: this._node.find('.foreground'),
      addMedia: this.addMedia.bind(this),
      addButtons: ['text', 'arcgis', 'media', 'title', 'immersive'],
      splitSection: this.splitSection.bind(this),
      style: 'full',
      placeholder: node.index() == 1 ? 'Your Cascade story starts here!' : null,
      onChange: this._onContentChange.bind(this)
    });
  }

  focus() {
    setTimeout(function() {
      this._editor.focus();
    }.bind(this), 50);
  }

  addMedia(params = {}) {
    if (! params.media) {
      return;
    }

    var block = SectionCommon.createBlock(params.media);

    this._blocks.splice(params.blockIndex, 0, block);

    // Load the block after the editor got a chance to add it
    // TODO!
    setTimeout(function() {
      block.postCreate({
        //container: params.previousNode.next()
        container: this._node,
        onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
        onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
        builderConfigurationTabs: this.MEDIA_BUILDER_TABS
      });
      block.load();

      //
      // Scroll the page if there isn't enough room for the media
      //
      let mediaBBOX = block.getNode()[0].getBoundingClientRect(),
          scrollOffset = 0;

      if (mediaBBOX.bottom > app.display.windowHeight) {
        scrollOffset = app.display.windowHeight - mediaBBOX.bottom;
      }

      if (scrollOffset) {
        var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

        $('html,body').animate({
          scrollTop: currentScroll - scrollOffset + 10
        }, 150);
      }

      this._onContentChange();
    }.bind(this), 50);

    return block.render({
      placement: 'block'
    });
  }

  _onContentChange() {
    this.serialize();
    topic.publish('builder-section-update');
  }

  _onToggleMediaConfig(media) {
    //
    // Scroll the page if there isn't enough room for the builder panel
    //
    let mediaNode = media.getNode()[0],
        mediaBBOX = mediaNode.getBoundingClientRect(),
        scrollOffset = 0;

    if (mediaBBOX.bottom > app.display.windowHeight) {
      scrollOffset = app.display.windowHeight - mediaBBOX.bottom;
    }

    if (scrollOffset) {
      var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

      $('html,body').animate({
        scrollTop: currentScroll - scrollOffset + 10
      }, 150);
    }
  }

  _onEditMedia(media, newMediaJSON) {
    let newMedia = SectionCommon.initMedia(newMediaJSON);

    media.getNode().before(newMedia.render({
      placement: 'block'
    }));

    // Delete actual background
    media.getNode().remove();

    newMedia.postCreate({
      container: this._node,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load();

    this._blocks.splice(this._blocks.indexOf(media), 0, newMedia);

    this._onContentChange();
  }

  _onMediaConfigAction(params = {}) {
    if (! params.action || ! params.media) {
      return;
    }

    if (params.action == 'remove') {
      params.media.remove();
      this._blocks.splice(this._blocks.indexOf(params.media), 1);
    }
    else if (params.action == 'swap') {
      app.builder.mediaPicker.open({
        mode: 'add'
      }).then(
        function(newMedia) {
          this._onEditMedia(params.media, newMedia);
        }.bind(this),
        function() {
          //
        }
      );
    }
    else if (params.action == 'image-to-image-gallery') {
      app.builder.mediaPicker.open({
        mode: 'add',
        authorizedMedia: ['image']
      }).then(
        function(newMedia) {
          if (newMedia.type != 'image') {
            return;
          }

          var firstImage = params.media.serialize();
          this._onEditMedia(
            params.media,
            {
              type: 'image-gallery',
              'image-gallery': {
                images: [
                  {
                    url: firstImage.image.url,
                    width: firstImage.image.width,
                    height: firstImage.image.height
                  },
                  newMedia.image
                ],
                caption: firstImage.image.caption
              }
            }
          );
        }.bind(this),
        function() {
          //
        }
      );
    }
    else if (params.action == 'image-gallery-to-image') {
      var firstImage = params.media.serialize()['image-gallery'].images[0];

      this._onEditMedia(
        params.media,
        {
          type: 'image',
          'image': {
            url: firstImage.url,
            width: firstImage.width,
            height: firstImage.height,
            caption: firstImage.caption
          }
        }
      );
    }

    this._onContentChange();
  }

  splitSection(params = {}) {
    if (params.blockIndex === undefined) {
      return;
    }

    console.log('Split section:', params.blockIndex);
  }

  getPreviewThumbnail() {
    for (var block of this._blocks) {
      if (block.type != 'text') {
        return block.getPreviewThumbnail();
      }
    }

    return null;
  }

  getPreviewIcon() {
    return '';
  }

  getPreviewText() {
    var text = '';

    if (this._section.foreground.blocks) {
      if (this._section.foreground.blocks.length) {
        if (this._section.foreground.blocks[0].type == 'text') {
          text = $(this._section.foreground.blocks[0].text.value).text();
        }
      }
    }

    return text;
  }

  findBlock(id) {
    if (! id) {
      return null;
    }

    for (var i=0; i < this._blocks.length; i++) {
      if (this._blocks[i]._domID == id) {
        return this._blocks[i];
      }
    }
  }

  serialize() {
    if (this._editor) {
      var blocks = this._editor.serialize();

      for (var i=0; i < blocks.length; i++) {
        var editorBlock = blocks[i];

        if (editorBlock.type == 'media') {
          var block = this.findBlock(editorBlock.id);
          if (block) {
            blocks[i] = block.serialize();
          }
        }
      }

      this._section.foreground.blocks = blocks;
    }

    //
    // All serialize methods for medias and section deep clone the object
    //  Object.assign is not perforning deep cloning of properties
    // This is to avoid issues with a duplicated Sequential section where
    //  edits in one would be performed on both!
    // As the serialize method are called quite a bit in builder, it may
    //  be worthwile to optimize
    // TODO: optimize
    return lang.clone(this._section);
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }
}
