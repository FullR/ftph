var React = require("react");
var WordLesson = require("screens/lesson/word");
var lessonInfo = require("./info");
var activities = require("./activities");

var Lesson20 = React.createClass({
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
                "11": {"correct": false},
                "12": {"correct": false},
                "13": {"correct": false},
                "14": {"correct": false},
                "15": {"correct": false},
                "16": {"correct": false},
                "17": {"correct": false},
                "18": {"correct": false},
                "19": {"correct": false},
                "20": {"correct": false},
                "21": {"correct": false},
                "22": {"correct": false},
                "23": {"correct": false},
                "24": {"correct": false},
                "25": {"correct": false},
                "26": {"correct": false},
                "27": {"correct": false},
                "28": {"correct": false},
                "29": {"correct": false},
                "30": {"correct": false}
            }
        };
    },

    render: function() {
        var storage = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity   = activities[nextActivityId],
            choices = [
                {word: "ax"},
                {word: "Ed"},
                {word: "itch"},
                {word: "otter"},
                {word: "up"}
            ];

        return (
            <WordLesson {...lessonInfo}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={choices}
                sounds={{
                    "letters": ["a", "e", "i", "o", "u"].map((letter) =>
                        `common/lessons/letters/${letter}`
                    ),
                    "phonics": ["ah", "eh", "ih", "oh", "uh"].map((phonic) =>
                        `phonics/lesson-phonics/${phonic}`
                    ),

                    "lets-review": "lessons/lesson-20/lets-review",
                    "the-letter": "lessons/lesson-20/the-letter",
                    "makes-the": "lessons/lesson-20/makes-the",
                    "sound-in": "lessons/lesson-20/sound-in",
                    "say-each": "lessons/lesson-20/say-each",
                    "then-touch": "common/lessons/then-touch"
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

module.exports = Lesson20;