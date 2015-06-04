var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "enter"},
                    {word: "wreck"},
                    {word: "actor", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson8Activity17;
