import React from "react";
import Fill from "./fill";

const style = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};

class Overlay extends React.Component {
  render() {
    return (
      <div {...this.props} style={style}>
        <Fill>
          {this.props.children}
        </Fill>
      </div>
    );
  }
}

export default Overlay;