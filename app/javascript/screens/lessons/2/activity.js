"use strict";

var React = require("react");

module.exports = function(options) {
    return React.createClass({
        mixins: [
            require("mixins/game-screen")("activity", options.choices),
            require("mixins/activity")("2", options.id, options.nextRoute, options.returnRoute),
            require("mixins/render/activity/basic"),
            require("mixins/single-choice")
        ],
        defaultAnimation: options.defaultAnimation,
        submitLessonId: options.submitLessonId,

        getInitialState: function() {
            if((+options.id) <= 3) {
                return {
                    instructions: {
                        "touch-the-word": this.sound("assets/audio/lessons/lesson-2/activities/instructions/touch-the-word"),
                        "phonic": this.sound("assets/audio/phonics/activity-phonics/"+options.phonic)
                    },

                    feedback: {
                        "applause":     this.sound("assets/audio/common/applause"),
                        "doesnt-end": this.sound("assets/audio/lessons/lesson-2/activities/feedback/doesnt-end"),
                        "ends-with":  this.sound("assets/audio/lessons/lesson-2/activities/feedback/ends-with"),
                    }
                };
            }
            else {
                return {
                    instructions: {
                        "touch-word-same-sound": this.sound("assets/audio/lessons/lesson-2/activities/feedback/touch-word-same-sound"),
                        "and": this.sound("assets/audio/common/and"),
                        "word1": this.sound("assets/audio/words/activity-words/"+options.lessonWords[0]),
                        "word2": this.sound("assets/audio/words/activity-words/"+options.lessonWords[1]),
                    },
                    feedback: {
                        "doesnt-same-sound": this.sound("assets/audio/lessons/lesson-2/activities/feedback/doesnt-same-sound"),
                        "ends-same-sound": this.sound("assets/audio/lessons/lesson-2/activities/feedback/ends-same-sound")
                    }
                };
            }
        },

        instructions: {
            animation: function(then) {
                if((+options.id) <= 3) {
                    return [
                        then("hideChoices"),
                        then("setupActor"),
                        then("actorSay", "instructions.touch-the-word"),
                        then("wait", 250),
                        then("actorSay", "instructions.phonic"),
                        then("wait", 250),
                        then("uncenterActor"),
                        this.actorSayChoices(),
                        then("sit")
                    ];
                }
                else {
                    return [
                        then("hideChoices"),
                        then("setupActor"),
                        then("actorSay", "instructions.touch-word-same-sound"),
                        then("wait", 250),
                        then("actorSay", "instructions.word1"),
                        then("wait", 250),
                        then("actorSay", "instructions.and"),
                        then("wait", 250),
                        then("actorSay", "instructions.word2"),
                        this.actorSayChoices(),
                        then("sit")
                    ];
                }
            }
        },

        feedback: {
            animation: function(then) {
                var selected = this.getSelected()[0];

                if((+options.id) <= 3) {
                    return [
                        selected.correct ? then("showContinueButton") : null,
                        selected.correct ? then("play", "feedback.applause") : null,
                        then("actorSay", selected),
                        then("wait", 250),
                        then("actorSay", selected.correct ? "feedback.ends-with" : "feedback.doesnt-end"),
                        then("wait", 250),
                        then("actorSay", "instructions.phonic"),
                        selected.correct ? null : then("showContinueButton"),
                    ];
                }
                else {
                    return [
                        then("stand"),
                        then("revealActor"),
                        selected.correct ? then("showContinueButton") : null,
                        selected.correct ? then("play", "feedback.applause") : null,
                        then("actorSay", selected),
                        then("wait", 250),
                        then("actorSay", selected.correct ? "feedback.ends-same-sound" : "feedback.doesnt-same-sound"),
                        then("wait", 250),
                        then("actorSay", "instructions.word1"),
                        then("wait", 250),
                        then("actorSay", "instructions.and"),
                        then("wait", 250),
                        then("actorSay", "instructions.word2"),
                        selected.correct ? null : then("showContinueButton")
                    ];
                }
            }
        }
    });

};