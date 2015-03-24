var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                phonics={["b", "uh", "g"]}
                choices={[
                    {word: "bat"},
                    {word: "beg"},
                    {word: "bug", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});
