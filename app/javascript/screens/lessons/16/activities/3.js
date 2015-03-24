var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity3 = React.createClass({
    render: function() {
        return (
            <Activity
                id="3"
                choices={[
                    {word: "knit"},
                    {word: "knot"},
                    {word: "net", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity3;
