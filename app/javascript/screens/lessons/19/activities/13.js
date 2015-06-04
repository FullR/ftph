var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "duck", correct: true},
                    {word: "dock"},
                    {word: "deck"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson19Activity13;
