var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                phonics={["t", "r", "uh", "k"]}
                choices={[
                    {word: "truck", correct: true},
                    {word: "trick"},
                    {word: "trunk"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});
