import React from 'react';
import List from './list/List';

import {} from 'lib-build/less!./Panel';

var i18nText = {
  organize: 'Organize',
  done: 'Done'
};

function Panel(props) {
  var text = props.organize ? i18nText.done : i18nText.organize;
  var iconClass = 'icon glyphicon';
  var panelClass = 'op-panel';

  if (props.orientation === 'horizontal') {
    panelClass += ' op-style-horizontal';
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
        <span className={iconClass}></span>
        {props.orientation === 'horizontal' ? null : text}
      </div>
    </div>
  );
}

export default Panel;
