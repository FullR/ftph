"use strict";

/*
    Word Activity.

    Params:
        Choices
*/

var _           = require("lodash"),
    React       = require("react"),
    Activity    = require("screens/activity"),
    WordChoice  = require("components/word-choice"),
    render      = require("render");

var WordActivity = React.createClass({
    getSounds: function() {
        var sounds = _.clone(this.props.sounds || {}),
            choiceSounds = this.props.choices.reduce(function(sounds, choice) {
                sounds[choice.word] = "assets/audio/words/activity-words/"+choice.word;
                return sounds;
            }, {});

        return _.extend(sounds, choiceSounds);
    },

    renderFeedback: function(activity) {
        render(<div>Activity Feedback</div>);
    },

    renderChoice: function(activity, choice) {
        return (
            <WordChoice {...choice}
                sound={activity.getSound(choice.word)}
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