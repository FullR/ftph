"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {word: "chin", correct: true},
                    {word: "shin", correct: true},
                    {word: "inch"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson5Activity14;