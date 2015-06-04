var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity28 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="28"
                choices={[
                    {word: "cap"},
                    {word: "cup", correct: true},
                    {word: "cape"}
                ]}
                letter="u"
                nextScreen={require("./29")}/>
        );
    }
});

module.exports = Lesson20Activity28;
