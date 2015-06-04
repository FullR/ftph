var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {word: "pit", correct: true},
                    {word: "pet"},
                    {word: "putt"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity14;
