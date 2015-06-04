var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "guests", correct: true},
                    {word: "gifts"},
                    {word: "gas"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity18;
