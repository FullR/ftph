var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                phonics={["oh", "n"]}
                choices={[
                    {word: "in"},
                    {word: "on", correct: true},
                    {word: "off"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});
