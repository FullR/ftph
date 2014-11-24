"use strict";

var _              = require("lodash"),
	helper		   = require("../helpers/attempt"),
	dictionary	   = require("../dictionary/dictionary"),
	controller1to3 = _.clone(require("./attempts-1-3"));

var controller4to6 = _.extend(controller1to3, {
	isWaiting: function(attempt) {
		return attempt.choices.some(function(choice) {
			return choice.selected;
		});
	},

	select: function(attempt, choice) {
		choice.selected = true;
	}
});

module.exports = controller4to6;