"use strict";

var _ = require("lodash"),
	Application = require("./models/application");

console.log("Loading initial data");
module.exports = (new Application).serialize();