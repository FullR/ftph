"use strict";

var React = require("react"),
	Link  = require("../utility/link.jsx");

var Splash = React.createClass({
	nextScreen: function() {
		if(this.props.user && this.props.user !== "") {
			console.log("user is defined", this.props.user);
			Link.to("menu");
		}
		else {
			Link.to("login");
		}
	},

	render: function() {
		var user = this.props.user;
		return (
			<div className='splash'>
				<button onClick={this.nextScreen}>Continue</button>
			</div>
		);
	}
});

module.exports = Splash;