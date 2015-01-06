"use strict";

var _      = require("lodash"),
	Bacon  = require("baconjs"),
	Router = require("ampersand-router"),
	slice  = [].slice;

function getRouteActions(routes) {
	var router;
	var options = _.transform(routes, function(options, actionName, slug) {
		var action = (options.actions[actionName] = new Bacon.Bus());
		options.routerOptions.routes[slug] = actionName;
		options.routerOptions[actionName] = function() {
			var params = slice.call(arguments);
			action.push(params);
		};
	}, {
		actions: {},
		routerOptions: {
			routes: {}
		}
	});

	router = new (Router.extend(options.routerOptions));
	options.actions.history = router.history;
	options.actions.start = router.history.start.bind(router.history);

	return options.actions;
}

module.exports = getRouteActions(require("router/routes"));