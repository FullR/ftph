var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "pat"},
                    {word: "pot", correct: true},
                    {word: "putt"}
                ]}
                removedPhonic="eh"
                addedPhonic="oh"
                targetWord="pet"
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson14Activity5;
