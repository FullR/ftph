var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "bone"},
                    {word: "bun", correct: true},
                    {word: "bin"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson19Activity3;
