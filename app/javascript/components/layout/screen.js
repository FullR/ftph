import React from "react";
import Fill from "./fill";
/*
  Used to specifically denote a full screen element.

  Currently no different than fill, but needed functionallity could be added later
*/
class Screen extends React.Component {
  render() {
    return (
      <Fill {...this.props}>{this.props.children}</Fill>
    );
  }
}

export default Screen;