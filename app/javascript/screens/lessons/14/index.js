var React = require("react");
var WordLesson = require("screens/lesson/word");
var lessonInfo = require("./info");
var activities = require("./activities");

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
        var storage = this.load(lessonInfo.namespace);
        var nextActivityId = storage["last-activity"] || "1";
        var nextActivity   = activities[nextActivityId];

        return (
            <WordLesson className="lesson-14" {...lessonInfo}
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
                    "sound-the-new": "lessons/lesson-14/sound-the-new",
                    "touch-the": "common/lessons/touch-the",
                    "ah": "phonics/lesson-phonics/ah",
                    "eh": "phonics/lesson-phonics/eh",
                    "ih": "phonics/lesson-phonics/ih",
                    "oh": "phonics/lesson-phonics/oh"
                }}
                instructions={(then) => [
                    then("say", "if-you-take"),
                    then("wait", 100),
                    then("say", "ah"),
                    then("wait", 50),
                    then("say", "sound-from"),
                    then("wait", 25),
                    then("uncenterActor"),
                    then("revealChoice", 0),
                    then("say", ["words", 0]),
                    then("wait", 100),
                    then("say", "and-put"),
                    then("wait", 125),
                    then("say", "eh"),
                    then("wait", 125),
                    then("say", "sound-the-new"),
                    then("wait", 50),
                    then("revealChoice", 1),
                    then("say", ["words", 1]),

                    then("say", "if-you-take"),
                    then("wait", 65),
                    then("say", "ih"),
                    then("wait", 100),
                    then("say", "sound-from"),
                    then("wait", 125),
                    then("revealChoice", 2),
                    then("say", "words.2"),
                    then("wait", 500),
                    then("say", "and-put"),
                    then("wait", 50),
                    then("say", "oh"),
                    then("wait", 50),
                    then("say", "sound-the-new"),
                    then("wait", 50),
                    then("revealChoice", 3),
                    then("say", "words.3"),
                    then("wait", 665),
                    then("say", "touch-the"),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = Lesson14;