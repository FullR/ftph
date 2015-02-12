var React      = require("react"),
    wordImages = require("word-images");

var WordImage = React.createClass({
    mixins: [require("mixins/class-names")],

    getInitialState: function() {
        return {
            fitted: false
        };
    },

    getImageData: function() {
        var data = wordImages[this.props.word];
        if(!data) {
            throw new Error(`Word Image index id not found: ${this.props.word}`);
        }
        return data;
    },

    // Compute the width/height to fit the image
    // in its parent without breaking its aspect ratio.
    // Also centers horizontally and vertically unless
    // the props disableVCenter and/or disableHCenter
    // are true
    computeFittedDimensions: function() {
        var {width, height, path} = this.getImageData(),
            parent = this.getDOMNode().parentNode,
            pWidth  = parent.offsetWidth,
            pHeight = parent.offsetHeight,
            wRatio  = (pWidth  / width),
            hRatio  = (pHeight / height),
            state   = {fitted: true},
            fWidth,  // final image width
            fHeight; // final image height

        if(wRatio < hRatio) {
            fWidth = pWidth;
            fHeight = height * wRatio;
        }
        else {
            fHeight = pHeight;
            fWidth = width * hRatio;
        }

        state.width = fWidth;
        state.height = fHeight;

        if(!this.props.disableVCenter) {
            state.marginTop = ((pHeight / 2) - (fHeight / 2));
        }
        if(!this.props.disableHCenter) {
            state.marginLeft = ((pWidth  / 2) - (fWidth  / 2));
        }

        this.setState(state);
    },

    componentDidMount: function() {
        if(!this.props.dontFit && !this.state.fitted) {
            this.computeFittedDimensions();
        }
    },

    render: function() {
        return (
            <img 
                className={this.classNames("word-image")} 
                src={this.getImageData().path}
                style={{
                    visibility: this.state.fitted ? "invisible" : null,
                    width: this.state.width,
                    height: this.state.height,
                    marginLeft: this.state.marginLeft,
                    marginTop: this.state.marginTop
                }}/>
        );
    }
});

module.exports = WordImage;