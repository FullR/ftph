"use strict";

var React 			  = require("react"),
	_ 		          = require("underscore"),
	$				  = require("jquery"),
	Backbone          = require("backbone"),
	history           = Backbone.history,
	routeToRegExp     = Backbone.Router.prototype._routeToRegExp,
	extractParameters = Backbone.Router.prototype._extractParameters,
	Async 		  	  = require("./async.jsx");

Backbone.$ = $;

var router = new (Backbone.Router.extend({
	routes: {"*actions": "change"},
	change: function() {}
}));

history.start();

var getRegex = _.memoize(function(path) {
	return routeToRegExp(path);
});

function routeMatches(path, fragment) {
	var regExp = getRegex(path || "");

	if(fragment.match(regExp)) {
		return extractParameters(regExp, fragment);
	}
}

var Route = React.createClass({
	getInitialState: function() {
		return {fragment: history.fragment};
	},

	getDefaultProps: function() {
		return {path: "", handler: _.noop};
	},

	render: function() {
		var path = this.props.path,
			handler = this.props.handler,
			model,
			params = routeMatches(path, this.state.fragment);

		history.once("route", function() {
			this.setState({
				fragment: history.fragment
			});
		}.bind(this));

		if(params) {
			model = handler.apply(null, params);

			if(model && model.then) {
				return (
					<div className='route'>
						<Async promise={model}>
							{this.props.children}
						</Async>
					</div>
				);
			}
			return (
				<div className='route'>
					{model}
					{this.props.children}
				</div>
			);
		}
		else {
			return (<div className='route hidden'></div>);
		}
	}
});

module.exports = Route;