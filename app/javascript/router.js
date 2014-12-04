"use strict";

var Backbone   = require("backbone"),
	React      = require("react"),
	dispatcher = require("dispatcher"),
	store      = require("store"),
	project	   = require("../project"),
	Router     = Backbone.Router,
	outlet     = document.getElementById("outlet");

var screens = {
	splash:        require("components/screens/splash.jsx"),
	login:         require("components/screens/login.jsx"),
	menu:          require("components/screens/menu.jsx"),
	activity:      require("components/screens/activity.jsx"),
	about:         require("components/screens/about.jsx"),
	license:       require("components/screens/license.jsx"),
	otherProducts: require("components/screens/other-products.jsx")
};

var currentScreen = screens.menu,
	screenParams = {};

function setCurrentScreen(screen, params) {
	currentScreen = screen;
	screenParams = params || {};
}

function render() {
	var params = typeof screenParams === "function" ? screenParams() : (screenParams || {});
	React.render(React.createElement(currentScreen, params), outlet);
}

var router = new (Router.extend({
	routes: {
		"menu": "menu",
		"login": "login",
		"activity/:id": "activity",
		"about": "about",
		"license": "license",
		"other-products": "otherProducts",
		"*actions": "splash"
	},

	splash: function() {
		setCurrentScreen(screens.splash, {
			user: store.getModel().user
		});

		render();
	},

	login: function() {
		setCurrentScreen(screens.login, {
			user: store.getModel().user
		});

		render();
	},

	menu: function() {
		setCurrentScreen(screens.menu, function() {
			return store.getModel();
		});

		render();
	},

	activity: function(id) {
		var model = store.getModel(),
			index = (+id)-1,
			activity = model.activities[index],
			attempt = activity.attempts[activity.attempts.length - 1];


		model.previousActivityIndex = index;
		activity.started = true;
		
		store.save();
		require("./controllers")[attempt.attemptType].onShow(attempt);

		setCurrentScreen(screens.activity, {
			id: +id,
			activity: activity
		});

		render();
	},

	about: function() {
		setCurrentScreen(screens.about, project);
		render();
	},

	license: function() {
		setCurrentScreen(screens.license);
		render();
	},

	otherProducts: function() {
		setCurrentScreen(screens.otherProducts);
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