"use strict";

var _ = require("lodash"),
	Choice = require("./choice"),
	dictionary = require("../dictionary/dictionary");

function Attempt(options) {
	_.extend(this, options);

	this.used = this.used || [];
}

Attempt.deserialize = function(serialized) {
	return new Attempt({
		review: serialized.review,
		unused: serialized.unused.map(dictionary.deserialize),
		choices:  serialized.choices ? serialized.choices.map(Choice.deserialize) : null,
		used: serialized.used.map(function(choice) {
			return {
				correct: choice.correct,
				content: dictionary.deserialize(choice.content)
			};
		})
	});
};

_.extend(Attempt.prototype, {
	serialize: function() {
		return {
			review: !!this.review,
			choices: this.choices ? _.invoke(this.choices, "serialize") : null,
			unused: _.invoke(this.unused, "serialize"),
			used: this.used.map(function(choice) {
				return {
					correct: !!choice.correct,
					content: choice.content.serialize()
				};
			})
		};
	},

	setChoices: function(choices) {
		this.choices = choices;
	},

	answer: function(correct) {
		var content = this.unused.shift();

		this.used.push({
			correct: correct,
			content: content
		});
	},

	getIndex: function() {
		return this.used.length;
	},

	getCount: function() {
		return this.used.length + this.unused.length;
	},

	getIndexString: function() {
		return (this.getIndex()+1) + "/" + this.getCount();
	},

	getScore: function() {
		return this.used.reduce(function(total, selection) {
			return selection.correct ? total + 1 : total;
		}, 0);
	},

	getScorePercent: function() {
		return Math.floor((this.getScore() / this.getCount())*100);
	},

	isComplete: function() {
		return this.unused.length === 0;
	},

	getCurrent: function() {
		return this.unused[0];
	}

});

// attempt model
module.exports = Attempt;