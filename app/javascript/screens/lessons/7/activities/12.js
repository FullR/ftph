var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                phonics={["s", "ih", "t"]}
                choices={[
                    {word: "cent"},
                    {word: "sit", correct: true},
                    {word: "sip"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});
