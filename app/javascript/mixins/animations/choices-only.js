"use strict";

/*
    Takes the sound ids that correspond to each choice.

    Adds an animation function to the component for revealing just the choices
*/
module.exports = function(...choiceSoundIds) {
    return {
        "choices-only": function(then) {
            var steps = [
                then("uncenterActor"),
                then("revealActor"),
                then("hideChoices")
            ];

            choiceSoundIds.forEach(function(soundId, index) {
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
}