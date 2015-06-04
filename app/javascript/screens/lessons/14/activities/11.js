var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "pot"},
                    {word: "pitch"},
                    {word: "pit", correct: true}
                ]}
                removedPhonic="uh"
                addedPhonic="ih"
                targetWord="putt"
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson14Activity11;
