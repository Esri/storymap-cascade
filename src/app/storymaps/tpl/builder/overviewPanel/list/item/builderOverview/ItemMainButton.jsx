import React from 'react';

import ActionOverlay from './../common/ActionOverlay';

import {} from 'lib-build/less!./../common/ItemMain';
import {} from 'lib-build/less!./ItemMainButton';

function ItemMainButton(props) {
  var mainClassName = 'op-item-main item-button ' + props.item.size;
  if (props.item.scanResults && props.item.scanResults.hasErrors) {
    mainClassName += ' error';
  }

  return (
    <div className={mainClassName}>
      <div>{props.item.label}</div>
      <ActionOverlay
        {...props}
      />
    </div>
  );
}

export default ItemMainButton;
