"use strict";

var _			= require("lodash"),
	Store       = require("putainde-localstorage"),
	namespace   = require("../project").namespace,
	ls          = Store.create({namespace: namespace}),
	version 	= "1.0.1";


var modelData = ls.get("application");


if(!modelData || modelData.version !== version) {
	console.log("Clearing invalid storage");
	reset();
}
else {
	_.defaults(modelData, getBaseModel());
}

function getBaseModel() {
	return {
		lessons: {},
		version: version
	};
}

function save() {
	ls.set("application", modelData);
}

function reset() {
	modelData = getBaseModel();
	save();
}

function submitAnswer(lessonId, activityId, correct) {
	var lessonData = getLessonData(lessonId);
	lessonData[activityId] = !!correct;
	save();
}

function getLessonData(id) {
	return modelData.lessons[id] || (modelData.lessons[id] = {});
}

module.exports = {
	getModel: function() {
		return modelData;
	},
	save: save,
	reset: reset,
	submitAnswer: submitAnswer,
	getLessonData: getLessonData,

	set: function(key, value) {
		if(typeof key === "object") {
			_.extend(modelData, key);
		}
		else {
			modelData[key] = value;
		}
		save();
	},

	get: function(key) {
		return modelData[key];
	}
};