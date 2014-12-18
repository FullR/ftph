"use strict";

var React	 = require("react"),
	_		 = require("lodash"),
	$        = require("jquery"),
	Backbone = require("backbone"),
	$outlet  = $("#outlet"),
	outlet   = $outlet.get(0),
	actions  = require("router/actions"),
	store    = require("storage"),
	slice    = [].slice;

var components = {
	"splash":   		require("screens/splash"),
	"activity-wrapper": require("screens/activity-wrapper"),
	"lesson-wrapper":   require("screens/lesson-wrapper"),
	"lesson-feedback":  require("screens/lesson-feedback"),
	"admin":            require("screens/admin/admin")
};

function render(componentName) {
	return function(options) {
		React.render(React.createElement(components[componentName], options), outlet);
	};
}

function getParams(/* ...keys */) {
	var keys = slice.call(arguments);
	return function(params) {
		return _.zipObject(keys, params || []);
	};
}

actions.index
	.onValue(render("splash"));

actions.activity
	.map(getParams("lessonId", "activityId"))
	.onValue(render("activity-wrapper"));

actions.lesson
	.map(getParams("lessonId"))
	.onValue(render("lesson-wrapper"));

actions.lessonFeedback
	.map(function(params) {
		return {
			id: params[0],
			activities: store.getLessonData(params[0])
		};
	})
	.onValue(render("lesson-feedback"));

actions.admin
	.map(getParams("sectionId"))
	.onValue(render("admin"));


Backbone.history.loadUrl();