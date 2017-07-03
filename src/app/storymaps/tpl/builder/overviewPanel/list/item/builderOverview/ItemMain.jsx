import React from 'react';

import ActionOverlay from './../common/ActionOverlay';

import {} from 'lib-build/less!./../common/ItemMain';
import {} from 'lib-build/less!./ItemMain';

function ItemMain(props) {
  var mainClassName = 'op-item-main builder-overview ' + props.item.size;
  if (props.item.scanResults) {
    if (props.item.scanResults.hasErrors) {
      mainClassName += ' error';
    }
    // only show warning if there are ONLY warnings. If there are warnings AND errors, we'll only show error.
    else if (props.item.scanResults.hasWarnings) {
      mainClassName += ' warning';
    }
  }

  var renderInnerContent = function() {
    if (props.item.showTitleBar) {
      return (
        <div className="title-bar">
          <span className="title">
            <span className={props.item.icon + ' icon'}></span>
            {props.item.title}</span>
        </div>
      );
    }
    else if (props.item.icon) {
      return (
        <span className="item-icon">
          <span className={props.item.icon + ' icon'}></span>
        </span>
      );
    }
    else if (props.item.text) {
      return (
        <div className="text-overlay">
          <p className="item-text">{props.item.text}</p>
        </div>
      );
    }
    else {
      return null;
    }
  };

  var renderLabel = function() {
    if (props.item.label) {
      return (
        <div className="item-label">{props.item.label}</div>
      );
    }
    else {
      return null;
    }
  };

  return (
    <div style={{ backgroundImage: 'url(' + props.item.thumbnail + ')'}} className={mainClassName}>
      {renderInnerContent()}
      {renderLabel()}
      <ActionOverlay
        {...props}
      />
    </div>
  );
}

export default ItemMain;
