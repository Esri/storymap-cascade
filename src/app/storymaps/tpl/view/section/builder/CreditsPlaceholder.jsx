import SectionCommon from 'storymaps/tpl/view/section/Common';
import UIUtils from 'storymaps/tpl/utils/UI';
import AddMenu from './AddMenu';

import viewTpl from 'lib-build/hbars!./CreditsPlaceholder';
import {} from 'lib-build/less!./CreditsPlaceholder';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class CreditsPlaceholder {
  constructor() {
    this.type = 'credits-placeholder';
    this.id = UIUtils.getUID();

    this._node = null;

    this.scanResults = {
      hasErrors: false,
      hasWarnings: false
    };

    this._addMenu = new AddMenu({
      buttons: ['sequence', 'title', 'immersive']
    });
  }

  render() {
    this._background = SectionCommon.initMedia({
      media: {
        type: 'color',
        color: {
          value: '#777'
        }
      }
    });
    return viewTpl({
      background: SectionCommon.renderBackground({media: this._background}),
      invite: i18n.builder.credits.sectionInvite
    });
  }

  postCreate(sectionContainer) {
    this._node = sectionContainer;
    if (this._background && this._background.postCreate) {
      this._background.postCreate({container: this._node});
    }

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

  getScanResults() {
    return this.scanResults;
  }

  setScanResults(hasErrors, hasWarnings) {
    Object.assign(this.scanResults, {hasErrors}, {hasWarnings});
  }

  addContextSpecificIssues() {
    //
  }
}
