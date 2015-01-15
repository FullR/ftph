"use strict";

var React     = require("react"),
    WordImage = require("components/word-image");

module.exports = function(options) {
    return React.createClass({
        mixins: [
            require("mixins/game-screen")("activity", options.choices),
            require("mixins/activity")("4", options.id, options.nextRoute),
            require("mixins/render/activity/basic"),
            require("mixins/single-choice")
        ],
        defaultAnimation: options.defaultAnimation,

        getInitialState: function() {
            return {
                instructions: {
                    "touch-the": this.sound("assets/audio/lessons/lesson-4/activities/instructions/touch-the"),
                    "rhyme-word":   this.sound("assets/audio/words/activity-words/"+options.rhymeWord)
                },

                feedback: {
                    "applause": this.sound("assets/audio/common/applause"),
                    "rhyme": this.sound("assets/audio/lessons/lesson-4/activities/feedback/rhyme"),
                    "does-not": this.sound("assets/audio/lessons/lesson-4/activities/feedback/does-not"),
                }
            };
        },

        instructions: {
            animation: function(then) {
                return [
                    then("hideChoices"),
                    then("setupActor"),
                    then("uncenterActor"),
                    then("actorSay", "instructions.touch-the"),
                    then("wait", 200),
                    then("actorSay", "instructions.rhyme-word"),
                    then("wait", 250),
                    this.actorSayChoices(),
                    then("sit")
                ];
            }
        },

        feedback: {
            animation: function(then) {
                var selected = this.getSelected()[0];

                if(this.isCorrect()) {
                    return [
                        then("showContinueButton"),
                        then("play", "feedback.applause"),
                        then("actorSay", selected),
                        then("wait", 250),
                        then("actorSay", "feedback.rhyme"),
                        then("wait", 250),
                        then("actorSay", "instructions.rhyme-word")
                    ];
                }
                else {
                    return  [
                        then("actorSay", selected),
                        then("wait", 250),
                        then("actorSay", "feedback.does-not"),
                        then("wait", 250),
                        then("actorSay", "instructions.rhyme-word"),
                        then("showContinueButton")
                    ];
                }
            }
        },

        renderExtras: function() {
            return (
                <div className='rhyme-word'>
                    <WordImage word={options.rhymeWord} />
                </div>
            );
        }
    });

};