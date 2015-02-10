var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity23 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="23"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "play", correct: true},
                    {word: "pail"},
                    {word: "spray", correct: true}
                ]}
                nextScreen={require("./24")}/>
        );
    }
});

module.exports = Lesson3Activity23;