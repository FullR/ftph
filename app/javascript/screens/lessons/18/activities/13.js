var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "flip"},
                    {word: "flap"},
                    {word: "flop", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson18Activity13;
