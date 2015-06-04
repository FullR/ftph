var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {letter: "i", correct: true},
                    {letter: "u"},
                    {letter: "a"}
                ]}
                phonic="ih"
                targetWord="fish"
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson20Activity10;
