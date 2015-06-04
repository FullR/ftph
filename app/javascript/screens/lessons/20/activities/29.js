var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity29 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="29"
                choices={[
                    {word: "knit", correct: true},
                    {word: "knot"},
                    {word: "net"}
                ]}
                letter="i"
                nextScreen={require("./30")}/>
        );
    }
});

module.exports = Lesson20Activity29;
