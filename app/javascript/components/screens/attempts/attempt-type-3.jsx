"use strict";

var _            = require("lodash"),
	React        = require("react"),
	dictionary	 = require("../../../dictionary/dictionary"),
	Definition   = require("../../definition.jsx"),
	WordPart     = require("../../word-part.jsx"),
	Word         = require("../../word.jsx"),
	Choice 		 = require("../../choice.jsx"),
	PromiseButton= require("../../promise-button.jsx"),
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

	getClassNames: function() {
		return this.classNames(
			"attempt", 
			"attempt-type-3", 
			this.isWaiting() ? "attempt-waiting" : null
		);
	},

	getInstructions: function() {
		return <span>Touch the two word parts that together mean:</span>;
	},

	render: function() {
		var attempt 	= this.props.attempt,
			correctWord = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting(),
			correctParts= dictionary.getParts(dictionary.get(correctWord));

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
			this.stopAudio();
		}.bind(this);

		var choiceButtons = choices.map(function(choice) {
			return (
				<Choice key={choice.word} onClick={waiting ? null : select.bind(this, choice)} choice={choice}>
					<WordPart part={choice.word} />
				</Choice>
			);
		}.bind(this));

		var orderedCorrectChoices = correctParts.map(function(part) {
			return choices.filter(function(choice) {
				return choice.word === part.key;
			})[0];
		});

		var blanks = orderedCorrectChoices.map(function(choice) {
			var visible = choice.selected || waiting,
				classNames = [
					"attempt-blank",
					visible ? "attempt-blank-visible" : "attempt-blank-hidden"
				].join(" ");

			return <span className={classNames} key={choice.word}>{visible ? <WordPart part={choice.word} /> : <span>&nbsp;</span>}</span>
		});

		var continueButton = waiting ? <div onClick={continueAttempt} className='attempt-continue-button'></div> : null;

		return (
			<div className={this.getClassNames()}>
				<div className='attempt-current-info'>
					<p className='attempt-instructions'>{this.getInstructions()}</p>
					<p className='attempt-reference-definition'><Definition word={correctWord}/></p>
				</div>

				<div className={'attempt-blanks attempt-blanks-' + correctWord}>
					<PromiseButton className='attempt-blanks-words' disabled={!waiting} promiseFn={dictionary.playWord.bind(dictionary, correctWord, 0)}>
						{blanks}
					</PromiseButton>
				</div>

				<div className='choices'>
					{choiceButtons}
				</div>

				{continueButton}
			</div>
		);
	}
});


module.exports = AttemptType3;