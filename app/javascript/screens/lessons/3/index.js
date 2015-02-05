"use strict";

var React      = require("react"),
    WordLesson = require("screens/lesson/word");

var Lesson3 = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activities = require("./activities"),
            storage = this.load("lesson-3"),
            nextActivityId = storage["last-screen"] || "1",
            nextActivity = activities[nextActivityId];

        return (
            <WordLesson
                id="3"
                title="Beginning and Ending Sounds"
                subtitle="Lesson 3"
                section="1"
                nextScreen={nextActivity}
                nextLabel={"Activity " + nextActivityId}
                sounds={{
                    "the-first-sound": "assets/audio/lessons/lesson-3/instructions/the-first-sound",
                    "the-last-sound":  "assets/audio/lessons/lesson-3/instructions/the-last-sound",
                    "is":              "assets/audio/lessons/lesson-3/instructions/is",
                    "say-the":         "assets/audio/lessons/lesson-3/instructions/say-the",
                    "k":               "assets/audio/phonics/lesson-phonics/kh",
                    "t":               "assets/audio/phonics/lesson-phonics/t",
                    "slowly":          "assets/audio/common/slowly",
                    "touch-arrow":     "assets/audio/common/touch-arrow"
                }}

                choices={[
                    {word: "cat", hidden: true}
                ]}
                
                instructions={function(then) {
                    return [
                        then("say", "the-first-sound"), then("wait", 250),
                        then("uncenterActor"),

                        then("revealChoice", 0),
                        then("say", "cat"),             then("wait", 250),

                        then("say", "is"),              then("wait", 250),
                        then("say", "k"),               then("wait", 250),

                        then("say", "the-last-sound"),  then("wait", 250),
                        then("say", "cat"),             then("wait", 250),
                        then("say", "is"),              then("wait", 250),
                        then("say", "t"),               then("wait", 250),

                        then("say", "say-the"),         then("wait", 250), // need to replace sound file
                        then("say", "cat"),             then("wait", 250),
                        then("say", "slowly"),          then("wait", 250),

                        then("say", "touch-arrow"),
                        then("sit")
                    ];
                }}/>
        );
    }
});

module.exports = Lesson3;