import Panel from './Panel';

import SectionCommon from 'storymaps/tpl/view/section/Common';
import MediumEditorWrapper from 'storymaps-react/common/builder/textEditor/MediumEditorWrapper';

import {} from 'lib-build/less!./PanelBuilder';
import viewTpl from 'lib-build/hbars!./PanelBuilder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import topic from 'dojo/topic';
import lang from 'dojo/_base/lang';

export default class PanelBuilder extends Panel {
  constructor(panel, transition, callbacks) {
    super(panel, transition);

    this._callbacks = callbacks;
    this._editor = null;
    this._configPanelIsInit = false;
    this._configPanelIsOpen = false;
    this._configPanelMedia = null;
    this._mediaConfigurationTabs = null;
  }

  postCreate(params) {
    this._mediaConfigurationTabs = params.mediaConfigurationTabs;

    super.postCreate(params);

    this._editor = new MediumEditorWrapper({
      node: this._node.find('.blocks'),
      addMedia: this.addMedia.bind(this),
      addButtons: ['text', 'media'],
      style: 'compact',
      authorizedMedia: ['image', 'audio', 'video', 'webpage'],
      onChange: this._onContentChange.bind(this)
    });

    this.updateBuilderEditorPlacementRules();

    // Add Builder UI
    this._node.find('.panel-cfg').html(viewTpl({
      labels: i18n.builder.immersive.panelConfig
    }));

    // Register the minimum events
    this._node.find('.blocks').click(this.onPanelClick.bind(this));
    this._node.find('.builder-config-panel-btn').click(this.toggleBuilderPanel.bind(this));
  }

  updatePosition(params, isNavigatingAway) {
    super.updatePosition(params, isNavigatingAway);
    this._editor.hideToolbars();

    // Update media cfg
    if (this._configPanelIsOpen) {
      // Close media cfg when changing view
      if (params.isNewView) {
        this.closeConfigPanel();
      }
      else {
        let mediaNode = this._configPanelMedia.getNode(),
            mediaBBOX = mediaNode[0].getBoundingClientRect();

        mediaNode.find('.media-cfg-panel').css('top', mediaBBOX.bottom);
      }
    }

    /*
     * Scroll-full panels in builder are hidden because the view panel has greater z-index
     * See other implementation in early May commit
     */
  }

  closeConfigPanel() {
    if (this._configPanelIsOpen && this._configPanelMedia) {
      this._configPanelMedia.closeConfigPanel();
      this._configPanelIsOpen = false;
      this._configPanelMedia = null;
    }
  }

  focus() {
    //
  }

  //
  // Config panel
  //

  onPanelClick() {
    this._node.find('.panel-cfg').addClass('active');

    // In builder - a click on a scroll partial panel make it fully opaque
    if (this.layout == 'scroll-partial') {
      this._node.css('opacity', 1);
    }
  }

  toggleBuilderPanel() {
    var builderInvite = this._node.find('.builder-config-panel-btn'),
        builderPanel = this._node.find('.builder-config-panel');

    // Init builder config panel
    if (! this._configPanelIsInit) {
      this._node.find('.panel-cfg-item').click(this.onOptionChange.bind(this));

      // Layout is not a regular setting
      var settings = Object.assign({}, this._settings, {
        'layout': this.layout
      });

      // Layout scroll full - hover
      this._node.find('.panel-cfg-item-wrapper[data-value="scroll-full"]').hover(
        function() {
          $(this).find('.panel-cfg-item-icon').attr('src', 'resources/tpl/builder/icons/immersive/panelScrollFullHover.gif');
        },
        function() {
          $(this).find('.panel-cfg-item-icon').attr('src', 'resources/tpl/builder/icons/immersive/panelScrollFull.gif');
        }
      );

      // Layout scroll partial - hover
      this._node.find('.panel-cfg-item-wrapper[data-value="scroll-partial"]').hover(
        function() {
          $(this).find('.panel-cfg-item-icon').attr('src', 'resources/tpl/builder/icons/immersive/panelScrollPartialHover.gif');
        },
        function() {
          $(this).find('.panel-cfg-item-icon').attr('src', 'resources/tpl/builder/icons/immersive/panelScrollPartial.gif');
        }
      );

      for (var option in settings) {
        let value = settings[option];
        let container = this._node.find('.options-container[data-option="' + option + '"]');
        container.find('.panel-cfg-item-wrapper[data-value="' + value + '"]').addClass('active');
      }
    }

    this._editor.hideToolbars();

    builderInvite.toggleClass('active');
    builderPanel.toggleClass('active');

    // Make scroll-partial panel fully opaque
    if (this.layout == 'scroll-partial') {
      if (builderPanel.hasClass('active')) {
        this._node.data('opacity-tmp', this._node.css('opacity'));
        this._node.css('opacity', 1);
      }
      else {
        this._node.css('opacity', this._node.data('opacity-tmp'));
        this._node.data('opacity-tmp', '');
      }
    }

    // Close media config
    if (this._configPanelIsOpen && this._configPanelMedia) {
      this._configPanelMedia.closeConfigPanel();
      this._configPanelIsOpen = false;
      this._configPanelMedia = null;
    }
  }

