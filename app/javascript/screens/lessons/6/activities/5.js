var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                phonics={["oh", "cks"]}
                choices={[
                    {word: "on"},
                    {word: "off"},
                    {word: "ox", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});