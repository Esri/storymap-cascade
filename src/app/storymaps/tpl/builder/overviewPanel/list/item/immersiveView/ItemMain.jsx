import React from 'react';

import ActionOverlay from './../common/ActionOverlay';

import {} from 'lib-build/less!./../common/ItemMain';
import {} from 'lib-build/less!./ItemMain';

function ItemMain(props) {  
  return (
    <div style={{ backgroundImage: 'url(' + props.item.thumbnail + ')'}} className="op-item-main">
      <ActionOverlay
        {...props}
      />
    </div>
  );
}

export default ItemMain;
