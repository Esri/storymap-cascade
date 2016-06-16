import { connect } from 'react-redux';
import * as actions from './actions';

import Panel from './Panel';

var mapStateToProps = function(state) {
  return {
    items: state.items,
    organize: state.organize,
    selectedItem: state.selectedItem,
    order: state.order
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    toggleOrganize: function() {
      dispatch(actions.toggleOrganize());
    },
    changeSelectedItem: function(itemID) {
      dispatch(actions.changeSelectedItem(itemID));
    },
    updateOrder: function(order) {
      dispatch(actions.updateOrder(order));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
