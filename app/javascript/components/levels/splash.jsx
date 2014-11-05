"use strict";

var routeMixin = require("../../route-mixin"),
	Link = require("../utility/link.jsx");

var Splash = React.createClass({
	mixins: [routeMixin],

	getDefaultProps: function() {
		return {
			path: "splash"
		};
	},

	render: function() {
		var app = this.props.app;

		var next = function() {
			if(app.get("users").length > 0) {
				this.navigate("menu");
			}
			else {
				this.navigate("login");
			}
		}.bind(this);

		return (
			<div className='splash'>
				splash.jsx

				<button onClick={next}>Next</button>
			</div>
		);
	}
});

module.exports = Splash;