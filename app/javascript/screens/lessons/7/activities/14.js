var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                phonics={["f", "ih", "s", "t"]}
                choices={[
                    {word: "fish"},
                    {word: "fast"},
                    {word: "fist", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});
