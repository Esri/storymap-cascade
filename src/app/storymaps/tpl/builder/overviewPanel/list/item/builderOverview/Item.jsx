import React from 'react';

import ItemMain from './ItemMain';
import ItemMainButton from './ItemMainButton';

import {} from 'lib-build/less!./../common/Item';

class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      showActions: false
    };

    this.renderInnerItem = this.renderInnerItem.bind(this);
  }

  renderInnerItem() {
    var InnerComponent = ItemMain;
    var className = 'op-item';

    if (this.props.item.style === 'button') {
      InnerComponent = ItemMainButton;
    }

    if (this.props.selected) {
      className += ' selected';
    }
    if (!this.props.item.hasOrganize) {
      className += ' undraggable';
    }
    if (this.props.organize) {
      className += ' organize';
    }
    if (this.props.item.style == 'simple-text') {
      className += ' style-simple-text';
    }

    return (
      <div
        className={className}
        onClick={() => {
          // only do this if not in organize mode
          if (!this.props.organize) {
            this.props.onItemClicked(this.props.item.id);
            this.props.callbacks.selectItem(this.props.item.id);
          }
        }}
        onMouseOver={() => {
          // show actions if not in organize mode and if hovered over.
          if (!this.props.organize) {
            this.setState({
              showActions: true
            });
          }
        }}

        onMouseLeave={() => {
          this.setState({
            showActions: false
          });
        }}

        data-id={this.props.item.id}
      >
        <InnerComponent
          showActions={this.state.showActions}
          {...this.props}
        />
      </div>
    );
  }

  render() {
    return this.renderInnerItem();
  }
}

export default Item;
