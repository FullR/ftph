var React = require("react");
var WordLesson = require("screens/lesson/word");
var lessonInfo = require("./info");

var Lesson1 = React.createClass({
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
                "15": {"correct": false}
            }
        };
    },

    render: function() {
        var activities     = require("./activities"),
            storage        = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity   = activities[nextActivityId],
            choices        = [
                {word: "tail", hidden: true},
                {word: "tip",  hidden: true},
                {word: "tape", hidden: true}
            ];

        return (
            <WordLesson
                id         = {lessonInfo.id}
                title      = {lessonInfo.title}
                subtitle   = {lessonInfo.subtitle}
                section    = {lessonInfo.section}
                nextScreen = {nextActivity}
                nextLabel  = {"Activity " + nextActivityId}
                choices    = {choices}
                sounds={{
                    "the-first-sound": "lessons/lesson-1/instructions/the-first-sound",
                    "is":              "lessons/lesson-1/instructions/is",
                    "say-the-words":   "lessons/lesson-1/instructions/say-the-words",
                    "slowly":          "common/slowly",
                    "t":               "phonics/lesson-phonics/t",
                    "then-touch":     "common/lessons/then-touch"
                }}

                instructions={(then) => [
                    then("say", "the-first-sound"), then("wait", 250),
                    then("uncenterActor"),

                    ...choices.map((choice, i) => [
                        then("revealChoice", i),
                        then("say", ["words", i]),
                        then("wait", 250)
                    ]),

                    then("say", "is"),              then("wait", 250),
                    then("say", "t"),               then("wait", 250),
                    then("say", "say-the-words"),   then("wait", 250),

                    ...choices.map((choice, i) => [
                        then("say", ["words", i]),
                        then("wait", 250)
                    ]),

                    then("say", "slowly"),          then("wait", 250),
                    then("say", "then-touch"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson1;