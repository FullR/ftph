"use strict";

var _            = require("lodash"),
	React        = require("react"),
	dictionary	 = require("../../../dictionary/dictionary"),
	Definition   = require("../../definition.jsx"),
	WordPart     = require("../../word-part.jsx"),
	Word         = require("../../word.jsx"),
	Choice 		 = require("../../choice.jsx"),
	helper 		 = require("../../../helpers/attempt"),
	VCenter		 = require("../../utility/v-center.jsx"),
	AttemptMixin = helper.mixin;

var PromiseButton = require("../../promise-button.jsx");

var AttemptType1 = React.createClass({
	mixins: [AttemptMixin],

	isWaiting: function() {
		return this.getSelected().length > 0;
	},

	getInstructions: function() {
		return (<span>Touch the definition of this <span className={this.props.attempt.wordType}>{this.props.attempt.wordType}</span>:</span>);
	},

	getClassNames: function() {
		return this.classNames(
			"attempt", 
			"attempt-type-1", 
			this.isWaiting() ? "attempt-waiting" : null
		);
	},

	render: function() {
		var attempt 	= this.props.attempt,
			correctPart = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting();

		var continueAttempt = function() {
			//this.stopAudio()
			this.continueAttempt();
			this.playCorrectWord(250);
		}.bind(this);

		function select(choice) {
			var current = attempt.unused[0];
			this.select(choice);
			this.playCorrectDefinition();
		}

		var choiceButtons = choices.map(function(choice) {
			return (
				<Choice key={choice.word} onClick={waiting ? null : select.bind(this, choice)} choice={choice}>
					<VCenter className='definition'>
						<Definition word={choice.word} />
					</VCenter>
				</Choice>
			);
		}.bind(this));

		var continueButton = waiting ? 
							<div onClick={continueAttempt} className='attempt-continue-button'></div> : 
							null;

		return (
			<div className={this.getClassNames()}>
				<div className='attempt-current-info'>
					<p className='attempt-instructions'>{this.getInstructions()}</p>
					<PromiseButton className='attempt-reference-word' promiseFn={this.playCorrectWord}>
						<WordPart part={correctPart} />
					</PromiseButton>
					<p className='attempt-example-word'><Word word={example} marked={correctPart} />: <Definition word={example}/></p>
				</div>
				
				<div className='choices'>
					{choiceButtons}
				</div>

				{continueButton}
			</div>
		);
	}
});

module.exports = AttemptType1;