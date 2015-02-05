"use strict";

var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2k = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "8": require("screens/lessons/2/activities/8"),
                    "9": require("screens/lessons/2/activities/9")
                }}
                phonic="k"
                phonicFilename="kh"
                choices={[
                    {word: "duck"},
                    {word: "lake"}
                ]}/>
        );
    }
});

module.exports = Lesson2k;