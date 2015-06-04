var _ = require("lodash");
var React = require("react");
var Activity = require("screens/activity");
var WordChoice = require("components/game-screen/word-choice");
var render = require("render");

var WordActivity = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds() {
        return {
            words: this.props.choices.map((choice) => 
                `words/activity-words/${choice.word}`
            )
        };
    },

    // Render methods
    renderChoice(activity, choice, index) {
        return (
            <WordChoice {...choice}
                screenType="activity"
                soundDisabled={activity.state.animating}
                onClick={activity.selectChoice.bind(activity, choice)}
                key={choice.word}/>
        );
    },

    renderFeedback(activity) {
        render(<div>Activity Feedback not found</div>);
    },

    animate(...args) {
        return this.refs.activity.animate(...args);
    },

    isAnimating() {
        return this.refs.activity.isAnimating();
    },

    selectChoice(...args) {
        return this.refs.activity.selectChoice(...args);
    },

    render() {
        return (
            <Activity ref="activity" {...this.props}
                sounds={this.getSounds()}
                renderChoice={this.props.renderChoice || this.renderChoice}
                renderFeedback={this.props.renderFeedback || this.renderFeedback}>

            {this.props.children}
            
            </Activity>
        );
    }
});

module.exports = WordActivity;