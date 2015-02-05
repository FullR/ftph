"use strict";

var React      = require("react"),
    WordLesson = require("screens/lesson/word"),
    Feedback   = require("screens/lessons/1/lesson-feedback");

var Lesson5 = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activities = require("./activities"),
            storage = this.load("lesson-5"),
            nextActivityId = storage["last-screen"] || "1",
            nextActivity = activities[nextActivityId];

        return (
            <WordLesson
                id="5"
                title="Rhyme Time"
                subtitle="Lesson 5"
                section="1"
                nextScreen={nextActivity}
                nextLabel={"Activity " + nextActivityId}
                sounds={{
                    "words-like":      "assets/audio/lessons/lesson-4/instructions/words-like",
                    "rhyme-because":   "assets/audio/lessons/lesson-4/instructions/rhyme-because",
                    "rhyme-because-2": "assets/audio/lessons/lesson-4/instructions/rhyme-because-2",
                    "slowly":          "assets/audio/common/slowly",
                    "touch-arrow":     "assets/audio/common/touch-arrow"
                }}

                choices={[
                    {word: "red",   hidden: true},
                    {word: "head",  hidden: true},
                    {word: "bed",   hidden: true},

                    {word: "wait",  hidden: true, detached: true},
                    {word: "gate",  hidden: true, detached: true},
                    {word: "eight", hidden: true, detached: true}
                ]}
                
                instructions={function(then) {
                    return [
                        then("attachChoice", 0), then("attachChoice", 1), then("attachChoice", 2),
                        then("detachChoice", 3), then("detachChoice", 4), then("detachChoice", 5),
                        then("hideChoice", 3),   then("hideChoice", 4),   then("hideChoice", 5),

                        then("say", "words-like"),    then("wait", 250),
                        then("uncenterActor"),

                        then("revealChoice", 0),
                        then("say", "red"),           then("wait", 250),
                        then("revealChoice", 1),
                        then("say", "head"),          then("wait", 250),
                        then("revealChoice", 2),
                        then("say", "bed"),           then("wait", 250),

                        then("say", "rhyme-because"), then("wait", 250),

                        then("detachChoice", 0), then("detachChoice", 1), then("detachChoice", 2),
                        then("attachChoice", 3), then("attachChoice", 4), then("attachChoice", 5),

                        then("revealChoice", 3),
                        then("say", "wait"),          then("wait", 250),
                        then("revealChoice", 4),
                        then("say", "gate"),          then("wait", 250),
                        then("revealChoice", 5),
                        then("say", "eight"),         then("wait", 250),

                        then("say", "rhyme-because-2"),

                        then("say", "wait"),          then("wait", 250),
                        then("say", "gate"),          then("wait", 250),
                        then("say", "eight"),         then("wait", 250),

                        then("say", "slowly"),        then("wait", 250),

                        then("say", "touch-arrow"),

                        then("sit")
                    ];
                }}/>
        );
    }
});

module.exports = Lesson5;