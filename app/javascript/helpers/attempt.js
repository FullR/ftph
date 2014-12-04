"use strict";

var _           = require("lodash"),
	Q			= require("q"),
	dictionary	= require("../dictionary/dictionary"),
	slice		= [].slice;

function getCorrectWord(attempt) {
	return attempt.unused[0];
}

function getChoices(attempt) {
	return attempt.choices;
}

function getSelected(attempt) {
	return attempt.choices.filter(function(choice) {
		return choice.selected;
	});
}

function getIndex(attempt) {
	return attempt.used.length;
}

function getCount(attempt) {
	return attempt.used.length + attempt.unused.length;
}

function getIndexString(attempt) {
	return (getIndex(attempt)+1) + "/" + getCount(attempt);
}

function getScore(attempt) {
	return attempt.used.reduce(function(total, used) {
		return used.correct ? total + 1 : total;
	}, 0);
}

function getScorePercent(attempt) {
	return Math.floor((getScore(attempt) / getCount(attempt))*100);
}

function stopAudio() {
	return require("../sound/sound-manager").stop();
}

var attemptHelpers = {
	getCorrectWord: getCorrectWord,
	getChoices: getChoices,
	getSelected: getSelected,
	getIndex: getIndex,
	getCount: getCount,
	getIndexString: getIndexString,
	getScore: getScore,
	getScorePercent: getScorePercent,
	stopAudio: stopAudio
};

// Wrap each of the helper functions so it can be accessed as a mixin function
attemptHelpers.mixin = _.transform(attemptHelpers, function(mixin, fn, key) {
	mixin[key] = function() {
		return fn(this.props.attempt);
	};
});

// mixin only functions
_.extend(attemptHelpers.mixin, {
	select: function(choice) {
		if(!choice.selected && !this.isWaiting()) {
			require("../dispatcher").send("select", this.props.attempt, choice);
		}
	},

	continueAttempt: function() {
		require("../dispatcher").send("continueAttempt", this.props.attempt);
	},

	// Takes a list of classnames, filters falsy values, joins them all with spaces, and returns the result
	classNames: function() {
		return slice.call(arguments).filter(function(s) {
			return s;
		}).join(" ");
	},

	playCorrectWord: function(delay) {
		var current = this.props.attempt.unused[0];
		if(current) {
			this.setState({
				playingWord: true
			});
			return dictionary.playWord(current, delay).then(function() {
				this.setState({
					playingWord: false
				});
			}.bind(this));
		}
	},

	playCorrectDefinition: function(delay) {
		var current = this.props.attempt.unused[0];
		if(current) {
			this.setState({
				playingDefinition: true
			});
			return dictionary.playDefinition(current, delay).then(function() {
				this.setState({
					playingDefinition: false
				});
			}.bind(this))
		}
	},

	playWordAndDef: function(delay) {
		var current = this.props.attempt.unused[0];

		return dictionary.playWord(current)
			.then(function() {
				if(this.isWaiting()) {
					this.setState({
						playingDefinition: true,
						playingWord: false
					});
					dictionary.playDefinition(current, delay);
				}
				else {
					this.setState({
						playingDefinition: false,
						playingWord: false
					});
				}
			}.bind(this))
			.then(function() {
				this.setState({
					playingDefinition: false
				});
			}.bind(this));
	}
});

module.exports = attemptHelpers;