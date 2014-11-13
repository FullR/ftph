"use strict";

var React = require("react");

var Definition = React.createClass({
	render: function() {
		return (<span className='definition'>{this.props.word.definition}</span>);
	}
});

module.exports = Definition;