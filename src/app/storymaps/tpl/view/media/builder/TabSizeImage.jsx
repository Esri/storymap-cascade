import TabSize from './TabSize';

import viewTpl from 'lib-build/hbars!./TabSizeImage';
import {} from 'lib-build/less!./Common';

export default class TabSizeImage extends TabSize {
  constructor() {
    super();
  }

  render() {
    return viewTpl({});
  }
}
