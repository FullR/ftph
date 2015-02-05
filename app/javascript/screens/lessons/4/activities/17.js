"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                word="ill"
                choices={[
                    {word: "drill", correct: true},
                    {word: "bell"},
                    {word: "doll"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson4Activity17;