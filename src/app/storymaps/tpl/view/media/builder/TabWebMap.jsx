import TabArcGIS from './TabArcGIS';
import LayerList from 'esri/dijit/LayerList';
import ArcgisUtils from 'esri/arcgis/utils';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import viewTpl from 'lib-build/hbars!./TabWebMap';

export default class TabWebMap extends TabArcGIS {
  constructor(params) {
    super(params);

    this.map = params.map;
    this.layerList = null;

    this._layerListNode = params.layerListNode;
    this._eventExtent = null;
    this._eventPopup = null;
    this._eventPopup2 = null;
    this._isFirstOpening = true;

    //this.addMapEvents = this.addMapEvents.bind(this);
    // may need the original extent and the original layers list... not after all is done... that is too late!
  }

  setMap(map) {
    if (map) {
      this.map = map;
    }

    this.attachEvents();

    if (this._node) {
      this.initLayerList();
    }
  }

  attachEvents() {
    // If the panel hasn't been opened yet
    if (! this._media || ! this.map) {
      return;
    }

    if (! this._eventExtent) {
      this._eventExtent = this.map.map.on('extent-change', function(event) {
        if (! this._isActive) {
          return;
        }

        this.setMedia('extent', event.extent.toJson());
        this._updateLocationReset();
      }.bind(this));
    }

    if (! this._eventPopup) {
      this._eventPopup = this.map.map.on('click', function() {
        if (! this._isActive) {
          return;
        }

        let popupInfo = this.getSelectedFeatureInfo();

        if (popupInfo) {
          let disabledClass = 'disabled';
          let popupButton = this._node.find('.config-item[data-type="reset"][data-value="popup"]');
          // enable the button.
          popupButton.removeClass(disabledClass);
          this.setMedia('popup', popupInfo);
        }
      }.bind(this));
    }

    if (! this._eventPopup2) {
      this._eventPopup2 = $(this.map.map.infoWindow.domNode).find('.titleButton.close').click(function() {
        if (! this._isActive) {
          return;
        }

        let popupButton = this._node.find('.config-item[data-type="reset"][data-value="popup"]');
        popupButton.addClass('disabled');
        this.setMedia('popup', null);
      }.bind(this));
    }
  }

  detachEvents() {
    if (this._eventExtent) {
      this._eventExtent.remove();
      this._eventExtent = null;
    }

    if (this._eventPopup) {
      this._eventPopup.remove();
      this._eventPopup = null;
    }

    if (this._eventPopup2) {
      this._eventPopup2.remove();
      this._eventPopup2 = null;
    }
  }

  initLayerList() {
    if (this.layerList || ! this._rootNode || ! this._media || ! this.map) {
      return;
    }

    // create a node for this!
    this._layerListNode.html('<div class="layer-list"></div>');

    let layerListNode = this._layerListNode.find('.layer-list')[0];
    let disabledClass = 'disabled';
    let layersButton = this._node.find('.config-item[data-type="reset"][data-value="layers"]');

    let layers = ArcgisUtils.getLayerList(this.map);

    // loop through and set visibility to the overrides
    if (this._media.layers) {
      for (let i = 0; i < this._media.layers.length; i++) {
        // see if matches
        let mediaLayer = this._media.layers[i];

        let layerListlayer = layers.find(function(item) {
          let layerId = item.id;

          if (item.layer && item.layer.id) {
            layerId = item.layer.id;
          }

          if (item.featureCollection) {
            layerId = item.featureCollection.layers[0].id;
          }

          return mediaLayer.id === layerId;
        });

        if (layerListlayer) {
          layerListlayer.visibility = mediaLayer.visibility;
        }
      }
    }

    this.layerList = new LayerList({
      map: this.map.map,
      layers: layers,
      showSubLayers: false
    }, layerListNode);

    this.layerList.startup();

    // enable if over 0, disable if under.
    if (this._media.layers && this._media.layers.length > 0) {
      layersButton.removeClass(disabledClass);
    }

    let self = this;
    this.layerList.on('toggle', event => {
      if (! this._isActive) {
        return;
      }

      if (!this._media.layers) {
        this._media.layers = [];
      }
      // see if the layer is already in the list of overridden layers.
      // We need its id, but all we get is the index.
      // find it by the operationalLayer

      let operationalLayer = self.layerList.layers[event.layerIndex];
      // and then see if the layer is in the overrides list
      let index = self._media.layers.findIndex(function(item) {
        let layerId = operationalLayer.id;

        if (item.layer && item.layer.id) {
          layerId = item.layer.id;
        }

        if (operationalLayer.featureCollection) {
          layerId = operationalLayer.featureCollection.layers[0].id;
        }

        return item.id === layerId;
      });

      // if it's in there, remove it. Otherwise add it.
      if (index !== -1) {
        self._media.layers.splice(index, 1);
      }
      else {
        let layerId = operationalLayer.id;

        if (operationalLayer.layer && operationalLayer.layer.id) {
          layerId = operationalLayer.layer.id;
        }

        if (operationalLayer.featureCollection) {
          layerId = operationalLayer.featureCollection.layers[0].id;
        }

        self._media.layers.push({
          id: layerId,
          visibility: operationalLayer.visibility
        });
      }

      // let media know about the changes
      this.onChange();

      if (self._media.layers.length > 0) {
        layersButton.removeClass(disabledClass);
      }
      else {
        layersButton.addClass(disabledClass);
      }
    });
  }

