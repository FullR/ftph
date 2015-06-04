var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "chop"},
                    {word: "shop", correct: true},
                    {word: "shot"}
                ]}
                removedPhonic="ih"
                addedPhonic="oh"
                targetWord="ship"
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson14Activity8;
