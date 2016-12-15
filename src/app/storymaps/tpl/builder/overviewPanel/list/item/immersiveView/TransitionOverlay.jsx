import React from 'react';
import { Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./TransitionOverlay';

function TransitionOverlay(props) {

  var renderInnerOption = function(transition) {
    var className = 'item btn-gray';
    var selectedIcon = null;

    if (!transition.enabled) {
      // disable and show tooltip.
      className += ' disabled';
    }

    if (props.transition.id === transition.id) {
      className += ' selected';
      selectedIcon = (
        <span className="icon">
          <span className="glyphicon glyphicon-ok"></span>
        </span>
      );
    }

    return (
      <li
        key={transition.id}
        className={className}
        onClick={() => {
          // if the item is disabled, don't allow the click to call the callback.
          if(transition.enabled) {
            props.onItemClick(transition.id);
          }
        }}
      >
        {selectedIcon}
        {transition.label}
      </li>
    );
  };

  var renderOptions = function() {
    return props.transitions.map((transition) => {
      if (!transition.enabled) {
        // disable and show tooltip.
        return (
          <OverlayTrigger
            placement="left"
            key={transition.id}
            overlay={
              <Tooltip id={'transition-tooltip-' + props.itemID + '-' + transition.id}>
                {transition.tooltip}
              </Tooltip>
            }>
            {renderInnerOption(transition)}
          </OverlayTrigger>
        );
      }
      else {
        return renderInnerOption(transition);
      }
    });
  };

  // remove the props that shouldn't be passed through.
  let thruProps = Object.assign({}, props);
  delete thruProps.transitions;
  delete thruProps.transition;
  delete thruProps.onItemClick;

  return (
    <Popover
      {...thruProps}
      id={'transition-popover-' + props.itemID}
      placement="top"
    >
      <h6 className="title">{i18n.builder.immersiveViewPanel.transition}</h6>
      <ul className="list">
        {renderOptions()}
      </ul>
    </Popover>
  );
}

export default TransitionOverlay;
