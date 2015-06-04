var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {letter: "o"},
                    {letter: "u"},
                    {letter: "i", correct: true}
                ]}
                phonic="ih"
                targetWord="pill"
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson20Activity13;
