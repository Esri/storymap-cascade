import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

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

  function renderDuplicate(action, className, callback) {
    if (!action) {
      className += ' op-hidden';
    }
    return (
      <OverlayTrigger
        placement="top"
        key={props.item.id}
        overlay={
          <Tooltip id={'transition-tooltip-' + props.item.id}>
            {i18n.builder.builderPanel.duplicate}
          </Tooltip>
        }>
        <span className={className} onClick={callback}></span>
      </OverlayTrigger>
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
        {renderDuplicate(props.item.hasDuplicate, 'action-icon glyphicon glyphicon-duplicate', (e) => {
          props.callbacks.duplicateItem(props.item.id);
          e.stopPropagation();
        })}
      </div>
    );
  }
}

export default ActionOverlay;
