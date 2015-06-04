var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "boys"},
                    {word: "bees"},
                    {word: "bus", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson12Activity11;
