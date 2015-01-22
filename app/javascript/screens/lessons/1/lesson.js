"use strict";

var React       = require("react"),
    AdminButton = require("components/admin-button"),
    Choice      = require("components/choice"),
    WordImage   = require("components/word-image"),
    Owl         = require("components/owl"),
    Title       = require("components/lesson-title");

var Lesson1 = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/sound-container"),
        require("mixins/animation-2"),
        require("mixins/animation-utility/choices"),
        require("mixins/animation-utility/actor")("owl")
    ],
    autoplayAnimation: "instructions",

    getInitialState: function() {
        return {
            owl: {
                centered: false,
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

    getSounds: function() {
        return {
            "the-first-sound": "assets/audio/lessons/lesson-1/instructions/the-first-sound",
            "is":              "assets/audio/lessons/lesson-1/instructions/is",
            "say-the-words":   "assets/audio/lessons/lesson-1/instructions/say-the-words",
            "slowly":          "assets/audio/common/slowly",
            "t":               "assets/audio/phonics/lesson-phonics/t",
            "touch-arrow":     "assets/audio/common/touch-arrow",

            "tail": "assets/audio/words/lesson-words/tail",
            "tip": "assets/audio/words/lesson-words/tip",
            "tape": "assets/audio/words/lesson-words/tape"
        };
    },

    // Instructions animation
    instructions: function(then) {
        return [
            then("hideChoices"),
            then("centerActor"),
            then("revealActor"),

            then("say", "the-first-sound"),
            then("wait", 250),

            then("uncenterActor"),
            then("revealChoice", 0),
            then("say", "tail"),
            then("wait", 250),

            then("revealChoice", 1),
            then("say", "tip"),
            then("wait", 250),

            then("revealChoice", 2),
            then("say", "tape"),
            then("wait", 250),

            then("say", "is"),
            then("wait", 250),

            then("say", "t"),
            then("wait", 250),

            then("say", "say-the-words"),
            then("wait", 250),

            then("say", "tail"),
            then("wait", 250),

            then("say", "tip"),
            then("wait", 250),

            then("say", "tape"),
            then("wait", 250),

            then("say", "slowly"),
            then("wait", 250),

            then("say", "touch-arrow"),

            then("sit")
        ];
    },

    render: function() {
        this.state.owl.onClick = this.state.animating ? null : this.animate.bind(this, "instructions");

        return (
            <div className='lesson lesson-1'>
                <Title title="Beginning Sounds" subtitle="Lesson 1" />

                <Owl {...this.state.owl} />

                <div className='choices'>
                    {this.state.choices.map(function(choice) {
                        return (
                            <Choice
                                sound={this.getSound(choice.word)}
                                soundDisabled={this.state.animating}
                                hidden={choice.hidden} 
                                ref={choice.word} 
                                key={choice.word}>

                                <WordImage word={choice.word}/>
                            </Choice>
                        );
                    }, this)}
                </div>

                <AdminButton />
            </div>
        );
    }
});

module.exports = Lesson1;