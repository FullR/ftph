"use strict";

var _       = require("lodash"),
	Model   = require("backbone").Model,
	Attempt = require("./attempt");

var Activity = Model.extend({ 
	initialize: function(data, options) {
		this.data = data;

		_.extend(this, options || {});
		this.attempts = data.attempts.map(function(activityData) {
			return new Attempt(activityData);
		});
		
		_.invoke(this.attempts, "on", "change", function() {
			this.emit("change");
		}.bind(this));
	},

	getCurrentAttempt: function() {
		return this.attempts[0];
	},

	getBestAttempt: function() {
		return this.attempts.reduce(function(best, current) {
			if(!current.isReview() && current.getScore() > best.getScore()) {
				return current;
			}
			return best;
		});
	}
});

module.exports = Activity;