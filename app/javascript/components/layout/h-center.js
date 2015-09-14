import React from "react";

const style = {
  width: "100%",
  textAlign: "center",
  verticalAlign: "middle"
};

/*
    Horizontally fills container and horizontally
    centers children

    Note: children must be styled with "position: inline-block"
*/
class HCenter extends React.Component {
  render() {
    return (
      <div {...this.props} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default HCenter;
