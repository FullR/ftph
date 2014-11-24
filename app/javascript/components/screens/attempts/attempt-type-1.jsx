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

var AttemptType1 = React.createClass({
	mixins: [AttemptMixin],

	isWaiting: function() {
		return this.getSelected().length > 0;
	},

	render: function() {
		var attempt 	= this.props.attempt,
			correctPart = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting(),
			classNames  = this.classNames(
				"attempt", 
				"attempt-type-1", 
				waiting ? "attempt-waiting" : null
			);

		var continueAttempt = function() {
			this.continueAttempt();
			this.playCorrectWord(250);
		}.bind(this);

		function select(choice) {
			var current = attempt.unused[0];
			this.select(choice);
			this.playCorrectDefinition();
		}

		var choiceButtons = (
			<div className="choices">
				{choices.map(function(choice) {
					return (
						<Choice key={choice.word} onClick={waiting ? null : select.bind(this, choice)} choice={choice}>
							<Definition word={choice.word} />
						</Choice>
					);
				}.bind(this))}
			</div>
		);

		var continueButton = waiting ? 
							<button onClick={continueAttempt}>Continue</button> : 
							null;

		return (
			<div className={classNames}>
				<p>Part: <WordPart part={correctPart} /></p>
				<p>Example: <Word word={example} /></p>
				{choiceButtons}
				<br />
				{continueButton}
			</div>
		);
	}
});

module.exports = AttemptType1;