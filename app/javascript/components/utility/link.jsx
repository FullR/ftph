"use strict";

var history = require("backbone").history,
	navigate = history.navigate.bind(history);

var Link = React.createClass({
	render: function() {
		var to = this.props.to;

		function go() {
			navigate(to, {trigger: true});
		}

		return (<a onClick={go}>{this.props.children}</a>);
	}
});

module.exports = Link;