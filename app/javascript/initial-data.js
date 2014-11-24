"use strict";

// initial state of the application

var _ = require("lodash"),
	dictionary = require("./dictionary/dictionary");

var controllers = require("./controllers");

function bootstrapActivity(words, attemptType, wordType) {
	var activity = {
		attempts: [
			{
				attemptType: attemptType, // one of four types of attempts
				wordType: wordType,
				unused: _.shuffle(_.pluck(words, "key")),
				used: []
			}
		]
	};

	// generate initial choices, example words, etc.
	controllers[attemptType].progress(activity.attempts[0]);

	return activity;
}

var application = {
	user: "",
	activities: [
		bootstrapActivity(dictionary.byType("prefix"), 1, "prefix"),
		bootstrapActivity(dictionary.byType("root"),   1, "root"),
		bootstrapActivity(dictionary.byType("suffix"), 1, "suffix"),

		bootstrapActivity(dictionary.byType("prefix"), 2, "prefix"),
		bootstrapActivity(dictionary.byType("root"),   2, "root"),
		bootstrapActivity(dictionary.byType("suffix"), 2, "suffix"),

		bootstrapActivity(dictionary.byPartCount(2), 3, 2),
		bootstrapActivity(dictionary.byPartCount(3), 3, 3),

		bootstrapActivity(dictionary.byPartCount(2), 4, 2),
		bootstrapActivity(dictionary.byPartCount(3), 4, 3),
	]
};

module.exports = application;