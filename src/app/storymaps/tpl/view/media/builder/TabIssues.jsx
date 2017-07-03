import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabIssues';
import {} from 'lib-build/less!./TabIssues';
import {} from 'lib-build/less!./Common';
import issues from '../../../builder/Issues';

import BuilderHelper from 'storymaps/common/builder/BuilderHelper';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
const text = i18n.builder.mediaErrors.mapIssues;
const helpLinks = app.cfg.BUILDER_LINKS.issueHelps;

export default class TabIssues extends Tab {
  constructor(params = {}) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.issues;
    this.type = 'issues';
    this.icon = 'fa-exclamation-triangle';

    this.scanResults = params.scanResults;
    this.errorIds = params.errorIds;
    // this tab always has an error
    this.showErrors = true;
    if (params.map) {
      this.setMap(params.map);
    }
  }

  setMap(map) {
    // TODO: do we really need the whole map here?
    // we need the map node id for a unique carousel id,
    // and we need the map owner, but doesn't that now return
    // with the scanResults.details.owner?
    if (map) {
      this.map = map;
      this.mapItem = this.map.itemInfo.item;
    }
    if (this._node) {
      this.updateCarouselId();
    }
  }

  getCarouselId() {
    var mapNodeId = this.map.map.root.id;
    if (!mapNodeId) {
      console.warn('No map root', this.map.map);
      return;
    }
    return mapNodeId.replace('.', '') + '_carousel';
  }

  updateCarouselId() {
    const carouselId = this.getCarouselId();

    this._node.find('.issue-summary-wrapper.carousel')
              .prop('id', carouselId);
    this._node.find('.carousel-indicators li').data('target', '#' + carouselId);
    this._node.find('.carousel-inner .item').data('target', '#' + carouselId);
    this._node.find('.carousel-control').attr('href', '#' + carouselId);

  }

  render() {
    if (!this.scanResults || !this.scanResults.hasErrors || !this.errorIds || !this.errorIds.length) {
      console.warn('render without errors', this.scanResults, this.errorIds);
      return;
    }
    let errorMsgs = this.getErrorMessages();
    let layerInfos = this.scanResults.layers.slice().reverse();
    layerInfos.forEach((lyrInfo) => {
      if (lyrInfo.details && lyrInfo.details.title) {
        lyrInfo.lyrTitle = lyrInfo.details.title.replace(/_/g, ' ');
      }
    });
    return viewTpl({
      errorMsgs: errorMsgs,
      needsCarousel: errorMsgs.length > 1,
      carouselId: this.getCarouselId(),
      layers: layerInfos,
      webmapLabel: text.mapLabel + ' ' + this.scanResults.details.title
    });
  }

  getErrorMessages() {
    return this.errorIds.map((errId, i) => {
      let banner, tooltip, button, description, helpLink;
      if (errId === issues.maps.unshared || errId === issues.layers.unshared || errId === issues.content.unshared) {
        banner = text.summaries.unshared;
        description = text.descriptions.unshared;
        tooltip = text.tooltips.unshared;
        button = text.fixButtons.share;
        helpLink = helpLinks.unshared;
      }
      else if (errId === issues.maps.othersUnshared || errId === issues.layers.othersUnshared || errId === issues.content.othersUnshared) {
        banner = text.summaries.othersUnshared;
        description = text.descriptions.othersUnshared;
        tooltip = text.tooltips.othersUnshared;
        button = text.fixButtons.help;
        helpLink = helpLinks.othersUnshared;
      }
      else if (errId === issues.layers.deleted) {
        banner = text.summaries.deleted;
        description = text.descriptions.descriptions;
        tooltip = text.tooltips.deleted;
        button = text.fixButtons.remove;
        helpLink = helpLinks.deleted;
      }
      else if (errId === issues.layers.inaccessible) {
        banner = text.summaries.inaccessible;
        description = text.descriptions.inaccessible;
        tooltip = text.tooltips.inaccessible;
        button = text.fixButtons.remove;
        helpLink = helpLinks.inaccessible;
      }
      else if (errId === issues.layers.unauthorized) {
        banner = text.summaries.unauthorized;
        description = text.descriptions.unauthorized;
        tooltip = text.tooltips.unauthorized;
        button = text.fixButtons.remove;
        helpLink = helpLinks.unauthorized;
      }
      else if (errId === issues.layers.premiumContent) {
        banner = text.summaries.premiumContent;
        description = text.descriptions.premiumContent;
        tooltip = text.tooltips.premiumContent;
        button = text.fixButtons.authorize;
        helpLink = helpLinks.premiumContent;
      }
      else if (errId === issues.layers.subscriptionContent) {
        banner = text.summaries.subscriptionContent;
        description = text.descriptions.subscriptionContent;
        tooltip = text.tooltips.subscriptionContent;
        button = text.fixButtons.authorize;
        helpLink = helpLinks.subscriptionContent;
      }
      else if (errId === issues.layers.secureService) {
        banner = text.summaries.secureContent;
        description = text.descriptions.secureContent;
        tooltip = text.tooltips.secureService;
        button = text.fixButtons.authorize;
        helpLink = helpLinks.secureContent;
      }
      else {
        banner = text.summaries.uncaught;
        description = text.descriptions.uncaught;
        tooltip = text.tooltips.uncaught;
        button = text.fixButtons.edit;
        helpLink = helpLinks.edit;
      }

      let fullError = this.scanResults.errors[i];
      if (fullError && !fullError.actions.length) {
        button = text.fixButtons.edit;
      }

      return {
        index: i,
        banner,
        description,
        tooltip,
        button,
        helpLink
      };
    });
  }

  postCreate(params) {
    super.postCreate(params);
    this.displayErrors();

    this.highlightFromError(this.scanResults.errors[0]);

    // activate tooltips
    let tooltips = this._node.find('.fix-tooltip');
    tooltips.tooltip({
      container: this._node
    });
    tooltips.on('click', function() {
      const link = $(this).data('link');
      if (link) {
        window.open(link, '_blank');
      }
    });

    let carousel = this._node.find('.carousel');
    carousel.find('.carousel-control.left').addClass('hidden');

    // activate first issue
    carousel.find('.item').eq(0).addClass('active');
    carousel.find('.carousel-indicators li').eq(0).addClass('active');

    var self = this;

    // adjust arrow visibility and item highlighting on carousel slide
    carousel.on('slide.bs.carousel', function(evt) {
      let nextIndex = parseInt($(evt.relatedTarget).data('slide-to'));

      // adjust arrow visibility
      self.updateCarouselArrows(carousel, self, nextIndex);

      // highlight map or layer
      let thisError = self.scanResults.errors[nextIndex];
      self.highlightFromError(thisError, self);

    });

    // attach button events
    this._node.find('.fix-btn').each((i, btn) => {
      let thisError = self.scanResults.errors[i];
      let fixOptions = this.getFixOptions(thisError);
      let loadGif = $(btn).find('.small-loader');
      $(btn).on('click', () => {
        loadGif.removeClass('hidden');
        if (!thisError.actions.length) {
          window.open(BuilderHelper.getMapViewerLink(this._media.id), '_blank');
        }
        else {
          thisError.actions.forEach(action => {
            action.fix(fixOptions).then(() => {
              loadGif.addClass('hidden');
            });
          });
        }
      });
    });

  }

  displayErrors() {
    this._node.find('.webmap-info').toggleClass('error', this.mapHasError());

    var layersList = this._node.find('.layers-info');
    var layersWithErrors = this.getLayersWithErrors();

    this.scanResults.layers.forEach((lyr) => {
      var hasError = layersWithErrors.indexOf(lyr.id) >= 0;
      layersList.find('[data-lyr-id="' + lyr.id + '"]').toggleClass('error', hasError);
    });
  }

  updateCarouselArrows(carousel, self, nextIndex) {
    carousel.find('.carousel-control').removeClass('hidden');
    if (nextIndex === 0) {
      carousel.find('.carousel-control.left').addClass('hidden');
    }
    else if ((nextIndex + 1) === self.scanResults.errors.length) {
      carousel.find('.carousel-control.right').addClass('hidden');
    }
  }

  highlightFromError(err, self) {
    self = self || this;
    let webmapDiv = this._node.find('.webmap-info');
    let layerDivs = this._node.find('.layers-info .layer');

    webmapDiv.add(layerDivs).removeClass('highlight');

    if (err.mediaType === 'map' || err.mediaType === 'content') {
      webmapDiv.addClass('highlight');
    }
    if (err.mediaType === 'layer' || err.mediaType === 'content') {
      let layersArr = self.getLayersFromError(err);
      layerDivs.filter(function(i, div) {
        let lyrId = $(div).data('lyr-id');
        if (!lyrId) {
          return false;
        }
        return layersArr.indexOf(lyrId) >= 0;
      }).addClass('highlight');
    }
  }

  getLayersWithErrors() {
    var arrArrs = this.scanResults.errors.map(this.getLayersFromError);
    return arrArrs.reduce(function(a, b) {
      return a.concat(b);
    });
  }

  getLayersFromError(err) {
    let layerIds = [];
    if ((err.mediaType !== 'layer' && err.mediaType !== 'content') || !err.layers || !err.layers.length) {
      return [];
    }
    err.layers.forEach((lyr) => {
      layerIds.push(lyr.id);
    });
    return layerIds;
  }

  mapHasError() {
    return this.scanResults.errors.some(err => {
      return err.mediaType === 'map' || err.mediaType === 'content';
    });
  }

  getFixOptions(error) {
    var items = [], mapArr = [], layersArr = [];
    if (error.mediaType === 'map' || error.mediaType === 'content') {
      mapArr = [{
        id: this._media.id,
        owner: this.mapItem.owner
      }];
      items = mapArr;
    }
    if (error.mediaType === 'layer' || error.mediaType === 'content') {
      layersArr = error.layers.map(lyrInfo => {
        return {
          id: lyrInfo.id,
          url: lyrInfo.details.url,
          owner: lyrInfo.details.owner
        };
      });
      items = layersArr;
    }
    if (error.mediaType === 'content') {
      // at this point, items should === layersArr, from the above if.
      items = items.concat(mapArr);
    }
    if (!items.length) {
      console.warn('HOW DID I GET HERE?!?!?', error);
    }

    var details = {
      sharingLevel: app.data.appItem.item.access
    };
    return {items, details};
  }

  destroy() {
    super.destroy();
  }
}
