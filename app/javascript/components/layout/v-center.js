import React from "react";

const style = {
  height: "100%"
};

const wrapperStyle = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  "-webkitTransform": "translateY(-50%)"
};

/*
    Vertically fills its container and vertically
    centers its children
*/
class VCenter extends React.Component {
  render() {
    return (
      <div {...this.props} style={style}>
        <div style={wrapperStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default VCenter;
