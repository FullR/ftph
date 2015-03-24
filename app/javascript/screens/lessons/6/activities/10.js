var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                phonics={["t", "oh", "p"]}
                choices={[
                    {word: "tape"},
                    {word: "tub"},
                    {word: "top", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});