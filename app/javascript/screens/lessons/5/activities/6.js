var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "nine"},
                    {word: "run", correct: true},
                    {word: "sun", correct: true}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson5Activity6;