var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "big"},
                    {word: "bag"},
                    {word: "beg", correct: true}
                ]}
                removedPhonic="uh"
                addedPhonic="eh"
                targetWord="bug"
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson14Activity7;
