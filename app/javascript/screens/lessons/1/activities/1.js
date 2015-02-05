"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/1/activities-1-3");

var Lesson1Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                choices={[
                    {word: "top", correct: true},
                    {word: "pig"},
                    {word: "hen"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson1Activity1;