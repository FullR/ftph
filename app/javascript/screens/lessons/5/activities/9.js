var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "pin", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson5Activity9;