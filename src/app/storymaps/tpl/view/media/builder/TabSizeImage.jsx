import TabSize from './TabSize';

import i18n from 'lib-build/i18n!./../../../../../resources/tpl/builder/nls/app';

import viewTpl from 'lib-build/hbars!./TabSizeImage';
import {} from 'lib-build/less!./Common';

export default class TabSizeImage extends TabSize {
  constructor() {
    super();
  }

  render() {
    return viewTpl({
      strings: i18n.builder.mediaConfig.size
    });
  }
}
