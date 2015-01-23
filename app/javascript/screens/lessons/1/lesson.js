"use strict";

var React       = require("react"),
    AdminButton = require("components/admin-button"),
    Choice      = require("components/choice"),
    WordImage   = require("components/word-image"),
    Owl         = require("components/owl"),
    Title       = require("components/lesson-title"),
    WordChoice  = require("components/word-choice"),
    LessonArrow = require("components/lesson-arrow"),
    render      = require("render");

var Lesson1 = React.createClass({
    mixins: [
        require("mixins/storage"),                       // load/save methods
        require("mixins/sound-container"),               // Manage sounds
        require("mixins/animation-2"),                   // Manage playing/stopping animations
        require("mixins/animation-utility/choices"),     // Utility methods for animating choices
        require("mixins/animation-utility/actor")("owl") // Utility methods for animating actor
    ],
    autoplayAnimation: "instructions",

    getInitialState: function() {
        return {
            owl: {
                hidden: true,
                state: "sitting"
            },
            choices: [
                {word: "tail", hidden: true},
                {word: "tip",  hidden: true},
                {word: "tape", hidden: true}
            ]
        };
    },

    componentWillMount: function() {
        this.save("last-lesson", "1");
    },

    getSounds: function() {
        return {
            "the-first-sound": "assets/audio/lessons/lesson-1/instructions/the-first-sound",
            "is":              "assets/audio/lessons/lesson-1/instructions/is",
            "say-the-words":   "assets/audio/lessons/lesson-1/instructions/say-the-words",
            "slowly":          "assets/audio/common/slowly",
            "t":               "assets/audio/phonics/lesson-phonics/t",
            "touch-arrow":     "assets/audio/common/touch-arrow",

            "tail":            "assets/audio/words/lesson-words/tail",
            "tip":             "assets/audio/words/lesson-words/tip",
            "tape":            "assets/audio/words/lesson-words/tape"
        };
    },

    // Instructions animation
    instructions: function(then) {
        return [
            then("hideChoices"),
            then("centerActor"),
            then("revealActor"),
            then("say", "the-first-sound"), then("wait", 250),
            then("uncenterActor"),
            then("revealChoice", 0),
            then("say", "tail"),            then("wait", 250),
            then("revealChoice", 1),
            then("say", "tip"),             then("wait", 250),
            then("revealChoice", 2),
            then("say", "tape"),            then("wait", 250),
            then("say", "is"),              then("wait", 250),
            then("say", "t"),               then("wait", 250),
            then("say", "say-the-words"),   then("wait", 250),
            then("say", "tail"),            then("wait", 250),
            then("say", "tip"),             then("wait", 250),
            then("say", "tape"),            then("wait", 250),
            then("say", "slowly"),          then("wait", 250),
            then("say", "touch-arrow"),
            then("sit")
        ];
    },

    renderChoice: function(choice) {
        return (
            <WordChoice
                {...choice}
                sound={this.getSound(choice.word)}
                soundDisabled={this.state.animating}
                key={choice.word}/>
        );
    },

    render: function() {
        var lastActivity = this.load("lesson-1.last-activity") || "1";
        return (
            <div className='lesson lesson-1'>
                <Title title="Beginning Sounds" subtitle="Lesson 1" />

                {/* `animationCallback` comes from the animation-utility/actor mixin */}
                <Owl {...this.state.owl} onClick={this.animationCallback("instructions")} />

                <div className='choices'>
                    {this.state.choices.map(this.renderChoice)}
                </div>

                <LessonArrow next={require("./activities")[lastActivity]}>
                    Activity {lastActivity}
                </LessonArrow>

                <AdminButton section="1" backComponent={Lesson1} />
            </div>
        );
    }
});

module.exports = Lesson1;