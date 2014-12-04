"use strict";

// Controllers are in charge of mutating attempt data
module.exports = {
	"1": require("./controllers/attempts-1-3"),
	"2": require("./controllers/attempts-4-6"),
	"3": require("./controllers/attempts-7-8"),
	"4": require("./controllers/attempts-9-10")
};