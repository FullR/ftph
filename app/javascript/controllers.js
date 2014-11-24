"use strict";

// Attempt progressers generate choices, example words, etc. when an attempt is continued/started
module.exports = {
	"1": require("./controllers/attempts-1-3"),
	"2": require("./controllers/attempts-4-6"),
	"3": require("./controllers/attempts-7-8"),
	"4": require("./controllers/attempts-9-10")
};