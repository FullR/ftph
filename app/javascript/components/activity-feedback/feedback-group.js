var React = require("react");
var FeedbackFrame = require("components/activity-feedback/feedback-frame");

var FeedbackGroup = React.createClass({
    mixins: [require("mixins/class-names")],

    render() {
        var classNames = this.classNames(
            "feedback-group",
            this.props.correct ? "feedback-group--correct" : null
        );

        return (
            <div className={classNames}>
                <div className="feedback-group__frames">
                    {React.Children.map(this.props.children, (child) => 
                        <FeedbackFrame correct={this.props.correct}>
                            {child}
                        </FeedbackFrame>
                    )}
                </div>
            </div>
        );
    }
});

module.exports = FeedbackGroup;