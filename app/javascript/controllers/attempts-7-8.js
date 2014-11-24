"use strict";

var _              = require("lodash"),
	dictionary     = require("../dictionary/dictionary"),
	helper 		   = require("../helpers/attempt");

var controller7to8 = {
	progress: function(attempt) {
		if(attempt.choices) {
			this.cycleCurrentSelection(attempt);
		}

		if(attempt.unused.length > 0) {
			this.setChoices(attempt);
		}

		return attempt;
	},

	getAvailableIncorrect: function(attempt) {
		return dictionary.notPartOf(dictionary.get(helper.getCorrectWord(attempt)));
	},

	setChoices: function(attempt) {
		var correct        = helper.getCorrectWord(attempt),
			correctWord    = dictionary.get(correct),
			availIncorrect = this.getAvailableIncorrect(attempt),
			choices        = [];

		choices.push.apply(choices, dictionary.getParts(correctWord).map(function(part) {
			return {
				correct: true,
				word: part.key,
				selected: false
			};
		}));

		choices.push({
			correct: false,
			word: _.sample(availIncorrect).key,
			selected: false
		});

		attempt.choices = _.shuffle(choices);
	},

	isWaiting: function(attempt) {
		var selected = helper.getSelected(attempt);
		return selected.length >= attempt.wordType || selected.some(function(choice) {
			return !choice.correct;
		});
	},

	cycleCurrentSelection: function(attempt) {
		var selected = helper.getSelected(attempt),
			waiting  = this.isWaiting(attempt);

		if(waiting) {
			var correct = selected.every(function(choice) { // if they're all correct, the selection attempt was correct
				return choice.correct;
			});

			dictionary.releaseSounds(attempt.unused[0]);
			attempt.used.push({
				word: attempt.unused.shift(),
				correct: correct
			});
			dictionary.loadSounds(attempt.unused[0]);
		}
	},

	select: function(attempt, choice) {
		choice.selected = true;
	},

	onShow: function() {}
};

module.exports = controller7to8;