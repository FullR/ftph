var React = require("react");

var FeedbackFrame = React.createClass({
    render: function() {
        var className = `feedback-words-container single ${this.props.correct ? "correct" : "incorect"}`;
        return (
            <div className={className}>
                <div className='feedback-words'>
                    <div className='feedback-word'>
                        {this.props.children}
                        {!this.props.correct ? 
                            <div className='incorrect-feedback-icon' /> :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FeedbackFrame;