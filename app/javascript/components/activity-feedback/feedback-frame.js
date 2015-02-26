var React = require("react");

var FeedbackFrame = React.createClass({
    render: function() {
        return (
            <div {...this.props} className="feedback-frame">
                {this.props.children}
                {!this.props.correct ?
                    <div className="feedback-frame__icon" /> :
                    null
                }
            </div>
        );
    }
});

module.exports = FeedbackFrame;