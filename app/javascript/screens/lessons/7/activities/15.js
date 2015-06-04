var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                phonics={["ch", "oh", "p"]}
                choices={[
                    {word: "chop", correct: true},
                    {word: "chip"},
                    {word: "shop"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});
