var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "thread", correct: true},
                    {word: "three"},
                    {word: "head", correct: true}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson5Activity15;