import TabIssues from './TabIssues';

import issueItemsTemplate from 'lib-build/hbars!./TabIssueItems';
import {} from 'lib-build/less!./TabIssues';
import {} from 'lib-build/less!./TabIssueItems';
import {} from 'lib-build/less!./Common';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
const text = i18n.builder.mediaErrors.mapIssues;

export default class TabIssuesMap extends TabIssues {
  constructor(params = {}) {
    super(params);
    this._mapEditorEnabled = params.mapEditorEnabled;
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
  }

  render() {
    const layerInfos = this.scanResults.layers.slice().reverse();
    layerInfos.forEach((lyrInfo) => {
      if (lyrInfo.details && lyrInfo.details.title) {
        lyrInfo.lyrTitle = lyrInfo.details.title.replace(/_/g, ' ');
      }
    });

    const itemsTemplate = issueItemsTemplate({
      layers: layerInfos,
      webmapLabel: text.mapLabel + ' ' + this.scanResults.details.title
    });

    return super.render({
      itemsTemplate,
      showDefaultButton: true,
      isMap: true
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

    // adjust arrow visibility and item highlighting on carousel slide
    carousel.on('slide.bs.carousel', function(evt) {
      let nextIndex = parseInt($(evt.relatedTarget).data('slide-to'));

      // adjust arrow visibility
      this.updateCarouselArrows(carousel, this, nextIndex);

      // highlight map or layer
      let thisError = this.scanResults.errors[nextIndex];
      this.highlightFromError(thisError, this);

    }.bind(this));

    this._addFixButtonEvents();
  }

  _addFixButtonEvents() {
    this._node.find('.fix-btn').each((i, btn) => {
      let thisError = this.scanResults.errors[i];
      let fixOptions = this.getFixOptions(thisError);
      let loadGif = $(btn).find('.small-loader');
      $(btn).on('click', () => {
        if (!thisError.actions.length) {
          if (this._mapEditorEnabled) {
            this._onAction('arcgis-edit');
          }
          else {
            this._onAction('arcgis-edit-external');
          }
        }
        else {
          loadGif.removeClass('hidden');
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
}
