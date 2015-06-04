var React = require("react");

var SectionList = React.createClass({
    render() {
        return (
            <ul className="section-list">
                {[
                    "Word Sounds",
                    "Short Vowel Sounds",
                    "Short Vowels",
                    "Consonant With Vowel",
                    "Consonant With Vowel",
                    "Consonant With Vowel",
                    "Consonant With Vowel",
                    "Consonant With Vowel",
                    "Building on Co-Articulation",
                    "Reading Words"
                ].map((sectionTitle, index) => {
                    if(1 + index === this.props.current) {
                        return (<li key={index} className="section-list__item section-list__item-active">{index + 1}. {sectionTitle}</li>);
                    }
                    else {
                        return (<li key={index} className="section-list__item">{index + 1}. {sectionTitle}</li>);
                    }
                })}
            </ul>
        );
    }
});

module.exports = SectionList;