var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "add"},
                    {word: "Ed", correct: true},
                    {word: "otter"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson9Activity3;
