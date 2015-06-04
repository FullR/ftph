var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                choices={[
                    {word: "men", correct: true},
                    {word: "man"},
                    {word: "mom"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson9Activity13;
