"use strict";

var slice = [].slice,
	listeners = [],
	storage = require("./store"),
	store = storage.model;

var dispatcher = {
	send: function(actionId /*, ...args*/) {
		var args = slice.call(arguments, 1),
			action = this.actions[actionId];

		if(!action) {
			throw "Action not found " + actionId;
		}

		action.apply(this, args);
		this.notify();
	},

	listen: function(callback) {
		listeners.push(callback);
	},

	notify: function() {
		listeners.forEach(function(callback) {
			callback();
		});
		storage.save();
	},

	actions: {
		answer: function(attempt, correct) {
			attempt.answer(correct);
		},

		clearData: function() {
			storage.reset();
		}
	}
};

module.exports = dispatcher;