"use strict";

var Backbone   = require("backbone"),
	React      = require("react"),
	dispatcher = require("./dispatcher"),
	store      = require("./store"),
	Router     = Backbone.Router,
	outlet     = document.getElementById("outlet");

var screens = {
	splash: require("./components/screens/splash.jsx"),
	login: require("./components/screens/login.jsx"),
	menu: require("./components/screens/menu.jsx"),
	activity: require("./components/screens/activity.jsx")
};

var currentScreen = screens.menu,
	screenParams = {};

function setCurrentScreen(screen, params) {
	currentScreen = screen;
	screenParams = params || {};
}

function render() {
	React.render(React.createElement(currentScreen, screenParams || {}), outlet);
}

var router = new (Router.extend({
	routes: {
		"menu": "menu",
		"login": "login",
		"activity/:id": "activity",
		"*actions": "splash"
	},

	splash: function() {
		setCurrentScreen(screens.splash, {
			user: store.getModel().getUser()
		});

		render();
	},

	login: function() {
		setCurrentScreen(screens.login, {
			user: store.getModel().getUser()
		});

		render();
	},

	menu: function() {
		setCurrentScreen(screens.menu, store.getModel());

		render();
	},

	activity: function(id) {
		var activity = store.getModel().getActivity(id),
			attempt = activity.attempts[activity.attempts.length - 1];

		require("./controllers")[attempt.attemptType].onShow(attempt);

		setCurrentScreen(screens.activity, {
			id: +id,
			activity: activity
		});

		render();
	}
}));

// rerender whenever actions are fired
dispatcher.listen(render);

module.exports = {
	start: function() {
		Backbone.history.start();
	}
};