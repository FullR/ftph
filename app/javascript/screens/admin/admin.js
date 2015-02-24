var React         = require("react"),
    WebLink       = require("components/utility/web-link"),
    SectionButton = require("screens/admin/section-button"),
    SectionList   = require("components/admin/section-list"),
    render        = require("render");

var sectionComponents = {
    "1":  require("./sections/1"),
    "2":  require("./sections/2"),
    "3":  require("./sections/3"),
    "4":  require("./sections/4"),
    "5":  require("./sections/5"),
    "6":  require("./sections/6"),
    "7":  require("./sections/7"),
    "8":  require("./sections/8"),
    "9":  require("./sections/9"),
    "10": require("./sections/10")
};

var sections = [
    {id: "1",  title: "Word Sounds",                                  lessons: "1-7"},
    {id: "2",  title: "Short Vowel Sounds",                           lessons: "8-14"},
    {id: "3",  title: "Short Vowels",                                 lessons: "15-20",   letters: "a-u"},
    {id: "4",  title: (<span>Consonant<br/>With Vowel</span>),        lessons: "21-43",   letters: "b-f"},
    {id: "5",  title: (<span>Consonant<br/>With Vowel</span>),        lessons: "44-63",   letters: "g-k"},
    {id: "6",  title: (<span>Consonant<br/>With Vowel</span>),        lessons: "64-88",   letters: "l-p"},
    {id: "7",  title: (<span>Consonant<br/>With Vowel</span>),        lessons: "89-108",  letters: "q-t"},
    {id: "8",  title: (<span>Consonant<br/>With Vowel</span>),        lessons: "109-121", letters: "v-z"},
    {id: "9",  title: (<span>Building on<br/>Co-Articulation</span>), lessons: "122-124"},
    {id: "10", title: "Reading Words",                                lessons: "125-126"}
];

var Admin = React.createClass({
    mixins: [
        require("mixins/storage")
    ],

    getInitialState: function() {
        return {
            section: this.props.section || "1",
            selectedLesson: this.load("last-lesson") || "1"
        };
    },

    selectLesson: function(lessonId) {
        this.setState({
            selectedLesson: lessonId,
            section: this.state.section
        });
    },

    back: function() {
        var lessonId       = this.state.selectedLesson,
            lastScreen     = this.loadLesson(lessonId)["last-screen"],
            Lesson         = require("screens/lessons").get(lessonId),
            LessonFeedback = require("screens/lessons/feedback-index")[lessonId],
            activities     = require("screens/lessons/activity-index")[lessonId],
            Activity;

        if(!lastScreen) {
            render(<Lesson/>);
        }
        else if(lastScreen === "feedback") {
            render(<LessonFeedback/>);
        }
        else {
            Activity = activities[lastScreen];
            render(<Activity/>);
        }
    },

    showSection: function(sectionId) {
        this.state.section = sectionId;
        this.setState(this.state);
    },

    loadLesson: function(id) {
        return this.load(`lesson-${id}`) || {};
    },

    getArrowPrefix: function() {
        var selectedData = this.loadLesson(this.state.selectedLesson);
        if(selectedData["last-screen"]) {
            return "Return to";
        }
        else if(selectedData.completed) {
            return "Replay";
        }
        else {
            return "Play";
        }
    },

    isSelectedCompleted: function() {
        return this.loadLesson(this.state.selectedLesson).completed;
    },

    incrementSection: function() {
        if(this.state.section !== "10") {
            this.state.section = ((+this.state.section) + 1) + "";
            this.setState(this.state);
        }
    },

    decrementSection: function() {
        if(this.state.section !== "1") {
            this.state.section = ((+this.state.section) - 1) + "";
            this.setState(this.state);
        }
    },

    renderNav: function() {
        return sections.map(function(section) {
            return (
                <SectionButton
                    onClick={this.showSection.bind(this, section.id)}
                    key={section.id}
                    id={section.id} 
                    title={section.title}
                    lessons={section.lessons}
                    letters={section.letters}
                    active={section.id === this.state.section}/>
            );
        }.bind(this));
    },

    renderSection: function() {
        var Section = sectionComponents[this.state.section];
        return (<Section selectLesson={this.selectLesson} selectedLesson={this.state.selectedLesson}/>);
    },

    render: function() {
        return (
            <div className='admin'>
                <div className='admin-header'>
                    <ul>
                        <li>User</li>
                        <li>Restart</li>
                        <li>About</li>
                    </ul>
                    <h1>Fun-Time Phonics Admin/Score</h1>
                    <span className='admin-header-grades'>PreK - 2</span>
                </div>

                <div className='admin__section-header'></div>

                <div className='admin-current-section'>
                    {this.state.section === "10" ? 
                        null :
                        <button
                            className='admin__next-section-button'
                            onClick={this.incrementSection}>Next Section</button>
                    }
                    {this.state.section === "1" ?
                        null :
                        <button
                            className='admin__previous-section-button'
                            onClick={this.decrementSection}>Previous Section</button>
                    }

                    {this.renderSection()}
                </div>
                <SectionList selected={this.state.section+""}/>
                <div className='admin-back-button' onClick={this.back}>
                    {this.getArrowPrefix()} Lesson {this.state.selectedLesson}
                </div>
            </div>
        );
    },
});

module.exports = Admin;