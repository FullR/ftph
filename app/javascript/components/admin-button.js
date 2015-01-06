"use strict";

var React = require("react"),
	Link = require("components/utility/link");

var AdminButton = React.createClass({
	routeToCheck: function() {
		Link.to("admin-check");
	},

	render: function() {
		return (
			<div className='admin-button' onClick={this.routeToCheck}>
				<img className='admin-button-icon' src='assets/images/lock-icon.png'/>
				<span>Admin</span>
			</div>
		);
	}
});

module.exports = AdminButton;