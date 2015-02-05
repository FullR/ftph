"use strict";

var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2d = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "4": require("screens/lessons/2/activities/4"),
                    "5": require("screens/lessons/2/activities/5")
                }}
                phonic="d"
                phonicFilename="dh"
                choices={[
                    {word: "kid"},
                    {word: "bed"}
                ]}/>
        );
    }
});

module.exports = Lesson2d;