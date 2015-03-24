var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                phonics={["uh", "p"]}
                choices={[
                    {word: "hot"},
                    {word: "cut"},
                    {word: "up", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});