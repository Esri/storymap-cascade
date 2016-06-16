import React from 'react';

import {} from 'lib-build/less!./InlineAdd';

class InlineAdd extends React.Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    };
  }

  render() {
    var inlineAddButton = null;

    // show it if not on org mode
    if (!this.props.organize) {
      inlineAddButton = (
        <span
          className="add-button"
          onClick={() => {
            this.props.addItem(this.props.index);
          }}
        >
          <span className="icon glyphicon glyphicon-plus"></span>
        </span>
      );
    }

    return (
      <div
        className="op-inline-add-container"
        onMouseEnter={() => {
          this.setState({
            hovered: true
          });
        }}
        onMouseLeave={() => {
          this.setState({
            hovered: false
          });
        }}
      >
        {inlineAddButton}
      </div>
    );
  }
}

export default InlineAdd;
