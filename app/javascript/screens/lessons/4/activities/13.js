"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                word="bath"
                choices={[
                    {word: "Beth"},
                    {word: "fast"},
                    {word: "path", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson4Activity13;