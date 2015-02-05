"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "red", correct: true},
                    {word: "hot"},
                    {word: "sled", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson5Activity2;