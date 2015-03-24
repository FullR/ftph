var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                phonics={["b", "uh", "g"]}
                choices={[
                    {word: "bug", correct: true},
                    {word: "dog"},
                    {word: "rug"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});