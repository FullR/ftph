var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "string"},
                    {word: "stretch"},
                    {word: "strap", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity18;
