"use strict";

var React     = require("react"),
	WordImage = require("components/word-image"),
	store     = require("storage");

module.exports = {
	shouldShowFeedback: function() {
		return this.getSelected().length > 0;
	},

	selectChoice: function(choice) {
		return function() {
			choice.select();
			store.submitAnswer(this.lessonId, this.activityId, {
				correct: this.isCorrect(),
				selected: this.getSelectedIndexes()
			});
			this.animate("feedback");
		}.bind(this);
	},

	renderFeedback: function() {
		var selected = this.getSelected()[0],
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