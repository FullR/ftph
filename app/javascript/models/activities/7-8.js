"use strict";

/*
	Show definition, build word from parts

	correct rules:
		Any word that hasn't already been displayed

	incorrect rules:
		Any word part that isn't part of the current word
*/

module.exports = require("./activity").extend({
	type: "word"
});