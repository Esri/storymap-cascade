import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from 'react-bootstrap';

import TransitionOverlay from './TransitionOverlay';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./Transition';

class Transition extends React.Component {
  constructor() {
    super();

    this.state = {
      shown: false
    };

    this.hidePopover = this.hidePopover.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
    this.onTransitionClick = this.onTransitionClick.bind(this);
  }

  hidePopover() {
    this.setState({
      shown: false
    });
  }

  togglePopover() {
    this.setState({
      shown: !this.state.shown
    });
  }

  onTransitionClick(transitionType) {
    this.hidePopover();
    this.props.callbacks.updateItemTransition(this.props.index, transitionType);
  }

  render() {
    var transitionClass = 'op-transition-button';

    if (this.props.firstItem) {
      return null;
    }
    else {
      return (
        <div className="op-transition-container">
          <Overlay
            trigger="click"
            placement="top"
            rootClose={true}
            show={this.state.shown}
            target={() => ReactDOM.findDOMNode(this.refs.target)}
            onHide={this.hidePopover}
          >
            <TransitionOverlay
              className="op-transition-overlay"
              itemID={this.props.itemID}
              transitions={this.props.transitions}
              transition={this.props.transition}
              onItemClick={this.onTransitionClick}
            />
          </Overlay>
          <div
            ref="target"
            className={transitionClass}
            title={i18n.builder.immersiveViewPanel.chooseTransition}
            onClick={event => {
              this.togglePopover();
              event.stopPropagation();
            }}
          >
            <img className="icon" src={this.props.transition.icon} />
          </div>
        </div>
      );
    }
  }
}

export default Transition;
