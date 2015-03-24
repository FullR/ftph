var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                phonics={["ah", "d"]}
                choices={[
                    {word: "add", correct: true},
                    {word: "head"},
                    {word: "hat"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});