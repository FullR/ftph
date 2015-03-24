var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                phonics={["r", "uh", "g"]}
                choices={[
                    {word: "rug", correct: true},
                    {word: "rag"},
                    {word: "wreck"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});
