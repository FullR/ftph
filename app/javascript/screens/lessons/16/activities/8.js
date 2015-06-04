var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "duck"},
                    {word: "dock"},
                    {word: "deck", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity8;
