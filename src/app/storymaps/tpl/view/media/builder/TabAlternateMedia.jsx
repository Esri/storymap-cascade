import TabBackground from './TabBackground';
import viewTpl from 'lib-build/hbars!./TabAlternateMedia';
import mediaErrorTpl from 'lib-build/hbars!./../MediaError';
import issues from '../../../builder/Issues';
import {} from 'lib-build/less!./Common';
import {} from 'lib-build/less!./TabAlternateMedia';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
const text = i18n.builder.mediaErrors;

export default class TabAlternateMedia extends TabBackground {
  constructor(params) {
    super(params);

    this.title = i18n.builder.mediaConfig.tabs.mobile;
    this.type = 'alternate';
    this.icon = 'fa-mobile-phone fa-lg';
    this.media = params.media;
    this.errorId = params.errorId;
  }

  render() {
    return viewTpl({
      hasError: this.errorId && this.errorId === issues.images.inaccessible,
      errorTemplate: mediaErrorTpl({
        message: text.placeholders.generic
      }),
      errorTooltip: text.contentIssues.altImageBroken,
      strings: i18n.builder.mediaConfig,
      backgroundTpl: super.render()
    });
  }

  postCreate(params) {
    // we want to use the alt media instead of the main media, so we override this param here before we pass it.
    params.media = this.media;

    super.postCreate(params);

    this._node.find('.config-item[data-action="swap"]').on('click', () => {
      this._onAction('alternate-media-swap');
    });

    this._node.find('.config-item[data-action="remove"]').on('click', () => {
      this._onAction('alternate-media-remove');
    });
    this._node.find('[data-toggle="tooltip"]').tooltip();
  }

  destroy() {
    super.destroy();

    this._node.find('.config-item[data-action="swap"]').off('click');
    this._node.find('.config-item[data-action="remove"]').off('click');
    this._node.find('[data-toggle="tooltip"]').tooltip('destroy');
  }
}
