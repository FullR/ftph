"use strict";

var React = require("react"),
	Link  = require("components/utility/link");

var Splash = React.createClass({
	nextScreen: function() {
		if(this.props.user && this.props.user !== "") {
			Link.to("menu");
		}
		else {
			Link.to("login");
		}
	},

	render: function() {
		var user = this.props.user;
		return (
			<img className='splash' onClick={this.nextScreen} src='assets/images/splash.png'/>
		);
	}
});

module.exports = Splash;