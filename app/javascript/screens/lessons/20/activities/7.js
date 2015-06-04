var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {letter: "u"},
                    {letter: "o", correct: true},
                    {letter: "a"}
                ]}
                phonic="oh"
                targetWord="box"
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson20Activity7;
