"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                word="egg"
                choices={[
                    {word: "bag"},
                    {word: "edge"},
                    {word: "beg", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson4Activity11;