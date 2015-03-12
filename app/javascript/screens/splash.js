var React       = require("react"),
    TctcLogo    = require("components/common/tctc-logo"),
    AdminButton = require("components/admin/admin-button"),
    WordList    = require("screens/word-list"),
    Sound       = require("components/utility/sound"),
    render      = require("render");

var Splash = React.createClass({
    //mixins: [require("mixins/sound-container")],
    //autoplaySound: "welcome",

    getSounds: function() {
        return {
            "welcome": "common/welcome"
        };
    },

    nextScreen: function() {
        var Lesson1 = require("screens/lessons/1");
        render(<Lesson1/>);
    },

    showWordList: function() {
        render(<WordList/>);
    },

    render: function() {
        var user = this.props.user;
        return (
            <div className="splash">
                <Sound path="common/welcome" autoplay={true}/>
                <TctcLogo />
                <AdminButton/>
                <button onClick={this.showWordList} style={{position: "absolute", bottom: 0, right: "50%"}}>Word List</button>
                <div className="splash__grade-label">PreK - 2</div>
                <button className="splash__next-button" onClick={this.nextScreen}></button>
            </div>
        );
    }
});

module.exports = Splash;
