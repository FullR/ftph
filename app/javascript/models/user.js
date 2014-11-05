"use strict";

var activityClasses = [
	require("./activities/1"),
	require("./activities/2"),
	require("./activities/3"),
	require("./activities/4"),
	require("./activities/5"),
	require("./activities/6"),
	require("./activities/7"),
	require("./activities/8"),
	require("./activities/9"),
	require("./activities/10")
];

function createNew(ClassFn) {
	return new ClassFn;
}

module.exports = require("backbone").Model.extend({
	defaults: function() {
		return {
			name: "",
			activities: activityClasses.map(createNew)
		};
	},

	initialize: function() {
		var activities = this.get("activities").map(function(activity, i) {
			return maybeInit(activity, activityClasses[i]);
		});

		this.set("activities", activities);
	},

	serialize: function() {
		return {
			name: this.get("name"),
			activities: _.invoke(this.get("activities"), "serialize")
		};
	}
});