var React        = require("react"),
    _            = require("lodash"),
    words        = _.values(require("word-index")),
    SoundManager = require("sound/sound-manager");

var WordListItem = React.createClass({
    getInitialState: function() {
        return {
            showingImage: false
        };
    },

    playLessonSound: function() {
        var sound = SoundManager.get(this.props.lessonAudioPath);
        return sound.load().then(() => sound.play());
    },

    playActivitySound: function() {
        var sound = SoundManager.get(this.props.activityAudioPath);
        return sound.load().then(() => sound.play());
    },

    showImage: function() {
        this.setState({showingImage: true});
    },

    hideImage: function() {
        this.setState({showingImage: false});
    },

    render: function() {
        var style = {
            backgroundColor: this.props.highlighted ? "#DDF" : "#FFF"
        };

        return (
            <tr {...this.props} style={style}>
                <td>
                    <button onClick={this.playLessonSound} disabled={!this.props.lessonAudioPath} style={{display: "inline-block"}}>Lesson Audio</button>
                </td>
                <td>
                    <button onClick={this.playActivitySound}  disabled={!this.props.activityAudioPath} style={{display: "inline-block"}}>Activity Audio</button>
                </td>
                <td>
                    {this.state.showingImage ? 
                        <div style={{border: "1px solid black", background: "#FFF"}}>
                            <img style={{width: 100}} src={this.props.imagePath}/>
                            <br/>
                            <button onClick={this.hideImage}>Hide Image</button>
                        </div> :
                        <button onClick={this.showImage}>Show Image</button>
                    }
                </td>
                <td>{this.props.word}</td>
            </tr>
        );
    }
});

var WordList = React.createClass({
    getInitialState: function() {
        return {
            filter: ""
        };
    },

    updateFilter: function(event) {
        this.setState({
            filter: event.target.value
        });
    },

    back: function() {
        var Splash = require("screens/splash"),
            render = require("render");
        render(<Splash/>);
    },

    render: function() {
        var style = {
            overflow: "auto",
            height: "100%",
            textAlign: "center",
            padding: 30
        },
        contentStyle = {
            width: 500,
            margin: "0 auto"
        };

        var wordList = this.state.filter.length ? words.filter((word) =>
            word.word.match(this.state.filter)
        ) : words;

        return (
            <div style={style}>
                <button onClick={this.back}>Back to Splash Screen</button>
                <div style={contentStyle}>
                    <input placeholder="search" onChange={this.updateFilter} style={{width: "100%"}}/>
                    <table style={{width: "100%"}}>
                        <thead></thead>
                        <tbody>
                            {wordList.map((word, i) =>
                                <WordListItem {...word} highlighted={i%2===0} key={word.word}/>
                            )}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = WordList;