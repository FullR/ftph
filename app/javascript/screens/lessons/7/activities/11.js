var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                phonics={["n", "uh", "t"]}
                choices={[
                    {word: "knot"},
                    {word: "nut", correct: true},
                    {word: "knight"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});
