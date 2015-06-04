var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity22 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="22"
                choices={[
                    {word: "hat"},
                    {word: "hut"},
                    {word: "hot", correct: true}
                ]}
                letter="o"
                nextScreen={require("./23")}/>
        );
    }
});

module.exports = Lesson20Activity22;
