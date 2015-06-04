var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {letter: "u", correct: true},
                    {letter: "o"},
                    {letter: "a"}
                ]}
                phonic="uh"
                targetWord="hug"
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson20Activity15;
