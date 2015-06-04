var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                choices={[
                    {word: "add", correct: true},
                    {word: "ape"},
                    {word: "pig"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson8Activity2;
