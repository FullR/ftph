"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "sit", correct: true},
                    {word: "hop"},
                    {word: "hit", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson5Activity4;