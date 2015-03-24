var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity8 = React.createClass({
    render: function() {
        return (
            <Activity
                id="8"
                choices={[
                    {word: "pit"},
                    {word: "pet"},
                    {word: "pot", correct: true}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson11Activity8;
