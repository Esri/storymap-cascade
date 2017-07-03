import React from 'react';

import ActionOverlay from './../common/ActionOverlay';

import {} from 'lib-build/less!./../common/ItemMain';
import {} from 'lib-build/less!./ItemMain';

function ItemMain(props) {
  var className = 'op-item-main';
  const srArr = props.item.scanResults || [];
  const hasErrors = srArr.some(sr => {
    return sr.hasErrors;
  });
  const hasWarnings = srArr.some(sr => {
    return sr.hasWarnings;
  });
  if (hasErrors) {
    className += ' error';
  }
  else if (hasWarnings) {
    className += ' warning';
  }
  return (
    <div style={{ backgroundImage: 'url(' + props.item.thumbnail + ')'}} className={className}>
      <ActionOverlay
        {...props}
      />
    </div>
  );
}

export default ItemMain;
