"use strict";

/*
    Word Activity.

    Params:
        Choices
*/

var _           = require("lodash"),
    React       = require("react"),
    Activity    = require("screens/activity"),
    add         = require("utility/functional/add"),
    WordChoice  = require("components/word-choice"),
    render      = require("render");

var WordActivity = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds: function() {
        return {
            words: _.pluck(this.props.choices, "word").map(add("assets/audio/words/activity-words/"))
        };
    },

    renderFeedback: function(activity) {
        render(<div>Activity Feedback</div>);
    },

    renderChoice: function(activity, choice, index) {
        return (
            <WordChoice {...choice}
                sound={activity.getSound(["words", index])}
                soundDisabled={activity.state.animating}
                onClick={activity.selectChoice.bind(activity, choice)}
                key={choice.word}/>
        );
    },

    render: function() {
        return (
            <Activity {...this.props}
                sounds={this.getSounds()}
                renderChoice={this.renderChoice}
                renderFeedback={this.props.renderFeedback || this.renderFeedback}>

            {this.props.children}
            
            </Activity>
        );
    }
});

module.exports = WordActivity;