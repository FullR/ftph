var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                phonics={["r", "eh", "d"]}
                choices={[
                    {word: "road"},
                    {word: "bread"},
                    {word: "red", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});
