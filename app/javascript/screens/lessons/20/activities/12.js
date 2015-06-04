var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {letter: "i"},
                    {letter: "a"},
                    {letter: "e", correct: true}
                ]}
                phonic="eh"
                targetWord="ten"
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson20Activity12;
