"use strict";

var React      = require("react"),
	InfoScreen = require("components/screens/info-screen"),
	WebLink    = require("components/utility/web-link"),
	project	   = require("../../project"),
	dictionary = require("dictionary/dictionary");

var About = React.createClass({
	render: function() {
		var title = (<span className='product-title'>{project.title}</span>),
			header = (<h1>About {title}&#8482;</h1>);

		return (
			<InfoScreen className='about' header={header}>
				<h2>The Building Blocks of Better Spelling and Vocabulary</h2>
				<p>{title}&trade; can be used with our award-winning Word Roots books/software products or as an independent teaching tool.&nbsp; The 10 flashcard games in this software teach students the meanings of word parts (prefixes, roots, and suffixes) so they can decode the meaning and spelling of new vocabulary by breaking a word into its word parts.&nbsp; This set of games includes all of the {dictionary.prefixes.length} prefixes, {dictionary.roots.length} roots, {dictionary.suffixes.length} suffixes, and {dictionary.words.length} vocabulary words that are in the corresponding book or software.</p>

				<p>The games are numbered 1-10.&nbsp; Games 1-6 are Study Games to learn the word parts and their definitions.&nbsp; Games 1-3 and 4-6 can be switched, and the prefixes, roots, or suffixes can be played in any order.&nbsp; Games 7-10 are Practice Games using the word parts to form words to show that students know the definitions of the word parts.&nbsp; Games 7 and 8 may be switched with games 9 and 10.</p>

				<p>We have numbered the games in what we consider the optimal learning order, but you also have the option to create your own order to meet your needs.&nbsp; For example, rather than do all of the flashcards by identifying the definition or word part, you may choose to focus on studying prefixes, then suffixes, then roots.</p>

				<p className='indented'>
					To see our full line of Word Roots products, please visit:  <WebLink href="http://www.CriticalThinking.com/word-roots.html">http://www.CriticalThinking.com/word-roots.html</WebLink><br/>
					To find a full list of all our award-winning products, please visit:  <WebLink href="http://www.CriticalThinking.com">http://www.CriticalThinking.com</WebLink>
				</p>
			</InfoScreen>
		);
	}
});

module.exports = About;