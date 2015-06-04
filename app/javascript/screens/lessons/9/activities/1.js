var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "elf", correct: true},
                    {word: "up"},
                    {word: "in"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson9Activity1;
