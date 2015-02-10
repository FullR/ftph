var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "string", correct: true},
                    {word: "strong"},
                    {word: "king", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson5Activity18;