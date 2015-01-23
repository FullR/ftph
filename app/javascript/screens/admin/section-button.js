"use strict";

var React = require("react");

var SectionButton = React.createClass({
    mixins: [require("mixins/class-names")],

    render: function() {
        var classNames = this.classNames(
            "section-button",
            "section-button-"+this.props.id,
            this.props.active ? "section-button-active" : null
        );

        return (
            <div key={this.props.key} className={classNames} onClick={this.props.onClick}>
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

module.exports = SectionButton;