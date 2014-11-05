"use strict";

var SelectionGroup = require("./selection-group"),
	dictionary = require("../dictionary/dictionary");

var Attempt = require("backbone").Model.extend({
	defaults: function() {
		return {
			review: false,
			incorrectUsed: [],
			current: null,
			unused: []
		};
	},

	initialize: function() {
		var unused = this.get("unused").map(function(wordKey) {
			return dictionary.deserialize(wordKey);
		});

		var current = this.get("current");

		if(!current) {
			this.next();
		}
		else {
			this.set("current", maybeInit(current));
		}
	},

	next: function() {
		var current = this.get("current");
		if(current && !current.isCorrect()) {
			this.get("incorrectUsed").push(current.get("correct"));
		}


	},

	review: function() {
		return new Attempt({
			review: true
		});
	},

	serialize: function() {
		var current = this.get("current");
		return {
			used: _.invoke(this.get("used"), "serialize"),
			review: this.get("review"),
			started: this.get("started"),
			finished: this.get("finished"),
			current: current ? current.serialize() : null
		};
	}
});

module.exports = Attempt;