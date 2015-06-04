var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "fin"},
                    {word: "fan"},
                    {word: "fun", correct: true}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson19Activity8;
