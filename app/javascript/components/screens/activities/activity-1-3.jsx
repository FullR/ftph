"use strict";

var _ = require("lodash"),
	React = require("react"),
	dictionary = require("../../../dictionary/dictionary"),
	dispatcher = require("../../../dispatcher"),
	Definition = require("../../definition.jsx"),
	WordPart = require("../../word-part.jsx");

var Activity1to3 = React.createClass({
	getInitialState: function() {
		return {choices: null, selected: null};
	},

	getAvailableIncorrect: function() {
		var correct = this.props.activity.getCurrentAttempt().getCurrent();

		return _.shuffle(dictionary.byType(this.props.type).filter(function(word) {
			return word !== correct &&
				   word.definition !== correct.definition;
		}));
	},

	generateChoices: function() {
		var attempt = this.props.activity.getCurrentAttempt(),
			correct = attempt.getCurrent(),
			type = this.props.type,
			available = this.getAvailableIncorrect(),
			incorrect,
			incorrectChoices,
			choices,
			correctChoice = {
				correct: true,
				word: correct
			};

		incorrect = available.reduce(function(chosen, word) {
			var usedDefinitions;
			if(chosen.length >= 2) {
				return chosen;
			}

			usedDefinitions = _.pluck(chosen, "definition");

			if(usedDefinitions.indexOf(word.definition) === -1) {
				chosen.push(word);
			}

			return chosen;
		}, []);

		incorrectChoices = incorrect.map(function(word) {
			return {
				correct: false,
				word: word
			};
		});

		incorrectChoices.push(correctChoice);

		return _.shuffle(incorrectChoices);
	},

	getChoices: function() {
		return this.state.choices || this.generateChoices();
	},

	answer: function() {
		dispatcher.send("answer", this.props.activity.getCurrentAttempt(), this.state.selected.correct);
		this.setState({
			choices: null,
			selected: null
		});
	},

	render: function() {
		var classNames = ["activity", "activity-1-3"].join(" "),
			activity = this.props.activity,
			attempt = activity.getCurrentAttempt(),
			selected = this.state.selected,
			self = this,
			choices;

		if(attempt.isComplete()) {
			// TODO: "Show review screen"
			return (<div>Done!</div>);
		}

		choices = this.getChoices();

		function select(choice) {
			return function() {
				this.setState({
					choices: choices,
					selected: choice
				});
			}.bind(self);
		}

		return (
			<div classNames={classNames}>
				<p><WordPart part={attempt.getCurrent()}/></p>
				<p>Score: {attempt.getScore()}</p>
				<p>{attempt.getIndexString()}</p>
				{choices.map(function(choice) {
					return <button onClick={select(choice)} key={choice.word.key}><Definition word={choice.word}/></button>
				})}

				<br />

				{selected ? <button onClick={this.answer}>Continue</button> : null}
			</div>
		);
	}
});

module.exports = Activity1to3;