"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "cap"},
                    {word: "ax", correct: true},
                    {word: "tacks", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson5Activity8;