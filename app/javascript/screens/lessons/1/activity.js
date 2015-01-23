"use strict";

var _     = require("lodash"),
    React = require("react"),
    get   = require("utility/functional/get"),
    Teacher = require("components/teacher"),
    WordChoice = require("components/word-choice"),
    CornerInfo = require("components/activity-corner-info");

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
            if(sublesson) {
                this.save("lesson-"+sublesson+".last-activity", id);
            }
        },

        isShowingFeedback: function() {
            return this.state.choices.some(get("selected"));
        },

        getSounds: (lessonWords ? 
            function() { // activities 4-15
                return {
                    // instructions
                    "touch-word-same-sound": "assets/audio/lessons/lesson-1/activities/feedback/touch-word-same-sound",
                    "and":                   "assets/audio/common/and",
                    "lesson-word-1":         "assets/audio/words/activity-words/"+lessonWords[0],
                    "lesson-word-2":         "assets/audio/words/activity-words/"+lessonWords[1],

                    // feedback
                    "applause":              "assets/audio/common/applause",
                    "doesnt-same-sound":     "assets/audio/lessons/lesson-1/activities/feedback/doesnt-same-sound",
                    "begins-same-sound":     "assets/audio/lessons/lesson-1/activities/feedback/begins-same-sound",

                    // Choices
                    "choice-1": "assets/audio/words/activity-words/"+choices[0].word,
                    "choice-2": "assets/audio/words/activity-words/"+choices[1].word,
                    "choice-3": "assets/audio/words/activity-words/"+choices[2].word
                };
            } :
            function() { // activities 1-3
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
            }),

        /* 
            Activities with `lessonWords` use a different instructions/feedback
            than other activities
        */
        instructions: (lessonWords ? 
            function(then) { // activities 4-15
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
            } : 
            function(then) { // activities 1-3
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
            }),

        feedback: (lessonWords ? 
            function(then) { // activities 4-15

            } : 
            function(then) { // activities 1-3

            }),

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

        renderFeedback: function() {
            return (
                <div>Feedback</div>
            );
        },

        render: function() {
            if(this.isShowingFeedback()) {
                return this.renderFeedback();
            }

            return (
                <div className='activity lesson-1-activity'>
                    <Teacher {...this.state.teacher} onClick={this.animationCallback("instructions")}/>
                    <div className='choices'>{this.state.choices.map(this.renderChoice)}</div>
                    <CornerInfo lessonId="1" lessonTitle="Beginning Sounds" activityId={id} activityCount="15" />
                </div>
            );
        }
    });
};

/*module.exports = function(options) {
    return React.createClass({
        mixins: [
            require("mixins/game-screen")("activity", options.choices),
            require("mixins/activity")(options.lessonId || "1", options.id, options.nextRoute, options.returnRoute),
            require("mixins/render/activity/basic"),
            require("mixins/single-choice")
        ],
        defaultAnimation: options.defaultAnimation,
        submitLessonId: options.submitLessonId,

        getInitialState: function() {
            if((+options.id) <= 3) {
                return {
                    instructions: {
                        "touch-the-word": this.sound("assets/audio/lessons/lesson-1/activities/instructions/touch-the-word"),
                        "phonic": this.sound("assets/audio/phonics/activity-phonics/"+options.phonic)
                    },

                    feedback: {
                        "applause":     this.sound("assets/audio/common/applause"),
                        "doesnt-begin": this.sound("assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin"),
                        "begins-with":  this.sound("assets/audio/lessons/lesson-1/activities/feedback/begins-with"),
                    }
                };
            }
            else {
                return {
                    instructions: {
                        "touch-word-same-sound": this.sound("assets/audio/lessons/lesson-1/activities/feedback/touch-word-same-sound"),
                        "and": this.sound("assets/audio/common/and"),
                        "word1": this.sound("assets/audio/words/activity-words/"+options.lessonWords[0]),
                        "word2": this.sound("assets/audio/words/activity-words/"+options.lessonWords[1]),
                    },
                    feedback: {
                        "doesnt-same-sound": this.sound("assets/audio/lessons/lesson-1/activities/feedback/doesnt-same-sound"),
                        "begins-same-sound": this.sound("assets/audio/lessons/lesson-1/activities/feedback/begins-same-sound")
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
                        then("stand"),
                        then("revealActor"),
                        selected.correct ? then("showContinueButton") : null,
                        selected.correct ? then("play", "feedback.applause") : null,
                        then("actorSay", selected),
                        then("wait", 250),
                        then("actorSay", selected.correct ? "feedback.begins-with" : "feedback.doesnt-begin"),
                        then("wait", 250),
                        then("actorSay", "instructions.phonic"),
                        selected.correct ? null : then("showContinueButton")
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
                        then("actorSay", selected.correct ? "feedback.begins-same-sound" : "feedback.doesnt-same-sound"),
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

};*/