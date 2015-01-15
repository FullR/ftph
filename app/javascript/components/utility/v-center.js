"use strict";

var React = require("react"),
    _     = require("lodash"),
    $     = require("jquery");


/*
    Vertically centers itself in its parent.

    I didn't feel like fighting CSS to get this done
*/
var VCenter = React.createClass({
    getInitialState: function() {
        return {
            eventId: "resize." + _.uniqueId("resize-event-")
        };
    },

    resizeElement: function() {
        var $this = $(this.getDOMNode()),
            $parent = $this.parent();
       
       this.setState({
           eventId: this.state.eventId,
           y: ($parent.height() / 2) - ($this.height() / 2)
       });
    },

    componentDidMount: function() {
        $(window).on(this.state.eventId, this.resizeElement);
        this.resizeElement();
    },

    componentWillUnmount: function() {
        $(window).off(this.state.eventId);
    },

    render: function() {
        var style = {};
        if(typeof this.state.y === "number") {
            style.top = this.state.y;
        }
        return (<div {...this.props} style={style}>{this.props.children}</div>);
    }
});

module.exports = VCenter;