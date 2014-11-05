"use strict";

var Route    = require("./route.jsx"),
	Link     = require("./utility/link.jsx"),
	Splash   = require("./levels/splash.jsx"),
	Login    = require("./levels/login.jsx"),
	Menu     = require("./levels/menu.jsx"),
	Activity = require("./levels/activities/activity.jsx"),
	Loading  = require("./levels/loading.jsx");

var Application = React.createClass({
	getInitialState: function() {
		return require("../storage");
	},

	render: function() {

		return (
			<div className='app'>Application.jsx</div>
		);
	}
});

module.exports = Application;