var React = require("react"),
    Activity = require("screens/lessons/20/activity");

var Lesson20Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                choices={[
                    {letter: "i", correct: true},
                    {letter: "o"},
                    {letter: "a"}
                ]}
                phonic="ih"
                targetWord="pin"
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson20Activity5;
