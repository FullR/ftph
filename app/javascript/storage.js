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
	modelData = {
		lessons: {}
	};
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
	getLessonData: getLessonData
};