import TabArcGIS from './TabArcGIS';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import viewTpl from 'lib-build/hbars!./TabWebScene';
//import {} from 'lib-build/less!./TabSize';

export default class TabWebScene extends TabArcGIS {
  constructor(params) {
    super(params);

    this.scene = params.scene;
  }

  setScene(scene) {
    // Contains the Map (scene) and SceneView (view)
    // Called twice during the initialization as the slides are loaded async
    this.scene = scene;

    if (this._node) {
      this.renderSceneSection();
    }
  }

  renderSceneSection() {
    let scene = this.scene.scene;
    let slidesDropdown = this._node.find('.section-content[name="slides"]');
    let noSlidesMessage = this._node.find('.section-content.no-slides');

    if (scene.presentation && scene.presentation.slides && scene.presentation.slides.items && scene.presentation.slides.items.length > 0) {
    // hide if there aren't any, otherwise show.
      let slides = scene.presentation.slides.items;

      noSlidesMessage.hide();
      slidesDropdown.show();

      // append options to the dropdown
      // the first one will be the "home view"
      slidesDropdown.append(`<option class="config-item" data-type="slides" value="-1">${i18n.builder.mediaConfig.appearance.homeView}</option>`);

      for (let i = 0; i < slides.length; i++) {
        slidesDropdown.append(`<option class="config-item" data-type="slides" value="${i}">${slides[i].title.text}</option>`);
      }

      // if there's a selected slide (that's a number greater than or equal to zero), start off with that one selected
      if (this._media.slide >= 0) {
        slidesDropdown.val(this._media.slide);
      }

      // attach events
      slidesDropdown.on('change', event => {
        let indexStr = $(event.currentTarget).val();
        let index = parseInt(indexStr, 10);

        if (!isNaN(index)) {
          this.setMedia('slide', index);
        }
      });
    }
    else {
      slidesDropdown.hide();
      noSlidesMessage.show();
    }
  }

  attachEvents() {
    // If the panel hasn't been opened yet
    if (! this._media) {
      return;
    }

    // TODO on extent change
  }

  postCreate(params) {
    super.postCreate(params);

    if (this.scene) {
      this.renderSceneSection();
    }
  }

  destroy() {
    super.destroy();
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.appearance
    });
  }
}
