var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "beg"},
                    {word: "bag"},
                    {word: "bug", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson12Activity5;
