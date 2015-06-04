var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {letter: "e"},
                    {letter: "o"},
                    {letter: "u", correct: true}
                ]}
                phonic="uh"
                targetWord="sun"
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson20Activity8;
