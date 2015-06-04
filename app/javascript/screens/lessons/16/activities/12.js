var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "men", correct: true},
                    {word: "man"},
                    {word: "mom"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity12;
