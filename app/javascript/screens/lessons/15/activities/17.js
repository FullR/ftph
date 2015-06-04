var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "enter"},
                    {word: "under"},
                    {word: "actor", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity17;
