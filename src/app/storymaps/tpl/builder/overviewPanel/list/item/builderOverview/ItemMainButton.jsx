import React from 'react';

import ActionOverlay from './../common/ActionOverlay';

import {} from 'lib-build/less!./../common/ItemMain';
import {} from 'lib-build/less!./ItemMainButton';

function ItemMainButton(props) {

  return (
    <div className="op-item-main item-button">
      <div>{props.item.label}</div>
      <ActionOverlay
        {...props}
      />
    </div>
  );
}

export default ItemMainButton;
