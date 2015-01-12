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

// Returns the activity array for a given lesson
// Each activity is responsible for maintaining whatever data it needs to maintain in the namespace
function getActivities(lessonId) {
	var lessonData = getLessonData(lessonId);

	return lessonData.activities || (lessonData.activities = []);
}

// Submit new data for an individual activity
// The basic schema should be something like this:
/*
	correct: boolean
	selected: [array of selected choice indexes]
*/
function submitAnswer(lessonId, activityId, data) {
	getActivities(lessonId)[activityId] = data;
	save();
}

// Returns the last submitted answer for the given activity
function getActivityData(lessonId, activityId) {
	return getActivities(lessonId)[activityId];
}

// Returns all data for a given lesson
function getLessonData(id) {
	return modelData.lessons[id] || (modelData.lessons[id] = {});
}

module.exports = {
	getModel() {
		return modelData;
	},

	set(key, value) {
		if(typeof key === "object") {
			_.extend(modelData, key);
		}
		else {
			modelData[key] = value;
		}
		save();
	},

	get(key) {
		return modelData[key];
	},

	save: save,
	reset: reset,
	submitAnswer: submitAnswer,
	getLessonData: getLessonData,
	getActivityData: getActivityData
};