var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "cot"},
                    {word: "cut", correct: true},
                    {word: "coat"}
                ]}
                removedPhonic="ah"
                addedPhonic="uh"
                targetWord="cat"
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson14Activity1;
