var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "track"},
                    {word: "trick"},
                    {word: "truck", correct: true}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson19Activity12;
