var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "truck", correct: true},
                    {word: "trick"},
                    {word: "trunk"}
                ]}
                removedPhonic="ah"
                addedPhonic="uh"
                targetWord="track"
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson14Activity13;
