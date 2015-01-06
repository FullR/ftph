"use strict";

var React = require("react");

var WebLink = React.createClass({
	render: function() {
		this.props.target = "_blank";
		return (<a {...this.props}>{this.props.children}</a>);
	}
});

module.exports = WebLink;