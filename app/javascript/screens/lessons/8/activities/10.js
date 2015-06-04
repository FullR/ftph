var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "bed"},
                    {word: "bud"},
                    {word: "bad", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson8Activity10;
