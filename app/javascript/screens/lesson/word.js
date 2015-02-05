"use strict";

var _           = require("lodash"),
    React       = require("react"),
    Lesson      = require("screens/lesson"),
    WordChoice  = require("components/word-choice");

var WordLesson = React.createClass({
    getSounds: function() {
        var sounds = _.clone(this.props.sounds),
            choiceSounds = this.props.choices.reduce(function(sounds, choice) {
                sounds[choice.word] = "assets/audio/words/lesson-words/"+choice.word;
                return sounds;
            }, {});

        return _.extend(sounds, choiceSounds);
    },

    renderChoice: function(lesson, choice) {
        return (
            <WordChoice
                {...choice}
                sound={lesson.getSound(choice.word)}
                soundDisabled={lesson.state.animating}
                key={choice.word}/>
        );
    },

    render: function() {
        return (
            <Lesson {...this.props}
                sounds={this.getSounds()}
                renderChoice={this.renderChoice}/>
        );
    }
});

module.exports = WordLesson;