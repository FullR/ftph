var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                phonics={["ah", "cks"]}
                choices={[
                    {word: "ice"},
                    {word: "ax", correct: true},
                    {word: "ash"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});