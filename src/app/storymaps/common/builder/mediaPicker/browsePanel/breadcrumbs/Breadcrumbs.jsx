import React from 'react';
import {} from 'lib-build/less!./Breadcrumbs';

function Breadcrumbs(props) {
  var showCrumbs = function() {
    return props.crumbs.map(crumb => {
      var onItemClick = function() {
        props.onClick({
          link: crumb.link
        });
      };

      if (crumb.active) {
        return (
          <li
            key={crumb.id}
            onClick={onItemClick}
            className="active"
          >
            {crumb.title}
          </li>
        );
      }
      else {
        return (
          <li
            key={crumb.id}
            onClick={onItemClick}
          >
            <a>{crumb.title}</a>
          </li>
        );
      }
    });
  };

  return (
    <div className="row flex-static" style={props.crumbs && props.crumbs.length ? null : {display: 'none'}}>
      <ol className="breadcrumb">
        {showCrumbs()}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
