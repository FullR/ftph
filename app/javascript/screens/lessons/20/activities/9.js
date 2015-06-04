var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {letter: "e", correct: true},
                    {letter: "i"},
                    {letter: "o"}
                ]}
                phonic="eh"
                targetWord="jet"
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson20Activity9;
