var React      = require("react"),
    WordLesson = require("screens/lesson/word"),
    lessonInfo = require("./info"),
    activities = require("./activities");

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
        var storage = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity = activities[nextActivityId],
            choices = [
                {word: "rat"},
                {word: "wet"},
                {word: "sit"},
                {word: "pot"},
                {word: "rug"}
            ];

        return (
            <WordLesson {...lessonInfo}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={choices}

                sounds={{
                    "phonics": ["ah", "eh", "ih", "oh", "uh"].map((phonic) => `phonics/lesson-phonics/${phonic}`),
                    "makes-the": "lessons/lesson-13/instructions/makes-the",
                    "and": "lessons/lesson-13/instructions/and",
                    "sound": "lessons/lesson-13/instructions/sound",
                    "touch-the": "lessons/lesson-13/instructions/touch-the"
                }}

                instructions={(then) => [
                    then("uncenterActor"),
                    ...choices.map((choice, index) => [
                        index === 4 ?
                            then("say", "and") : 
                            null,
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("say", "makes-the"),
                        then("say", ["phonics", index]),
                        then("say", "sound")
                    ]),
                    then("say", "touch-the"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson13;