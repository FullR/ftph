var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["ih", "l"]}
                choices={[
                    {word: "hill"},
                    {word: "ill", correct: true},
                    {word: "fall"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});