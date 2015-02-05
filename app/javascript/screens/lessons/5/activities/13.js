"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "ant", correct: true},
                    {word: "tent"},
                    {word: "plant", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson5Activity13;