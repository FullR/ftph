var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "kite"},
                    {word: "cat"},
                    {word: "cut", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson19Activity5;
