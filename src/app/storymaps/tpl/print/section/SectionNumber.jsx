/* eslint brace-style: 0 */
import React, { Component } from 'react';

import {} from 'lib-build/less!../styles/SectionNumber';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.sections;

class SectionNumber extends Component {

  render() {
    const sectionLabel = text.sectionLabel.replace('${SECTION_NUMBER}', this.props.num);
    return (
      <div className="section-number">{sectionLabel}</div>
    );
  }
}

export default SectionNumber;
