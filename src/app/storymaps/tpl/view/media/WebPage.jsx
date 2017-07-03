import Media from './Media';

import {} from 'lib-build/less!./WebPage';
import viewBlock from 'lib-build/hbars!./WebPageBlock';
import viewBackground from 'lib-build/hbars!./WebPageBackground';

import i18n from 'lib-build/i18n!resources/tpl/viewer/nls/app';

import Deferred from 'dojo/Deferred';

import UIUtils from 'storymaps/tpl/utils/UI';

const PREVIEW_THUMB = 'resources/tpl/builder/icons/media-placeholder/webpage.png';
const PREVIEW_ICON = 'resources/tpl/builder/icons/immersive-panel/webpage.png';

export default class WebPage extends Media {
  constructor(webpage) {
    super({
      type: 'webpage',
      id: webpage.url,
      previewThumb: PREVIEW_THUMB,
      previewIcon: PREVIEW_ICON
    });

    this._webpage = webpage;
    this._url = webpage.url;

    this._nodeMedia = null;
    this._placement = null;

    // TODO: shouldn't be needed
    if (! this._webpage.options) {
      this._webpage.options = {
        interaction: 'enabled'
      };
    }
  }

  getNode() {
    return this._node;
  }

  render(context) {
    var output = '';

    if (! this._webpage || ! context) {
      console.log('Could not render webpage in section');
      return output;
    }

    this._placement = context.placement;

    if (this._placement == 'block') {
      output += viewBlock({
        id: this._domID,
        url: this._url,
        caption: this._webpage.caption,
        placeholder: i18n.viewer.media.captionPlaceholder,
        captionEditable: app.isInBuilder,
        labelExploreStart: i18n.viewer.media.explore,
        labelExploreStop: i18n.viewer.media.exploreStop,
        isMobile: app.isMobileView || UIUtils.isMobileBrowser()
      });
    }
    else if (context.placement == 'background') {
      var optClass = '';

      output += viewBackground({
        id: this._domID,
        url: this._url,
        classes: 'webpage-container' + optClass,
        labelExploreStart: i18n.viewer.media.explore,
        labelExploreStop: i18n.viewer.media.exploreStop
      });
    }

    return output;
  }

  postCreate(params = {}) {
    super.postCreate(params);

    if (! params.container) {
      return;
    }

    if (this._placement == 'block') {
      this._node = params.container.find('#' + this._domID);
      this._nodeMedia = this._node.find('iframe');
      if (this._webpage.height) {
        var fig = this._node.find('.block-media');
        if (fig[0].getBoundingClientRect().height > this._webpage.height) {
          fig.css('padding-top', this._webpage.height);
        }
      }
    }
    else {
      this._nodeMedia = params.container.find('.webpage[data-src="' + this._url + '"]');
      this._node = this._nodeMedia.parents('.background').eq(0);
    }

    this._applyConfig();
  }

  _applyConfig() {
    var options = this._webpage.options;

    super._applyConfig(options);

    let interaction = this._webpage.options.interaction;

    if (app.isMobileView || UIUtils.isMobileBrowser()) {
      interaction = 'button';
    }

    // TODO: duplicate between map/scene/page should be in Media
    //  store an object for options or always use _media.options???
    if (this._webpage.options.interaction) {
      let classes = $.map(this._node.attr('class').split(' '), function(l) {
        return l.match(/interaction-/) ? l : null;
      }).join(' ');

      this._node
        .removeClass(classes)
        .addClass('interaction-' + interaction);
    }
  }

  load() {
    var resultDeferred = new Deferred();

    if (! this._nodeMedia || this._isLoaded) {
      //resultDeferred.reject();
      return resultDeferred;
    }

    this._isLoaded = true;

    this._nodeMedia.parent('.webpage-container').addClass('initialized');

    this._nodeMedia
      .attr('src', this._nodeMedia.data('src'))
      .load(function() {
        this._fadeInMedia();
      }.bind(this));
    this._node.find('.interaction-container').click(this._onEnableButtonClick.bind(this));

    this._node.on('mouseup touchstart', function() {
      this._node.addClass('scroll-off');
    }.bind(this));

    this._node.on('mousedown touchend', function() {
      this._node.removeClass('scroll-off');
    }.bind(this));

    this._node.mouseleave(function() {
      this._node.addClass('scroll-off');
    }.bind(this));

    this._nodeMedia.mouseleave(function() {
      this._node.addClass('scroll-off');
    }.bind(this));

    resultDeferred.resolve();

    return resultDeferred;
  }

  performAction(params) {
    if (! params || ! params.viewIndex || ! params.isActive) {
      return;
    }

    try {
      this._nodeMedia[0].contentWindow.performCascadeAction(params);
    }
    catch (e) {
      //
    }
  }

  resize() {
    //
  }
}
