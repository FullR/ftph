var React = require("react"),
    Activity = require("screens/lessons/18/activity");

var Lesson18Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "Bob", correct: true},
                    {word: "bib"},
                    {word: "baby"}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson18Activity8;
