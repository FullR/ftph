var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {letter: "e"},
                    {letter: "a", correct: true},
                    {letter: "i"}
                ]}
                phonic="ah"
                targetWord="bat"
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson20Activity6;
