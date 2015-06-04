var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "bud"},
                    {word: "bed", correct: true},
                    {word: "bit"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity10;
