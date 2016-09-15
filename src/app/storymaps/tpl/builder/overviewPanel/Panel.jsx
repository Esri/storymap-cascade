import React from 'react';
import List from './list/List';

import i18n from 'lib-build/i18n!./../../../../resources/tpl/builder/nls/app';

import {} from 'lib-build/less!./Panel';

function Panel(props) {
  var text = props.organize ? i18n.builder.builderPanel.done : i18n.builder.builderPanel.organize;
  var iconClass = 'icon glyphicon';
  var panelClass = 'op-panel';

  if (props.orientation === 'horizontal') {
    panelClass += ' op-style-horizontal';
  }

  if (props.organize) {
    panelClass += ' organize';
  }

  if (props.organize) {
    iconClass += ' glyphicon-ok done';
  }
  else {
    iconClass += ' glyphicon-sort organize';
  }

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
        <div className="organize-toggle-wrapper">
          <span className={iconClass}></span>
          {props.orientation === 'horizontal' ? null : text}
        </div>
      </div>
    </div>
  );
}

export default Panel;
