"use strict";

var React = require("react"),
	history = require("backbone").history,
	navigate = history.navigate.bind(history);

var Link = React.createClass({
	render: function() {
		var to = this.props.to;
		this.props.onClick = go;

		function go() {
			navigate(to, {trigger: true});
		}

		return (<a {...this.props}>{this.props.children}</a>);
	}
});

Link.to = function(to) {
	navigate(to, {trigger: true});
};

// Defers the transition until the next event loop
Link.next = function(to) {
	setTimeout(function() {
		navigate(to, {trigger: true});
	}, 0);
};

module.exports = Link;