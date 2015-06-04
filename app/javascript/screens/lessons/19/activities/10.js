var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "boys"},
                    {word: "bees"},
                    {word: "bus", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson19Activity10;
