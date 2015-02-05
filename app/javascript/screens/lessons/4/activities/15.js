"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                word="head"
                choices={[
                    {word: "hand"},
                    {word: "bread", correct: true},
                    {word: "heavy"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson4Activity15;