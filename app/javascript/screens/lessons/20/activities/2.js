var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {letter: "e"},
                    {letter: "a", correct: true},
                    {letter: "i"}
                ]}
                targetWord="mad"
                phonic="ah"
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson20Activity2;
