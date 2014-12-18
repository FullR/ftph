"use strict";

var React     = require("react"),
	WordImage = require("components/word-image"),
	store     = require("storage");

module.exports = {
	getSelected: function() {
		return this.state.choices.filter(function(choice) { 
			return choice.selected; 
		});
	},

	isCorrect: function() {
		return this.getSelected().every(function(choice) {
			return choice.correct;
		});
	},

	shouldShowFeedback: function() {
		return this.getSelected().length >= 2;
	},

	selectChoice: function(choice) {
		return function() {
			var selectedChoices = this.getSelected();

			if(choice.selected) {
				choice.deselect();
				return;
			}
			else if(selectedChoices.length < 2) {
				choice.select();
				selectedChoices = this.getSelected();
			}

			if(selectedChoices.length === 2) {
				store.submitAnswer(this.lessonId, this.id, this.isCorrect());

				this.mergeState({
					showingFeedback: true
				});
				this.animate("feedback");
			}
		}.bind(this);
	},

	renderFeedback: function() {
		var correct = this.isCorrect(),
			correctStr = correct ? "correct" : "incorrect";

		return (
			<div className={'feedback-words-container multiple ' + correctStr}>
				<div className='feedback-words'>
					{this.getSelected().map(function(choice) {
						return (
							<div key={choice.word} className='feedback-word'>
								<WordImage word={choice.word} disableHCenter={true}/>
								{!correct ? 
									<div className='incorrect-feedback-icon' /> :
									null
								}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};