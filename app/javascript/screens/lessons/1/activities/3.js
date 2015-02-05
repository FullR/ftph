"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/1/activities-1-3");

var Lesson1Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "wet"},
                    {word: "pet"},
                    {word: "toys", correct: true}
                ]}
                nextScreen={require("screens/lessons/1-m")}/>
        );
    }
});

module.exports = Lesson1Activity3;