var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity27 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="27"
                choices={[
                    {word: "lock"},
                    {word: "lick", correct: true},
                    {word: "lake"}
                ]}
                letter="i"
                nextScreen={require("./28")}/>
        );
    }
});

module.exports = Lesson20Activity27;
