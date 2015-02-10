var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                word="stamp"
                choices={[
                    {word: "stump"},
                    {word: "camp", correct: true},
                    {word: "plant"}
                ]}
                nextScreen={require("screens/lessons/4/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson4Activity20;