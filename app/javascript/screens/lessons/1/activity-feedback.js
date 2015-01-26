"use strict";

var React        = require("react"),
    WordImage    = require("components/word-image"),
    Teacher      = require("components/teacher"),
    FeedbackWord = require("components/activity-feedback/feedback-word"),
    AdminButton  = require("components/admin-button");

var ActivityFeedback = React.createClass({
    mixins: [
        require("mixins/sound-container"),
        require("mixins/animation-2"),
        require("mixins/animation-utility/actor")("teacher")
    ],
    autoplayAnimation: "animation",

    getInitialState: function() {
        return {
            hidingContinueButton: true,
            teacher: {
                state: "sitting",
                hidden: false
            }
        };
    },

    getSounds: function() {
        return {
            // feedback
            "selected-word": "assets/audio/words/activity-words/"+this.props.selected.word,
            "applause":     "assets/audio/common/applause",
            "doesnt-begin": "assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin",
            "begins-with":  "assets/audio/lessons/lesson-1/activities/feedback/begins-with",
            "t": "assets/audio/phonics/activity-phonics/t"
        };
    },

    animation: function(then) {
        var selected = this.props.selected;

        if(selected.correct) {
            return [
                then("say", "applause"), then("wait", 250),
                then("say", "selected-word"), then("wait", 250),
                then("say", "begins-with"), then("wait", 250),
                then("say", "t")
            ];
        }
        else {
            return [
                then("say", "selected-word"), then("wait", 250),
                then("say", "doesnt-begin"), then("wait", 250),
                then("say", "t")
            ];
        }
    },

    render: require("templates/activity-feedback/single-word")
});

module.exports = ActivityFeedback;