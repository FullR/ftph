var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                phonics={["f", "ah", "t"]}
                choices={[
                    {word: "fist"},
                    {word: "fan"},
                    {word: "fat", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});
