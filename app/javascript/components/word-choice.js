"use strict";

var React = require("react"),
    WordImage = require("components/word-image"),
    Choice = require("components/choice");

var WordChoice = React.createClass({
    render: function() {
        return (
            <Choice {...this.props}>
                <WordImage word={this.props.word} />
            </Choice>
        );
    }
});

module.exports = WordChoice;