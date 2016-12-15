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
  if (hasErrors) {
    className += ' error';
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
