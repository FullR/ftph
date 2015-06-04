var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {word: "fix"},
                    {word: "ox"},
                    {word: "ax", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson8Activity3;
