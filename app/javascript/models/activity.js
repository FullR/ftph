"use strict";

var id = require("../utility/id"),
	_ = require("lodash"),
	Attempt = require("./attempt");

function Activity(options) {
	_.extend(this, options);
	this.id = id();
}

Activity.deserialize = function(serialized, AttemptClass) {
	return new Activity({
		attempts: serialized.attempts.map(AttemptClass.deserialize)
	});
};

_.extend(Activity.prototype, {
	serialize: function() {
		return {
			attempts: _.invoke(this.attempts, "serialize")
		};
	},

	getCurrentAttempt: function() {
		return this.attempts[this.attempts.length-1];
	},

	// returns attempt with the highest score that isn't a review
	getBestAttempt: function() {
		return this.attempts.reduce(function(best, attempt) {
			// Reviews don't count
			if(attempt.review) {
				return best;
			}

			return attempt.getScore() > best.getScore() ? attempt : best;
		});
	}
});

module.exports = Activity;