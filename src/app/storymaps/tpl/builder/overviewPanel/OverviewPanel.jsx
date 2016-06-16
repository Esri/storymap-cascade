import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import * as actions from './actions';

import PanelContainer from './PanelContainer';

export default function(container, orientation, items, callbacks) {
  var initialState = {
    selectedItem: items.length ? items[0].id : '',
    items: items,
    organize: false,
    order: items.map(item => {
      return item.id;
    })
  };

  var store = createStore(reducer, initialState);

  ReactDOM.render(
    <Provider store={store}>
      <PanelContainer
        callbacks={callbacks}
        orientation={orientation}
        container={container}
      />
    </Provider>,
    container
  );

  this.updateItems = function(items) {
    store.dispatch(actions.updateItems(items));

    let order = items.map(item => {
      return item.id;
    });
    store.dispatch(actions.updateOrder(order));
  };

  this.navigateTo = function(itemID) {
    store.dispatch(actions.changeSelectedItem(itemID));
    var list = $(container).find('.group-list');
    var item = list.find('[data-id="' + itemID + '"]');

    if (list.length && item.length) {
      scrollPanel(list, item);
    }
  };

  function scrollPanel(list, item) {
    //scroll to the selected item so that it's in the middle of the list's visible area.
    const SCROLL_DURATION = 500;
    const SCROLL_DURATION_HORIZONTAL = 800;
    var scrollAmount = 0;
    var centeredPosition = 0;
    var halfItemWidth = 0;
    var halfListWidth = 0;
    var halfItemHeight = 0;
    var halfListHeight = 0;
    var scrollToLeft = 0;
    var scrollToTop = 0;

    if (orientation === 'horizontal') {
      // get half of item width
      halfItemWidth = item[0].offsetWidth / 2;
      // get half of list width
      halfListWidth = list[0].offsetWidth / 2;
      // centeredPosition is the amount from the top of the visible list to perfectly center an item
      centeredPosition = halfListWidth - halfItemWidth;
      // to position the item at the left, we just have to minus how far the list is from the left of the document compared to how far the item is from the document's left
      scrollToLeft = item.offset().left - (list.offset().left - list.scrollLeft());
      // in our case, we don't want to scroll that far... we want to center the item.
      scrollAmount = scrollToLeft - centeredPosition;

      // if scrollAmount is negative, pass 0 instead of a negative value.
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }

      list.animate({
        scrollLeft: scrollAmount
      }, SCROLL_DURATION_HORIZONTAL);
    }
    else {
      // get half of item height
      halfItemHeight = item[0].offsetHeight / 2;
      // get half of list height
      halfListHeight = list[0].offsetHeight / 2;
      // centeredPosition is the amount from the top of the visible list to perfectly center an item
      centeredPosition = halfListHeight - halfItemHeight;
      // to position the item at the top, we just have to minus how far the list is from the top of the document compared to how far the item is from the document's top
      scrollToTop = item.offset().top - (list.offset().top - list.scrollTop());
      // in our case, we don't want to scroll that far... we want to center the item.
      scrollAmount = scrollToTop - centeredPosition;

      // if scrollAmount is negative, pass 0 instead of a negative value.
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }

      list.animate({
        scrollTop: scrollAmount
      }, SCROLL_DURATION);
    }
  }
}
