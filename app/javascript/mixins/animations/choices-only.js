"use strict";

var _ = require("lodash");

/*
    Adds an animation function to the component for revealing just the choices
*/
module.exports = {
    "choices-only": function(then) {
        var steps = [
            then("uncenterActor"),
            then("revealActor"),
            then("hideChoices")
        ];

        _.pluck(this.props.choices, "word").forEach(function(soundId, index) {
            steps.push(
                then("revealChoice", index),
                then("say", soundId),
                then("wait", 250)
            );
        });

        steps.push(then("sit"));
        return steps;
    }
};