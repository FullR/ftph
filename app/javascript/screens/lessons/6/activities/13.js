var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                phonics={["d", "uh", "k"]}
                choices={[
                    {word: "duck", correct: true},
                    {word: "dock"},
                    {word: "deck"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});