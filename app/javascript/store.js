"use strict";

var Store       = require("putainde-localstorage"),
	namespace   = require("../project").namespace,
	ls          = Store.create({namespace: namespace}),
	initialData = require("./initial-data"),
	Application = require("./models/application");

var modelData = ls.get("application"),
	modelInstance;

if(!modelData) {
	reset();
}
else {
	modelInstance = Application.deserialize(modelData);
}

function save() {
	ls.set("application", modelInstance.serialize());
}

function reset() {
	modelData = initialData;
	modelInstance = Application.deserialize(modelData);

	save();
}

module.exports = {
	getModel: function() {
		return modelInstance;
	},
	save: save,
	reset: reset
};