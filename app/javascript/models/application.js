"use strict";

var _ = require("lodash"),
	dictionary = require("../dictionary/dictionary"),
	Attempt = require("./attempt"),
	Attempt1to3 = require("./attempt-types/1-3"),
	Activity = require("./activity");

function genInitActivity(unused, AttemptClass) {
	return new Activity({
		attempts: [
			new AttemptClass({
				unused: unused
			})
		]
	});
}

function Application(options) {
	options = _.defaults(options||{}, {
		activities: [
			genInitActivity(dictionary.byType("prefix"), Attempt1to3),
			genInitActivity(dictionary.byType("root"),   Attempt1to3),
			genInitActivity(dictionary.byType("suffix"), Attempt1to3),

			genInitActivity(dictionary.byType("prefix"), Attempt),
			genInitActivity(dictionary.byType("root"),   Attempt),
			genInitActivity(dictionary.byType("suffix"), Attempt),

			genInitActivity(dictionary.byPartCount(2),   Attempt),
			genInitActivity(dictionary.byPartCount(3),   Attempt),

			genInitActivity(dictionary.byPartCount(2),   Attempt),
			genInitActivity(dictionary.byPartCount(3),   Attempt)
		]
	});

	_.extend(this, options);
}

Application.deserialize = function(serialized) {
	var activities = serialized.activities;
	return new Application({
		activities: [
			Activity.deserialize(activities[0], Attempt1to3),
			Activity.deserialize(activities[1], Attempt1to3),
			Activity.deserialize(activities[2], Attempt1to3),

			Activity.deserialize(activities[3], Attempt),
			Activity.deserialize(activities[4], Attempt),
			Activity.deserialize(activities[5], Attempt),

			Activity.deserialize(activities[6], Attempt),
			Activity.deserialize(activities[7], Attempt),

			Activity.deserialize(activities[8], Attempt),
			Activity.deserialize(activities[9], Attempt)
		]
	});
};

_.extend(Application.prototype, {
	serialize: function() {
		return {
			activities: _.invoke(this.activities, "serialize")
		};
	}
});

module.exports = Application;