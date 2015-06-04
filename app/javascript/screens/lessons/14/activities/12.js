var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "lip"},
                    {word: "flap"},
                    {word: "flip", correct: true}
                ]}
                removedPhonic="oh"
                addedPhonic="ih"
                targetWord="flop"
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson14Activity12;
