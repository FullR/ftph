var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "bud"},
                    {word: "bed"},
                    {word: "bad", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity3;
