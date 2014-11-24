"use strict";

var _        = require("lodash"),
	Activity = require("./activity"),
	Model	 = require("backbone").Model;

var Application = Model.extend({
	initialize: function(data, options) {
		this.data = data;
	
		_.extend(this, options || {});
		this.activities = data.activities.map(function(activityData, i) {
			return new Activity(activityData);
		});

		_.invoke(this.activities, "on", "change", function() {
			this.emit("change");
		}.bind(this));
	},

	setUser: function(name) {
		this.data.user = name;
		this.emit("change");
	},

	getUser: function(name) {
		return this.data.user;
	},

	getActivity: function(id) {
		return this.activities[id];
	}
});

module.exports = Application;