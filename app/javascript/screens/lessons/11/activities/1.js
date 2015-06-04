var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "ox", correct: true},
                    {word: "ax"},
                    {word: "oaks"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson11Activity1;
