var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                choices={[
                    {word: "fin"},
                    {word: "fan"},
                    {word: "fun", correct: true}
                ]}
                letter="u"
                nextScreen={require("./21")}/>
        );
    }
});

module.exports = Lesson20Activity20;
