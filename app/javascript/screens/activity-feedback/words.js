var React = require("react");

var ActivityMultiWordFeedback = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds() {
        return {
            "words": this.props.words.map((word) => `words/activity-words/${word}`)
        };
    },

    render() {
        var Feedback = require("screens/activity-feedback"),
            FeedbackWordGroup = require("components/activity-feedback/feedback-word-group");

        return (
            <Feedback {...this.props} sounds={this.getSounds()}>
                <FeedbackWordGroup
                    correct={this.props.correct}
                    words={this.props.words}/>
            </Feedback>
        );
    }
});

module.exports = ActivityMultiWordFeedback;