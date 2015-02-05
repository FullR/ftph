"use strict";

var get = require("utility/functional/get");
/*
    `requiredChoiceCount` refers to the number of
    choices that need to be selected to progress
*/
function choiceUtilityMixin(requiredChoiceCount) {
    return {
        // Returns true if the user has selected enough choices to progress
        isShowingFeedback: function() {
            return this.getSelectedChoices().length >= requiredChoiceCount;
        },

        // Toggles the selection of a choice
        selectChoice: function(choice) {
            choice.selected = !choice.selected;

            this.setState(this.state);
        },

        // Returns an array of selected choices
        getSelectedChoices: function() {
            return this.state.choices.filter(get("selected"));
        },

        // Returns the indexes of all selected choices
        getSelectedIndexes: function() {
            return this.state.choices
                .map(function(choice, index) {
                    return {
                        selected: choice.selected, 
                        index: index
                    };
                })
                .filter(get("selected"))
                .map(get("index"));
        }
    };
}

module.exports = choiceUtilityMixin;