var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "bench"},
                    {word: "punch", correct: true},
                    {word: "pitch"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson19Activity18;
