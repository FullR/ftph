var React = require("react");
var ShortSoundLesson = require("screens/lesson/short-sound");
var lessonInfo = require("./info");
var activities = require("./activities");

var Lesson17 = React.createClass({
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
        var storage = this.load(lessonInfo.namespace);
        var nextActivityId = storage["last-activity"] || "1";
        var nextActivity   = activities[nextActivityId];

        return (
            <ShortSoundLesson {...lessonInfo}
                letter={lessonInfo.letter}
                phonic={lessonInfo.phonic}
                nextScreen={nextActivity}
                nextLabel={`Activity ${nextActivityId}`}
                choices={[
                    {word: "otter"},
                    {word: "on"},
                    {word: "cop"},
                    {word: "hot"}
                ]}/>
        );
    }
});

module.exports = Lesson17;