"use strict";

var _            = require("lodash"),
	React        = require("react"),
	dictionary	 = require("../../../dictionary/dictionary"),
	Definition   = require("../../definition.jsx"),
	WordPart     = require("../../word-part.jsx"),
	Word         = require("../../word.jsx"),
	Choice 		 = require("../../choice.jsx"),
	helper 		 = require("../../../helpers/attempt"),
	AttemptMixin = helper.mixin;

var AttemptType3 = React.createClass({
	mixins: [AttemptMixin],

	isWaiting: function() {
		var selected = this.getSelected();

		return selected.some(function(choice) {
			return !choice.correct;
		}) || this.getSelected().length >= this.props.attempt.wordType;
	},

	render: function() {
		var classNames  = ["attempt", "attempt-type-3"].join(" "),
			attempt 	= this.props.attempt,
			correctWord = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting();

		function select(choice) {
			var current;
			this.select(choice);

			current = attempt.unused[0];
			if(current && this.isWaiting()) {
				dictionary.playWord(current, 500);
			}
		}

		var continueAttempt = function() {
			this.continueAttempt();
		}.bind(this);

		var choiceButtons = choices.map(function(choice) {
			return (
				<Choice key={choice.word} onClick={waiting ? null : select.bind(this, choice)} choice={choice}>
					<WordPart part={choice.word} />
				</Choice>
			);
		}.bind(this));

		var continueButton = waiting ? <button onClick={continueAttempt}>Continue</button> : null;

		return (
			<div classNames={classNames}>
				<p>Correct: <Word word={correctWord} /></p>
				<div className='choices'>
					{choiceButtons}
				</div>
				<br />
				{continueButton}
			</div>
		);
	}
});

module.exports = AttemptType3;