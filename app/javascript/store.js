"use strict";

var _			= require("lodash"),
	Store       = require("putainde-localstorage"),
	namespace   = require("../project").namespace,
	ls          = Store.create({namespace: namespace}),
	Application = require("./models/application");

var modelData = ls.get("application"),
	modelInstance;

if(!modelData) {
	reset();
}

function save() {
	ls.set("application", modelData);
}

function reset() {
	modelData = _.clone(require("./initial-data"));
	//console.log(Application);
	modelInstance = new Application(modelData);
	save();
}

module.exports = {
	getModel: function() {
		return modelInstance;
	},
	save: save,
	reset: reset
};