  onOptionChange(e) {
    var target = $(e.target),
        optionsContainer = target.parents('.options-container'),
        option = optionsContainer.data('option'),
        value = target.data('value');

    if (! target.hasClass('panel-cfg-item-wrapper')) {
      return;
    }

    // Layout is a bit special as all panels of the view need to be updated
    //  this is managed by Immersive
    if (option == 'layout') {
      this._callbacks.onUpdateLayout(value);
    }

    optionsContainer.find('.panel-cfg-item-wrapper').removeClass('active');
    target.addClass('active');

    this._settings[option] = value;
    this.updateSettings();

    if (this.layout == 'scroll-partial') {
      this._node.css('opacity', 1);
    }

    topic.publish('builder-section-update');
  }

  updateSettings() {
    this._node
      .removeClass()
      .addClass(this.getClasses());

    this.updateBuilderEditorPlacementRules();
  }

  updateBuilderEditorPlacementRules() {
    let settings = this._settings,
        size = settings.size,
        placement = settings['position-x'],
        rules = {
          width: '',
          minWidth: '250px',
          maxWidth: '400px',
          left: '',
          marginLeft: '',
          marginRight: ''
        };

    if (size == 'small') {
      rules.width = 'calc((100vw - 250px) * .28)';
      rules.maxWidth = '300px';
    }
    else if (size == 'medium') {
      rules.width = 'calc((100vw - 250px) * .38)';
    }
    else if (size == 'large') {
      rules.width = 'calc((100vw - 250px) * .48)';
      rules.maxWidth = '600px';
    }

    if (placement == 'left') {
      rules.marginLeft = '30px';
    }
    else if (placement == 'center') {
      rules.minWidth = '';
      rules.maxWidth = '';
      rules.width = '';
    }
    else if (placement == 'right') {
      rules.marginRight = '30px';
      rules.left = 'inherit !important';
    }

    this._editor.setAddMenuPlacementRules(rules);
  }

  _onContentChange() {
    this.serialize(false);
    this._callbacks.onChange();
  }

  //
  // Media as block in the panel
  //

  addMedia(params = {}) {
    if (! params.media) {
      return;
    }

    var block = SectionCommon.createBlock(params.media);

    this._blocks.push(block);

    // Load the block after the editor got a chance to add it
    // TODO!
    setTimeout(function() {
      block.postCreate({
        //container: params.previousNode.next()
        container: this._node,
        onToggleMediaConfig: this._onToggleMediaConfig.bind(this),
        onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
        builderConfigurationTabs: this._mediaConfigurationTabs,
        sectionType: 'immersive'
      });
      block.load();

      SectionCommon.checkMedia(params.media);
    }.bind(this), 50);

    return block.render({
      placement: 'block'
    });
  }

