"use strict";

var React = require("react"),
	Link  = require("components/utility/link");

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
			<div key={this.props.id} className={classNames} onClick={this.show}>
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
	{id: "1",  title: "Word Sounds",                 lessons: "1-7"},
	{id: "2",  title: "Short Vowel Sounds",          lessons: "8-14"},
	{id: "3",  title: "Short Vowels",                lessons: "15-20",   letters: "a-u"},
	{id: "4",  title: "Consonant With Vowel",        lessons: "21-43",   letters: "b-f"},
	{id: "5",  title: "Consonant With Vowel",        lessons: "44-63",   letters: "g-k"},
	{id: "6",  title: "Consonant With Vowel",        lessons: "64-88",   letters: "l-p"},
	{id: "7",  title: "Consonant With Vowel",        lessons: "89-108",  letters: "q-t"},
	{id: "8",  title: "Consonant With Vowel",        lessons: "109-121", letters: "v-z"},
	{id: "9",  title: <span>Building on<br/>Co-Articulation</span>, lessons: "122-124"},
	{id: "10", title: "Reading Words",               lessons: "125-126"}
];

var Admin = React.createClass({
	renderSection: function() {
		var Section = sectionComponents[this.props.sectionId || "1"];
		return (<Section />);
	},

	renderNav: function() {
		return sections.map(function(section) {
			return (
				<SectionButton 
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
				</div>
				<div className='admin-nav'>
					{this.renderNav()}
				</div>
				<div className='admin-current-section'>
					{this.renderSection()}
				</div>
			</div>
		);
	}
});

module.exports = Admin;