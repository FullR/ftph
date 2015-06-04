var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {letter: "a"},
                    {letter: "o"},
                    {letter: "u", correct: true}
                ]}
                targetWord="bug"
                phonic="uh"
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson20Activity1;
