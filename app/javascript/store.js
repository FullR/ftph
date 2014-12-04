"use strict";

var _			= require("lodash"),
	Store       = require("putainde-localstorage"),
	namespace   = require("../project").namespace,
	ls          = Store.create({namespace: namespace});


var modelData = ls.get("application");

if(!modelData) {
	reset();
}

function save() {
	ls.set("application", modelData);
}

function reset() {
	modelData = require("./initial-data")();
	save();
}

module.exports = {
	getModel: function() {
		return modelData;
	},
	save: save,
	reset: reset
};