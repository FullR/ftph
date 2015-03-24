var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                choices={[
                    {word: "nest"},
                    {word: "net", correct: true},
                    {word: "knot"}
                ]}
                removedPhonic="uh"
                addedPhonic="eh"
                targetWord="nut"
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson14Activity5;
