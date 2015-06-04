var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "pet", correct: true},
                    {word: "pot"},
                    {word: "putt"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson9Activity5;
