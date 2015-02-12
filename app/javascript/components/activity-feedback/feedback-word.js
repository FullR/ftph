var React         = require("react"),
    WordImage     = require("components/game-screen/word-image"),
    FeedbackFrame = require("components/activity-feedback/feedback-frame");

var FeedbackWord = React.createClass({
    render: function() {
        return (
            <FeedbackFrame {...this.props}>
                <WordImage word={this.props.word} disableHCenter={true}/>
            </FeedbackFrame>
        );
    }
});

module.exports = FeedbackWord;