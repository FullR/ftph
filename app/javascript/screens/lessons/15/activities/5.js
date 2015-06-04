var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "hit"},
                    {word: "hot"},
                    {word: "hat", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity5;
