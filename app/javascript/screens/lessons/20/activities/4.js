var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {letter: "a"},
                    {letter: "e", correct: true},
                    {letter: "u"}
                ]}
                phonic="eh"
                targetWord="red"
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson20Activity4;
