import React from 'react';
import Sortable from 'lib/Sortable/Sortable';
import {} from 'lib/jquery-mousewheel/jquery.mousewheel.min';

import {} from 'lib-build/less!./List';

import BuilderOverviewItem from './item/builderOverview/Item';
import ImmersiveViewItem from './item/immersiveView/Item';

class List extends React.Component {
  constructor() {
    super();

    this.sortableContainersDecorator = this.sortableContainersDecorator.bind(this);
    this.sortableGroupDecorator = this.sortableGroupDecorator.bind(this);
    this.showItems = this.showItems.bind(this);
    this.preventPageScroll = this.preventPageScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.handleHorizontalScroll = this.handleHorizontalScroll.bind(this);

    this.sortableGroupInstance = null;
    this.sortableContainerInstance = null;
    this.listNode = null;
  }

  componentDidMount() {
    this.listNode = $(this.props.container).find('.op-list.group-list')[0];
    // we are using the jquery mousewheel plugin
    $(this.listNode).on('mousewheel', this.onScroll);
  }

  onScroll(e) {
    if (this.props.orientation === 'vertical') {
      // we want the original browser event, not the jquery-mousewheel-ified one.
      this.preventPageScroll(e.originalEvent);
    }
    else {
      this.handleHorizontalScroll(e);
    }
  }

  handleHorizontalScroll(e) {
    let target = $(e.currentTarget);
    let changeX = e.deltaX;
    let changeY = e.deltaY;

    e.preventDefault();
    // if the scrolling is horitontal, scroll horizontally.
    if (Math.abs(changeX) > Math.abs(changeY)) {
      target.scrollLeft(target.scrollLeft() + changeX * e.deltaFactor);
    }
    else {
      // if it is vertical, scroll the list horizontally by the amount it was trying to scroll vertically
      target.scrollLeft(target.scrollLeft() - changeY * e.deltaFactor);
    }
  }

  preventPageScroll(e) {
    /* High-level algorithm from Jon Beebe: http://codepen.io/somethingkindawierd/post/react-mixin-scroll-lock */
    // if the list is scrollable (more content than it has height to show), OR if they are the same (meaning the list isn't tall enough to scroll)

    if (this.listNode.scrollHeight >= this.listNode.clientHeight) {
      if (this.listNode.scrollHeight - this.listNode.scrollTop <= this.listNode.clientHeight) {
        // if going downwards, stop the scroll.
        if (e.deltaY > 0) {
          e.preventDefault();
        }
      }
      // or if at the top of the list and scrolling upwards, stop the scroll.
      if (this.listNode.scrollTop === 0) {
        if (e.deltaY < 0) {
          e.preventDefault();
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    // we only want to update the sortableInstance if the organize property has changed.
    if(prevProps.organize !== this.props.organize) {
      this.sortableGroupInstance.option('disabled', !this.props.organize);
    }
  }

  componentWillUnmount() {
    this.sortableGroupInstance.destroy();
    this.sortableContainerInstance.destroy();
    this.listNode.removeEventListener('wheel', this.preventPageScroll);
  }

  sortableContainersDecorator(backingInstance) {
    var options = null;
    if (backingInstance) {
      options = {};
      this.sortableContainerInstance = Sortable.create(backingInstance, options);
    }
  }

  sortableGroupDecorator(backingInstance) {
    var options = null;
    if (backingInstance) {
      options = {
        disabled: true,
        ghostClass: 'drop-zone',
        chosenClass: 'chosen',
        filter: '.undraggable',
        animation: 300,
        onUpdate: () => {
          // get the order of the points
          var orderArray = this.sortableGroupInstance.toArray();
          this.props.updateOrder(orderArray);
        },
        onMove: event => {
          // if the target node has the class "undraggable", we won't allow it to be dragged over (applies to cover and credits so they can't be reordered)
          if ($(event.related).hasClass('undraggable')) {
            return false;
          }
        }
      };
      this.sortableGroupInstance = Sortable.create(backingInstance, options);
    }
  }

  showItems() {
    var ItemComponent = BuilderOverviewItem;

    if(this.props.orientation === 'horizontal') {
      ItemComponent = ImmersiveViewItem;
    }

    return this.props.items.map((item, index, array) => {
      // we'll want to show the last item a little differently.
      var firstItem = index === 0;
      var lastItem = index === array.length - 1;
      return (
        <ItemComponent
          key={item.id}
          item={item}
          index={index}
          onItemClicked={this.props.changeSelectedItem}
          selected={this.props.selectedItem === item.id}
          callbacks={this.props.callbacks}
          organize={this.props.organize}
          orientation={this.props.orientation}
          firstItem={firstItem}
          lastItem={lastItem}
        />
      );
    });
  }

  render() {
    var className = 'op-list';
    if (this.props.organize) {
      className += ' organize';
    }

    return (
      <div
        className={'group-list ' + className}
        ref={this.sortableGroupDecorator}
      >
        {this.showItems()}
      </div>
    );
  }
}

export default List;
