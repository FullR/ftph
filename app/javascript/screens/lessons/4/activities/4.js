var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                word="ball"
                choices={[
                    {word: "pal"},
                    {word: "call", correct: true},
                    {word: "pill"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson4Activity4;