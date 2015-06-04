var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {word: "hat"},
                    {word: "hut"},
                    {word: "hot", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson11Activity5;
