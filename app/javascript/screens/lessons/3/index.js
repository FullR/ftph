var React      = require("react"),
    WordLesson = require("screens/lesson/word"),
    lessonInfo = require("./info");

var Lesson3 = React.createClass({
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
                "24": {"correct": false}
            }
        };
    },

    render: function() {
        var activities     = require("./activities"),
            storage        = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-screen"] || "1",
            nextActivity   = activities[nextActivityId],
            choices        = [
                {word: "cat", hidden: true}
            ];

        return (
            <WordLesson
                id         = {lessonInfo.id}
                title      = {lessonInfo.title}
                subtitle   = {lessonInfo.subtitle}
                section    = {lessonInfo.section}
                nextScreen = {nextActivity}
                nextLabel  = {`Activity ${nextActivityId}`}
                choices    = {choices}
                sounds={{
                    "the-first-sound": "lessons/lesson-3/instructions/the-first-sound",
                    "the-last-sound":  "lessons/lesson-3/instructions/the-last-sound",
                    "is":              "lessons/lesson-3/instructions/is",
                    "say-the":         "lessons/lesson-3/instructions/say-the",
                    "k":               "phonics/lesson-phonics/kh",
                    "t":               "phonics/lesson-phonics/t",
                    "slowly":          "common/slowly",
                    "touch-arrow":     "common/touch-arrow"
                }}

                
                instructions={(then) => [
                    then("say", "the-first-sound"), then("wait", 250),
                    then("uncenterActor"),

                    then("revealChoice", 0),
                    then("say", "words.0"),         then("wait", 250),

                    then("say", "is"),              then("wait", 250),
                    then("say", "k"),               then("wait", 250),

                    then("say", "the-last-sound"),  then("wait", 250),
                    then("say", "words.0"),         then("wait", 250),
                    then("say", "is"),              then("wait", 250),
                    then("say", "t"),               then("wait", 250),

                    then("say", "say-the"),         then("wait", 250),
                    then("say", "words.0"),         then("wait", 250),
                    then("say", "slowly"),          then("wait", 250),

                    then("say", "touch-arrow"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson3;