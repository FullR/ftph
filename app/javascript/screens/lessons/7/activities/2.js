var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                phonics={["m", "oh", "m"]}
                choices={[
                    {word: "mom", correct: true},
                    {word: "map"},
                    {word: "mop"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});