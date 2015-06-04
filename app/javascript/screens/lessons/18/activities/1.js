var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "hop", correct: true},
                    {word: "sit"},
                    {word: "hat"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson18Activity1;