  postCreate(params) {
    this._isFirstOpening = false;

    super.postCreate(params);

    if (this.map) {
      this.initLayerList();
    }

    let disabledClass = 'disabled';
    let locationButton = this._node.find('.config-item[data-type="reset"][data-value="location"]');
    let popupButton = this._node.find('.config-item[data-type="reset"][data-value="popup"]');
    let layersButton = this._node.find('.config-item[data-type="reset"][data-value="layers"]');

    if (this._media.popup) {
      popupButton.removeClass(disabledClass);
    }

    locationButton.on('click', () => {
      this.detachEvents();
      this.setMedia('extent', null);
      this._updateLocationReset();
    });

    popupButton.on('click', () => {
      // disable button
      popupButton.addClass(disabledClass);
      this.setMedia('popup', null);
    });

    layersButton.on('click', () => {
      // to get the layers to be correctly synced, we will destroy the layerList and rebuild it.
      this.layerList.destroy();
      this.layerList = null;

      layersButton.addClass(disabledClass);
      this.setMedia('layers', []);

      this.initLayerList();
    });

    this._updateLocationReset();

    this.attachEvents();

    if (this.map) {
      $(this.map.map.container).addClass('appearance-invite');
    }
  }

  _updateLocationReset() {
    let locationButton = this._node.find('.config-item[data-type="reset"][data-value="location"]');
    locationButton.toggleClass('disabled', ! this._media.extent);
  }

  destroy() {
    super.destroy();

    let locationButton = this._node.find('.config-item[data-type="reset"][data-value="location"]');
    locationButton.off('click');

    if (this.layerList) {
      this.layerList.destroy();
      this.layerList = null;
    }

    if (this.map) {
      $(this.map.map.container).removeClass('appearance-invite');
    }
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.appearance
    });
  }

  getSelectedFeatureInfo() {
    let feature = this.map.map.infoWindow.getSelectedFeature();

    if (! feature) {
      return null;
    }

		/*
		 * The popup's feature is saved through an attribute and it's value
		 * Try to find an object id through type or field name
		 * Default to the first Integer field
		 */

		// TODO should have an error message if not found

    let layer = feature.getLayer();
    let fields = layer.fields;

    if (! fields) {
      return null;
    }

    var objectIdFields;

    if (layer.objectIdField) {
      objectIdFields = [{
        name: layer.objectIdField
      }];
    }
    else {
      objectIdFields = $.grep(fields, field => {
        return field.type === 'esriFieldTypeOID';
      });

      if (layer && fields && !objectIdFields.length) {
        objectIdFields = $.grep(fields, field => {
          return field.name === 'OBJECTID' || field.name === 'FID' || field.name === 'objectId';
        });

        if (!objectIdFields.length) {
          objectIdFields = $.grep(fields, field => {
            return field.type === 'esriFieldTypeInteger';
          });
        }
      }
    }

    if (objectIdFields.length) {
      let fieldName = objectIdFields[0].name;
      return {
        layerId: layer.id,
        fieldName: fieldName,
        fieldValue: feature.attributes[fieldName],
        anchorPoint: this.map.map.infoWindow.location.toJson()
      };
    }

    return null;
  }

  onConfigClose() {
    this._isActive = false;
  }
}
