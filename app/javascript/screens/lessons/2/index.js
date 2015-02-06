"use strict";

var React      = require("react"),
    WordLesson = require("screens/lesson/word"),
    lessonInfo = require("./info");

var Lesson2 = React.createClass({
    mixins: [require("mixins/storage")],
    displayName: "lesson-2",

    render: function() {
        var storage        = this.load(lessonInfo.namespace),
            activities     = require("./activities"),
            nextActivityId = storage["last-screen"] || "1",
            nextActivity   = activities[nextActivityId];

        return (
            <WordLesson
                id         = {lessonInfo.id}
                title      = {lessonInfo.title}
                subtitle   = {lessonInfo.subtitle}
                nextScreen = {nextActivity}
                nextLabel  = {"Activity " + nextActivityId}

                sounds={{
                    "the-last-sound": "assets/audio/lessons/lesson-2/instructions/the-last-sound",
                    "is":             "assets/audio/lessons/lesson-2/instructions/is",
                    "say-the-words":  "assets/audio/lessons/lesson-2/instructions/say-the-words",
                    "slowly":         "assets/audio/common/slowly",
                    "t":              "assets/audio/phonics/lesson-phonics/t",
                    "touch-arrow":    "assets/audio/common/touch-arrow"
                }}

                choices={[
                    {word: "hot", hidden: true},
                    {word: "bat", hidden: true},
                    {word: "sit", hidden: true}
                ]}
                
                instructions={function(then) {
                    return [
                        then("say", "the-last-sound"), then("wait", 250),
                        then("uncenterActor"),
                        then("revealChoice", 0),
                        then("say", "hot"),            then("wait", 250),
                        then("revealChoice", 1),
                        then("say", "bat"),            then("wait", 250),
                        then("revealChoice", 2),
                        then("say", "sit"),            then("wait", 250),
                        then("say", "is"),             then("wait", 250),
                        then("say", "t"),              then("wait", 250),
                        then("say", "say-the-words"),  then("wait", 250),
                        then("say", "hot"),            then("wait", 250),
                        then("say", "bat"),            then("wait", 250),
                        then("say", "sit"),            then("wait", 250),
                        then("say", "slowly"),         then("wait", 250),
                        then("say", "touch-arrow"),
                        then("sit")
                    ];
                }}/>
        );
    }
});

module.exports = Lesson2;