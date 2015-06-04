var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "cap", correct: true},
                    {word: "cop"},
                    {word: "cup"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity6;
