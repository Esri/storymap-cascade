import React from 'react';
import InlineAdd from './InlineAdd';
import Transition from './Transition';
import ItemMain from './ItemMain';

import {} from 'lib-build/less!./../common/Item';
import {} from 'lib-build/less!./Item';

class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      showActions: false
    };

    this.renderInlineAdd = this.renderInlineAdd.bind(this);
    this.renderInnerItem = this.renderInnerItem.bind(this);
    this.renderTransition = this.renderTransition.bind(this);
  }

  renderInlineAdd() {
    return (
      <InlineAdd
        organize={this.props.organize}
        lastItem={this.props.lastItem}
        addItem={this.props.callbacks.addItem}
        index={this.props.index}
      />
    );
  }

  renderTransition() {
    return (
      <Transition
        firstItem={this.props.firstItem}
        itemID={this.props.item.id}
        transitions={this.props.item.transitions}
        transition={
          this.props.item.transitions.find((transition) => {
            return transition.id === this.props.item.transition;
          })
        }
        callbacks={this.props.callbacks}
        index={this.props.index}
      />
    );
  }

  renderInnerItem() {
    var className = 'op-item';

    if (this.props.selected) {
      className += ' selected';
    }
    if (!this.props.item.hasOrganize) {
      className += ' undraggable';
    }
    if (this.props.organize) {
      className += ' organize';
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

        onMouseLeave={()=> {
          this.setState({
            showActions: false
          });
        }}

        data-id={this.props.item.id}
      >
        {this.renderTransition()}
        <ItemMain
          showMedia={true}
          showActions={this.state.showActions}
          {...this.props}
        />
      </div>
    );
  }

  render() {
    return (
      <div
        className="op-item-outer"
        data-id={this.props.item.id}
      >
        {this.renderInnerItem()}
        {this.renderInlineAdd()}
      </div>
    );
  }
}

export default Item;
