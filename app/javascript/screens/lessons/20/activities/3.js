var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                choices={[
                    {letter: "o", correct: true},
                    {letter: "u"},
                    {letter: "a"}
                ]}
                phonic="oh"
                targetWord="cop"
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson20Activity3;
