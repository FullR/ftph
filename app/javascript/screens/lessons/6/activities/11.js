var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                phonics={["r", "eh", "d"]}
                choices={[
                    {word: "road"},
                    {word: "red", correct: true},
                    {word: "wrench"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});