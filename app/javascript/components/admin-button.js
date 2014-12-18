"use strict";

var React = require("react");

var AdminButton = React.createClass({
	render: function() {
		return (
			<div className='admin-button' onClick={this.props.onClick}>
				<img className='admin-button-icon' src='assets/images/lock-icon.png'/>
				<span>Admin</span>
			</div>
		);
	}
});

module.exports = AdminButton;