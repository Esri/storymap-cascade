import React from 'react';
import List from './list/List';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./Panel';

function Panel(props) {
  var text = props.organize ? i18n.builder.builderPanel.done : i18n.builder.builderPanel.organize;
  var iconClass = 'icon glyphicon';
  var wrapperClass = 'organize-toggle-wrapper';
  var panelClass = 'op-panel';

  if (props.orientation === 'horizontal') {
    panelClass += ' op-style-horizontal';
  }

  if (props.organize) {
    panelClass += ' organize';
    wrapperClass += ' btn-bright';
    iconClass += ' glyphicon-ok done';
  }
  else {
    iconClass += ' glyphicon-sort organize';
  }

  let showOverviewText = function() {
    if (props.orientation === 'horizontal' && props.items && props.items.length) {
      let onlyEmptyItem = props.items.length === 1 && props.items[0].mediaType === 'empty';

      if (onlyEmptyItem) {
        return (
          <div className="overview-orientation">
            <div className="overview-orientation-text">
              {i18n.builder.immersiveViewPanel.invite}
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className={panelClass}>
      <List {...props} />
      <div
        className="organize-toggle"
        onClick={() => {
          if (props.organize) {
            props.callbacks.organize(props.order);
          }
          props.toggleOrganize();
        }}>
        <div className={wrapperClass}>
          <span className={iconClass}></span>
          {props.orientation === 'horizontal' ? null : text}
        </div>
      </div>
      {showOverviewText()}
    </div>
  );
}

export default Panel;
