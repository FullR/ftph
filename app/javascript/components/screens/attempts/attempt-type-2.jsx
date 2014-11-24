"use strict";

var _            = require("lodash"),
	React        = require("react"),
	soundManager = require("../../../sound/sound-manager"),
	dictionary	 = require("../../../dictionary/dictionary"),
	Definition   = require("../../definition.jsx"),
	WordPart     = require("../../word-part.jsx"),
	Word         = require("../../word.jsx"),
	Choice 		 = require("../../choice.jsx"),
	helper 		 = require("../../../helpers/attempt"),
	AttemptMixin = helper.mixin;

var AttemptType2 = React.createClass({
	mixins: [AttemptMixin],

	isWaiting: function() {
		return this.getSelected().length > 0;
	},

	render: function() {
		var classNames  = ["attempt", "attempt-type-2"].join(" "),
			attempt 	= this.props.attempt,
			correctPart = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting();

		var continueAttempt = function() {
			soundManager.stop();
			this.continueAttempt(this.props.attempt);
		}.bind(this);

		function select(choice) {
			this.select(choice);

			this.playWordAndDef(250);
		}

		var choiceButtons = (
			<div className='choices'>
				{choices.map(function(choice) {
					return (
						<Choice key={choice.word} onClick={waiting ? null : select.bind(this, choice)} choice={choice}>
							<WordPart part={choice.word} />
						</Choice>
					);
				}.bind(this))}
			</div>
		);

		var continueButton = waiting ? <button onClick={continueAttempt}>Continue</button> : null;

		return (
			<div classNames={classNames}>
				<p>Definition: <Definition word={correctPart} /></p>
				<p>Example: <Word word={example} /></p>
				{choiceButtons}
				<br />
				{continueButton}
			</div>
		);
	}
});

module.exports = AttemptType2;