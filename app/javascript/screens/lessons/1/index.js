"use strict";

var React      = require("react"),
    WordLesson = require("screens/lesson/word");

var Lesson1 = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activities = require("./activities"),
            storage = this.load("lesson-1"),
            nextActivityId = storage["last-screen"] || "1",
            nextActivity = activities[nextActivityId];

        return (
            <WordLesson
                id="1"
                title="Beginning Sounds"
                subtitle="Lesson 1"
                section="1"
                nextScreen={nextActivity}
                nextLabel={"Activity " + nextActivityId}
                sounds={{
                    "the-first-sound": "assets/audio/lessons/lesson-1/instructions/the-first-sound",
                    "is":              "assets/audio/lessons/lesson-1/instructions/is",
                    "say-the-words":   "assets/audio/lessons/lesson-1/instructions/say-the-words",
                    "slowly":          "assets/audio/common/slowly",
                    "t":               "assets/audio/phonics/lesson-phonics/t",
                    "touch-arrow":     "assets/audio/common/touch-arrow"
                }}

                choices={[
                    {word: "tail", hidden: true},
                    {word: "tip",  hidden: true},
                    {word: "tape", hidden: true}
                ]}
                
                instructions={function(then) {
                    return [
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
                }}/>
        );
    }
});

module.exports = Lesson1;