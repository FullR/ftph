var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                phonics={["ih", "n", "ch"]}
                choices={[
                    {word: "itch"},
                    {word: "inch", correct: true},
                    {word: "bench"}
                ]}
                nextScreen={require("screens/lessons/6/lesson-feedback")}/>
        );
    }
});