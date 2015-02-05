"use strict";

var _ = require("lodash"),
    React = require("react"),
    WordLesson = require("screens/lesson/word");

var SubLesson = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds: function() {
        return {
            phonic: "assets/audio/phonics/lesson-phonics/" + (this.props.phonicFilename || this.props.phonic)
        };
    },

    render: function() {
        return (
            <WordLesson {...this.props}
                sounds={this.getSounds()}/>
        );
    }
});

module.exports = SubLesson;