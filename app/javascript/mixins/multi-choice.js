"use strict";

var React     = require("react"),
    WordImage = require("components/word-image"),
    store     = require("storage");

module.exports = {
    // Returns true if the feedback should be displayed
    shouldShowFeedback: function() {
        return this.getSelected().length >= 2;
    },

    // Select/deselect a choice
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
                store.submitAnswer(this.lessonId, this.activityId, {
                    correct: this.isCorrect(),
                    selectedIndexes: this.getSelectedIndexes()
                });

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