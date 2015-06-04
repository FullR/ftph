var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity24 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="24"
                choices={[
                    {word: "lap"},
                    {word: "lip", correct: true},
                    {word: "leap"}
                ]}
                letter="i"
                nextScreen={require("./25")}/>
        );
    }
});

module.exports = Lesson20Activity24;
