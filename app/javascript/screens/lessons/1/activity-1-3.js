"use strict";

var _     = require("lodash"),
    React = require("react"),
    Teacher = require("components/teacher"),
    WordImage = require("components/word-image"),
    WordChoice = require("components/word-choice"),
    CornerInfo = require("components/activity-corner-info"),
    AdminButton = require("components/admin-button"),
    Feedback = require("./activity-feedback"),
    render   = require("render");

module.exports = function(options) {
    var {id, choices, returnRoute, nextRoute, phonic, sublesson, lessonWords, defaultAnimation} = options;

    var Activity = React.createClass({
        mixins: [
            require("mixins/storage"),
            require("mixins/sound-container"),
            require("mixins/choice-utility")(1),
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
        },

        getSounds: function() {
            return {
                // instructions
                "touch-the-word":        "assets/audio/lessons/lesson-1/activities/instructions/touch-the-word",
                "phonic":                "assets/audio/phonics/activity-phonics/"+phonic,

                // feedback
                "applause":              "assets/audio/common/applause",
                "doesnt-begin":          "assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin",
                "begins-with":           "assets/audio/lessons/lesson-1/activities/feedback/begins-with",

                // Choices
                "choice-1": "assets/audio/words/activity-words/"+choices[0].word,
                "choice-2": "assets/audio/words/activity-words/"+choices[1].word,
                "choice-3": "assets/audio/words/activity-words/"+choices[2].word
            };
        },

        instructions: function(then) { // activities 1-3
            return [
                then("hideChoices"),
                then("centerActor"),
                then("revealActor"),

                then("say", "touch-the-word"), then("wait", 250),
                then("say", "phonic"), then("wait", 250),
                then("uncenterActor"),

                then("revealChoice", 0), then("say", "choice-1"), then("wait", 250),
                then("revealChoice", 1), then("say", "choice-2"), then("wait", 250),
                then("revealChoice", 2), then("say", "choice-3"), then("wait", 250),

                then("sit")
            ];
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

        selectChoice: function(choice) {
            choice.selected = !choice.selected;

            this.stopAnimation();
            this.setState(this.state);
        },

        componentDidUpdate: function() {
            if(this.isShowingFeedback()) {
                render(Feedback, {selected: this.getSelectedChoices()[0]});
            }
        },

        render: function() {
            return (
                <div className='activity lesson-1-activity'>
                    <Teacher {...this.state.teacher} onClick={this.animationCallback("instructions")}/>
                    <div className='choices'>{this.state.choices.map(this.renderChoice)}</div>
                    <CornerInfo lessonId="1" lessonTitle="Beginning Sounds" activityId={id} activityCount="15" />
                    <AdminButton section="1" backComponent={Activity}/>
                </div>
            );
        }
    });

    return Activity;
};