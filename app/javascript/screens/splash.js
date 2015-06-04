var React = require("react");
var TctcLogo = require("components/common/tctc-logo");
var AdminButton = require("components/admin/admin-button");
var WordList = require("screens/word-list");
var Sound = require("components/utility/sound");
var render = require("render");

var Splash = React.createClass({
    mixins: [require("mixins/storage")],

    getSounds() {
        return {
            "welcome": "common/welcome"
        };
    },

    loadLesson(id) {
        return this.load(`lesson-${id}`) || {};
    },

    nextScreen() {
        var selectedLesson  = this.load("last-lesson") || "1",
            lastScreen      = this.loadLesson(selectedLesson)["last-screen"],
            Lesson          = require("screens/lessons").get(selectedLesson),
            LessonFeeedback = require("screens/lessons/feedback-index")[selectedLesson],
            activities      = require("screens/lessons/activity-index")[selectedLesson],
            Activity;

        if(!lastScreen) {
            render(<Lesson/>);
        }
        else if(lastScreen === "feedback") {
            render(<LessonFeeedback/>);
        }
        else {
            Activity = activities[lastScreen];
            render(<Activity/>);
        }
    },

    showWordList() {
        render(<WordList/>);
    },

    showAudioTest() {
        var AudioTest = require("screens/audio-test");
        render(<AudioTest/>);
    },

    render() {
        var user = this.props.user;
        return (
            <div className="splash">
                <Sound path="common/welcome" autoplay={true}/>
                <TctcLogo/>
                <AdminButton/>
                <button onClick={this.showAudioTest} style={{position: "absolute", bottom: 30, right: "50%"}}>Audio Test</button>
                <button onClick={this.showWordList} style={{position: "absolute", bottom: 0, right: "50%"}}>Word List</button>
                <a href="fun-time-phonics.zip" style={{
                    position: "absolute",
                    bottom: 60,
                    right: "50%",
                    fontSize: 25
                }}>Download</a>
                <div className="splash__grade-label">PreK - 2</div>
                <button className="splash__next-button" onClick={this.nextScreen}></button>
            </div>
        );
    }
});

module.exports = Splash;
