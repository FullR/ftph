var React = require("react");
var WordImage = require("components/game-screen/word-image");
var FeedbackFrame = require("components/activity-feedback/feedback-frame");

var FeedbackWord = React.createClass({
    render() {
        return (
            <FeedbackFrame {...this.props}>
                <WordImage word={this.props.word} disableHCenter={true}/>
            </FeedbackFrame>
        );
    }
});

module.exports = FeedbackWord;