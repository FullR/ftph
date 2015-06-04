var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "top"},
                    {word: "tip", correct: true},
                    {word: "tape"}
                ]}
                removedPhonic="ah"
                addedPhonic="ih"
                targetWord="tap"
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson14Activity6;
