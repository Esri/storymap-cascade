import React from 'react';

import {} from 'lib-build/less!./ActionOverlay';

function ActionOverlay(props) {
  function renderAction(action, className, callback) {
    if (!action) {
      className += ' op-hidden';
    }
    return (
      <span className={className} onClick={callback}></span>
    );
  }

  if (!props.showActions) {
    return null;
  }
  else if (!props.item.hasDelete && !props.item.hasDuplicate) {
    return null;
  }
  else {
    return (
      <div className="op-action-overlay">
        {renderAction(props.item.hasDelete, 'action-icon glyphicon glyphicon-remove-circle', (e) => {
          props.callbacks.deleteItem(props.item.id);
          e.stopPropagation();
        })}
        {renderAction(props.item.hasDuplicate, 'action-icon glyphicon glyphicon-duplicate', (e) => {
          props.callbacks.duplicateItem(props.item.id);
          e.stopPropagation();
        })}
      </div>
    );
  }
}

export default ActionOverlay;
