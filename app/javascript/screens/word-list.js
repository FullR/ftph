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
        var sound = SoundManager.get(this.props.audio.lesson);
        return sound.load().then(() => sound.play());
    },

    playActivitySound: function() {
        var sound = SoundManager.get(this.props.audio.activity);
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
                    <button onClick={this.playLessonSound} disabled={!this.props.audio.lesson} style={{display: "inline-block"}}>Lesson Audio</button>
                </td>
                <td>
                    <button onClick={this.playActivitySound}  disabled={!this.props.audio.activity} style={{display: "inline-block"}}>Activity Audio</button>
                </td>
                <td>
                    {this.state.showingImage ? 
                        <div style={{border: "1px solid black", background: "#FFF"}}>
                            <img style={{width: 100}} src={this.props.image.path}/>
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
            filter: "",
            page: 0
        };
    },

    updateFilter: function(event) {
        this.setState({
            filter: event.target.value,
            page: 0
        });
    },

    back: function() {
        var Splash = require("screens/splash"),
            render = require("render");
        render(<Splash/>);
    },

    getPages: function(pageLength) {
        var words = this.getWordList();

        return _.range(0, Math.ceil(words.length / pageLength)).map((pageIndex) => {
            var startIndex = pageIndex * pageLength,
                endIndex = startIndex + pageLength;

            if(endIndex > words.length) {
                endIndex = words.length;
            }

            return words.slice(startIndex, endIndex);
        });
    },

    getWordList: function() {
        try {
            return this.state.filter.length ? words.filter((word) => 
                word.word.match(this.state.filter)
            ) : words;
        }
        catch(err) {
            return words;
        }
    },

    nextPage: function() {
        this.setState({
            filter: this.state.filter,
            page: this.state.page + 1
        });
    },

    previousPage: function() {
        this.setState({
            filter: this.state.filter,
            page: this.state.page - 1
        });
    },

    setPage: function(pageNumber) {
        this.setState({
            filter: this.state.filter,
            page: pageNumber
        });
    },

    render: function() {
        var style = {
            overflow: "auto",
            height: "100%",
            textAlign: "center",
            padding: 30
        };

        var contentStyle = {
            width: 500,
            margin: "0 auto"
        };
        
        var pageNumber = this.state.page;
        var pages = this.getPages(30);
        var wordList = pages[pageNumber];

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

                    <div style={{marginTop: 20}}>
                        <button onClick={this.setPage.bind(this, 0)} disabled={pageNumber === 0}>{"<<"}</button>
                        <button onClick={this.previousPage} disabled={pageNumber === 0}>{"<"}</button>
                        <span style={{marginLeft: 10, marginRight: 10, width: 60, display: "inline-block"}}>{pageNumber + 1} / {pages.length}</span>
                        <button onClick={this.nextPage} disabled={pageNumber === pages.length-1}>{">"}</button>
                        <button onClick={this.setPage.bind(this, pages.length-1)} disabled={pageNumber === pages.length-1}>{">>"}</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WordList;