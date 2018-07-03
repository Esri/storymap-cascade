/* eslint brace-style: 0 */
import React, { Component } from 'react';

import Text from './Text';

import arcgisUtils from 'esri/arcgis/utils';
import Extent from 'esri/geometry/Extent';
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol';

import WebmapView from 'storymaps-react/tpl/view/media/WebMap';

class Webmap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadStarted: false,
      mapLoaded: false
    };
    this.map = null;
  }

  componentDidMount() {
    this.loadMap();
  }

  static isDuplicate(mapInfoA, mapInfoB) {
    const thisLyrLength = mapInfoA.layers ? mapInfoA.layers.length : 0;
    const prevLyrLength = mapInfoB.layers ? mapInfoB.layers.length : 0;
    let allLayersMatch = false, extentsMatch = false, popupsMatch = false;
    if (!thisLyrLength && !prevLyrLength) {
      allLayersMatch = true;
    }
    if (thisLyrLength !== prevLyrLength) {
      allLayersMatch = false;
    }

    if (!mapInfoA.extent && !mapInfoB.extent) {
      extentsMatch = true;
    } else if (!mapInfoA.extent || !mapInfoB.extent) {
      extentsMatch = false;
    } else {
      const extentA = mapInfoA.extent;
      const extentB = mapInfoB.extent;
      extentsMatch = (extentA.xmin === extentB.xmin) &&
                     (extentA.xmax === extentB.xmax) &&
                     (extentA.ymin === extentB.ymin) &&
                     (extentA.ymax === extentB.ymax);
    }

    if (!mapInfoA.popup && !mapInfoB.popup) {
      popupsMatch = true; // neither has a popup
    } else if (!mapInfoA.popup || !mapInfoB.popup) {
      popupsMatch = false; // one has a popup
    } else {
      // they both have popups. do some work to figure out if they're the same.
      const popupA = mapInfoA.popup;
      const popupB = mapInfoB.popup;
      popupsMatch = (popupA.layerId === popupB.layerId) &&
                    (popupA.fieldName === popupB.fieldName) &&
                    (popupA.fieldValue === popupB.fieldValue);
    }

    return allLayersMatch && extentsMatch && popupsMatch;
  }

  loadMap() {
    const webmapInfo = this.props.media;
    let options = {
      usePopupManager: true,
      editable: false,
      bingMapsKey: app.cfg.BING_MAPS_KEY,
      layerMixins: app.data.appProxies || null,
      mapOptions: {
        // we used to specify classic navigation mode here, as polygon feature layers often
        // bled over into adjacent pages, and the bottom left basemap tile also often printed
        // on the following page. See these blocks/gists: c4b6a6dc013fb3a4d310c5a767ec0441
        // and c4b6a6dc013fb3a4d310c5a767ec0441. Also internal jsapi issue 11087. However, it
        // *looks* like Chrome has fixed this problem as of 6/2018? Additionally, here (but not MJ),
        // we had problems with some layers like heatmaps not showing up with classic navigation mode.
        // (and we should probably keep settings like this the same across apps)
        smartNavigation: false
      }
    };

    if (webmapInfo.extent) {
      options.mapOptions.extent = new Extent(webmapInfo.extent);
    }
    this.setState({loadStarted: true});
    arcgisUtils.createMap(webmapInfo.id, this.mapContainer, options).then(response => {
      this.handleMapResponse(response, webmapInfo);
    });
  }

  handleMapResponse(response, webmapInfo) {
    this.setState({mapLoaded: true});
    const map = response.map;
    map.disableScrollWheelZoom();
    map.disableKeyboardNavigation();
    map.reposition();
    map.resize();

    if (webmapInfo.layers && webmapInfo.layers.length) {
      const opLyrs = response.itemInfo.itemData.operationalLayers;
      opLyrs.forEach(opLyr => {
        let visOverride;

        if (opLyr.layerObject) {
          webmapInfo.layers.some(lyr => {
            if (lyr.id === opLyr.layerObject.id) {
              visOverride = lyr.visibility;
              return true;
            }
            return false;
          });
          opLyr.layerObject.setVisibility(visOverride !== undefined ? visOverride : opLyr.visibility);
        } else if (opLyr.featureCollection && opLyr.featureCollection.layers) {
          opLyr.featureCollection.layers.forEach(fcLyr => {
            let fcLyrId = fcLyr.layerObject.id.split('_').slice(0, -1).join('_');
            webmapInfo.layers.some(lyr => {
              if (lyr.id.split('_').slice(0, -1).join('_') === fcLyrId) {
                visOverride = lyr.visibility;
                return true;
              }
              return false;
            });
            fcLyr.layerObject.setVisibility(visOverride !== undefined ? visOverride : opLyr.visibility);
          });
        }

      });
    }

    if (webmapInfo.popup) {
      WebmapView._applyPopupConfiguration(map, webmapInfo.popup);
    }
    if (map.infoWindow) {
      // get rid of *point* marker symbol. lines and polygons will still be highlighted.
      map.infoWindow.markerSymbol = new SimpleMarkerSymbol().setSize(0);
    }
    this.map = map;
  }

  render() {
    const map = this.props.media;
    let wrapperClasses = 'media-wrapper';
    if (map.options.size) {
      wrapperClasses += ` media-${map.options.size}`;
    }
    return (
      <div className={wrapperClasses}>
        <div ref={(node) => {this.mapContainer = node;}} className='map-view'>
          {this.state.loadStarted ? null : <button onClick={()=>this.loadMap()} className="loading">Reload webmap</button>}
        </div>
        {map.caption ? <Text text={map.caption} tag="figcaption" /> : null }
      </div>
    );
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.destroy();
    }
  }
}

export default Webmap;
