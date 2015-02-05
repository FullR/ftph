"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "sneeze", correct: true},
                    {word: "cheese", correct: true},
                    {word: "tree"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson5Activity16;