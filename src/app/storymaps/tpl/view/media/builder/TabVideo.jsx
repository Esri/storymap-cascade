import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabVideo';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

export default class TabVideo extends Tab {
  constructor() {
    super();

    this.title = i18n.builder.mediaConfig.tabs.appearance;
    this.type = 'appearance';
    this.icon = 'fa-sliders';
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.appearance
    });
  }

  postCreate(params) {
    super.postCreate(params);

    this.bindPlayOptions();
    this.bindAudioOptions();
  }

  bindPlayOptions() {
    let playOptions = this._node.find('.config-item[data-type="play"]');
    let selectedPlayOption = this._media.play || 'automatic';

    this._node.find(`.config-item[data-type="play"][data-value="${selectedPlayOption}"]`).addClass(this.selectedClass);
    playOptions.on('click', e => {
      let target = $(e.currentTarget);
      let playOption = target.data('value');

      playOptions.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
      this.setConfig('play', playOption);
    });
  }

  bindAudioOptions() {
    let audioOptions = this._node.find('.config-item[data-type="audio"]');
    let selectedAudioOption = (this._media.options && this._media.options.audio) || 'on';

    this._node.find(`.config-item[data-type="audio"][data-value="${selectedAudioOption}"]`).addClass(this.selectedClass);
    audioOptions.on('click', e => {
      let target = $(e.currentTarget);
      let audioOption = target.data('value');

      audioOptions.removeClass(this.selectedClass);
      target.addClass(this.selectedClass);
      this.setConfig('audio', audioOption);
    });
  }

  unbindPlayOptions() {
    let playOptions = this._node.find('.config-item[data-type="play"]');
    playOptions.off('click');
  }

  unbindAudioOptions() {
    let audioOptions = this._node.find('.config-item[data-type="audio"]');
    audioOptions.off('click');
  }

  destroy() {
    super.destroy();

    this.unbindPlayOptions();
    this.unbindAudioOptions();
  }
}
