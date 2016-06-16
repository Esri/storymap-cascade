import { connect } from 'react-redux';

import Providers from './providers/Providers';

var mapStateToProps = function(state) {
  return {
    browseSelectedProvider: state.ui.browseSelectedProvider,
    authorizedMedia: state.ui.authorizedMedia
  };
};

export default connect(
  mapStateToProps
)(Providers);
