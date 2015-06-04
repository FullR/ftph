var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "pop", correct: true},
                    {word: "pipe"},
                    {word: "pup"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson18Activity6;
