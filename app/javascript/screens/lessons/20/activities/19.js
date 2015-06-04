var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "sack"},
                    {word: "sock", correct: true},
                    {word: "sick"}
                ]}
                letter="o"
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson20Activity19;
