"use strict";

var _          = require("lodash"),
	Model	   = require("backbone").Model,
	dictionary = require("../dictionary/dictionary");

var Attempt = Model.extend({
	initialze: function(data, options) {
		this.data = data;
		_.extend(this, options || {});
	},

	getScore: function() {
		return this.data.used.reduce(function(score, choice) {
			return choice.correct ? score + 1 : score;
		}, 0);
	},

	isReview: function() {
		return this.data.review;
	},

	isComplete: function() {
		return this.data.unused.length === 0;
	},

	getSelected: function() {
		return this.data.choices.filter(function(choice) {
			return choice.selected;
		});
	},

	getChoices: function() {
		return this.data.choices;
	},

	getCorrectWord: function() {
		return dictionary.get(this.data.unused[0]);
	},

	getIndex: function() {
		return this.data.used.length;
	},

	getCount: function() {
		return this.data.used.length + this.data.unused.length;
	},

	getScorePercent: function() {
		return Math.floor((this.getScore() / this.getCount())*100);
	},

	getIndexString: function() {
		return (this.getIndex()+1) + "/" + this.getCount();
	}
});

module.exports = Attempt;