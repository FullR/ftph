var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                phonics={["m", "eh", "n"]}
                choices={[
                    {word: "moon"},
                    {word: "men", correct: true},
                    {word: "man"}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});
