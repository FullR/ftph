var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                word="red"
                choices={[
                    {word: "hat"},
                    {word: "run"},
                    {word: "bed", correct: true}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson4Activity1;