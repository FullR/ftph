var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                word="in"
                choices={[
                    {word: "chin", correct: true},
                    {word: "on"},
                    {word: "up"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson4Activity5;