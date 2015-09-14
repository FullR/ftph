import React from "react";

const style = {
  position: "relative",
  display: "inline-block",
  verticalAlign: "middle"
};

/*
    Simple default container element
    Meant to be used as an alternative to vanilla div elements
    I find myself using position relative and display inline-block
    far more than position default and display block
*/
class Block extends React.Component {
  render() {
    return (
      <div {...this.props} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;
