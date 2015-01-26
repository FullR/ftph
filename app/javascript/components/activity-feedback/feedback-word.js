"use strict";

var React     = require("react"),
    WordImage = require("components/word-image"),
    FeedbackFrame = require("components/activity-feedback/feedback-frame");

var FeedbackWord = React.createClass({

    render: function() {
        var correct = this.props.correct,
            word = this.props.word;

        return (
            <FeedbackFrame correct={correct}>
                <WordImage word={word} disableHCenter={true}/>
            </FeedbackFrame>
        );
    }
});

module.exports = FeedbackWord;