var React = require("react");
var WordLesson = require("screens/lesson/word");
var lessonInfo = require("./info");
var activities = require("./activities");

var Lesson21 = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/initial-storage")(lessonInfo.namespace)
    ],

    getInitialStorage: function() {
        return {
            "last-screen": null,
            "activities": {
                "1":  {"correct": false},
                "2":  {"correct": false},
                "3":  {"correct": false},
                "4":  {"correct": false},
                "5":  {"correct": false},
                "6":  {"correct": false},
                "7":  {"correct": false},
                "8":  {"correct": false},
                "9":  {"correct": false},
                "10": {"correct": false},
                "11": {"correct": false}
            }
        };
    },

    render: function() {
        var storage = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity   = activities[nextActivityId],
            choices = [
                {word: "bat"},
                {word: "bed"},
                {word: "big"},
                {word: "box"},
                {word: "bug"},

                {word: "back"},
                {word: "bath"},
                {word: "baboon"}
            ];

        return (
            <WordLesson {...lessonInfo}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={choices}
                sounds={{
                    "the-letter": "lessons/consonant-short-vowel/the-letter",
                    "looks-like-this": "lessons/consonant-short-vowel/looks-like-this",
                    "makes-the-beginning": "lessons/consonant-short-vowel/makes-the-beginning",
                    "words-like": "lessons/consonant-short-vowel/words-like",
                    "all-begin-with": "lessons/consonant-short-vowel/all-begin-with",
                    "we-use": "lessons/consonant-short-vowel/we-use",
                    "to-write": "lessons/consonant-short-vowel/to-write",
                    "sound": "lessons/consonant-short-vowel/sound",
                    "when-we-read": "lessons/consonant-short-vowel/when-we-read",
                    "they-tell-us": "lessons/consonant-short-vowel/they-tell-us",
                    "touch-the-green": "lessons/consonant-short-vowel/touch-the-green"
                }}
                instructions={(then) => [
                    then("say", "lets-review"),
                    ...choices.map((choice, index) => [
                        then("say", "the-letter"),
                        then("say", ["letters", index]),
                        then("say", "makes-the"),
                        then("say", ["phonics", index]),
                        then("say", "sound-in"),
                        then("uncenterActor"),
                        then("revealChoice", index),
                        then("say", ["words", index])
                    ]),
                    then("say", "say-each"),
                    then("say", "then-touch"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson21;