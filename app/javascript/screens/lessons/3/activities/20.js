var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "string", correct: true},
                    {word: "sink"},
                    {word: "tongue", correct: true}
                ]}
                nextScreen={require("./21")}/>
        );
    }
});

module.exports = Lesson3Activity20;