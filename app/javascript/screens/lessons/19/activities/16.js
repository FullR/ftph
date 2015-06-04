var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "stomp"},
                    {word: "stamp"},
                    {word: "stump", correct: true}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson19Activity16;
