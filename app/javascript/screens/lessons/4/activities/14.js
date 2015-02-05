"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                word="ox"
                choices={[
                    {word: "hot"},
                    {word: "hogs"},
                    {word: "rocks", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson4Activity14;