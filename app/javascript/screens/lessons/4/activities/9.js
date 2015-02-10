var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                word="hot"
                choices={[
                    {word: "hut"},
                    {word: "cot", correct: true},
                    {word: "hat"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson4Activity9;