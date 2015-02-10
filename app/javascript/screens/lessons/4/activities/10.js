var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                word="lip"
                choices={[
                    {word: "hip", correct: true},
                    {word: "crib"},
                    {word: "mop"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson4Activity10;