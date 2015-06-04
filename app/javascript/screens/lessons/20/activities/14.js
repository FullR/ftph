var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                choices={[
                    {letter: "e"},
                    {letter: "a", correct: true},
                    {letter: "o"}
                ]}
                phonic="ah"
                targetWord="lap"
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson20Activity14;
