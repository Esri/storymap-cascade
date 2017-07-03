import Tab from './Tab';
import Media from './../Media';

import viewTpl from 'lib-build/hbars!./TabBackground';
import {} from 'lib-build/less!./Common';

import has from 'dojo/sniff';

import ColorPicker from 'storymaps-react/common/builder/ColorPicker';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import {} from 'lib/color-thief/dist/color-thief.min';
import {} from 'storymaps/common/utils/ColorThiefOverrides';

export default class TabBackground extends Tab {
  constructor(params) {
    super(params);
    this.title = i18n.builder.mediaConfig.tabs.background;
    this.type = 'background';
    this.icon = 'fa-arrows-alt';
    this.placement = null;
    this.focusDot = null;
    this.previewThumbnail = null;
    this.checkbox = null;
    this.responsivePreview = null;
    this.colorPickerTrigger = null;
    this.colorPickerThumbnail = null;
    this.sectionType = params.sectionType;
    this.imageUrl = '';
    this.colors = null;
  }

  render() {
    let isSafari = has('safari');

    return viewTpl({
      isTitle: this.sectionType === 'title',
      isImmersive: this.sectionType === 'immersive',
      // need to add narrative panel check to next statement
      isNarrativeOrPanel: this.sectionType === 'sequence',
      strings: i18n.builder.mediaConfig.background,
      isSafari: isSafari
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this.imageUrl = params.media.url ? Media.addToken(params.media.url) : '';

    this.placement = params.media.options.placement || {
      type: 'fill',
      fit: {
        color: ''
      },
      fill: {
        x: .5,
        y: .5
      }
    };
    // we delete the un-selected property when we close the tab. We'll want both while here, however.
    if (!this.placement.fit) {
      this.placement.fit = {
        color: ''
      };
    }
    if (!this.placement.fill) {
      this.placement.fill = {
        x: .5,
        y: .5
      };
    }
    this.setConfig('placement', this.placement);

    this.focusDot = this._node.find('.overview-dot');
    this.previewThumbnail = this._node.find('.overview-thumbnail');
    this.checkbox = this._node.find('input.fit-fill');
    this.responsivePreview = this._node.find('.responsive-preview');
    this.colorPickerTrigger = this._node.find('.color-picker-icons');
    this.colorPickerThumbnail = this._node.find('.fit-color-picker-color');

    this._applyInitialUI();

    this._node.find('[data-toggle="tooltip"]').tooltip();
    this._node.closest('.config-content').addClass('placement-config');

    this._initColorPicker();

    this.addEvents();
  }

  _applyInitialUI() {
    let hiddenClass = 'content-hidden';

    this.responsivePreview.css('background-image', `url('${this.imageUrl}')`);

    this.previewThumbnail.attr('src', this.imageUrl);
    this.focusDot.css('left', `${this.placement.fill.x * 100}%`);
    this.focusDot.css('top', `${this.placement.fill.y * 100}%`);

    this._getColorPalette();

    if (this.placement.type === 'fill') {
      this.checkbox.prop('checked', false);
      this._node.find('.section-content[data-mode="fit"]').addClass(hiddenClass);
      this._node.find('.section-content[data-mode="fill"]').removeClass(hiddenClass);
    }
    else {
      this.checkbox.prop('checked', true);
      this._node.find('.section-content[data-mode="fill"]').addClass(hiddenClass);
      this._node.find('.section-content[data-mode="fit"]').removeClass(hiddenClass);
    }

    this._loadPreviewFrames();
  }

  _loadPreviewFrames() {
    // only apply when we're ready
    let previewFrameUrlLandscape = 'resources/tpl/builder/icons/media-config/previewLandscape.png';
    let imageLandscape = new Image();
    let landscapeLoaded = false;
    let portraitLoaded = false;

    imageLandscape.onload = () => {
      landscapeLoaded = true;

      if (landscapeLoaded && portraitLoaded) {
        this._applyResponsivePreview();
      }
    };
    imageLandscape.onerror = () => {
      // TODO
    };

    imageLandscape.src = previewFrameUrlLandscape;

    let previewFrameUrlPortrait = 'resources/tpl/builder/icons/media-config/previewPortrait.png';
    let imagePortrait = new Image();

    imagePortrait.onload = () => {
      portraitLoaded = true;

      if (landscapeLoaded && portraitLoaded) {
        this._applyResponsivePreview();
      }
    };
    imagePortrait.onerror = () => {
      // TODO
    };

    imagePortrait.src = previewFrameUrlPortrait;
  }

  _showFitLoading() {
    this._node.find('.content-pane.fit-content').hide();
    this._node.find('.content-pane.fit-loading').show();
  }

  _hideFitLoading() {
    this._node.find('.content-pane.fit-loading').hide();
    this._node.find('.content-pane.fit-content').show();
  }

  _getColorPalette() {
    // if we already have the colors, no need to get them again...
    if (this.colors) {
      return;
    }
    this._showFitLoading();

    // we load an image so we can pass it to the colorthief to get the color palette
    let image = new Image();

    image.onload = () => {
      this._onImageLoaded(image);
    };
    image.onerror = this._onImageError.bind(this);

    image.crossOrigin = 'anonymous';

    let paletteUrl = this.imageUrl;

    if (this.imageUrl.indexOf('.unsplash.com') !== -1) {
      let paramPrefix = '?';

      if (this.imageUrl.indexOf('?') !== -1) {
        paramPrefix = '&';
      }

      paletteUrl = this.imageUrl + paramPrefix + 'storymapsCacheBust=' + Date.now();
    }

    image.src = paletteUrl;
  }

  _onImageLoaded(image) {
    // numcolors is the amount of colors to have in our palette. For some reason it is one off...
    // quality ranges from 1-10. 1 is best (looks at every pixel), 10 is worst (looks at every 10th pixel) but is fastest
    let NUM_COLORS = 10;
    let QUALITY = 10;
    let colorThief = new window.ColorThief();

    this.colors = colorThief.getPalette(image, NUM_COLORS, QUALITY);

    if (!this.colors) {
      this._onImageError();
      return;
    }

    this._hideFitLoading();

    this._renderPalette(this._node.find('.fit-palette'));
    this._addPaletteEvents();

    // apply the first color in the palette.
    if (this.placement.fit && !this.placement.fit.color) {
      let firstPaletteColor = this._node.find('.fit-palette-item:first-child');
      this._applyColor(firstPaletteColor.css('background-color'));
      firstPaletteColor.addClass('palette-selected');
    }
  }

  _onImageError() {
    // only show the color picker in this case, not the palette.
    this._node.find('.fit-color-picker').removeClass('not-alone');
    // show a default color
    this._applyColorPickerColor('rgb(0,0,0)');
    this._hideFitLoading();
  }

  _initColorPicker() {
    let hasChangedColor = null;
    let initialColor = null;

    ColorPicker.initPicker({
      element: this.colorPickerTrigger,
      color: this.placement.fit.color,
      appendTo: this._node.find('.fit-color-picker'),
      onShowCallback: function() {
        hasChangedColor = false;
        initialColor = this.placement.fit.color;
      }.bind(this),
      onChangeCallback: function() {
        hasChangedColor = true;
      }.bind(this),
      onHideCallback: function(color) {
        if (hasChangedColor) {
          this._applyColorPickerColor(color);
        }
        else {
          this._applyColorPickerColor(initialColor);
        }
      }.bind(this),
      onMoveCallback: function(color) {
        this._applyColorPickerColor(color);
      }.bind(this)
    });

    this.colorPickerThumbnail.css('background-color', this.placement.fit.color);
  }

  _applyColorPickerColor(colorString) {
    this._applyColor(colorString);

    this.colorPickerThumbnail.css('background-color', colorString);
    this.colorPickerThumbnail.css('visibility', 'visible');
  }

  _renderPalette(container) {
    let storedColor = '';

    if (this.placement.fit && this.placement.fit.color) {
      storedColor = this.placement.fit.color.replace(/ |;/g, '');
    }

    container.empty();

    for (let i = 0; i < this.colors.length; i++) {
      let color = this.colors[i];
      let extraClass = '';
      let colorString = `rgb(${color.join(',')})`;

      // if the currently-selected color is in the palette, show that palette item selected and the color picker chosen color deselected.
      if (colorString === storedColor) {
        extraClass = 'palette-selected';

        this.colorPickerThumbnail.css('visibility', 'hidden');
      }

      container.append(`<li class="fit-palette-item ${extraClass}" style="background-color:${colorString};"></li>`);
    }
  }

  _addPaletteEvents() {
    let paletteItems = this._node.find('.fit-palette-item');
    paletteItems.on('click', event => {
      // grab the color found here.
      let color = $(event.currentTarget).css('background-color');
      this._applyColor(color);
      $(event.currentTarget).addClass('palette-selected');
    });
  }

  _applyColor(color) {
    let paletteItems = this._node.find('.fit-palette-item');
    paletteItems.removeClass('palette-selected');
    this.colorPickerThumbnail.css('visibility', 'hidden');

    this.colorPickerTrigger.spectrum('set', color);

    this.placement.fit = {
      color: color
    };

    this.setConfig('placement', this.placement);
    this._applyResponsivePreview();
  }

  addEvents() {
    let thumbnailContainer = this._node.find('.overview-thumbnail-pane');

    this.checkbox.on('click', () => {
      this._onCheckboxClicked();
    });

    this.previewThumbnail.on('click', event => {
      this._onThumbnailClicked(event);
    });

    this.focusDot.on('mousedown', () => {
      thumbnailContainer.on('mousemove', event => {
        this._onDotDragged(event);
      });
    });

    thumbnailContainer.on('mouseup mouseleave', () => {
      thumbnailContainer.off('mousemove');
    });
  }

  _onCheckboxClicked() {
    let hiddenClass = 'content-hidden';

    if (this.placement.type === 'fill') {
      this._node.find('.section-content[data-mode="fill"]').addClass(hiddenClass);
      this._node.find('.section-content[data-mode="fit"]').removeClass(hiddenClass);
      this.placement.type = 'fit';
    }
    else {
      this._node.find('.section-content[data-mode="fit"]').addClass(hiddenClass);
      this._node.find('.section-content[data-mode="fill"]').removeClass(hiddenClass);
      this.placement.type = 'fill';
    }

    this.setConfig('placement', this.placement);
    this._applyResponsivePreview();
  }

  _applyResponsivePreview() {
    if (this.placement.type === 'fill') {
      let rawItemDimensions = {
        width: this._media.width,
        height: this._media.height
      };

      this.responsivePreview.each((index, element) => {
        let jqElement = $(element);
        let containerDimensions = {
          width: jqElement.width(),
          height: jqElement.height()
        };
        let itemDimensions = Media.getTargetDimensions(rawItemDimensions, containerDimensions);
        let cropDistance = Media.findCropDistance(itemDimensions, jqElement, this.placement.fill);

        jqElement.css('background-position', `${cropDistance.x}px ${cropDistance.y}px`);
      });

      this.responsivePreview.css('background-size', 'cover');

    }
    else {
      this.responsivePreview.css('background-color', this.placement.fit.color);
      this.responsivePreview.css('background-size', 'contain');
      this.responsivePreview.css('background-position', '50% 50%');
    }
  }

  _onThumbnailClicked(event) {
    let fromLeft = event.pageX - this.previewThumbnail.offset().left;
    let fromTop = event.pageY - this.previewThumbnail.offset().top;

    // then we'll transfer that to percentage.
    let ratioLeft = fromLeft / this.previewThumbnail.width();
    let ratioTop = fromTop / this.previewThumbnail.height();

    this._applyCrop(ratioLeft, ratioTop);
  }

  _onDotDragged(event) {
    let fromLeft = event.pageX - this.previewThumbnail.offset().left;
    let fromTop = event.pageY - this.previewThumbnail.offset().top;

    let rightBound = this.previewThumbnail.offset().left + this.previewThumbnail.width();
    let bottomBound = this.previewThumbnail.offset().top + this.previewThumbnail.height();

    // bounds checks
    if (fromLeft < 0) {
      fromLeft = 0;
    }
    if (fromTop < 0) {
      fromTop = 0;
    }
    if (event.pageX > rightBound) {
      fromLeft = this.previewThumbnail.width();
    }
    if (event.pageY > bottomBound) {
      fromTop = this.previewThumbnail.height();
    }

    let ratioLeft = fromLeft / this.previewThumbnail.width();
    let ratioTop = fromTop / this.previewThumbnail.height();

    this._applyCrop(ratioLeft, ratioTop);
  }

  _applyCrop(left, top) {
    let percentLeft = left * 100;
    let percentTop = top * 100;

    this.focusDot.css('left', `${percentLeft}%`);
    this.focusDot.css('top', `${percentTop}%`);

    let fillObj = {x: left, y: top};

    this.placement.fill = fillObj;

    this.setConfig('placement', this.placement);
    this._applyResponsivePreview();
  }

  beforePanelDestroy() {
    // remove the non-selected settings
    if (this.placement.type === 'fill') {
      delete this.placement.fit;
    }
    else {
      delete this.placement.fill;
    }

    this.setConfig('placement', this.placement);
  }

  destroy() {
    super.destroy();

    this.checkbox.off('click');
    this.previewThumbnail.off('click');
    this.focusDot.off('mousedown');
    this.focusDot.off('mouseup mouseleave');
    this._node.find('.fit-palette-item').off('click');

    this._node.find('[data-toggle="tooltip"]').tooltip('destroy');
    this.colorPickerTrigger.spectrum('destroy');
    this._node.closest('.config-content').removeClass('placement-config');

    this.colors = null;
  }
}
