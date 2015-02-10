var _      = require("lodash"),
    assign = require("utility/functional/assign");

var animationChoiceMixin = {
    // Set a property on a specified choice to the given value
    choiceSet: function(index, key, value) {
        var choice = this.state.choices[index];

        if(!choice) {
            throw new Error("No choice found at index " + index);
        }
        else {
            choice[key] = value;
            this.setState(this.state);
        }
    },

    // Set a property on all choices to a specified value
    choicesSet: function(key, value) {
        this.state.choices.forEach(assign(key, value));
        this.setState(this.state);
    },

    // Reveals a choice at the given index
    revealChoice: function(index) {
        this.choiceSet(index, "hidden", false);
    },

    // Hides a choice at the given index
    hideChoice: function(index) {
        this.choiceSet(index, "hidden", true);
    },

    // Hide all choices
    hideChoices: function() {
        this.choicesSet("hidden", true);
    },

    // Removes a choice from the DOM
    detachChoice: function(index) {
        this.choiceSet(index, "detached", true);
    },

    // Attaches a choice to the DOM
    attachChoice: function(index) {
        this.choiceSet(index, "detached", false);
    }
};

module.exports = animationChoiceMixin;