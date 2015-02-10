var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                word="wet"
                choices={[
                    {word: "deck"},
                    {word: "pet", correct: true},
                    {word: "wait"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson4Activity7;