  _onToggleMediaConfig(media) {
    let mediaCfg = media.getNode().find('.media-cfg-panel'),
        mediaNode = media.getNode()[0],
        mediaBBOX = mediaNode.getBoundingClientRect(),
        scrollOffset = 0;

    // Closing the media config
    if (! media.getNode().hasClass('config-panel-active')) {
      mediaCfg.css('top', '');
      this._configPanelIsOpen = false;
      this._configPanelMedia = null;
      return;
    }

    // The panel is closed but there is another one open
    if (this._configPanelIsOpen && this._configPanelMedia) {
      this._configPanelMedia.closeConfigPanel();
    }

    this._configPanelIsOpen = true;
    this._configPanelMedia = media;

    //
    // Position the media config panel
    //

    mediaCfg.css('top', mediaBBOX.bottom);

    //
    // Scroll the page if there isn't enough room for the builder panel
    //
    const MEDIA_PANEL_HEIGHT = 250;
    const VIEW_PANEL_HEIGHT = 125;

    if (mediaBBOX.bottom + MEDIA_PANEL_HEIGHT + VIEW_PANEL_HEIGHT > app.display.windowHeight) {
      scrollOffset = app.display.windowHeight - mediaBBOX.bottom - MEDIA_PANEL_HEIGHT - VIEW_PANEL_HEIGHT;
    }

    if (scrollOffset) {
      var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

      $('html,body').animate({
        scrollTop: currentScroll - scrollOffset + 10
      }, 150);
    }
  }

  _onEditMedia(media, newMediaJSON) {
    let newMedia = SectionCommon.initMedia({
      media: newMediaJSON,
      isNewMedia: true
    });

    media.getNode().before(newMedia.render({
      placement: 'block'
    }));

    // Delete actual background
    media.getNode().remove();

    newMedia.postCreate({
      container: this._node,
      onToggleMediaConfig: app.isInBuilder ? this._onToggleMediaConfig.bind(this) : null,
      onConfigAction: app.isInBuilder ? this._onMediaConfigAction.bind(this) : null,
      builderConfigurationTabs: this._mediaConfigurationTabs
    });

    // TODO: this may be an issue if picking a map/scene already present
    newMedia.load();

    this._blocks.splice(this._blocks.indexOf(media), 1, newMedia);

    // do an issue check
    SectionCommon.checkMedia(newMediaJSON);
  }

  _onMediaConfigAction(params = {}) {
    if (!params.action || (!params.media && params.action !== 'alternate-media-add')) {
      return;
    }

    if (params.action == 'remove') {
      params.media.remove();
      this._blocks.splice(this._blocks.indexOf(params.media), 1);
    }
    else if (params.action == 'swap' || params.action === 'alternate-media-swap' || params.action === 'alternate-media-add') {
      const mediaIsEmpty = params.action === 'alternate-media-add';
      const isAlternate = params.action.indexOf('alternate-') !== -1;
      const authorizedMedia = isAlternate ? ['image'] : ['image', 'audio', 'video', 'webpage'];

      app.builder.mediaPicker.open({
        mode: mediaIsEmpty ? 'add' : 'edit',
        media: mediaIsEmpty ? null : params.media.serialize(false),
        authorizedMedia: authorizedMedia
      }).then(
        function(newMedia) {
          if (isAlternate) {
            SectionCommon.onEditMediaAlternate({
              mainMedia: params.mainMedia,
              newMediaJSON: newMedia,
              oldMedia: params.media,
              sectionType: 'narrative-panel'
            });
            this._onContentChange();
          }
          else {
            this._onToggleMediaConfig(params.media);
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
        sectionType: 'narrative-panel'
      });
      this._onContentChange();
    }
  }

  getPreviewText() {
    var text = '';

    if (this._blocksJSON && this._blocksJSON.length) {
      for (var block of this._blocksJSON) {
        if (block.type == 'text') {
          text = $(block.text.value).text();
          if (text) {
            break;
          }
        }
      }
    }

    return text;
  }

  //
  // Serialize
  //

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

  serialize(includeInstanceID) {
    var blocksSerialized = [];

    if (this._editor) {
      blocksSerialized = this._editor.serialize(includeInstanceID);

      for (var i=0; i < blocksSerialized.length; i++) {
        var editorBlock = blocksSerialized[i];

        if (editorBlock.type == 'media') {
          var block = this.findBlock(editorBlock.id);
          if (block) {
            blocksSerialized[i] = block.serialize(includeInstanceID);
          }
        }
      }

      this._blocksJSON = blocksSerialized;
    }

    return lang.clone({
      layout: this.layout,
      settings: this._settings,
      blocks: this._blocksJSON
    });
  }

  addContextSpecificIssues(scannedMedia) {
    for (const blockMedia of this._blocks) {
      const instanceID = blockMedia._instanceID;

      const media = scannedMedia[instanceID];

      if (media && !media.alternateMedia) {
        if (media.mediaType === 'webpage') {
          // add an issue here.
          media.scanResult.warnings.push('content/noAlternateMedia');
        }
      }
    }
  }
}
