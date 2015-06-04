var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "nest"},
                    {word: "net", correct: true},
                    {word: "knot"}
                ]}
                removedPhonic="uh"
                addedPhonic="eh"
                targetWord="nut"
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson14Activity9;
