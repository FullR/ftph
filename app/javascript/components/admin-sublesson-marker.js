var React = require("react"),
    store = require("storage");

function getLast() {
    return store.get("lastScreen") || {};
}

var AdminSublessonMarker = React.createClass({
    onClick: function(e) {
        e.preventDefault();
        this.routeTo();
    },

    routeTo: function() {
        //Link.to(["lesson/", this.props.parent, "-", this.props.letter].join(""));
    },

    isFromSubsequentActivity: function() {
        var {lesson, activity} = getLast();

        return (lesson === this.props.parent && this.props.activities.indexOf(activity) >= 0);
    },

    isActive: function() {
        var {lesson, activity} = getLast();

        return (lesson === this.props.parent + "-" + this.props.letter) || 
               this.isFromSubsequentActivity();
    },

    render: function() {
        var classNames = [
            "admin-sublesson-marker",
            this.props.selected ? "admin-sublesson-marker-active" : null
        ].join(" ");

        var onClick = function(event) {
            event.stopPropagation();
            this.props.selectLesson(`${this.props.parent}-${this.props.letter}`);
        }.bind(this);

        return (
            <div className={classNames} onClick={onClick}>
                <div className='admin-sublesson-marker-content'>
                    /{this.props.letter}/
                </div>
            </div>
        );
    }
});

module.exports = AdminSublessonMarker;