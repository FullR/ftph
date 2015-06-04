var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {letter: "u"},
                    {letter: "a"},
                    {letter: "o", correct: true}
                ]}
                phonic="oh"
                targetWord="hop"
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson20Activity11;
