import React from "react";

const style = {
  position: "relative",
  width: "100%",
  height: "100%"
};

class Fill extends React.Component {
  render() {
    return (
      <div {...this.props} style={style}>{this.props.children}</div>
    );
  }
}

export default Fill;