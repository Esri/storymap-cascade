import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';
import AddMenu from './AddMenu';

import viewTpl from 'lib-build/hbars!./CreditsPlaceholder';
import {} from 'lib-build/less!./CreditsPlaceholder';

export default class CreditsPlaceholder {
  constructor() {
    this.type = 'credits-placeholder';
    this.id = UIUtils.getUID();

    this._node = null;

    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
  }

  render() {
    return viewTpl({
      background: SectionCommon.renderBackground({
        media: SectionCommon.initMedia({
          type: 'color',
          color: {
            value: '#777'
          }
        })
      })
    });
  }

  postCreate(sectionContainer) {
    this._node = sectionContainer;

    this._addMenu.postCreate({
      container: this._node.find('.builder-section-add-menu'),
      sectionContainer: this._node
    });

    this._node.find('.btn-add-credits').click(this._onClickAddCredits.bind(this));
  }

  resize() {
    //
  }

  onScroll() {
    //
  }

  serialize() {
    return null;
  }

  getArcGISContent() {
    return [];
  }

  setVisibility(visibility) {
    this._node.toggleClass('hidden', ! visibility);
  }

  _onClickAddCredits() {
    app.Controller.addSection({
      type: 'credits',
      index: this._node.index()
    });
  }
}
