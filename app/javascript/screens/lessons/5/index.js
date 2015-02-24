var React      = require("react"),
    WordLesson = require("screens/lesson/word"),
    Feedback   = require("screens/lessons/1/lesson-feedback"),
    lessonInfo = require("./info");

var Lesson5 = React.createClass({
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
                "19": {"correct": false}
            }
        };
    },

    render: function() {
        var activities     = require("./activities"),
            storage        = this.load(lessonInfo),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity   = activities[nextActivityId],
            choiceGroup1   = [                    
                {word: "red",   hidden: true},
                {word: "head",  hidden: true},
                {word: "bed",   hidden: true}
            ],
            choiceGroup2   = [
                {word: "wait",  hidden: true, detached: true},
                {word: "gate",  hidden: true, detached: true},
                {word: "eight", hidden: true, detached: true}
            ];

        return (
            <WordLesson
                id         = {lessonInfo.id}
                title      = {lessonInfo.title}
                subtitle   = {lessonInfo.subtitle}
                section    = {lessonInfo.section}
                nextScreen = {nextActivity}
                nextLabel  = {`Activity ${nextActivityId}`}
                sounds={{
                    "words-like":      "lessons/lesson-4/instructions/words-like",
                    "rhyme-because":   "lessons/lesson-4/instructions/rhyme-because",
                    "rhyme-because-2": "lessons/lesson-4/instructions/rhyme-because-2",
                    "slowly":          "common/slowly",
                    "touch-arrow":     "common/touch-arrow"
                }}

                choices={[
                    ...choiceGroup1,
                    ...choiceGroup2
                ]}
                
                instructions={(then) => [
                    // Attach choice group 1, detach group 2, and hide group 2
                    ...choiceGroup1.map((choice, index) => [
                        then("attachChoice", index),
                        then("detachChoice", index + 3),
                        then("hideChoice", index + 3)
                    ]),

                    then("say", "words-like"),
                    then("wait", 250),
                    then("uncenterActor"),

                    // Reveal and say group 1
                    ...choiceGroup1.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),

                    then("say", "rhyme-because"), then("wait", 250),

                    // Attach group 2 and detach group 1
                    ...choiceGroup1.map((choice, index) => [
                        then("detachChoice", index),
                        then("attachChoice", index + 3)
                    ]),


                    // Reveal and say group 2
                    ...choiceGroup1.map((choice, index) => [
                        then("revealChoice", index + 3),
                        then("say", ["words", index + 3]),
                        then("wait", 250)
                    ]),

                    then("say", "rhyme-because-2"),

                    // Say group 2
                    ...choiceGroup1.map((choice, index) => [
                        then("say", ["words", index + 3]),
                        then("wait", 250)
                    ]),

                    then("say", "slowly"),
                    then("wait", 250),
                    then("say", "touch-arrow"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson5;