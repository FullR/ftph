var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "batter"},
                    {word: "boater"},
                    {word: "butter", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson19Activity17;
