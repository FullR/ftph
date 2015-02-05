"use strict";

var React     = require("react"),
    WordImage = require("components/word-image"),
    Feedback  = require("screens/activity-feedback");

var ActivitySingleWordFeedback = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds: function() {
        return {
            "word": "assets/audio/words/activity-words/" + this.props.word
        };
    },

    render: function() {
        var word = this.props.word,
            correctStr = this.props.correct ? "correct" : "incorrect";

        return (
            <Feedback {...this.props} sounds={this.getSounds()}>
                <div className={'feedback-words-container single ' + correctStr}>
                    <div className='feedback-words'>
                        <div className='feedback-word'>
                            <WordImage word={this.props.word} disableHCenter={true}/>
                            {!this.props.correct ? 
                                <div className='incorrect-feedback-icon' /> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </Feedback>
        );
    }
});

module.exports = ActivitySingleWordFeedback;