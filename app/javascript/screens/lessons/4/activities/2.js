var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                word="fat"
                choices={[
                    {word: "mud"},
                    {word: "rat", correct: true},
                    {word: "sun"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson4Activity2;