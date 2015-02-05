"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                word="hop"
                choices={[
                    {word: "pup"},
                    {word: "drop", correct: true},
                    {word: "rug"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson4Activity6;