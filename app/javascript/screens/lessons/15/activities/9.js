var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "pin"},
                    {word: "pen"},
                    {word: "pan", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity9;
