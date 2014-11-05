"use strict";

var Store = require("putainde-localstorage"),
	namespace = require("../project"),
	Application = require("./models/application"),
	store = Store.create({namespace: namespace});

var appModel = store.get("application"),
	modelInstance;

if(!appModel) {
	console.log("Initializing base application model");
	appModel = {};
	modelInstance = new Application(appModel);
	store.set("application", modelInstance.serialize());
}
else {
	modelInstance = new Application(appModel);
}

modelInstance.save = function() {
	store.set("application", modelInstance.serialize());
};

module.exports = modelInstance;