"use strict";

var slice = [].slice,
	Splash = require("./components/levels/splash.jsx"),
	Menu = require("./components/levels/menu.jsx"),
	outlet = $(".outlet").get(0);

function mountComponent(component) {
	return function() {
		React.renderComponent(component.apply(null, arguments), outlet);
	};
}

var router = new (Backbone.Router.extend({
	routes: {
		"splash": "splash",
		"menu": "menu"
	},

	splash: mountComponent(Splash),
	menu:   mountComponent(Menu)
}));

window.navigate = router.navigate.bind(router);

Backbone.history.start();
module.exports = router;