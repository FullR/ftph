var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "cup", correct: true},
                    {word: "cop"},
                    {word: "cap"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson19Activity1;
