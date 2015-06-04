var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                phonics={["s", "p", "ih", "n"]}
                choices={[
                    {word: "spin", correct: true},
                    {word: "spoon"},
                    {word: "sing"}
                ]}
                nextScreen={require("screens/lessons/7/lesson-feedback")}/>
        );
    }
});
