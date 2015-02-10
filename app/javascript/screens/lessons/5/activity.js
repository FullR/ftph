var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    get          = require("utility/functional/get"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson5Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "touch-the": "lessons/lesson-5/activities/instructions/touch-the"
        };
    },

    componentWillMount: function() {
        this.save([lessonInfo.namespace, "last-screen"], this.props.id);
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount = {2}
                autoplayAnimation      = {this.props.autoplayAnimation || "choices-only"}
                lessonId               = {lessonInfo.id}
                section                = {lessonInfo.section}
                lessonTitle            = {lessonInfo.title}
                activityCount          = {lessonInfo.activityCount}
                sounds                 = {this.getSounds()}
                lessonScreen           = {require("screens/lessons/5")}

                onSubmit={(activity, correct) => {
                    this.save(["lesson-5", "activities", activityId, "correct"], correct);
                }}

                instructions={function(then) {
                    return [
                        then("say", "touch-the"),
                        then("wait", 250),
                        then("uncenterActor"),

                        // Reveal and say words
                        ...choices.map((choice, index) => [
                            then("revealChoice", 0),
                            then("say", ["words", index]),
                            then("wait", 250)
                        ]),

                        then("sit")
                    ];
                }}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/multi-word"),
                        selectedWords = activity.getSelected().map(get("word"));
                    
                    render(
                        <Feedback
                            lessonId      = {lessonInfo.id}
                            lessonTitle   = {lessonInfo.title}
                            activityId    = {activityId}
                            activityCount = {lessonInfo.activityCount}
                            section       = {lessonInfo.section}
                            correct       = {activity.isCorrect()}
                            nextScreen    = {nextScreen}
                            words         = {selectedWords}
                            sounds={{
                                "selected-1":     `words/activity-words/${selectedWords[0]}`,
                                "selected-2":     `words/activity-words/${selectedWords[1]}`,
                                "rhymes-with":    "lessons/lesson-5/activities/feedback/rhymes-with",
                                "does-not-rhyme": "lessons/lesson-5/activities/feedback/does-not-rhyme"
                            }}

                            correctAnimation={(then) => [
                                then("say", "selected-1"),  then("wait", 250),
                                then("say", "rhymes-with"), then("wait", 250),
                                then("say", "selected-2"),  then("wait", 250)
                            ]}

                            incorrectAnimation={(then) => [
                                then("say", "selected-1"),     then("wait", 250),
                                then("say", "does-not-rhyme"), then("wait", 250),
                                then("say", "selected-2"),     then("wait", 250),
                            ]}/>
                    );
                }}/>
        );
    }
});

module.exports = Lesson5Activity;