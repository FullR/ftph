"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "mop", correct: true},
                    {word: "cop", correct: true},
                    {word: "cup"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson5Activity7;