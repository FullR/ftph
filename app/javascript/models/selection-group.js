"use strict";

var dictionary = require("../dictionary/dictionary");

function deserializeWords(words) {
	return words.map(function(word) {
		if(typeof word === "string") {
			return dictionary.deserialize(word);
		}
		return word;
	});
}

module.exports = require("backbone").Model.extend({
	defaults: function() {
		return {
			correct: null,
			incorrect: [],
			selected:  []
		};
	},

	initialize: function() {
		this.set({
			correct: 	dictionary.deserialize(this.get("correct")),
			incorrect: 	deserializeWords(this.get("incorrect")),
			selected: 	deserializeWords(this.get("selected"))
		});
	},

	serialize: function() {
		return {
			correct: 	this.get("correct").serialize(),
			incorrect:  _.invoke(this.get("incorrect"), "serialize"),
			selected:   _.invoke(this.get("selected"),  "serialize")
		};
	},

	isCorrect: function() {
		// selection group is correct if all selected choices are correct
		return this.get("selected").every(function(choice) {
			return choice.get("correct");
		});
	}
});