var React        = require("react"),
    FeedbackWord = require("components/activity-feedback/feedback-word");

var FeedbackWordGroup = React.createClass({
    mixins: [require("mixins/class-names")],

    render: function() {
        var classNames = this.classNames(
            "feedback-word-group",
            this.props.correct ? "feedback-word-group--correct" : null
        );

        return (
            <div className={classNames}>
                <div className="feedback-word-group__frames">
                    {this.props.words.map((word) =>
                        <FeedbackWord key={word} word={word} correct={this.props.correct}/>
                    )}
                </div>
            </div>
        );
    }
});

module.exports = FeedbackWordGroup;