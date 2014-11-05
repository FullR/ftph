"use strict";

/*
	Show word part, select definition

	correct rules:
		Any word part of the current activity's type

	incorrect rules:
		any word part that isn't the current correct word part
*/

module.exports = require("./activity").extend({
	count: 3
});