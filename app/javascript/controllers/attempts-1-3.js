"use strict";

var Q				 = require("q"),
	_                = require("lodash"),
	dictionary       = require("../dictionary/dictionary"),
	helper           = require("../helpers/attempt"),
	soundManager     = require("../sound/sound-manager");

// returns true if the words in the second argument don't share a definition with the first argument
function noMatchingDefinition(word, arr) {
	return _.pluck(arr, "definition").indexOf(word.definition) === -1;
}

var controller1to3 = {
	playOnCycle: true, // whether or not to play the new current word when the words cycle

	// Handles all data changes needed to be made on an attempt
	progress: function(attempt) {
		if(attempt.choices) {
			this.cycleCurrentSelection(attempt);
		}
		
		this.updateState(attempt);
		return attempt;
	},

	// if a selection has been made, check if it was correct and update the current choices, and used array
	cycleCurrentSelection: function(attempt) {
		var selected = helper.getSelected(attempt),
			sounds;

		if(selected.length > 0) {
			var correct = selected.every(function(choice) { // if they're all correct, the selection attempt was correct
				return choice.correct;
			});

			dictionary.releaseSounds(attempt.unused[0]);
			attempt.used.push({
				word: attempt.unused.shift(),
				correct: correct
			});
			if(attempt.unused.length > 0) {
				dictionary.loadSounds(attempt.unused[0]);
			}
		}
	},

	// Gets all available words to choose as incorrect choices
	updateState: function(attempt) {
		// if there are any remaining words to use
		if(attempt.unused.length > 0) {
			attempt.choices = this.getChoices(attempt);
			attempt.exampleWord = this.getExampleWord(attempt);
		}
	},

	getExampleWord: function(attempt) {
		return _.sample(dictionary.containing(attempt.unused[0])).key;
	},

	// Returns a single correct choice
	getCorrect: function(attempt) {
		return {
			word: attempt.unused[0],
			correct: true,
			selected: false
		};
	},

	// Returns an array of incorrect choices
	getIncorrect: function(attempt) {
		var available = _.shuffle(this.getAvailableIncorrect(attempt)),
			chosen;

		// reduce as opposed to filter or sample because I need to check each
		// selected word against every previously selected words
		// to avoid duplicate definitions
		chosen = available.reduce(function(selected, word) {
			if(selected.length >= 2) return selected;

			if(noMatchingDefinition(word, selected)) {
				selected.push(word);
			}

			return selected;
		}, []);

		return _.pluck(chosen, "key").map(function(word) {
			return {
				word: word,
				correct: false,
				selected: false
			};
		});
	},

	getAvailableIncorrect: function(attempt) {
		var correct = dictionary.get(attempt.unused[0]);
		
		return dictionary.byType(attempt.wordType).filter(function(word) {
			return word !== correct && 
				   word.definition !== correct.definition;
		});
	},

	// returns an array of choices that each contain: a word, correct flag, and selected flag
	getChoices: function(attempt) {
		var incorrect = this.getIncorrect(attempt);

		incorrect.push(this.getCorrect(attempt));

		return _.shuffle(incorrect);
	},

	select: function(attempt, choice) {
		choice.selected = true;
	},

	onShow: function(attempt) {

	}
};

module.exports = controller1to3;