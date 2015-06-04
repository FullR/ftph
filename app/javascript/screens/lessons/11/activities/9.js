var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                choices={[
                    {word: "Bob", correct: true},
                    {word: "bib"},
                    {word: "baby"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson11Activity9;
