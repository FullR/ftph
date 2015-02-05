"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "leg", correct: true},
                    {word: "egg", correct: true},
                    {word: "box"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson5Activity3;