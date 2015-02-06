"use strict";

var React      = require("react"),
    lessonInfo = require("./info");

module.exports = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        // Redirect to either the last played activity or the
        var storage    = this.load(lessonInfo.namespace),
            activityId = storage["last-screen"] || "1",
            Activity   = require("./activities")[activityId];

        return (<Activity />);
    }
});