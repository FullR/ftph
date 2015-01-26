"use strict";

var _     = require("lodash"),
    React = require("react"),
    get   = require("utility/functional/get"),
    Teacher = require("components/teacher"),
    WordChoice = require("components/word-choice"),
    Info = require("components/activity/info");

module.exports = function(options) {
    var {id, choices, returnRoute, nextRoute, phonic, sublesson, lessonWords, defaultAnimation} = options;

    return React.createClass({
        mixins: [
            require("mixins/storage"),
            require("mixins/sound-container"),
            require("mixins/animation-2"),
            require("mixins/animation-utility/choices"),
            require("mixins/animation-utility/actor")("teacher"),
            require("mixins/animations/choices-only")("choice-1", "choice-2", "choice-3")
        ],
        autoplayAnimation: defaultAnimation || "instructions",

        getInitialState: function() {
            return {
                teacher: {
                    hidden: true,
                    state: "sitting"
                },

                choices: _.cloneDeep(choices)
            };
        },

        componentWillMount: function() {
            this.save("lesson-1.last-activity", id);
            this.save("lesson-"+sublesson+".last-activity", id);
        },

        isShowingFeedback: function() {
            return this.state.choices.some(get("selected"));
        },

        getSounds: function() {
            return {
                // instructions
                "touch-word-same-sound": "assets/audio/lessons/lesson-1/activities/feedback/touch-word-same-sound",
                "and":                   "assets/audio/common/and",
                "lesson-word-1":         "assets/audio/words/activity-words/"+lessonWords[0],
                "lesson-word-2":         "assets/audio/words/activity-words/"+lessonWords[1],

                // Choices
                "choice-1": "assets/audio/words/activity-words/"+choices[0].word,
                "choice-2": "assets/audio/words/activity-words/"+choices[1].word,
                "choice-3": "assets/audio/words/activity-words/"+choices[2].word
            };
        },

        instructions: function(then) {
            return [
                then("hideChoices"),
                then("centerActor"),
                then("revealActor"),

                then("say", "touch-word-same-sound"), then("wait", 250),
                then("say", "lesson-word-1"), then("wait", 250),
                then("say", "lesson-word-2"), then("wait", 250),
                then("uncenterActor"),

                then("revealChoice", 0), then("say", "choice-1"), then("wait", 250),
                then("revealChoice", 1), then("say", "choice-2"), then("wait", 250),
                then("revealChoice", 2), then("say", "choice-3"), then("wait", 250),

                then("sit")
            ];
        },

        selectChoice: function(choice) {
            choice.selected = !choice.selected;
            this.setState(this.state);
        },

        renderChoice: function(choice, index) {
            return (
                <WordChoice {...choice} 
                    sound={this.getSound("choice-"+(index+1))}
                    soundDisabled={this.state.animating}
                    key={choice.word}
                    onClick={this.selectChoice.bind(this, choice)}/>
            );
        },

        render: function() {
            return (
                <div className='activity lesson-1-activity'>
                    <Teacher {...this.state.teacher} onClick={this.animationCallback("instructions")}/>
                    <div className='choices'>{this.state.choices.map(this.renderChoice)}</div>
                    <Info lessonId="1" lessonTitle="Beginning Sounds" activityId={id} activityCount="15" />
                </div>
            );
        }
    });
};