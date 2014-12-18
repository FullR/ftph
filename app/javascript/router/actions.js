"use strict";

var _        = require("lodash"),
	Bacon    = require("baconjs"),
	Backbone = require("backbone"),
	slice    = [].slice;

Backbone.$ = require("jquery");

function getRouteActions(routes) {
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

	new (Backbone.Router.extend(options.routerOptions));
	return options.actions;
}

Backbone.history.start();
module.exports = getRouteActions(require("router/routes"));