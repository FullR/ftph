"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                choices={[
                    {word: "hop", correct: true},
                    {word: "dog"},
                    {word: "hot", correct: true}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson3Activity1;