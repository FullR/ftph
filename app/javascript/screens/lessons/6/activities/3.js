var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["ih", "n"]}
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "under"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});