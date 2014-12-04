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
	PromiseButton= require("../../promise-button.jsx"),
	AttemptMixin = helper.mixin;

var AttemptType2 = React.createClass({
	mixins: [AttemptMixin],

	getInitialState: function() {
		return {
			playingWord: false
		};
	},

	isWaiting: function() {
		return this.getSelected().length > 0;
	},

	getInstructions: function() {
		return (<span className='attempt-instructions'>Touch the <span className={this.props.attempt.wordType}>{this.props.attempt.wordType}</span> with this definition:</span>);
	},

	getClassNames: function() {
		return this.classNames(
			"attempt", 
			"attempt-type-2", 
			this.isWaiting() ? "attempt-waiting" : null
		);
	},

	playWord: function() {
		this.setState({
			playingWord: true
		});
		return this.playCorrectWord().then(function() {
			this.setState({
				playingWord: false
			});
		});
	},

	render: function() {
		var attempt 	= this.props.attempt,
			correctPart = this.getCorrectWord(),
			example     = this.props.attempt.exampleWord,
			choices     = this.getChoices(),
			waiting     = this.isWaiting(),
			playingWord = this.state.playingWord;

		var continueAttempt = function() {
			soundManager.stop();
			this.continueAttempt(this.props.attempt);
		}.bind(this);

		function select(choice) {
			this.select(choice);

			this.playWordAndDef(250);
		}

		var choiceButtons = choices.map(function(choice) {
			var onClick,
				className;

			if(waiting) {
				if(choice.correct) {
					onClick = this.playWord;
					className = "choice-audio-button" + (playingWord ? " playing" : "");
				}
			}
			else {
				onClick = select.bind(this, choice);
			}

			return (

				<Choice key={choice.word} onClick={onClick} choice={choice} className={className}>
					<WordPart part={choice.word} />	
				</Choice>
			);
		}.bind(this));

		var continueButton = waiting ? <div onClick={continueAttempt} className='attempt-continue-button'></div> : null;

		return (
			<div className={this.getClassNames()}>
				<div className='attempt-current-info'>
					<p className='attempt-instructions'>{this.getInstructions()}</p>
					<p className='attempt-reference-definition'><Definition word={correctPart} /></p>
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

module.exports = AttemptType2;