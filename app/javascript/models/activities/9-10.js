"use strict";

/*
	Build word from parts

	correct rules:
		Unused during the current attempt

	incorrect rules
		Is contained within the correct word's `choosableParts`.
*/

module.exports = require("./activity").extend({
	type: "word"
});