"use strict";

var React   = require("react"),
	Link    = require("components/utility/link"),
	WebLink = require("components/utility/web-link"),
	store   = require("storage");

function truthy(n) { return !!n; }

var SectionButton = React.createClass({
	show: function() {
		Link.to("admin/"+this.props.id);
	},

	render: function() {
		var classNames = [
			"section-button",
			"section-button-"+this.props.id,
			this.props.active ? "section-button-active" : null
		].filter(truthy).join(" ");

		return (
			<div key={this.props.key} className={classNames} onClick={this.show}>
				<div className='section-button-title'>
					{this.props.title}
				</div>
				{this.props.letters ?
					<div className='section-button-letters'>
						{this.props.letters}
					</div> : null
				}
				<div className='section-button-lessons'>
					Lessons {this.props.lessons}
				</div>
			</div>
		);
	}
});

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
	{id: "1",  title: "Word Sounds",                                lessons: "1-7"},
	{id: "2",  title: "Short Vowel Sounds",                         lessons: "8-14"},
	{id: "3",  title: "Short Vowels",                               lessons: "15-20",   letters: "a-u"},
	{id: "4",  title: <span>Consonant<br/>With Vowel</span>,        lessons: "21-43",   letters: "b-f"},
	{id: "5",  title: <span>Consonant<br/>With Vowel</span>,        lessons: "44-63",   letters: "g-k"},
	{id: "6",  title: <span>Consonant<br/>With Vowel</span>,        lessons: "64-88",   letters: "l-p"},
	{id: "7",  title: <span>Consonant<br/>With Vowel</span>,        lessons: "89-108",  letters: "q-t"},
	{id: "8",  title: <span>Consonant<br/>With Vowel</span>,        lessons: "109-121", letters: "v-z"},
	{id: "9",  title: <span>Building on<br/>Co-Articulation</span>, lessons: "122-124"},
	{id: "10", title: "Reading Words",                              lessons: "125-126"}
];

var Admin = React.createClass({
	getInitialState: function() {
		var lastLesson = (store.get("lastScreen") || {}).lesson;

		if(lastLesson) {
			return {
				selectedLesson: lastLesson.split("-")[0]
			};
		}
		return {
			selectedLesson: "1"
		};
	},

	selectLesson: function(lessonId) {
		this.setState({
			selectedLesson: lessonId
		});
	},

	back: function() {
		Link.to("lesson/"+this.state.selectedLesson);
	},

	renderSection: function() {
		var Section = sectionComponents[this.props.sectionId || "1"];
		return (<Section selectLesson={this.selectLesson} selectedLesson={this.state.selectedLesson}/>);
	},

	renderNav: function() {
		return sections.map(function(section) {
			return (
				<SectionButton
					key={section.id}
					id={section.id} 
					title={section.title}
					lessons={section.lessons}
					letters={section.letters}
					active={section.id === this.props.sectionId}/>
			);
		}.bind(this));
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
				<div className='admin-nav'>
					{this.renderNav()}
				</div>
				<div className='admin-current-section'>
					{this.renderSection()}
					<div className='admin-back-button' onClick={this.back}>
						Back
					</div>
				</div>
			</div>
		);
	},
});

module.exports = Admin;