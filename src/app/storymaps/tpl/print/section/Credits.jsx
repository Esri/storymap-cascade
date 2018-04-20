/* eslint brace-style: 0 */
import React, { Component } from 'react';

import Text from '../media/Text';

import SectionNumber from './SectionNumber';

import {} from 'lib-build/less!../styles/Credits';

class Credits extends Component {

  renderText(textPanel) {
    if (!textPanel || !textPanel.blocks) {
      return null;
    }
    return textPanel.blocks.map((block, i) => {
      if (block.text) {
        return (
          <Text text={block.text.value} key={`credits-${i}`} />
        );
      }
      return null;
    });
  }

  renderCredits(creditsPanel) {
    if (!creditsPanel || !creditsPanel.credits) {
      return null;
    }
    return creditsPanel.credits.map((credit, i) => {
      let creditLink;
      if (credit.link) {
        creditLink = (<div className="credit-link"><a href={credit.link} target="_blank">{credit.source}</a></div>);
      } else {
        creditLink = (<div className="credit-link">{credit.source}</div>);
      }
      return (
        <div className="credit-row" key={`credits-${i}`}>
          <div className="credit-text">{credit.label}</div>
          <div className="credit-pipe"></div>
          {creditLink}
        </div>
      );
    });
  }

  render() {

    const panels = this.props.section.foreground.panels;

    return (
      <div className="credits">
        <SectionNumber num={this.props.index} />
        {this.renderText(panels[0])}
        {this.renderCredits(panels[1])}
      </div>
    );
  }
}

export default Credits;
