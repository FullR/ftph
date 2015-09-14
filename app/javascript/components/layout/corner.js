import React from "react";

/* 
    A corner positioned element

    props:
        corner: top left, top right, bottom left, or bottom right
        vDistance: distance from the top or bottom
        hDistance: distance from the left or right
        distance: shorthand for both vDistance and hDistance
*/
class Corner extends React.Component {
  render() {
    const {corner, distance} = this.props;
    let {vDistance, hDistance} = this.props;
    const style = {
      position: "absolute"
    };
    vDistance = vDistance || distance;
    hDistance = hDistance || distance;

    if(corner === "top left") {
      style.top = vDistance;
      style.left = hDistance;
    } else if(corner === "top right") {
      style.top = vDistance;
      style.right = hDistance;
    } else if(corner === "bottom right") {
      style.bottom = vDistance;
      style.right = hDistance;
    } else if(corner === "bottom left") {
      style.bottom = vDistance;
      style.left = hDistance;
    }

    return (
      <div {...this.props} style={style}>{this.props.children}</div>
    );
  }
}

Corner.defaultProps = {
  corner: "top left",
  distance: 0
}

export default Corner;
