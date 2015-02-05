"use strict";

var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1n = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "8": require("screens/lessons/1/activities/8"),
                    "9": require("screens/lessons/1/activities/9")
                }}
                phonic="n"
                phonicFilename="nnh"
                choices={[
                    {word: "nap"},
                    {word: "neck"}
                ]}/>
        );
    }
});

module.exports = Lesson1n;