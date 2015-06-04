var React      = require("react");
var WordLesson = require("screens/lesson/word");
var lessonInfo = require("./info");
var activities = require("./activities");

var Lesson13 = React.createClass({
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
                "20": {"correct": false}
            }
        };
    },

    render: function() {
        var storage = this.load(lessonInfo.namespace);
        var nextActivityId = storage["last-activity"] || "1";
        var nextActivity = activities[nextActivityId];
        var choices = [
            {word: "rat"},
            {word: "wet"},
            {word: "sit"},
            {word: "pot"},
            {word: "rug"}
        ];

        var delays = [
            [225, 60, 100]
        ];

        return (
            <WordLesson {...lessonInfo}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={choices}

                sounds={{
                    "phonics": ["ah", "eh", "ih", "oh", "uh"].map((phonic) => `phonics/lesson-phonics/${phonic}`),
                    "listen": "lessons/lesson-13/instructions/listen",
                    "makes-the": "lessons/lesson-13/instructions/makes-the",
                    "and": "lessons/lesson-13/instructions/and",
                    "sound": "lessons/lesson-13/instructions/sound",
                    "touch-the": "common/lessons/touch-the"
                }}

                instructions={(then) => [
                    then("say", "listen"),
                    then("wait", 665),
                    then("uncenterActor"),

                    then("revealChoice", 0),
                    then("say", ["words", 0]),
                    then("wait", 225),
                    then("say", "makes-the"),
                    then("wait", 50),
                    then("say", ["phonics", 0]),
                    then("wait", 100),
                    then("say", "sound"),
                    then("wait", 550),

                    then("revealChoice", 1),
                    then("say", ["words", 1]),
                    then("wait", 225),
                    then("say", "makes-the"),
                    then("wait", 125),
                    then("say", ["phonics", 1]),
                    then("wait", 100),
                    then("say", "sound"),
                    then("wait", 475),

                    then("revealChoice", 2),
                    then("say", ["words", 2]),
                    then("wait", 275),
                    then("say", "makes-the"),
                    then("wait", 150),
                    then("say", ["phonics", 2]),
                    then("wait", 100),
                    then("say", "sound"),
                    then("wait", 650),

                    then("revealChoice", 3),
                    then("say", ["words", 3]),
                    then("wait", 250),
                    then("say", "makes-the"),
                    then("wait", 50),
                    then("say", ["phonics", 3]),
                    then("wait", 130),
                    then("say", "sound"),
                    then("wait", 550),

                    then("say", "and"), then("wait", 125),
                    then("revealChoice", 4),
                    then("say", ["words", 4]),
                    then("wait", 100),
                    then("say", "makes-the"),
                    then("wait", 175),
                    then("say", ["phonics", 4]),
                    then("wait", 100),
                    then("say", "sound"),
                    then("wait", 800),

                    then("say", "touch-the"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson13;