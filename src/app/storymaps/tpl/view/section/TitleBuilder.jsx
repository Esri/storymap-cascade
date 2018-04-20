import Title from './Title';
import {} from 'lib-build/less!./TitleBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import SectionCommon from 'storymaps-react/tpl/view/section/Common';
import AddMenu from './builder/AddMenu';
import MediaPickerConstants from 'storymaps-react/tpl/builder/mediaPicker/constants';

import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

export default class TitleBuilder extends Title {

  constructor(section, media) {
    super(section);

    this._initialMedia = media;
    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
    this.scanResults = {
      hasErrors: false,
      hasWarnings: false
    };

    this.MEDIA_BUILDER_TABS_BACKGROUND = ['section-appearance', 'background', 'manage'];
  }

  render() {
    if (! this._section.layout) {
      this._section.layout = 'title-regular';
    }

    // Creating a new section
    if (! this._section.background) {
      this._section.background = this._initialMedia || { type: 'empty', empty: 'empty' };
      this._section.foreground = { title: '', credits: '', options: {
        titleStyle: {
          shadow: false,
          text: 'dark',
          background: 'light'
        }
      }};
    }

    if (!this._section.foreground.options) {
      this._section.foreground.options = {};
    }

    // if the all has been saved, but title style wasn't specified previously
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

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
    });

    this._node.find('.fg-title')
      .attr('contenteditable', true)
      .attr('placeholder', i18n.builder.title.placeholder)
      .on('keyup blur', e => {
        if (e.keyCode === 8 || e.keyCode === 46) {
          // if textContent is empty but innerHTML is not (i.e. there is no text but there is garbage markup like <br>), make the element empty.
          const element = e.currentTarget;
          if (!element.textContent && element.innerHTML) {
            element.innerHTML = '';
          }
        }

        this.serialize(false);
        this._onContentChange();
      })
      .on('paste', () => {
        setTimeout(() => {
          this._node.find('.fg-title').html($('<div>' + this._node.find('.fg-title').text() + '</div>').text());
          this.serialize(false);
          this._onContentChange();
        }, 0);
      })
      .keydown(e => {
        // Do not allow enter key
        if (e.keyCode === 13) {
          // If pressing enter insert <br> instead of default behavior that is div
          //document.execCommand('insertHTML', false, '<br><br>');
          return false;
        }

        // Prevent ctrl + B/I/U or ctrl + b/i/u
        if(e.ctrlKey || e.metaKey) {
          var key = e.keyCode;
          if (key == 66 || key == 98 || key == 73 || key == 105 || key == 85 || key == 117) {
            return false;
          }
        }
      });
  }

  focus() {
    setTimeout(() => {
      this._node.find('.fg-title').focus();
    }, 50);
  }

  serialize(includeInstanceID) {
    this._section.background = this._backgroundMedia.serialize(includeInstanceID);
    this._section.foreground.title = $('<div>' + this._node.find('.fg-title').text() + '</div>').text();

    return lang.clone(this._section);
  }

  setBookmark(bookmark) {
    this._section.bookmark = {
      enabled: bookmark.status == 'visible',
      title: bookmark.bookmark
    };
  }

  getScanResults() {
    return this.scanResults;
  }

  setScanResults(hasErrors, hasWarnings) {
    Object.assign(this.scanResults, {hasErrors}, {hasWarnings});
  }

  addContextSpecificIssues() {
    //
  }

  //
  // PRIVATE
  //

  _onContentChange() {
    topic.publish('builder-section-update');
  }

  _onToggleMediaConfig() {
    let activeClass = 'media-config-active';
    let configPanelActive = this._backgroundMedia.isConfigActive();
    const MEDIA_CONFIG_HEIGHT = 225;

    if (configPanelActive) {
      this._node.addClass(activeClass);

      // Scroll the page if there isn't enough room for the config panel
      let sectionNode = this._node[0];
      let sectionBBOX = sectionNode.getBoundingClientRect();
      let scrollOffset = 0;

      let mediaConfigHeight = MEDIA_CONFIG_HEIGHT;
      let bottomWithMediaConfig = sectionBBOX.bottom + mediaConfigHeight;

      if (bottomWithMediaConfig > app.display.windowHeight) {
        scrollOffset = app.display.windowHeight - bottomWithMediaConfig;
      }

      if (scrollOffset) {
        var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

        $('html,body').animate({
          scrollTop: currentScroll - scrollOffset + 50
        }, 150);
      }
    }
    else {
      this._node.removeClass(activeClass);
    }
  }

  _onMediaConfigAction(params = {}) {
    if (! params.action || ! params.media) {
      return;
    }

    if (params.action == 'swap' || params.action === 'https-open-picker') {
      var mediaIsEmpty = params.media.serialize(false).type == 'empty';

      app.builder.mediaPicker.open({
        mode: mediaIsEmpty ? 'add' : 'edit',
        media: mediaIsEmpty ? null : params.media.serialize(false),
        authorizedMedia: ['image'],
        selectedProvider: params.action === 'https-open-picker' ? MediaPickerConstants.providers.URL : ''
      })
      .then(newMedia => {
        if (SectionCommon.isSameMediaWithSecureProtocol(params.media, newMedia)) {
          // if all that's changed is that the media URL is now https, keep the existing media but change it to be https.
          // This preserves captions, alt media, and config options.
          params.media.convertToHttps();
          topic.publish('builder-should-check-story');
        }
        else {
          this._onEditMedia(params.media, newMedia);
        }
      },
      () => {
        //
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
    this._node.prepend(SectionCommon.renderBackground({
      media: newMedia
    }));

    newMedia.postCreate({
      container: this._node,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      builderConfigurationTabs: this.MEDIA_BUILDER_TABS_BACKGROUND,
      foregroundOptions: this._section.foreground.options,
      applySectionConfig: app.isInBuilder ? this._applySectionConfig.bind(this) : null,
      sectionType: 'title'
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load();

    if (media.type != 'empty') {
      this._onToggleMediaConfig();
    }

    media.destroy();

    this._backgroundMedia = newMedia;

    SectionCommon.checkMedia(newMediaJSON);
    this._applySectionConfig();
  }
}
