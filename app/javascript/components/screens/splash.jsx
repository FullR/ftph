"use strict";

var React = require("react"),
	Link  = require("../utility/link.jsx");

var Splash = React.createClass({
	nextScreen: function() {
		Link.to("login");
	},

	render: function() {
		return (
			<div className='splash'>
				splash.jsx
				<button onClick={this.nextScreen}>Continue</button>
			</div>
		);
	}
});

module.exports = Splash;