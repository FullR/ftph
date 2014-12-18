"use strict";

var React     = require("react"),
	WordImage = require("components/word-image"),
	store     = require("storage");

module.exports = {
	getSelected: function() {
		return this.state.choices.filter(function(choice) {
			return choice.selected;
		})[0];
	},

	isCorrect: function() {
		var selected = this.getSelected();
		return selected.correct;
	},

	shouldShowFeedback: function() {
		return !!this.getSelected();
	},

	selectChoice: function(choice) {
		return function() {
			choice.select();
			this.animate("feedback");
		}.bind(this);
	},

	renderFeedback: function() {
		var selected = this.getSelected(),
			correctStr = selected.correct ? "correct" : "incorrect";

		return (
			<div className={'feedback-words-container single ' + correctStr}>
				<div className='feedback-words'>
					<div className='feedback-word'>
						<WordImage word={selected.word} disableHCenter={true}/>
						{!selected.correct ? 
							<div className='incorrect-feedback-icon' /> :
							null
						}
					</div>
				</div>
			</div>
		);
	}
};