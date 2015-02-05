"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                word="fish"
                choices={[
                    {word: "fists"},
                    {word: "kiss"},
                    {word: "dish", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson4Activity8;