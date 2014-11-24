"use strict";

var _              = require("lodash"),
	helper		   = require("../helpers/attempt"),
	dictionary	   = require("../dictionary/dictionary"),
	controller7to8 = _.clone(require("./attempts-7-8"));

var controller9to10 = _.extend(controller7to8, {
	getAvailableIncorrect: function(attempt) {
		return dictionary.get(helper.getCorrectWord(attempt)).choosableParts;
	}
});

module.exports = controller9to10;