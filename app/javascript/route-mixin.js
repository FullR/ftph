"use strict";

var Backbone          = require("backbone"),
	history           = Backbone.history,
	_ 		          = require("underscore"),
	routeToRegExp     = Backbone.Router.prototype._routeToRegExp,
	extractParameters = Backbone.Router.prototype._extractParameters;

var router = new (Backbone.Router.extend({
	routes: {"*actions": "change"},
	change: function() {}
}));

history.start();

// avoid re-generating regular expressions when possible
var getRegex = _.memoize(function(path) {
	return routeToRegExp(path);
});

function routeMatches(route, fragment) {
	var regExp
	if(!route.props || !route.props.path) {
		return false;
	}

	regExp = getRegex(route.props.path);
	if(fragment.match(regExp)) {
		return extractParameters(regExp, fragment);
	}
}

var routeMixin = {
	getDefaultProps: function() {
		return {
			_isRoute: true
		};
	},

	navigate: function(to) {
		history.navigate(to, {trigger: true});
	},

	routedChildren: function() {
		var props = this.props,
			children = props.children,
			fragment = history.fragment,
			params,
			defaultRoute,
			matchingRoute,
			renderedChildren;

		if(!children  || typeof children === "string") {
			return children;
		}

		history.once("route", function() {
			this.forceUpdate();
		}.bind(this));

		return children.filter(function(child) {
			if(!child || !child.props || !child.props._isRoute) {
				return child;
			}

			if(!matchingRoute) {
				params = routeMatches(child, fragment);
				if(params) {
					child.props.params = params;
					
					matchingRoute = child;
					return child;
				}
			}
		}.bind(this));
	}
};

module.exports = routeMixin;