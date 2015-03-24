var React = require("react"),
    WordLesson = require("screens/lesson/word"),
    lessonInfo = require("./info"),
    activities = require("./activities");

var Lesson14 = React.createClass({
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
        var storage = this.load(lessonInfo.namespace),
            nextActivityId = storage["last-activity"] || "1",
            nextActivity   = activities[nextActivityId];

        return (
            <WordLesson {...lessonInfo}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={[
                    {word: "bad"},
                    {word: "bed"},
                    {word: "hit"},
                    {word: "hot"}
                ]}
                sounds={{
                    "if-you-take": "lessons/lesson-14/if-you-take",
                    "sound-from": "lessons/lesson-14/sound-from",
                    "and-put": "lessons/lesson-14/and-put",
                    "sound": "lessons/lesson-14/sound",
                    "the-new-word": "lessons/lesson-14/the-new-word",
                    "touch-the": "common/lessons/touch-the",
                    "ah": "phonics/lesson-phonics/ah",
                    "eh": "phonics/lesson-phonics/eh",
                    "ih": "phonics/lesson-phonics/ih",
                    "oh": "phonics/lesson-phonics/oh"
                }}
                instructions={(then) => [
                    then("say", "if-you-take"),
                    then("say", "ah"),
                    then("say", "sound-from"),
                    then("uncenterActor"),
                    then("revealChoice", 0),
                    then("say", ["words", 0]),
                    then("say", "and-put"),
                    then("say", "eh"),
                    then("say", "sound"),
                    then("say", "the-new-word"),
                    then("revealChoice", 1),
                    then("say", ["words", 1]),

                    then("say", "if-you-take"),
                    then("say", "ih"),
                    then("say", "sound-from"),
                    then("revealChoice", 2),
                    then("say", "words.2"),
                    then("say", "and-put"),
                    then("say", "oh"),
                    then("say", "sound"),
                    then("say", "the-new-word"),
                    then("revealChoice", 3),
                    then("say", "words.3"),
                    then("say", "touch-the"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson14;