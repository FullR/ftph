var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                correctPhonic="oh"
                incorrectPhonic="uh"
                choices={[
                    {word: "mud"},
                    {word: "hot", correct: true},
                    {word: "rug"}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson13Activity8;
