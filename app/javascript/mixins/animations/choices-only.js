// Adds an animation function to the component for 
// revealing and saying just the choices
module.exports = {
    "choices-only": function(then) {
        return [
            then("uncenterActor"),
            then("revealActor"),
            then("hideChoices"),

            // Reveal and say each choice's word
            ...this.props.choices.map((word, index) => [
                then("revealChoice", index),
                then("say", ["words", index]),
                then("wait", 250)
            ]),

            then("sit")
        ];
    }
};