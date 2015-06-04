var React        = require("react");
var WordActivity = require("screens/activity/word");
var get          = require("utility/functional/get");
var render       = require("render");
var lessonInfo   = require("./info");

var Lesson3Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        var sounds = {};

        if(this.props.ending) {
            sounds.touch = "lessons/lesson-3/activities/instructions/ends";
            if(this.props.instroduceEnding) {
                sounds["now-listen"] = "lessons/lesson-3/activities/instructions/now-listen";
            }
        }
        else {
            sounds.touch = "lessons/lesson-3/activities/instructions/begins";
        }

        return sounds;
    },

    render: function() {
        var choices          = this.props.choices;
        var nextScreen       = this.props.nextScreen;
        var activityId       = this.props.id;
        var ending           = this.props.ending;
        var instroduceEnding = this.props.instroduceEnding;
        var title = +this.props.id >= 13 ? 
                    <span>Beginning and <span className="lesson-3-title-ending">Ending</span> Sounds</span> : 
                    <span><span className="lesson-3-title-beginning">Beginning</span> and Ending Sounds</span>;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount = {2}
                lessonId               = {lessonInfo.id}
                section                = {lessonInfo.section}
                lessonTitle            = {title}
                activityCount          = {lessonInfo.activityCount}
                sounds                 = {this.getSounds()}
                lessonScreen           = {require("screens/lessons/3")}

                instructions={(then) => [
                    instroduceEnding ? 
                        [then("say", "now-listen"), then("wait", 250)] : 
                        [],

                    then("say", "touch"),
                    then("wait", 250),

                    then("uncenterActor"),

                    choices.map((choice, i) => [
                        then("revealChoice", i),
                        then("say", ["words", i]),
                        then("wait", 250),
                    ]),

                    then("sit")
                ]}

                renderFeedback={function(activity) {
                    var Feedback = require("screens/activity-feedback/words"),
                        feedback = (
                            <Feedback
                                lessonId      = {lessonInfo.id}
                                lessonTitle   = {title}
                                activityId    = {activityId}
                                activityCount = {lessonInfo.activityCount}
                                section       = {lessonInfo.section}
                                correct       = {activity.isCorrect()}
                                nextScreen    = {nextScreen}
                                words         = {activity.getSelected().map(get("word"))}

                                sounds={{
                                    "do-not": ending ?
                                        "lessons/lesson-3/activities/feedback/do-not-end" :
                                        "lessons/lesson-3/activities/feedback/do-not-begin",

                                    "both": ending ?
                                        "lessons/lesson-3/activities/feedback/both-end" :
                                        "lessons/lesson-3/activities/feedback/both-begin",

                                    "and": "common/activities/and"
                                }}

                                correctAnimation={(then) => [
                                    then("say", "words.0"), then("wait", 250),
                                    then("say", "and"),     then("wait", 250),
                                    then("say", "words.1"), then("wait", 250),
                                    then("say", "both")
                                ]}

                                incorrectAnimation={(then) => [
                                    then("say", "words.0"), then("wait", 250),
                                    then("say", "and"),     then("wait", 250),
                                    then("say", "words.1"), then("wait", 250),
                                    then("say", "do-not")
                                ]}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson3Activity;