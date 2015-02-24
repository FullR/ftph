var React      = require("react"),
    lessonInfo = require("./info");

module.exports = React.createClass({
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
        // Redirect to either the last played activity or activity 1
        var storage    = this.load(lessonInfo.namespace),
            activityId = storage["last-activity"] || "1",
            Activity   = require("./activities")[activityId];

        return (<Activity />);
    }
});