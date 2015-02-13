var React         = require("react"),
    WebLink       = require("components/utility/web-link"),
    SectionButton = require("screens/admin/section-button"),
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
        var AdminRenderLesson = require("screens/lessons").get(this.state.selectedLesson);
        if(AdminRenderLesson) {
            render(<AdminRenderLesson />);
        }
    },

    renderSection: function() {
        var Section = sectionComponents[this.state.section];
        return (<Section selectLesson={this.selectLesson} selectedLesson={this.state.selectedLesson}/>);
    },

    showSection: function(sectionId) {
        this.state.section = sectionId;
        this.setState(this.state);
    },

    isLessonComplete: function(lessonId) {
        this.load(`lesson-${lessonId}.completed`);
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

    render: function() {
        console.log(this.state.selectedLesson);
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
                <div className='admin-nav'>
                    {this.renderNav()}
                </div>
                <div className='admin-current-section'>
                    {this.renderSection()}
                    <div className='admin-back-button' onClick={this.back}>
                        {this.isLessonComplete(this.state.selectedLesson) ? "Replay" : "Play"} Lesson {this.state.selectedLesson}
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = Admin;