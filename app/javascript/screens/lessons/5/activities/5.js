"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "mad", correct: true},
                    {word: "mask"},
                    {word: "bad", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson5Activity5;