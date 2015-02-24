var React = require("react");

var sections = [
    {id: "1",  title: "Word Sounds",                                  lessons: "1-7"},
    {id: "2",  title: "Short Vowel Sounds",                           lessons: "8-14"},
    {id: "3",  title: "Short Vowels",                                 lessons: "15-20",   letters: "a-u"},
    {id: "4",  title: "Consonant With Vowel",                         lessons: "21-43",   letters: "b-f"},
    {id: "5",  title: "Consonant With Vowel",                         lessons: "44-63",   letters: "g-k"},
    {id: "6",  title: "Consonant With Vowel",                         lessons: "64-88",   letters: "l-p"},
    {id: "7",  title: "Consonant With Vowel",                         lessons: "89-108",  letters: "q-t"},
    {id: "8",  title: "Consonant With Vowel",                         lessons: "109-121", letters: "v-z"},
    {id: "9",  title: "Building on Co-Articulation",                  lessons: "122-124"},
    {id: "10", title: "Reading Words",                                lessons: "125-126"}
];

var SectionList = React.createClass({
    render: function() {
        return (
            <ol {...this.props} className="section-list">
                {sections.map((section) => (
                    <li
                        key={section.id}
                        className={
                            "section-list__item" + 
                            section.id === this.props.selected ? " section-list__item--selected" : ""
                        }>
                        {section.id}. {section.title}
                    </li>
                ))}
            </ol>
        );
    }
});

module.exports = SectionList;