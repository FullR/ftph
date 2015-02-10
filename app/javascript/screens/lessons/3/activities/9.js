var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "flag", correct: true},
                    {word: "frog", correct: true},
                    {word: "gopher"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson3Activity9;