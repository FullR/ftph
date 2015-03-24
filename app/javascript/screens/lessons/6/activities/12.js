var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                phonics={["w", "ih", "g"]}
                choices={[
                    {word: "wag"},
                    {word: "wig", correct: true},
                    {word: "wick"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});