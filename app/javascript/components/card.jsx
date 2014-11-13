"use strict";

var React = require("react");

var Card = React.createClass({
	render: function() {
		var props = this.props;
		return (
			<div className='card' onClick={props.onClick}>
				{props.children}
			</div>
		);
	}
});

module.exports = Card;