var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "ten", correct: true},
                    {word: "tin"},
                    {word: "tan"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity11;
