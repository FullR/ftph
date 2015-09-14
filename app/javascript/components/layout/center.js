import React from "react";
import HCenter from "./h-center";
import VCenter from "./v-center";

class Center extends React.Component {
  render() {
    return (
      <VCenter {...this.props}>
        <HCenter>
          {this.props.children}
        </HCenter>
      </VCenter>
    );
  }
}

export default Center;
