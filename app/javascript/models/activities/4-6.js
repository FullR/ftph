"use strict";

/*
	Show definition, select word part

	correct rules:
		Any word part of the current activity's type

	incorrect rules:
		Any word part that doesn't have the same definition as the current correct
*/

module.exports = require("./activity").extend({
	count: 3
});