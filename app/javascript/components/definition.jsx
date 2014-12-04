"use strict";

var React = require("react"),
	dictionary = require("../dictionary/dictionary");

var Definition = React.createClass({
	render: function() {
		return (<span>{dictionary.get(this.props.word).definition}</span>);
	}
});

module.exports = Definition;