"use strict";

var React     = require("react"),
    Q         = require("q"),
    _         = require("lodash"),
    store     = require("storage"),
    WordModel = require("models/word"),
    WordImage = require("components/word-image"),
    Choice    = require("components/choice"),
    Actor     = require("models/actor"),
    slice     = [].slice;

module.exports = function(type, choices) {
    return {
        mixins: [
            require("mixins/animation"),
            require("mixins/watch-streams")
        ],

        getInitialState: function() {
            var data;
            var state = {
                choices: choices.map(function(choice) {
                    return new WordModel(choice.word, type, choice);
                })
            };

            // Select any previously selected choices
            if(type === "activity") {
                data = this.loadData();
                if(data && data.selected) {
                    data.selected.forEach(function(choiceIndex) {
                        state.choices[choiceIndex].selected = true;
                    });
                }
            }

            return state;
        },

        // Show continue button in feedback screens
        showContinueButton: function() {
            this.mergeState({
                showingContinueButton: true
            });
        },

        // Load all sounds
        load: function() {
            function load(obj) {
                return _(obj)
                        .values()
                        .flatten()
                        .invoke("load")
                        .value();
            }

            var sounds = [
                this.state.instructions,
                this.state.feedback,
                _.pluck(this.state.choices, "sound")
            ],
            promises = _.flatten(sounds.map(load));

            return Q.all(promises).then(null, function() { return Q.resolve(); });
        },

        // Retrieves all event streams to watch for values
        getStreams: function() {
            return [
                _.pluck(this.state.choices, "stream"), 
                this.state.actor.stream
            ];
        },

        // Renders choices
        getChoices: function() {
            return (
                <div className='choices'>
                    {this.state.choices.map(function(choice) {
                        if(this.selectChoice) {
                            choice.onClick = this.selectChoice(choice);
                        }
                        return (
                            <Choice {...choice}>
                                <WordImage word={choice.word} disableHCenter={true} disableVCenter={false}/>
                            </Choice>
                        );
                    }.bind(this))}
                </div>
            );
        }
    };
};