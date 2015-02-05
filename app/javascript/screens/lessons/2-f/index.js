"use strict";

var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2f = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "10": require("screens/lessons/2/activities/10"),
                    "11": require("screens/lessons/2/activities/11")
                }}
                phonic="f"
                phonicFilename="fh"
                choices={[
                    {word: "off"},
                    {word: "roof"}
                ]}/>
        );
    }
});

module.exports = Lesson2f;