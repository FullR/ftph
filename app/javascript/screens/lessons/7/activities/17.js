var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                phonics={["s", "t", "ah", "k"]}
                choices={[
                    {word: "stick"},
                    {word: "shack"},
                    {word: "stack", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});
