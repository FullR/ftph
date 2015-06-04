var React = require("react");
var _ = require("lodash");
var words = _.values(require("word-index"));
var SoundManager = require("sound/sound-manager");

var WordListItem = React.createClass({
    getInitialState() {
        return {
            showingImage: false
        };
    },

    playLessonSound() {
        var sound = SoundManager.get(this.props.audio.lesson);
        return sound.load().then(() => sound.play());
    },

    playActivitySound() {
        var sound = SoundManager.get(this.props.audio.activity);
        return sound.load().then(() => sound.play());
    },

    showImage() {
        this.setState({showingImage: true});
    },

    hideImage() {
        this.setState({showingImage: false});
    },

    render() {
        var style = {
            backgroundColor: this.props.highlighted ? "#DDF" : "#FFF"
        };

        return (
            <tr {...this.props} style={style}>
                <td style={{width: "30%"}}>
                    <button onClick={this.playLessonSound} disabled={!this.props.audio.lesson} style={{display: "inline-block"}}>Lesson Audio</button>
                </td>
                <td style={{width: "30%"}}>
                    <button onClick={this.playActivitySound}  disabled={!this.props.audio.activity} style={{display: "inline-block"}}>Activity Audio</button>
                </td>
                <td style={{width: "20%"}}>
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
    getInitialState() {
        return {
            filter: "",
            page: 0
        };
    },

    updateFilter(event) {
        this.setState({
            filter: event.target.value,
            page: 0
        });
    },

    back() {
        var Splash = require("screens/splash"),
            render = require("render");
        render(<Splash/>);
    },

    getPages(pageLength) {
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

    getWordList() {
        try {
            return this.state.filter.length ? words.filter((word) => 
                word.word.match(this.state.filter)
            ) : words;
        }
        catch(err) {
            return words;
        }
    },

    nextPage() {
        this.setState({
            filter: this.state.filter,
            page: this.state.page + 1
        });
    },

    previousPage() {
        this.setState({
            filter: this.state.filter,
            page: this.state.page - 1
        });
    },

    setPage(pageNumber) {
        this.setState({
            filter: this.state.filter,
            page: pageNumber
        });
    },

    render() {
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
                    <table style={{width: "100%", borderBottom: "1px solid #AAA"}}>
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