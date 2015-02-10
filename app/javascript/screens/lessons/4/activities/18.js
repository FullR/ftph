var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                word="bench"
                choices={[
                    {word: "pitch"},
                    {word: "wrench", correct: true},
                    {word: "punch"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson4Activity18;