var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "track", correct: true},
                    {word: "trick"},
                    {word: "trunk"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity15;
