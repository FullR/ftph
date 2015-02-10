var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "bat", correct: true},
                    {word: "rat", correct: true},
                    {word: "cake"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson5Activity1;