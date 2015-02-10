var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "trip", correct: true},
                    {word: "trap"},
                    {word: "flip", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson5Activity10;